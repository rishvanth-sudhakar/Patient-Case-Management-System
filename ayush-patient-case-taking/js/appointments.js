/* ==========================================================================
   AYUSH CARE — Appointments
   Demo data only, for UI design purposes.
   ========================================================================== */

const TODAY_APPOINTMENTS = [
  { patient: "Arun Kumar", doctor: "Dr. Ramesh Iyer", time: "09:30 AM", reason: "Follow-up", status: "Completed" },
  { patient: "Priya Natarajan", doctor: "Dr. Ramesh Iyer", time: "10:15 AM", reason: "New consultation", status: "Completed" },
  { patient: "Suresh Babu", doctor: "Dr. Ramesh Iyer", time: "11:00 AM", reason: "Case review", status: "Scheduled" },
  { patient: "Divya Raghavan", doctor: "Dr. Ramesh Iyer", time: "02:30 PM", reason: "Treatment plan", status: "Scheduled" },
  { patient: "Fathima Beevi", doctor: "Dr. Ramesh Iyer", time: "04:00 PM", reason: "Follow-up", status: "No-show" },
];

const UPCOMING_APPOINTMENTS = [
  { patient: "Karthik Subramaniam", doctor: "Dr. Ramesh Iyer", date: "10 Sep 2026", time: "09:00 AM", reason: "Follow-up", status: "Scheduled" },
  { patient: "Lakshmi Venkatesh", doctor: "Dr. Ramesh Iyer", date: "11 Sep 2026", time: "10:30 AM", reason: "New consultation", status: "Scheduled" },
  { patient: "Mohammed Rafiq", doctor: "Dr. Ramesh Iyer", date: "12 Sep 2026", time: "03:00 PM", reason: "Review", status: "Scheduled" },
];

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("todayAppointmentsBody").innerHTML = TODAY_APPOINTMENTS.map(function (a) {
    return `
      <tr>
        <td class="cell-primary">${a.patient}</td>
        <td>${a.doctor}</td>
        <td>${a.time}</td>
        <td>${a.reason}</td>
        <td><span class="status-pill status-${a.status.toLowerCase()}">${a.status}</span></td>
      </tr>
    `;
  }).join("");

  document.getElementById("upcomingAppointmentsBody").innerHTML = UPCOMING_APPOINTMENTS.map(function (a) {
    return `
      <tr>
        <td class="cell-primary">${a.patient}</td>
        <td>${a.doctor}</td>
        <td>${a.date}</td>
        <td>${a.time}</td>
        <td>${a.reason}</td>
        <td><span class="status-pill status-${a.status.toLowerCase()}">${a.status}</span></td>
      </tr>
    `;
  }).join("");
});
