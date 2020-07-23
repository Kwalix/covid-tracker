/*
$('chLine').ajax({
    type: "GET",
    url: "https://covid2019-api.herokuapp.com/v2/current",
    data: "data",
    dataType: "dataType",
    success: (res) => {
    }
});
*/
let chartData = {
    labels: ["Confirmed", "Deaths", "Recovered", "Active"],
    datasets: [{
      data: [1234, 6571, 3654, 9853],
    }]
  };
  
let chLine = document.getElementById('chLine');
if (chLine) {
    new Chart(chLine, {
    type: 'horizontalBar',
    data: chartData,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: true
      }
    }
    });
  } else {
    let noConexion = () => {
        let coAlert = $('<div></div>').addClass("alert alert-danger block").text(' Error while requesting data');
        let alertIcon = $('<i></i>').addClass("fa fa-bug")
        $('#chrt').prepend(coAlert);
        $('.alert').prepend(alertIcon);
      }
      noConexion();
  }
