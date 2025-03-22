const baseUrl = 'https://www.thecolorapi.com/scheme'
const getColorsBtn = document.getElementById('get-colors-btn')
const colorModeSelector = document.getElementById('color-mode-selector')
const colorPicker = document.getElementById('color-picker')
getColorsBtn.addEventListener('click',function(e){
    console.log(colorModeSelector.value)
    console.log(colorPicker.value)
})