function verification() {
    let input = document.getElementById("input1").value; // Get the value from the input field
    let input1 = parseFloat(document.getElementById("input1").value); // Parse the input value to a float


    if (input === '') {
        document.getElementById('notification').innerText = "Field must not be empty!"; // Check if the input is empty
    }else if (isNaN(input1)) {
        document.getElementById('notification').innerText = "Please enter a number!"; // Check if the input is not a number
    }else if (input % 2 === 0) {
        alert(`${input} is an even number`); // Check if the input is even
    }else {
        alert(`${input} is an odd number`); // Check if the input is odd
    }
}