/* ==========================================================================
   AYUSH CARE — Dashboard
   All data below is placeholder/demo data for UI design only. It will be
   replaced with live API data once the backend is built.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  renderRegistrationsChart();
  renderComplaintsChart();
  renderAppointmentStatusChart();
  renderRecentPatients();
});

const CHART_COLORS = {
  primary: "#2F5233",
  primaryLight: "#4C7A52",
  gold: "#B8853A",
  info: "#3A6B7A",
  danger: "#A6432F",
  line: "#E1E5DB",
  ink: "#4B564C",
};

Chart.defaults.font.family = "'Work Sans', sans-serif";
Chart.defaults.color = CHART_COLORS.ink;
Chart.defaults.plugins.legend.labels.boxWidth = 10;
Chart.defaults.plugins.legend.labels.usePointStyle = true;

function renderRegistrationsChart() {
  const ctx = document.getElementById("registrationsChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      datasets: [{
        label: "New patients",
        data: [58, 74, 69, 91, 102, 96],
        borderColor: CHART_COLORS.primary,
        backgroundColor: "rgba(47, 82, 51, 0.10)",
        tension: 0.35,
        fill: true,
        pointRadius: 3,
        pointBackgroundColor: CHART_COLORS.primary,
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        y: { grid: { color: CHART_COLORS.line }, beginAtZero: true },
        x: { grid: { display: false } }
      }
    }
  });
}

function renderComplaintsChart() {
  const ctx = document.getElementById("complaintsChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Joint pain", "Digestive", "Stress", "Skin", "Sleep", "Respiratory"],
      datasets: [{
        label: "Cases",
        data: [42, 35, 30, 22, 18, 14],
        backgroundColor: CHART_COLORS.primaryLight,
        borderRadius: 4,
        maxBarThickness: 26,
      }]
    },
    options: {
      indexAxis: "y",
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: CHART_COLORS.line }, beginAtZero: true },
        y: { grid: { display: false } }
      }
    }
  });
}

function renderAppointmentStatusChart() {
  const ctx = document.getElementById("appointmentStatusChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Completed", "Scheduled", "Cancelled", "No-show"],
      datasets: [{
        data: [62, 24, 9, 5],
        backgroundColor: [CHART_COLORS.primary, CHART_COLORS.gold, CHART_COLORS.danger, CHART_COLORS.info],
        borderWidth: 0,
      }]
    },
    options: {
      cutout: "68%",
      plugins: { legend: { position: "bottom" } }
    }
  });
}

function renderRecentPatients() {
  const tbody = document.getElementById("recentPatientsBody");
  if (!tbody) return;

  const demoPatients = [
    { id: "AYU-2026-0001", name: "Arun Kumar", age: 35, gender: "Male", lastVisit: "08 Sep 2026", status: "Active" },
    { id: "AYU-2026-0002", name: "Priya Natarajan", age: 29, gender: "Female", lastVisit: "07 Sep 2026", status: "Active" },
    { id: "AYU-2026-0003", name: "Mohammed Rafiq", age: 52, gender: "Male", lastVisit: "05 Sep 2026", status: "Pending" },
    { id: "AYU-2026-0004", name: "Lakshmi Venkatesh", age: 41, gender: "Female", lastVisit: "03 Sep 2026", status: "Active" },
    { id: "AYU-2026-0005", name: "Karthik Subramaniam", age: 24, gender: "Male", lastVisit: "29 Aug 2026", status: "Inactive" },
  ];

  tbody.innerHTML = demoPatients.map(function (p) {
    return `
      <tr>
        <td><span class="patient-id-chip">${p.id}</span></td>
        <td class="cell-primary">${p.name}</td>
        <td>${p.age}</td>
        <td>${p.gender}</td>
        <td>${p.lastVisit}</td>
        <td><span class="status-pill status-${p.status.toLowerCase()}">${p.status}</span></td>
        <td><a href="patient-profile.html" class="btn btn-ghost btn-sm">View</a></td>
      </tr>
    `;
  }).join("");
}
