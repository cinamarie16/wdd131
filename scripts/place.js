document.addEventListener('DOMContentLoaded', function () {
    const year = document.querySelector("#currentyear");

    function currentyear() {
        year.innerHTML = new Date().getFullYear();
    };
    currentyear();
});

const temp = 49;
const wind = 11;

function calculateWindChill(temp, wind) {
    if (temp > 50 || wind <= 3) {
        return N/A;
    }

    const windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
    return parseFloat(windChill.toFixed(1));
}

const windChill = calculateWindChill(temp, wind);
document.getElementById("windChill").innerHTML = `${windChill} °F`;
document.getElementById("lastModified").innerHTML = `Last Modified: <span> ${document.lastModified}</span>`;
