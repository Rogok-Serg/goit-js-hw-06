const controlFontSize = document.getElementById('font-size-control');
const textFontSize = document.getElementById('text');

textFontSize.style.fontSize = `${controlFontSize.value}px`
controlFontSize.addEventListener('input', texSizVariable)

function texSizVariable(event) {
  const fontSizeText = `${event.currentTarget.value}px`
  textFontSize.style.fontSize = fontSizeText
  
}