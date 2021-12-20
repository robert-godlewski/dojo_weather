function loading() {
    alert('Loading weather report...');
}

function hide(id) {
    var element = document.querySelector(id);
    element.remove();
}

//Celsius to Fahrenheit
function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

//Fahrenheit to Celsius
function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    for (var i=1; i<9; i++) {
        var num_element = document.querySelector('#temp' + i);
        var num = parseInt(num_element.innerText);
        if (element.value == "°C") {
            num_element.innerText = f2c(num);
        } else {
            num_element.innerText = c2f(num);
        }
    }
}
