$.ajax({
  url: "https://covid2019-api.herokuapp.com/v2/total",
  success: (res) => {
    let chartData = {
      labels: ["Confirmed", "Deaths", "Recovered", "Active"],
      datasets: [{
        data: [res.data.confirmed, res.data.deaths, res.data.recovered, res.data.active],
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
  },
  error: (xhr) => {
    const noConexion = () => {
      const coAlert = $('<div></div>').addClass("alert alert-danger block").text(' Error while requesting data' + " ( " + xhr.status + " : " + xhr.statusText + " ) ");
      const alertIcon = $('<i></i>').addClass("fa fa-bug")
      $('#chrt').prepend(coAlert);
      $('.alert').prepend(alertIcon);
    }
    noConexion();
  }
});