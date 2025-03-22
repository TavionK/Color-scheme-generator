const baseUrl = 'https://www.thecolorapi.com/scheme'
const getColorsBtn = document.getElementById('get-colors-btn')
const colorModeSelector = document.getElementById('color-mode-selector')
const colorPicker = document.getElementById('color-picker')
const colorSection = document.getElementById('color-section')

let colorsArr = []

document.addEventListener('click', function(e){
    if (e.target.dataset.hex){
        navigator.clipboard.writeText(e.target.dataset.hex)
        alert("Copied " + e.target.dataset.hex + " to clipboard")
    }
})

getColorsBtn.addEventListener('click',render)

function changeBoxColors(){
    let i = 0
    for (let color of colorsArr){
        document.getElementById(`box-${i}`).style.backgroundColor = color
        i++
    }
}

function render(){
    colorsArr = []
    let colorsHtml = ""
    const hex = colorPicker.value.replace("#", "")
    const url = baseUrl + `?hex=${hex}&mode=${colorModeSelector.value}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            for (const c in data.colors){
                colorsArr.push(data.colors[c].hex.value)
            }
            colorsHtml = colorsArr.map(function(color, index){
                return `
                <div class="color-column">
                <div class="color-box" data-hex="${color}" id="box-${index}"></div>
                <p data-hex="${color}" class="hex-color">${color}</p>
                </div>`
            }).join("")
            colorSection.innerHTML = colorsHtml
            changeBoxColors()
        })
    

}

render()