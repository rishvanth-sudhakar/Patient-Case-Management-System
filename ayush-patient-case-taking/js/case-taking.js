/* ==========================================================================
   AYUSH CARE — Case Taking
   Handles step navigation, dynamic complaint cards, symptom selection
   and the AYUSH-system-specific assessment fields. No data is sent
   anywhere yet — database and API come in a later step.
   ========================================================================== */

const CASE_STEPS = [
  "Patient Info",
  "Chief Complaints",
  "Medical History",
  "Lifestyle",
  "Symptoms",
  "Examination",
  "AYUSH Assessment",
  "Treatment",
  "Follow-up",
];

const SYMPTOM_LIST = [
  "Fever", "Headache", "Cough", "Fatigue", "Joint Pain", "Back Pain",
  "Digestive Problems", "Sleep Problems", "Stress", "Skin Problems",
  "Respiratory Problems", "Other",
];

let currentStep = 1;
let complaintCount = 0;

document.addEventListener("DOMContentLoaded", function () {
  buildStepper();
  goToStep(1);

  document.getElementById("addComplaintBtn").addEventListener("click", addComplaintCard);
  addComplaintCard(); // start with one complaint card

  buildSymptomChips();

  document.getElementById("prevStepBtn").addEventListener("click", function () {
    if (currentStep > 1) goToStep(currentStep - 1);
  });
  document.getElementById("nextStepBtn").addEventListener("click", function () {
    if (currentStep < CASE_STEPS.length) goToStep(currentStep + 1);
  });

  document.getElementById("ayushSystemSelect").addEventListener("change", toggleAyushFields);

  document.getElementById("submitCaseBtn").addEventListener("click", function () {
    alert("This is a UI preview — submitting a case will be enabled once the backend and database are built.");
  });
  ["saveDraftBtn", "saveDraftBtn2"].forEach(function (id) {
    document.getElementById(id).addEventListener("click", function () {
      alert("Draft saving will be enabled once the backend is connected.");
    });
  });
});

function buildStepper() {
  const stepper = document.getElementById("caseStepper");
  stepper.innerHTML = CASE_STEPS.map(function (label, i) {
    const stepNum = i + 1;
    return `
      <button type="button" class="step-item" data-step-target="${stepNum}">
        <span class="step-node">${stepNum}</span>
        <span class="step-text">${label}</span>
        <span class="step-line"></span>
      </button>
    `;
  }).join("");

  stepper.querySelectorAll(".step-item").forEach(function (item) {
    item.addEventListener("click", function () {
      goToStep(parseInt(this.dataset.stepTarget, 10));
    });
  });
}

function goToStep(step) {
  currentStep = step;

  document.querySelectorAll(".case-panel").forEach(function (panel) {
    panel.classList.toggle("active", parseInt(panel.dataset.step, 10) === step);
  });

  document.querySelectorAll(".step-item").forEach(function (item) {
    const n = parseInt(item.dataset.stepTarget, 10);
    item.classList.toggle("active", n === step);
    item.classList.toggle("completed", n < step);
  });

  document.getElementById("prevStepBtn").disabled = step === 1;

  const isLast = step === CASE_STEPS.length;
  document.getElementById("nextStepBtn").classList.toggle("d-none", isLast);
  document.getElementById("submitCaseBtn").classList.toggle("d-none", !isLast);

  document.querySelector(".app-content").scrollIntoView({ behavior: "smooth", block: "start" });
}

function addComplaintCard() {
  complaintCount += 1;
  const container = document.getElementById("complaintsContainer");
  const card = document.createElement("div");
  card.className = "complaint-card";
  card.innerHTML = `
    <div class="d-flex justify-content-between align-items-center mb-2">
      <strong>Complaint ${complaintCount}</strong>
      <button type="button" class="btn btn-sm remove-complaint">Remove</button>
    </div>
    <div class="row g-3">
      <div class="col-md-6"><label class="form-label">Complaint</label><input class="form-control" placeholder="e.g. Lower back pain"></div>
      <div class="col-md-6"><label class="form-label">Body Location</label><input class="form-control"></div>
      <div class="col-md-3"><label class="form-label">Duration</label><input class="form-control" placeholder="e.g. 3 weeks"></div>
      <div class="col-md-3"><label class="form-label">Severity</label>
        <select class="form-select"><option>Mild</option><option>Moderate</option><option>Severe</option></select>
      </div>
      <div class="col-md-3"><label class="form-label">Onset</label>
        <select class="form-select"><option>Sudden</option><option>Gradual</option></select>
      </div>
      <div class="col-md-3"><label class="form-label">Frequency</label><input class="form-control" placeholder="e.g. Intermittent"></div>
      <div class="col-md-6"><label class="form-label">Aggravating Factors</label><input class="form-control"></div>
      <div class="col-md-6"><label class="form-label">Relieving Factors</label><input class="form-control"></div>
      <div class="col-12"><label class="form-label">Additional Notes</label><textarea class="form-control" rows="2"></textarea></div>
    </div>
  `;
  card.querySelector(".remove-complaint").addEventListener("click", function () {
    card.remove();
  });
  container.appendChild(card);
}

function buildSymptomChips() {
  const list = document.getElementById("symptomChipList");
  list.innerHTML = SYMPTOM_LIST.map(function (symptom, i) {
    const id = "symptom-" + i;
    return `
      <label class="symptom-chip" for="${id}">
        <input type="checkbox" id="${id}" data-symptom="${symptom}">
        <i class="bi bi-check2"></i> ${symptom}
      </label>
    `;
  }).join("");

  list.querySelectorAll("input[type=checkbox]").forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      this.closest(".symptom-chip").classList.toggle("checked", this.checked);
      toggleSymptomDetail(this.dataset.symptom, this.checked);
    });
  });
}

function toggleSymptomDetail(symptom, show) {
  const container = document.getElementById("symptomDetailContainer");
  const existing = document.getElementById("detail-" + slugify(symptom));

  if (show && !existing) {
    const card = document.createElement("div");
    card.className = "symptom-detail-card";
    card.id = "detail-" + slugify(symptom);
    card.innerHTML = `
      <div class="mb-2"><strong>${symptom}</strong></div>
      <div class="row g-3">
        <div class="col-md-3"><label class="form-label">Duration</label><input class="form-control"></div>
        <div class="col-md-3"><label class="form-label">Severity</label>
          <select class="form-select"><option>Mild</option><option>Moderate</option><option>Severe</option></select>
        </div>
        <div class="col-md-3"><label class="form-label">Frequency</label><input class="form-control"></div>
        <div class="col-md-3"><label class="form-label">Notes</label><input class="form-control"></div>
      </div>
    `;
    container.appendChild(card);
  } else if (!show && existing) {
    existing.remove();
  }
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function toggleAyushFields() {
  const value = document.getElementById("ayushSystemSelect").value;
  document.getElementById("ayurvedaFields").classList.toggle("d-none", value !== "ayurveda");
  document.getElementById("genericAyushFields").classList.toggle("d-none", value === "ayurveda");
}
