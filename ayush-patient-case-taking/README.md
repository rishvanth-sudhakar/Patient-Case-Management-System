# AYUSH CARE — Patient Case-Taking Software

A digital case-taking and patient management system for AYUSH
practitioners (Ayurveda, Siddha, Unani, Homoeopathy, Yoga & Naturopathy).

This is **Step 1** of the build: project foundation and frontend only.
No backend, database, or authentication logic exists yet.

## Tech stack (planned, full project)

- **Frontend (built in this step):** HTML5, CSS3, Bootstrap 5, vanilla JavaScript, Bootstrap Icons, Chart.js
- **Backend (not yet built):** Node.js, Express.js, REST API
- **Database (not yet built):** MongoDB
- **Auth (not yet built):** bcrypt, JWT
- **Other (not yet built):** dotenv, cors, express-validator

## Folder structure

```
ayush-patient-case-taking/
│
├── frontend/
│   ├── index.html            → Login page
│   ├── dashboard.html        → Main dashboard (stats, charts, recent patients)
│   ├── patients.html         → Patient list, search & filters
│   ├── add-patient.html      → Patient registration form
│   ├── patient-profile.html  → Single patient view with tabs & timeline
│   ├── case-taking.html      → 9-step case-taking wizard (core feature)
│   ├── examination.html      → Vitals & BMI calculator
│   ├── treatment.html        → Treatment form & records table
│   ├── followups.html        → Upcoming follow-ups & logging modal
│   ├── appointments.html     → Today's & upcoming appointments
│   ├── reports.html          → Report type cards & filters
│   └── settings.html         → Profile, clinic, password, notification, system settings
│
├── css/
│   └── style.css             → Full design system (colors, type, components)
│
├── js/
│   ├── main.js                → Sidebar toggle, active nav state, login/logout demo
│   ├── dashboard.js           → Chart.js charts + recent patients table
│   ├── patients.js            → Patient table + client-side search
│   ├── case-taking.js         → Stepper logic, complaints, symptoms, AYUSH fields
│   ├── examination.js         → BMI calculation
│   ├── treatment.js           → Treatment form + records table
│   ├── followups.js           → Follow-ups table
│   ├── appointments.js        → Today's & upcoming appointments tables
│   └── reports.js             → Report button demo handlers
│
├── backend/                  → Empty — built in a later step
├── database/                 → Empty — built in a later step
└── README.md
```

## How to open it

No build step or server is required for this stage — it's static HTML/CSS/JS.

1. Unzip/copy the `ayush-patient-case-taking` folder anywhere on your machine.
2. Open `frontend/index.html` directly in a browser (double-click, or
   right-click → Open with → your browser).
3. Log in with any email/password — since there's no backend yet, the
   login button shows a clear "UI preview" message instead of pretending
   to authenticate you.
4. From the dashboard, the sidebar links take you through every page.

If you prefer a local server (recommended for consistent relative-path
behaviour), from inside the project folder run:

```bash
npx serve .
```

and open the printed `localhost` URL, then navigate to `/frontend/index.html`.

## What's implemented in this step

- Full page set and navigation with no broken links.
- Responsive layout: fixed sidebar on desktop, collapsible offcanvas
  sidebar on tablet/mobile, horizontally scrollable tables on small
  screens.
- Working case-taking wizard: 9-step progress stepper, forward/back/
  jump-to-step navigation, dynamically add/remove chief-complaint
  cards, symptom chip selection that reveals detail fields, and an
  AYUSH-system dropdown that swaps in Ayurveda-specific fields
  (Prakriti, Vikriti, Nadi, Jihva, Mala, Mutra, Akruti) versus a
  generic observations field for the other systems.
- Working BMI auto-calculation on the Examination page
  (`weight (kg) / height (m)²`).
- Chart.js charts on the dashboard (patient registrations, common
  complaints, appointment status) using demo data.
- Client-side search/filter UI on the Patients page (demo data).
- All "Save", "Submit", "Generate", "Export" actions show a clear
  "this is a UI preview" message rather than pretending to persist
  data — nothing fakes success.

## Not implemented yet (by design, per Step 1 scope)

- Database (MongoDB) — schema and connection.
- Backend REST API (Node.js/Express).
- Real authentication (bcrypt/JWT) — the login page is a visual
  design only.
- Real CRUD for patients, cases, treatments, follow-ups, appointments.
- PDF export / print pipelines on the Reports page.

## Medical disclaimer

Shown in the app sidebar and on the login page:

> This software is intended for clinical documentation and
> case-management support. Medical assessment, diagnosis and
> treatment decisions remain the responsibility of the qualified
> practitioner.

This is reflected in the design itself: the AYUSH Assessment step
never auto-calculates Prakriti/Vikriti, the Examination page never
interprets vitals beyond showing the standard BMI reference band, and
the Treatment page never suggests medicines or dosages.
