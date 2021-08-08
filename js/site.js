//CONTROLLER FUNCTION

function getValues() {

    //Retrieve values from all 6 input fields
    let building1Value = document.getElementById("building1").value;
    let building2Value = document.getElementById("building1").value;
    let building3Value = document.getElementById("building1").value;
    let building4Value = document.getElementById("building1").value;
    let building5Value = document.getElementById("building1").value;
    let building6Value = document.getElementById("building1").value;

    //Parse to ensure that the user's inputs are interpreted as numbers
    building1Value = parseInt(building1Value)
    building2Value = parseInt(building2Value)
    building3Value = parseInt(building3Value)
    building4Value = parseInt(building4Value)
    building5Value = parseInt(building5Value)
    building6Value = parseInt(building6Value)
}

//extract the numbers from each of the six fields


//place the numbers into an array

//evaluate the values within the array to check for building height

//output the values of the taller buildings to a "can see" field,
//and the values of the shorter buildings to a "cannot see" field