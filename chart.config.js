const onResize = (el, size) => {
  console.log(el, size);
};
const options = {
  onResize: onResize,
  maintainAspectRatio: false,
  responsive: true,
  aspectRatio: 2,
  scales: {
    y: {
      title: {
        display: true,
        text: 'Amount',
        color: '#ffffff',
        size: 16,
      },
      beginAtZero: true,
      drawTicks: false,
      max: 100,
      ticks: {
        color: 'white',
        font: {
          family: 'sans-serif', // Your font family
          size: 16,
        },
      },
      grid: {
        color: 'hsla(255, 100%, 100%, 0.2)',
      },
    },
    x: {
      title: {
        display: true,
        text: 'Year',
        color: '#ffffff',
        size: 16,
      },
      grid: {
        display: false,
      },
      ticks: {
        color: 'white',
        font: {
          family: 'sans-serif', // Your font family
          size: 16,
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        color: 'white',
        font: {
          size: 16,
          family: 'sans-serif',
        },
      },
    },
  },
};

const mobileOptions = {
  onResize: onResize,
  maintainAspectRatio: false,
  responsive: true,
  aspectRatio: 1,
  scales: {
    y: {
      title: {
        display: true,
        text: 'Year',
        color: '#ffffff',
        size: 16,
      },
      type: 'category',
      ticks: {
        color: 'white',
        font: {
          family: 'sans-serif',
          size: 16,
        },
      },
      grid: {
        display: false,
      },
    },
    x: {
      title: {
        display: true,
        text: 'Amount',
        color: '#ffffff',
        size: 16,
      },
      type: 'linear',
      beginAtZero: true,
      drawTicks: false,
      max: 80,
      grid: {
        color: 'hsla(255, 100%, 100%, 0.2)',
      },
      ticks: {
        color: 'white',
        font: {
          family: 'sans-serif',
          size: 16,
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        color: 'white',
        font: {
          size: 16,
          family: 'sans-serif',
        },
      },
    },
  },
};

export { options, mobileOptions };
