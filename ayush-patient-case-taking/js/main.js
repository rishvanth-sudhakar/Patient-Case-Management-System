/* ==========================================================================
   AYUSH CARE — Shared behaviour across every page
   (sidebar toggle for tablet/mobile, active-link highlighting, demo
   handlers for login/logout since backend auth is not implemented yet)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  initSidebarToggle();
  highlightActiveNavLink();
  initLogout();
  initLoginDemo();
});

/**
 * Toggles the offcanvas-style sidebar on tablet/mobile widths and
 * closes it when the backdrop or a nav link is clicked.
 */
function initSidebarToggle() {
  const toggleBtn = document.querySelector("[data-sidebar-toggle]");
  const sidebar = document.querySelector(".app-sidebar");
  const backdrop = document.querySelector(".sidebar-backdrop");

  if (!toggleBtn || !sidebar || !backdrop) return;

  function openSidebar() {
    sidebar.classList.add("show");
    backdrop.classList.add("show");
  }
  function closeSidebar() {
    sidebar.classList.remove("show");
    backdrop.classList.remove("show");
  }

  toggleBtn.addEventListener("click", function () {
    sidebar.classList.contains("show") ? closeSidebar() : openSidebar();
  });
  backdrop.addEventListener("click", closeSidebar);
  sidebar.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", closeSidebar);
  });
}

/**
 * Adds the "active" class to the sidebar link matching the current
 * page file name, so navigation state stays correct without a
 * templating engine.
 */
function highlightActiveNavLink() {
  const current = window.location.pathname.split("/").pop() || "dashboard.html";
  document.querySelectorAll(".sidebar-nav .nav-link").forEach(function (link) {
    const href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("active");
    }
  });
}

/**
 * Demo-only logout: no real session exists yet, so this simply
 * returns the user to the login page.
 */
function initLogout() {
  document.querySelectorAll("[data-logout]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "index.html";
    });
  });
}

/**
 * Demo-only login: backend authentication has not been built yet, so
 * this does NOT validate the email/password against anything real.
 * It shows a brief "preview" notice, then takes the user straight to
 * the dashboard so the rest of the UI can be reviewed.
 */
function initLoginDemo() {
  const form = document.querySelector("#loginForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const msgEl = document.querySelector("#loginDemoMessage");
    if (msgEl) {
      msgEl.classList.remove("d-none");
    }
    setTimeout(function () {
      window.location.href = "dashboard.html";
    }, 700);
  });
}
