$.get("https://covid2019-api.herokuapp.com/v2/total", (data, status) => {
  if (status == "success") {

    let chartData = {
      labels: ["Confirmed", "Deaths", "Recovered", "Active"],
      datasets: [{
        data: [data.data.confirmed, data.data.deaths, data.data.recovered, data.data.active],
        backgroundColor: [
          'rgba(226, 91, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(41, 140, 255, 1)',
          'rgba(0, 58, 255, 1)'
      ],
      }]
    };

    const chartBar = document.getElementById('chartBar');
    if (chartBar) {
      new Chart(chartBar, {
        type: 'horizontalBar',
        data: chartData,
        options: {
          scales: {
            xAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          },
          legend: {
            display: false
          }
        }
      });
    }

  } else {
    const noConexion = () => {
      const coAlert = $('<div></div>').addClass("alert alert-danger block").text(' Error while requesting data');
      const alertIcon = $('<i></i>').addClass("fa fa-bug")
      $('#chrt').prepend(coAlert);
      $('.alert').prepend(alertIcon);
    }
    noConexion();
  }
});