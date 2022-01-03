document.getElementById('form').onsubmit = function () {
    getStats(document.getElementById('city').value);
};

const getStats = (city) => {
    fetch('https://disease.sh/v3/covid-19/vaccine/coverage/states?lastdays=7&fullData=false', requestOptions).
    then(response => response.text()).
    then(data => updateText(data, city)).
    catch(e => document.getElementById('output').value = "API request failed or you didn't enter a valid input");
}

const updateText = (data, city) => {
    var info = JSON.parse(data);
    let index = 0;
    while (index < info.length && info[index].state != city)
    {
        index++
    }
    var state = "For: " + info[index].state + "\n \n";
    var day1 = Object.keys(info[index].timeline)[0] + ": " + Object.values(info[index].timeline)[0] + "\n";
    var day2 = Object.keys(info[index].timeline)[1] + ": " + Object.values(info[index].timeline)[1] + "\n";
    var day3 = Object.keys(info[index].timeline)[2] + ": " + Object.values(info[index].timeline)[2] + "\n";
    var day4 = Object.keys(info[index].timeline)[3] + ": " + Object.values(info[index].timeline)[3] + "\n";
    var day5 = Object.keys(info[index].timeline)[4] + ": " + Object.values(info[index].timeline)[4] + "\n";
    var day6 = Object.keys(info[index].timeline)[5] + ": " + Object.values(info[index].timeline)[5] + "\n";
    var day7 = Object.keys(info[index].timeline)[6] + ": " + Object.values(info[index].timeline)[6] + "\n";

    if (city == null) {
        document.getElementById('output').value = "Enter valid county";
    } else {
        document.getElementById('output').value = state + day1 + day2 + day3 + day4 + day5 + day6 + day7;
    }

}

var form = document.getElementById("form");

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

