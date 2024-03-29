const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
const optionInput = document.getElementById("option-input");
const addBtn = document.getElementById("add-btn");
const backendUrl = 'http://localhost:5423/api/fantasy'; // Back-end server URL


let options = []; // Array to store the options
const rotationValues = []; // Store rotation values for each option
const pieColors = []; // Background color for each piece
let data = []; // Size of each piece
let addedPlayers = [];  // Array to store added player names

// Create chart
const myChart = new Chart(wheel, {
  plugins: [ChartDataLabels], // Plugin for displaying text on pie chart
  type: "pie",
  data: {
    labels: options, // Labels for the chart
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
        font: { size: 16 },
      },
    },
  },
});

// Function to update the wheel with new options
const updateWheel = () => {
  console.log("Updating the wheel with new options");
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

// New function to get the current NFL week
const getCurrentWeek = () => {
  const startDate = new Date('2023-09-07');
  const currentDate = new Date();
  const timeDifference = Math.abs(currentDate - startDate);
  const weekNumber = Math.ceil(timeDifference / (1000 * 60 * 60 * 24 * 7));
  return weekNumber;
};


// Function to handle adding a new option
const addOption = async () => {
  const newOption = optionInput.value.trim();
  if (newOption !== "" && addedPlayers.length < 2) {
    addedPlayers.push(newOption);
    options.push(newOption);
    optionInput.value = "";
  }

  if (addedPlayers.length === 2) {
    const weekNumber = getCurrentWeek();
    const response = await fetch(`/api/fantasy/compare-players/${weekNumber}/${addedPlayers[0]}/${addedPlayers[1]}`);
    const players = await response.json();

    const bestPlayer = players[0].position_rank < players[1].position_rank ? players[0].name : players[1].name;
    console.log(`Best Player to start in Week ${weekNumber}:`, bestPlayer);

    updateWheel();
  }
};

// Generate a random color
const getRandomColor = () => {
  console.log("Generating random color");
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Event listener for the add button
addBtn.addEventListener("click", () => {
  console.log("Add button clicked");
  addOption();
});

// Event listener for the add button and enter key
const handleAddOption = () => {
  const newOption = optionInput.value.trim();
  if (newOption !== "") {
    console.log(`Handling addition of option: ${newOption}`);
    options.push(newOption);
    optionInput.value = "";
    updateWheel();
  }
};

addBtn.addEventListener("click", handleAddOption);

optionInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log("Enter key pressed");
    handleAddOption();
  }
});


// Function to choose a random value based on the angle
const valueGenerator = (angleValue) => {
  console.log(`Calculating value for angle: ${angleValue}`);
  const rotation = angleValue % 360;
  const sliceAngle = 360 / options.length;
  let selectedIndex = Math.floor((rotation + sliceAngle / 2) / sliceAngle);
  selectedIndex %= options.length;
  const selectedOption = options[selectedIndex];
  console.log(`Selected index: ${selectedIndex}, Option: ${selectedOption}`);

  for (let i = 0; i < myChart.data.labels.length; i++) {
    const label = myChart.getDatasetMeta(0).data[i].label;
    const fontStyle = label === selectedOption ? "bold" : "normal";
    const fontSize = label === selectedOption ? 18 : 16;
    myChart.getDatasetMeta(0).data[i].font = {
      size: fontSize,
      weight: fontStyle,
    };
  }

  myChart.update();
  finalValue.innerHTML = `<p>Start: ${selectedOption}</p>`;
  spinBtn.disabled = false;
  console.log("Selected value:", selectedOption);
};

let count = 0;
let resultValue = 101;

spinBtn.addEventListener("click", async () => {
  console.log("Spin button clicked");
  spinBtn.disabled = true;
  finalValue.innerHTML = `<p>Calculating...</p>`;
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  console.log(`Random degree for stopping: ${randomDegree}`);
    // Call the GetBestPlayer API right after spinning starts
    const response = await fetch(`/api/fantasy/best-player/${addedPlayers.join(",")}`);
    const bestPlayer = await response.json();
    console.log('Best Player to start this week:', bestPlayer);
  let rotationInterval = window.setInterval(() => {
    myChart.options.rotation = myChart.options.rotation + resultValue;
    myChart.update();
    if (myChart.options.rotation >= 360) {
      console.log("Completed one full rotation");
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation === randomDegree) {
      console.log("Rotation reached random degree, selecting value");
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
      console.log("Final value:", finalValue.innerHTML);
    }
  }, 10);
});


