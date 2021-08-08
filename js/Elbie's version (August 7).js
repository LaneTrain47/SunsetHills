let data = [3, 2, 4, 7, 6, 9];
let customData = [];
let lightData = [];
let darkData = [];

function calculate() {
    let largest = 0;
    darkData = [];
    lightData = [];

    if (customData.length == 0) {
        for (let i = 0; i < data.length; i++) {
            if (data[i] > largest) {
                largest = data[i];
                lightData.push(data[i]);
            } else {
                darkData.push(data[i]);
            }
        }
    } else {
        for (let i = 0; i < customData.length; i++) {
            if (customData[i] > largest) {
                largest = customData[i];
                lightData.push(customData[i]);
            } else {
                darkData.push(data[i]);
            }
        }
    }



    let customArray = document.getElementById("customArray");
    customArray.innerHTML = "";

    displayData();
}

function displayData() {
    let light = document.getElementById("light");
    let dark = document.getElementById("dark");

    light.innerHTML = "";
    dark.innerHTML = "";

    light.innerHTML = "";
    dark.innerHTML = "";

    for (let i = 0; i < lightData.length; i++) {
        light.innerHTML += `${lightData[i]}, `;
    }

    for (let i = 0; i < darkData.length; i++) {
        dark.innerHTML += `${darkData[i]}, `;
    }
    darkData = [];
    lightData = [];
}

function addNumber() {
    let numberInput = document.getElementById("numberInput");
    let customArray = document.getElementById("customArray");
    let arrayOutput = document.getElementById("arrayOutput");

    if (isNaN(parseInt(numberInput.value))) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please use a number!'
        })
    } else {
        customData.push(numberInput.value);
        customArray.innerHTML += `${numberInput.value}, `;
        arrayOutput.innerHTML += `${numberInput.value},`;
        resetForm();
    }
}

function resetData() {
    let topDisplay = document.getElementById("customArray");
    let bottomDisplay = document.getElementById("arrayOutput");

    customData = [];
    topDisplay.innerHTML = "";
    bottomDisplay.innerHTML = "";
}

function resetForm() {
    document.getElementById("inputForm").reset();
}

function resetOutput() {
    let light = document.getElementById("light");
    let dark = document.getElementById("dark");

    light.innerHTML = "";
    dark.innerHTML = "";
}