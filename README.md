# 🪜 StairSpec CodeVibe

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Application-brightgreen?style=for-the-badge&logo=vercel)](https://stairspec.demo)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/egarciatx87/StairSpec-CodeVibe)

> **Precision React application engineered for independent stair construction contractors to evaluate International Residential Code (IRC) structural safety compliance on-site while dynamically curating client architectural mood boards.**

---

## 📸 Overview & Key Features

StairSpec CodeVibe bridges physical structural engineering constraints with client aesthetic design choices in real-time. Built specifically for trade professionals, the application evaluates layout measurements against international code rules and fetches architectural imagery seamlessly.

* **Real-Time IRC Compliance Engine:** Evaluates dimensional inputs (riser height, tread depth, baluster spacing) instantly against IRC structural constraints with native UI visual error flags.
* **Dynamic Design Mood Boards:** Integrates the Unsplash REST API to dynamically render high-resolution architectural style reference boards based on client aesthetic selections (Modern Floating, White Oak, Industrial Wrought Iron, Walnut).
* **Defensive UI & State Boundaries:** Handles asynchronous API network latency, loading sequences, and offline states gracefully without breaking layout rendering hooks.
* **Controlled State Verification Loops:** Real-time arithmetic verification bounds linked directly to controlled input states to prevent invalid structural specifications prior to assembly.

---

## 🛠️ Operational Edge-Cases & Technical Challenges Handled

### 1. Data Format Handshakes & Header Authentication Matrix
* **Challenge:** Encountered an initial token parsing mismatch returning raw HTML error strings rather than structural JSON payloads (`Unexpected token '<'`).
* **Solution:** Refactored the API integration matrix to pass developer credentials securely inside the network `Request Headers` (`Authorization: Client-ID ...`) rather than appending raw URL parameters.

### 2. Network Latency & Fail-Safe UI Boundaries
* **Challenge:** Asynchronous API fetches triggering race conditions or blank screens during slow network handshakes on mobile job sites.
* **Solution:** Built explicit state boundaries (`loading`, `error`, `images`) using declarative conditional rendering inside the component layout. Ensures clear status feedback and prevents UI crashing when offline or rate-limited.

### 3. Structural Constraint Verification Logic
* **Challenge:** Preventing silent construction errors and ensuring clear visual feedback for non-compliant measurements.
* **Solution:** Linked input change listeners directly to structural boolean evaluation loops:
  * **Riser Height:** Flagged if $> 7.75''$ (IRC Max Rise)
  * **Tread Depth:** Flagged if $< 10.0''$ (IRC Min Run)
  * **Baluster Spacing:** Flagged if $> 4.0''$ (IRC 4-inch sphere rejection rule)

---

## 🏗️ Architecture & Technical Stack

* **Frontend Framework:** React (Functional Components, Hooks)
* **State Management:** `useState`, `useEffect` (Controlled forms & side-effect monitoring)
* **API Network Provider:** Unsplash Image Directory REST API (`GET /search/photos`)
* **Styling & Layout:** CSS3 Flexbox/Grid with Responsive Mobile-First Breakpoints

---

## 📐 IRC Structural Standards Matrix

| Specification Criterion | IRC Structural Constraint Requirement | Engine Verification Constraint |
| :--- | :--- | :--- |
| **Maximum Riser Height** | $7\ \frac{3}{4}''$ ($197\text{ mm}$) | `riser > 7.75` |
| **Minimum Tread Depth** | $10.0''$ ($254\text{ mm}$) | `tread < 10.0` |
| **Baluster Guard Openings** | Must reject a $4.0''$ diameter sphere | `baluster > 4.0` |

---

## 🚀 Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/egarciatx87/StairSpec-CodeVibe.git](https://github.com/egarciatx87/StairSpec-CodeVibe.git)
   cd StairSpec-CodeVibe

 2. **Install dependencies**
    ```bash
    npm install
    
 4. **Configure Environment Variables (Optional)**
    REACT_APP_UNSPLASH_ACCESS_KEY
    
 6. **Start the local development server**
    npm start
    
## 🧑🏻‍💻 Author
Esteban Garcia

Full-Stack Software Engineer

LinkedIn: linkedin.com/in/esteban-garcia-esparza
GitHub: github.com/egarciatx87
