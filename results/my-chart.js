const ctx = document.getElementById('myChart');
const TwomyChart = document.getElementById('TwomyChart');

new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ['Solomon', 'Joseph', 'Seth', 'Ayittey', 'Duah', 'Gilbeth'],
    datasets: [{
      label: '# Votes',
      data: [120, 150, 65, 95, 200, 153],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 35)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive:true,
  }
});


new Chart(TwomyChart, {
  type: 'bar',
  data: {
    labels: ['Solomon', 'Joseph', 'Seth', 'Ayittey', 'Duah', 'Gilbeth'],
    datasets: [{
      label: '# Votes',
      data: [120, 150, 65, 95, 200, 153],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 35)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive:true,
  }
});