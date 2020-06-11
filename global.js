const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

document.getElementById('form').onsubmit = function () {
    getStats(document.getElementById('country').value);
};

const getStats = (country) => {
    fetch("https://corona.lmao.ninja/v2/countries/"+country, requestOptions)
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
    var country = "For: " + info.country + "\n \n";
    var cases = "Cases: " + info.cases + "\n";
    var deaths = "Deaths: " + info.deaths + "\n";
    var recovered = "Recovered: " + info.recovered + "\n \n"
    var today_cases = "Today's Cases: " + info.todayCases + "\n";
    var today_deaths = "Today's Deaths: " + info.todayDeaths;

    if (info.country == null) {
        document.getElementById('output').value = "Enter valid Country";
    } else {
        document.getElementById('output').value = country + cases + deaths + recovered + today_cases + today_deaths;
    }

}


var form = document.getElementById("form");
function handleForm(event) { 
    event.preventDefault(); 
}
form.addEventListener('submit', handleForm);