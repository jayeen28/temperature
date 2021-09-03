//shortcut to use long codes
const getId = elementId => {
    return document.getElementById(elementId);
};
//load data
const loadData = () => {
    const countryInput = document.getElementById('country-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryInput}&appid=a5ec2e8f85653d333815f8ca2fffdf28`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDataUi(data));
}

const showDataUi = data => {
    getId('country-name').innerText = data.name;

};