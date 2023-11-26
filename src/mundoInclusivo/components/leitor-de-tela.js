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
    <button class="btn btn-primary" onclick="window.readBySelector('p#activeReader') && window.activateReader()">
      <i class="bi bi-mic-fill"></i> ${BUTTON_TEXT}
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
  initializeReader()
}