// nickname generator prgram 

//html variables 
let randButton = document.getElementById("random").addEventListener("click", randomNickname)
let allNameButton = document.getElementById("all").addEventListener("click", allNicknames)
let containerEl = document.getElementById("container")

//global variable
let nickNames 

//fetch data from text fle
fetch("nickname.txt").then(convertData).then(processData)

function convertData(rawData) {
    //return the data as a string 
    return rawData.text()
}

function processData(stringData) {
    //create the array
    nickNames = stringData.split(/\r?\n/)
}

//generate a random nickname
function randomNickname() {
    let firstName = document.getElementById("first").value
    let lastName = document.getElementById("last").value
    let divStr= "" 
    let randomIndex = Math.floor(Math.random() * nickNames.length)
    //console.log(randomIndex)
    divStr += `<div>${firstName} the ${nickNames[randomIndex]} ${lastName}</div>`
    containerEl.innerHTML = divStr
}

//generate all the nicknames
function allNicknames() {
    let firstName = document.getElementById("first").value
    let lastName = document.getElementById("last").value
    let divStr = ""
    for (let i=0; i < nickNames.length; i++) {
        divStr += `<div>${firstName} the ${nickNames[i]} ${lastName}</div>`
    }
    containerEl.innerHTML = divStr
}
