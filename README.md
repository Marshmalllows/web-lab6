# Lab Work #6 — Frontend & Backend Interaction via Fetch API

**Course:** Web Application Development  
**Year of Study:** 2 | **Semester:** 1 | **Year:** 2024

**Author:** Maksym Poliukhovych

---

## Description

A tea-themed two-page web application demonstrating client-server interaction using the Fetch API. The frontend communicates with a REST API backend to create, display, and delete "toasts" (short messages from a sender).

**Live Demo:** [View on GitHub Pages](https://marshmalllows.github.io/web-lab6/)  
**API Repository:** [Marshmalllows/web_lab6_api](https://github.com/Marshmalllows/web_lab6_api)  
**API Base URL:** `https://web-lab6-api.onrender.com`

---

## Pages

### `input.html` — Create / Delete Toasts

- Fill in **Sender** and **Message** fields and submit the form to send a `POST /api/save` request and save a new toast to the server.
- Click **Delete Toasts** to send a `DELETE /api/delete` request and remove all stored toasts from the server.

### `output.html` — Display Toasts

- Polls `GET /api/toasts` every **1 second** and renders the latest toasts in real time.
- Shows a maximum of **5** most recent toasts at a time.
- The toast list updates only when the server data changes (compared by JSON equality).

---

## API Endpoints Used

| Method   | Endpoint        | Description             |
|----------|-----------------|-------------------------|
| `POST`   | `/api/save`     | Save a new toast        |
| `DELETE` | `/api/delete`   | Delete all toasts       |
| `GET`    | `/api/toasts`   | Retrieve all toasts     |

---

## Technologies

- HTML5 (semantic markup, forms)
- CSS3 (Grid layout)
- JavaScript (Fetch API, `setInterval`, JSON)
