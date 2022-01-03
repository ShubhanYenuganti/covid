const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

document.getElementById('form').onsubmit = function () {
    getStats(document.getElementById('state').value);
};

const getStats = (state) => {
    fetch("https://corona.lmao.ninja/v2/states/"+ state, requestOptions)
    .then(response => response.text())
    .then(
        result => updateText(result)
        )
    .catch(
        error => 
            document.getElementById('output').value = 'API request failed or invalid input'
        );
};

const updateText = (data) => {
    var info = JSON.parse(data);
    console.log(info);
    var state = "For: " + info.state + "\n \n";
    var cases = "Cases: " + info.cases + "\n";
    var deaths = "Deaths: " + info.deaths + "\n \n";
    var today_cases = "Today's Cases: " + info.todayCases + "\n";
    var today_deaths = "Today's Deaths: " + info.todayDeaths;

    if (info.state == null) {
        document.getElementById('output').value = "Enter valid State";
    } else {
        document.getElementById('output').value = state + cases + deaths + today_cases + today_deaths;
    }

}


var form = document.getElementById("form");
function handleForm(event) { 
    event.preventDefault(); 
}
form.addEventListener('submit', handleForm);