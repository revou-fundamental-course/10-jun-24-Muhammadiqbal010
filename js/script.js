const celciusInput = document.getElementById('celcius');
const fahrenheitOutput = document.getElementById('fahrenheit');
const convertButton = document.querySelector('.convert');
const resetButton = document.querySelector('.reset');
const reverseButton = document.querySelector('.reverse');
const hasilTextArea = document.getElementById('hasil');

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function parseTemperature(input) {
    return parseFloat(input.trim());
}

function displayResult(fromValue, toValue, fromUnit, toUnit) {
    if (fromUnit === 'C') {
        hasilTextArea.value = `Fahrenheit (°F):\n(${fromValue} x 9/5) + 32 = ${toValue.toFixed(2)} °F`;
    } else {
        hasilTextArea.value = `Celcius (°C):\n(${fromValue} - 32) x 5/9 = ${toValue.toFixed(2)} °C`;
    }
}

let lastConversion = 'CtoF';

convertButton.addEventListener('click', function() {
    const celsiusValue = parseTemperature(celciusInput.value);
    
    if (isNaN(celsiusValue)) {
        alert('Silakan masukkan angka yang valid untuk suhu Celcius.');
        return;
    }
    
    const fahrenheitValue = convertToFahrenheit(celsiusValue);
    
    fahrenheitOutput.value = fahrenheitValue.toFixed(2); 
    
    displayResult(celsiusValue, fahrenheitValue, 'C', 'F');

    lastConversion = 'CtoF';
});

resetButton.addEventListener('click', function() {
    celciusInput.value = '';
    fahrenheitOutput.value = '';
    hasilTextArea.style.display = 'block'; 
    hasilTextArea.value = ''; 
    lastConversion = 'CtoF'; 
});


reverseButton.addEventListener('click', function() {
    if (lastConversion === 'CtoF') {
        const fahrenheitValue = parseTemperature(fahrenheitOutput.value);
        
        if (isNaN(fahrenheitValue)) {
            alert('Silakan masukkan angka yang valid untuk suhu Fahrenheit.');
            return;
        }
        
        const celsiusValue = convertToCelsius(fahrenheitValue);
        
        celciusInput.value = celsiusValue.toFixed(2);
        
        displayResult(fahrenheitValue, celsiusValue, 'F', 'C');
        
        lastConversion = 'FtoC';
    } else {
        const celsiusValue = parseTemperature(celciusInput.value);
        
        if (isNaN(celsiusValue)) {
            alert('Silakan masukkan angka yang valid untuk suhu Celsius.');
            return;
        }

        const fahrenheitValue = convertToFahrenheit(celsiusValue);
        
        fahrenheitOutput.value = fahrenheitValue.toFixed(2); 

        displayResult(celsiusValue, fahrenheitValue, 'C', 'F');

        lastConversion = 'CtoF';
    }
});
