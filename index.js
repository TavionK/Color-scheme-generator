const baseUrl = 'https://www.thecolorapi.com/scheme'
const getColorsBtn = document.getElementById('get-colors-btn')
const colorModeSelector = document.getElementById('color-mode-selector')
const colorPicker = document.getElementById('color-picker')

let colorsArr = []

document.addEventListener('click', function(e){
    if (e.target.dataset.hex){
        navigator.clipboard.writeText(e.target.dataset.hex)
    }
})

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
    const colorsHtml = colorsArr.map(function(color, index){
        return `
        <div class="color-column">
            <div class="color-box" id="box-${index}"></div>
            <p data-hex="${color}" class="hex-color">${color}</p>
        </div>`
    })
    return colorsHtml.join('')
}

function changeBoxColors(){
    let i = 0
    for (let color of colorsArr){
        document.getElementById(`box-${i}`).style.backgroundColor = color
        i++
    }
}

function renderColors(){
    document.getElementById("color-section").innerHTML = getColorsHtml()
    changeBoxColors()
}