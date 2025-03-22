const baseUrl = 'https://www.thecolorapi.com/scheme'
const getColorsBtn = document.getElementById('get-colors-btn')
const colorModeSelector = document.getElementById('color-mode-selector')
const colorPicker = document.getElementById('color-picker')

let colorsArr = []
getColorsBtn.addEventListener('click',function(e){
    colorsArr = []
    const hex = colorPicker.value.replace("#", "")
    const url = baseUrl + `?hex=${hex}&mode=${colorModeSelector.value}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            for (const c in data.colors){
                colorsArr.push(data.colors[c].hex.value)
                //console.log(typeof(data.colors[c].hex.value))
            }
            renderColors()
        })
})

function getColorsHtml(){
    const colorsHtml = colorsArr.map(function(color){
        return `<p>${color}</p>`
    })
    return colorsHtml.join('')
}

function renderColors(){
    document.getElementById("color-section").innerHTML = getColorsHtml()
}