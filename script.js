let selectedGender = "";

const BlueC = "rgb(22, 111, 224)";
const BlueB = "rgb(39, 126, 240)";

const PinkC = "rgb(232, 97, 183)";
const PinkB = "rgb(242, 127, 200)";

function selectGender(gender) {
    const maleBtn = document.getElementById('male-btn');
    const femaleBtn = document.getElementById('female-btn');
    const display = document.getElementById('selected-gender');

    // Reset styles
    maleBtn.style.backgroundColor = '#f5f5f5';
    maleBtn.style.borderColor = '#ccc';
    femaleBtn.style.backgroundColor = '#f5f5f5';
    femaleBtn.style.borderColor = '#ccc';

    if (gender === 'male') {
        maleBtn.style.backgroundColor = BlueC;
        maleBtn.style.borderColor =  BlueB;
        maleBtn.style.color = 'white';
        femaleBtn.style.color = '#333';
    } else if (gender === 'female') {
        femaleBtn.style.backgroundColor = PinkC;
        femaleBtn.style.borderColor = PinkB;
        femaleBtn.style.color = 'white';
        maleBtn.style.color = '#333';
    }

    selectedGender = gender;
    display.textContent = `Selected Gender: ${selectedGender}`;
}

const ageHeightMale = {
    '8': 72,
    '9': 75,
    '10': 78,
    '11': 81,
    '12': 84,
    '13': 88,
    '14': 92,
    '15': 95,
    '16': 98,
    '17': 99,
    '18': 100,
};

const ageHeightFemale = {
    '8': 77,
    '9': 81,
    '10': 84,
    '11': 88,
    '12': 91,
    '13': 95,
    '14': 98,
    '15': 99,
    '16': 99.5,
    '17': 100,
    '18': 100,
};

function calcHeight(gender, curHeight, age) {
    age = String(age);
    let heightSet = null;
    if (gender === "male") {
        heightSet = ageHeightMale;
    } else {
        heightSet = ageHeightFemale;
    }
    
    if (gender !== null) {
        if (heightSet[age]) {
            const Step1 = parseInt(curHeight) / heightSet[age];
            const result = Step1 * 100;
            return result;
        }
    }
}

function ToFeet(cm) {
    const total_inches = cm / 2.54;
    const feet = Math.floor(total_inches / 12);
    const inches = total_inches % 12;
    return [feet, parseFloat(inches.toFixed(2))];
}

function predict() {
    let curHeight = document.getElementById("CurHeight").value;
    let curAge = document.getElementById("CurAge").value;

    if (!(curAge > 18) && !(curAge < 8)) {
        console.log("test")
        console.log(selectedGender)
        
        let PredictedHeightCM = calcHeight(selectedGender, curHeight, curAge);
        let PredictedHeightFeet = ToFeet(PredictedHeightCM);

        alert("Predicted Height (cm): " + PredictedHeightCM + "cm\nPredicted Height (feet, inches): " + PredictedHeightFeet);
    }
    else {
        alert("Unable to Predict height, must be over 8 years old and under 18 years old.")
    }
}