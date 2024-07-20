function convert() {
    
    const celsiusInput = document.getElementById("Celsius");
    const fahrenheitInput = document.getElementById("Fahrenheit");
    
    if (celsiusInput.value !== "") {
        let temp = Number(celsiusInput.value);
        temp = temp * 9 / 5 + 32;
        fahrenheitInput.value = temp.toFixed(1);
    }
}
