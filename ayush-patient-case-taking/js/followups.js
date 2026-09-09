/* ==========================================================================
   AYUSH CARE — Follow-ups
   Demo data only; the "Log Follow-up" modal is a UI preview.
   ========================================================================== */

const DEMO_FOLLOWUPS = [
  { patient: "Arun Kumar", date: "15 Sep 2026", condition: "Chronic joint pain", status: "Scheduled" },
  { patient: "Priya Natarajan", date: "12 Sep 2026", condition: "Digestive discomfort", status: "Scheduled" },
  { patient: "Mohammed Rafiq", date: "10 Sep 2026", condition: "Hypertension review", status: "Completed" },
  { patient: "Lakshmi Venkatesh", date: "09 Sep 2026", condition: "Skin allergy", status: "Missed" },
  { patient: "Karthik Subramaniam", date: "05 Sep 2026", condition: "Sleep disturbance", status: "Cancelled" },
];

document.addEventListener("DOMContentLoaded", function () {
  const tbody = document.getElementById("followupsTableBody");
  tbody.innerHTML = DEMO_FOLLOWUPS.map(function (f) {
    return `
      <tr>
        <td class="cell-primary">${f.patient}</td>
        <td>${f.date}</td>
        <td>${f.condition}</td>
        <td><span class="status-pill status-${f.status.toLowerCase()}">${f.status}</span></td>
        <td><a href="patient-profile.html" class="btn btn-ghost btn-sm">View</a></td>
      </tr>
    `;
  }).join("");

  document.getElementById("saveFollowupBtn").addEventListener("click", function () {
    alert("This is a UI preview — saving will be enabled once the backend and database are built.");
  });
});
