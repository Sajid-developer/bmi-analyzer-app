console.log("App is running successfully...");

function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("result");

    if (!height || !weight || height <= 0 || weight <= 0) {
        result.innerHTML = "Please enter valid height and weight.";
        result.style.color = "red";
        return;
    }

    const bmi = weight / ((height / 100) ** 2);
    let category = "";


    if (bmi < 18.5) {
        category = "Underweight";
        result.style.color = "#FFC107";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
        result.style.color = "#4CAF50";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        result.style.color = "#FF9800";
    } else {
        category = "Obese";
        result.style.color = "#F44336";
    }

    result.innerHTML = `Your BMI is <strong>${bmi.toFixed(1)}</strong> (${category})`;
}
