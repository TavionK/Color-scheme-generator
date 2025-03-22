const baseUrl = 'https://www.thecolorapi.com/scheme'
const getColorsBtn = document.getElementById('get-colors-btn')
const colorModeSelector = document.getElementById('color-mode-selector')
const colorPicker = document.getElementById('color-picker')

getColorsBtn.addEventListener('click',function(e){
    const hex = colorPicker.value.replace("#", "")
    const url = baseUrl + `?hex=${hex}&mode=${colorModeSelector.value}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
})