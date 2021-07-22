let array1 = [3, 2, 4, 7, 6, 9];
let array2 = [];
let tallest = 0;

function sunsetHills() {
    array1[0] = Number(document.getElementById("building1").value);
    array1[1] = Number(document.getElementById("building1").value);
    array1[2] = Number(document.getElementById("building1").value);
    array1[3] = Number(document.getElementById("building1").value);
    array1[4] = Number(document.getElementById("building1").value);
    array1[5] = Number(document.getElementById("building1").value);

    for (i = 0; i <= array1.length; i++) {
        if (tallest < array1[i]) {
            tallest = array1[i];
            array2.push(array1[i]);
        }
    }
    displayResults();
}

function displayResults() {

    document.getElementById("output").innerHTML = "These buildings can see the sunset:" + array2;

}