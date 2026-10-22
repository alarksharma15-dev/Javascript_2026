const converterForm = document.getElementById("converterForm");
const temperatureInput = document.getElementById("temperatureInput");
const inputUnit = document.getElementById("inputUnit");
const result = document.getElementById("result");
const formulaNote = document.getElementById("formulaNote");

const updateInputUnit = () => {
    const conversion = converterForm.elements.conversion.value;
    const isCelsiusToFahrenheit = conversion === "celsius-to-fahrenheit";

    inputUnit.textContent = isCelsiusToFahrenheit ? "°C" : "°F";
    formulaNote.innerHTML = isCelsiusToFahrenheit
        ? "Celsius to Fahrenheit <span>·</span> (°C × 9/5) + 32"
        : "Fahrenheit to Celsius <span>·</span> (°F − 32) × 5/9";
};

converterForm.addEventListener("change", updateInputUnit);

converterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const temperature = Number(temperatureInput.value);
    const conversion = converterForm.elements.conversion.value;

    if (!temperatureInput.value.trim() || !Number.isFinite(temperature)) {
        result.textContent = "Enter a valid temperature.";
        return;
    }

    let convertedTemperature;
    let unit;

    if (conversion === "celsius-to-fahrenheit") {
        convertedTemperature = (temperature * 9) / 5 + 32;
        unit = "°F";
    } else {
        convertedTemperature = ((temperature - 32) * 5) / 9;
        unit = "°C";
    }

    const formattedTemperature = Number(convertedTemperature.toFixed(2));
    result.textContent = `${formattedTemperature}${unit}`;
});
