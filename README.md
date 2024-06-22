# MEDLOG: Your Comprehensive Medical Record Keeper

## Overview

**MEDLOG** (Medical Log) is a web-based application designed to manage and access medical records for patients. The platform allows hospitals to add and maintain detailed medical records for their patients, including file attachments. Only licensed hospitals, verified and registered by the admin, can access the system to ensure authenticity and security. Patients can view their medical records and receive notifications whenever their data is updated.

## Tech Stack

- **M**ongoDB: For the database to store medical records and user information.
- **E**xpress.js: As the backend framework to handle server-side logic and API requests.
- **R**eact.js: For the frontend to create an interactive user interface.
- **N**ode.js: For the backend runtime environment.

## Features

### For Admin

- Register and manage hospitals.
- Verify and approve hospitals based on their licenses.

### For Hospitals

- Add and manage patient medical records.
- Attach relevant files (e.g., lab results, prescriptions) to patient records.

### For Patients

- View their medical records.
- Receive notifications whenever their medical records are updated.

## Directory Structure

```
MEDLOG/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── index.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── reducer/
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
├── .gitignore
└── README.md
```

## Contact

For any queries or issues, please contact [kalpesh2003patel@gmail.com], [arjunggediya@gmail.com], [svbhaliya159@gmail.com].

---

Thank you for using MEDLOG!
