var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://corona.lmao.ninja/v2/all", requestOptions)
    .then(response => response.text())
    .then(result => updateText(result))
    .catch(error => console.log('error', error));

const updateText = (data) => {
    var info = JSON.parse(data);
    console.log(info);
    var cases = "\n" + "Total Cases: " + info.cases + "\n";
    var deaths = "Total Deaths: " + info.deaths + "\n";
    var recovered = "Total Recovered: " + info.recovered + "\n \n";
    var today_cases = "Today's Cases: " + info.todayCases + "\n";
    var today_deaths = "Today's Deaths: " + info.todayDeaths + "\n";
    var today_recovered = "Today's Recovered: " + info.todayRecovered + "\n \n"
    document.getElementById('output').value = cases + deaths + recovered + today_cases + today_deaths + today_recovered;

}