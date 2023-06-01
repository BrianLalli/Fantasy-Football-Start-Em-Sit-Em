const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
const optionInput = document.getElementById("option-input");
const addBtn = document.getElementById("add-btn");

let options = []; // Array to store the options

const rotationValues = []; // Object that stores values of minimum and maximum angle for a value
const pieColors = []; // Background color for each piece
let data = []; // Size of each piece

// Create chart
const myChart = new Chart(wheel, {
  plugins: [ChartDataLabels], // Plugin for displaying text on pie chart
  type: "pie",
  data: {
    labels: options, // Labels (values which are to be displayed on the chart)
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    responsive: true, // Responsive chart
    animation: { duration: 0 },
    plugins: {
      tooltip: false, // Hide tooltip
      legend: {
        display: false, // Hide legend
      },
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 14 },
      },
    },
  },
});

// Function to update the wheel with new options
const updateWheel = () => {
  rotationValues.length = 0;
  pieColors.length = 0;
  data.length = 0;

  for (let i = 0; i < options.length; i++) {
    const minDegree = (i * 360) / options.length;
    const maxDegree = ((i + 1) * 360) / options.length;
    rotationValues.push({ minDegree, maxDegree, value: options[i] });
    pieColors.push(getRandomColor());
    data.push(360 / options.length);
  }

  myChart.data.labels = options;
  myChart.data.datasets[0].data = data;
  myChart.data.datasets[0].backgroundColor = pieColors;
  myChart.update();
};

// Function to handle adding a new option
const addOption = () => {
  const newOption = optionInput.value.trim();
  if (newOption !== "") {
    options.push(newOption);
    optionInput.value = "";
    updateWheel();
  }
};

// Generate a random color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Event listener for the add button
addBtn.addEventListener("click", addOption);

// Function to choose a random value based on the angle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p>Start: ${i.value}</p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};

let count = 0;
let resultValue = 101;

spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  finalValue.innerHTML = `<p>Good Luck!</p>`;
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  let rotationInterval = window.setInterval(() => {
    myChart.options.rotation = myChart.options.rotation + resultValue;
    myChart.update();
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});
