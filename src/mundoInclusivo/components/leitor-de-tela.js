const CURRENT_LANGUAGE = 'pt-BR'
const BUTTON_TEXT = 'Leitor de voz'
const ACTIVE_MESSAGE = 'Leitor de voz ativado! Passe o mouse por cima dos elementos para ouvir'
const UNAVAILABLE_MESSSAGE = 'Leitor indisponível'
const UNAVAILABLE_EXPLANATION = 'Leitor de voz ativado! Passe o mouse por cima dos elementos para ouvir'

const speacher = window.speechSynthesis;
const read = (line) => speacher.speak(line);
const filterVoicesByLang = (lang) => {
  let voices = speacher.getVoices();
  let ptVoices = voices.filter(voice => voice.lang === lang)

  return ptVoices.pop()
}

const isReaderAllowed = () => !!filterVoicesByLang(CURRENT_LANGUAGE);

const message = (text) => {
  const speak = new window.SpeechSynthesisUtterance();
  const pt = filterVoicesByLang(CURRENT_LANGUAGE);

  speacher.cancel()

  speak.text = text
  speak.voice = pt
  return speak
}

const readMessage = async (text) => {
  let currentMessage = await message(text);

  return read(currentMessage)
}

const readElement = async (element) => {
  const text = element.textContent || element.value || element.text || element.getAttribute("aria-label") || element.alt;
  
  return await readMessage(text)
}

const readBySelector = (selector) => {
  const element = document.querySelector(selector);
  return readElement(element);
}

const readByEvent = (event) => {
  const focusedElement = event.target;
  return readElement(focusedElement)
}

const activateReader = () => {
  const allElements = document.querySelectorAll('*');

  allElements.forEach(element => {
    element.addEventListener('mouseenter', readByEvent);
    element.addEventListener('mouseout', speacher.cancel());
  });
}

window.readElement = readElement
window.readBySelector = readBySelector
window.readByEvent = readByEvent
window.activateReader = activateReader

const availableReaderComponent = `
  <div style="position: fixed; top: 10px; left: 10px; z-index: 1000">
    <p id="activeReader" style="display: none">${ACTIVE_MESSAGE}</p>
    <button id="readerButton" class="btn btn-primary" onclick="window.readBySelector('p#activeReader') && window.activateReader()">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-megaphone-fill" viewBox="0 0 16 16">
        <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"/>
      </svg>
      ${BUTTON_TEXT}
    </button>
  </div>
`

const initializeReader = () => {
  const canInitialize = isReaderAllowed();

  if(canInitialize) {
    const voiceButtonContainer = document.createElement('div');
    voiceButtonContainer.innerHTML = availableReaderComponent;
    document.body.appendChild(voiceButtonContainer);
  }
}

window.onload = function() {
  initializeReader();
  window.speechSynthesis.onvoiceschanged = () => {
    initializeReader()
    window.speechSynthesis.onvoiceschanged = null;
  };

  window.speechSynthesis.getVoices();
}