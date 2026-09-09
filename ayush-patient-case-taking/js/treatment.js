/* ==========================================================================
   AYUSH CARE — Treatment
   New entries are added to the in-memory demo table only; nothing is
   persisted until the backend/database exists.
   ========================================================================== */

let treatmentRecords = [
  { date: "01 Sep 2026", name: "Ashwagandha Churna", dosage: "3g", frequency: "Twice daily", duration: "14 days", route: "Oral", instructions: "After meals with warm water" },
  { date: "25 Aug 2026", name: "Abhyanga (Oil Massage)", dosage: "—", frequency: "Weekly", duration: "4 weeks", route: "Therapy / Procedure", instructions: "Followed by warm water bath" },
];

document.addEventListener("DOMContentLoaded", function () {
  renderTreatmentTable();

  document.getElementById("treatmentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("tName").value.trim();
    if (!name) return;

    const dateVal = document.getElementById("tDate").value;
    treatmentRecords.unshift({
      date: dateVal ? formatDate(dateVal) : "—",
      name: name,
      dosage: document.getElementById("tDosage").value || "—",
      frequency: document.getElementById("tFrequency").value || "—",
      duration: document.getElementById("tDuration").value || "—",
      route: document.getElementById("tRoute").value,
      instructions: document.getElementById("tInstructions").value || "—",
    });

    renderTreatmentTable();
    this.reset();
  });
});

function formatDate(isoDate) {
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function renderTreatmentTable() {
  const tbody = document.getElementById("treatmentTableBody");
  document.getElementById("treatmentCountLabel").textContent = treatmentRecords.length + " records";

  tbody.innerHTML = treatmentRecords.map(function (t) {
    return `
      <tr>
        <td>${t.date}</td>
        <td class="cell-primary">${t.name}</td>
        <td>${t.dosage}</td>
        <td>${t.frequency}</td>
        <td>${t.duration}</td>
        <td>${t.route}</td>
        <td class="cell-sub">${t.instructions}</td>
      </tr>
    `;
  }).join("");
}
