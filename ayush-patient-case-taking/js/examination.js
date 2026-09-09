/* ==========================================================================
   AYUSH CARE — Examination
   BMI = weight (kg) / height (m)^2. Category labels are the standard
   WHO bands, shown for reference only — not a diagnosis.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  const heightInput = document.getElementById("heightInput");
  const weightInput = document.getElementById("weightInput");

  [heightInput, weightInput].forEach(function (input) {
    input.addEventListener("input", calculateBMI);
  });

  document.getElementById("saveExamBtn").addEventListener("click", function () {
    alert("This is a UI preview — saving will be enabled once the backend and database are built.");
  });
});

function calculateBMI() {
  const heightCm = parseFloat(document.getElementById("heightInput").value);
  const weightKg = parseFloat(document.getElementById("weightInput").value);
  const bmiOutput = document.getElementById("bmiOutput");
  const note = document.getElementById("bmiCategoryNote");

  if (!heightCm || !weightKg || heightCm <= 0) {
    bmiOutput.value = "";
    note.textContent = "";
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  bmiOutput.value = bmi.toFixed(1);
  note.textContent = "Reference range: " + bmiCategory(bmi);
}

function bmiCategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}
