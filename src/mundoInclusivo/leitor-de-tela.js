const speacher = window.speechSynthesis;
const read = (line) => speacher.speak(line);
const filterVoicesByLang = (lang) => {
  let voices = speacher.getVoices();
  voices.find(voice => voice.lang === lang)
} 

const message = (text) => {
  const speak = new window.SpeechSynthesisUtterance();
  const pt = filterVoicesByLang('pt-BR');

  speacher.cancel()

  speak.text = text
  speak.voice = pt
  return speak
}

const readElement = async (selector) => {
  const element = document.querySelector(selector);
  const text = element.value || element.text || element.getAttribute("aria-label");
  const currentMessage = await message(text);

  return read(currentMessage)
}

window.readElement = readElement