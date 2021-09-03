//shortcut to use long codes
const getId = elementId => {
    return document.getElementById(elementId);
};
//load data
const loadData = () => {
    const countryInput = document.getElementById('country-input');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryInput.value}&appid=a5ec2e8f85653d333815f8ca2fffdf28`;
    countryInput.value = '';
    fetch(url)
        .then(res => res.json())
        .then(data => showDataUi(data));
}

const showDataUi = data => {
    getId('country-name').innerText = data.name;
    const calculateTemp = Math.ceil(data.main.temp / 10);
    getId('country-temperature').innerText = `${calculateTemp}°C`;
    getId('weather-condition').innerText = data.weather[0].main;
    const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    getId('weather-icon').src = url;
    getId('body').style.backgroundImage = `url('images/${data.weather[0].main}.jpg')`;
    console.log(`url (images/${data.weather[0].main}.jpg)`);
};