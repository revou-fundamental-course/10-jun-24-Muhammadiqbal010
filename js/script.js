// Ambil elemen-elemen yang diperlukan dari DOM
const celciusInput = document.getElementById('celcius');
const fahrenheitOutput = document.getElementById('fahrenheit');
const convertButton = document.querySelector('.convert');
const resetButton = document.querySelector('.reset');
const reverseButton = document.querySelector('.reverse');
const hasilTextArea = document.getElementById('hasil');

// Fungsi untuk menghitung konversi suhu
function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Fungsi untuk mengubah teks menjadi angka
function parseTemperature(input) {
    return parseFloat(input.trim());
}

// Fungsi untuk menampilkan hasil konversi dan proses hitung
function displayResult(fromValue, toValue, fromUnit, toUnit) {
    if (fromUnit === 'C') {
        hasilTextArea.value = `Fahrenheit (°F):\n(${fromValue} x 9/5) + 32 = ${toValue.toFixed(2)} °F`;
    } else {
        hasilTextArea.value = `Celcius (°C):\n(${fromValue} - 32) x 5/9 = ${toValue.toFixed(2)} °C`;
    }
}

// Status untuk melacak konversi terakhir
let lastConversion = 'CtoF';

// Event listener untuk tombol convert
convertButton.addEventListener('click', function() {
    // Ambil nilai dari textarea celcius
    const celsiusValue = parseTemperature(celciusInput.value);
    
    // Validasi input
    if (isNaN(celsiusValue)) {
        alert('Silakan masukkan angka yang valid untuk suhu Celcius.');
        return;
    }
    
    // Konversi ke Fahrenheit
    const fahrenheitValue = convertToFahrenheit(celsiusValue);
    
    // Tampilkan hasil konversi di textarea Fahrenheit
    fahrenheitOutput.value = fahrenheitValue.toFixed(2); // Menampilkan 2 angka desimal
    
    // Tampilkan proses hitung di textarea hasil
    displayResult(celsiusValue, fahrenheitValue, 'C', 'F');
    
    // Update status konversi terakhir
    lastConversion = 'CtoF';
});

// Event listener untuk tombol reset
resetButton.addEventListener('click', function() {
    // Bersihkan semua input dan hasil
    celciusInput.value = '';
    fahrenheitOutput.value = '';
    hasilTextArea.style.display = 'none';
    hasilTextArea.value = '';
    lastConversion = 'CtoF'; // Reset status konversi terakhir
});

// Event listener untuk tombol reverse
reverseButton.addEventListener('click', function() {
    if (lastConversion === 'CtoF') {
        // Ambil nilai dari textarea Fahrenheit
        const fahrenheitValue = parseTemperature(fahrenheitOutput.value);
        
        // Validasi input
        if (isNaN(fahrenheitValue)) {
            alert('Silakan masukkan angka yang valid untuk suhu Fahrenheit.');
            return;
        }
        
        // Konversi ke Celsius
        const celsiusValue = convertToCelsius(fahrenheitValue);
        
        // Tampilkan hasil konversi di textarea Celsius
        celciusInput.value = celsiusValue.toFixed(2); // Menampilkan 2 angka desimal
        
        // Tampilkan proses hitung di textarea hasil
        displayResult(fahrenheitValue, celsiusValue, 'F', 'C');
        
        // Update status konversi terakhir
        lastConversion = 'FtoC';
    } else {
        // Ambil nilai dari textarea Celsius
        const celsiusValue = parseTemperature(celciusInput.value);
        
        // Validasi input
        if (isNaN(celsiusValue)) {
            alert('Silakan masukkan angka yang valid untuk suhu Celsius.');
            return;
        }
        
        // Konversi ke Fahrenheit
        const fahrenheitValue = convertToFahrenheit(celsiusValue);
        
        // Tampilkan hasil konversi di textarea Fahrenheit
        fahrenheitOutput.value = fahrenheitValue.toFixed(2); // Menampilkan 2 angka desimal
        
        // Tampilkan proses hitung di textarea hasil
        displayResult(celsiusValue, fahrenheitValue, 'C', 'F');
        
        // Update status konversi terakhir
        lastConversion = 'CtoF';
    }
});
