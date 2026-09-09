/* ==========================================================================
   AYUSH CARE — Patients list
   Demo data only. Search/filter here is a client-side UI preview;
   real filtering will run against the API once the backend exists.
   ========================================================================== */

const DEMO_PATIENTS = [
  { id: "AYU-2026-0001", name: "Arun Kumar", age: 35, gender: "Male", phone: "+91 98765 43210", lastVisit: "08 Sep 2026", status: "Active" },
  { id: "AYU-2026-0002", name: "Priya Natarajan", age: 29, gender: "Female", phone: "+91 98765 12340", lastVisit: "07 Sep 2026", status: "Active" },
  { id: "AYU-2026-0003", name: "Mohammed Rafiq", age: 52, gender: "Male", phone: "+91 90000 22110", lastVisit: "05 Sep 2026", status: "Pending" },
  { id: "AYU-2026-0004", name: "Lakshmi Venkatesh", age: 41, gender: "Female", phone: "+91 99887 76655", lastVisit: "03 Sep 2026", status: "Active" },
  { id: "AYU-2026-0005", name: "Karthik Subramaniam", age: 24, gender: "Male", phone: "+91 93456 78901", lastVisit: "29 Aug 2026", status: "Inactive" },
  { id: "AYU-2026-0006", name: "Fathima Beevi", age: 63, gender: "Female", phone: "+91 91234 56780", lastVisit: "26 Aug 2026", status: "Active" },
  { id: "AYU-2026-0007", name: "Suresh Babu", age: 47, gender: "Male", phone: "+91 90909 11223", lastVisit: "22 Aug 2026", status: "Pending" },
  { id: "AYU-2026-0008", name: "Divya Raghavan", age: 31, gender: "Female", phone: "+91 98123 45670", lastVisit: "18 Aug 2026", status: "Active" },
];

document.addEventListener("DOMContentLoaded", function () {
  renderPatientsTable(DEMO_PATIENTS);

  const searchInput = document.getElementById("patientSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const term = this.value.trim().toLowerCase();
      const filtered = DEMO_PATIENTS.filter(function (p) {
        return p.name.toLowerCase().includes(term) || p.id.toLowerCase().includes(term);
      });
      renderPatientsTable(filtered);
    });
  }
});

function renderPatientsTable(patients) {
  const tbody = document.getElementById("patientsTableBody");
  if (!tbody) return;

  if (patients.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted-soft py-4">No patients match your search.</td></tr>`;
    return;
  }

  tbody.innerHTML = patients.map(function (p) {
    return `
      <tr>
        <td><span class="patient-id-chip">${p.id}</span></td>
        <td class="cell-primary">${p.name}</td>
        <td>${p.age}</td>
        <td>${p.gender}</td>
        <td>${p.phone}</td>
        <td>${p.lastVisit}</td>
        <td><span class="status-pill status-${p.status.toLowerCase()}">${p.status}</span></td>
        <td>
          <div class="row-actions">
            <a href="patient-profile.html" class="icon-btn" title="View"><i class="bi bi-eye"></i></a>
            <a href="add-patient.html" class="icon-btn" title="Edit"><i class="bi bi-pencil"></i></a>
            <button type="button" class="icon-btn danger" title="Delete"><i class="bi bi-trash"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}
