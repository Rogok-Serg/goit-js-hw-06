const controlFontSize = document.getElementById('font-size-control');
const textFontSize = document.getElementById('text');
controlFontSize.addEventListener('input', texSizVariable)
function texSizVariable(event) {
  textFontSize.style.fontSize = `${event.currentTarget.value}px`
}