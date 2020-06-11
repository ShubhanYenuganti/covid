document.getElementById('form').onsubmit = function () {
    getStats(document.getElementById('city').value);
};

const getStats = (city) => {
    fetch("https://corona.lmao.ninja/v2/jhucsse/counties/"+city, requestOptions)
    .then(response => response.text())
    .then(
        result => updateText(result)
        )
    .catch(
        error => 
            document.getElementById('output').value = "API request failed or you didn't enter a valid input"
        );
};

const updateText = (data) => {
    console.log(data);
    var info = JSON.parse(data);
    var city = "For: " + info[0].county + "\n \n";
    var updateAt = "Information is accurate as of: " + "\n" + info[0].updatedAt + "\n \n";
    var confirm = info[0].stats.confirmed + " confirmed cases \n";
    var death = info[0].stats.deaths + " deaths \n";
    var recover = info[0].stats.recovered + " recovered \n"

    if (city == null) {
        document.getElementById('output').value = "Enter valid county";
    } else {
        document.getElementById('output').value = city + updateAt + confirm + death + recover;

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