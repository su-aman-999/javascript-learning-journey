function calculateBMI() {
  const weight = Number(document.getElementById("weight").value);
  const height = Number(document.getElementById("height").value);
  const bmiScore = document.getElementById("bmi-score");
  const bmiStatus = document.getElementById("bmi-status");

  if (
    weight !== 0 &&
    height !== 0 &&
    height >= 0.546 &&
    height <= 2.72 &&
    weight >= 2 &&
    weight <= 700
  ) {
    bmiScore.value = weight / (height * height);

    bmiScore.value < 18.5
      ? (bmiStatus.value = "Underweight")
      : bmiScore.value < 25
      ? (bmiStatus.value = "Normal")
      : bmiScore.value < 30
      ? (bmiStatus.value = "Overweight")
      : bmiScore.value < 35
      ? (bmiStatus.value = "Abese")
      : (bmiStatus.value = "Servere Obesity");
  } else {
    alert("Enter Right Values");
  }
}
