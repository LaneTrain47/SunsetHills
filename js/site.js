//Establishment of global variable definitions
let startData = [3, 2, 4, 7, 6, 9];
let userData = [];
let sunsetVisible = [];
let sunsetObscured = [];

//Global function responsible for calculating values within array
function calculate() {
    let largest = 0;
    sunsetVisible = [];
    sunsetObscured = [];

    if (userData.length == 0) {
        for (let i = 0; i < startData.length; i++) {
            if (startData[i] > largest) {
                largest = startData[i];
                sunsetVisible.push(startData[i]);
            } else {
                sunsetObscured.push(startData[i]);
            }
        }

    } else {
        for (let i = 0; i < userData.length; i++) {
            if (userData[i] > largest) {
                largest = userData[i];
                sunsetVisible.push(userData[i]);
            } else {
                sunsetObscured.push(startData[i]);
            }
        }
    }

    displayOutput();
}
//Retrieve values from all 6 input fields

function getValues() {

    let building1Value = document.getElementById("building1").value;
    let building2Value = document.getElementById("building2").value;
    let building3Value = document.getElementById("building3").value;
    let building4Value = document.getElementById("building4").value;
    let building5Value = document.getElementById("building5").value;
    let building6Value = document.getElementById("building6").value;

    //Parse to ensure that the user's inputs are limited to numbers
    building1Value = parseInt(building1Value);
    building2Value = parseInt(building2Value);
    building3Value = parseInt(building3Value);
    building4Value = parseInt(building4Value);
    building5Value = parseInt(building5Value);
    building6Value = parseInt(building6Value);

    //Ensure that the user's inputs are interpreted as numbers, then alert 
    //the user that only numbers are allowed if NaN characters were used 

    if (Number.isInteger(building1Value) && Number.isInteger(building2Value) &&
        Number.isInteger(building3Value) && Number.isInteger(building4Value) &&
        Number.isInteger(building5Value) && Number.isInteger(building6Value)) {

        //Call the sunset function and write the values to the screen
        userData = [building1Value, building2Value, building3Value, building4Value, building5Value, building6Value]
        calculate();
    } else {
        alert("Only numbers can be used.")
    }
}

function displayOutput() {

    let light = document.getElementById("SunsetVisible");
    let dark = document.getElementById("SunsetObscured");

    for (let i = 0; i < sunsetVisible.length; i++) {
        light.innerHTML += `<br>${sunsetVisible[i]}`
    }
    for (let i = 0; i < sunsetObscured.length; i++) {
        dark.innerHTML += `<br>${sunsetObscured[i]}`
    }



}




//output the values of the taller buildings to a "can see" field,
//and the values of the shorter buildings to a "cannot see" field