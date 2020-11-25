// nickname generator prgram 

//html variables 
let firstName = document.getElementById("first").value
let secondName = document.getElementById("second").value

//global variable
let nicknames 

//fetch data from text fle
fetch("nickname.txt").then(convertData).then(processData)

function convertData(rawData) {
    //return the data as a string 
    return rawData.text()
}

function processData(stringData) {
    colors = stringData.split(/\r?\n/)
}