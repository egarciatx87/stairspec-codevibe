# 📐 StairSpec CodeVibe

A high-precision frontend React prototype built for independent stair construction contractors to evaluate structural safety code compliance on-site and dynamically curate architectural design boards with clients.

---

## 🚀 Local Installation & Setup Instructions

Follow these steps to run the application environment locally on your machine:

## 🔌 API Architecture & Endpoints

API Network Provider: Unsplash Image Directory API (https://api.unsplash.com/)

Endpoint Utilized: GET /search/photos

Implementation Details: The app utilizes a centralized React useEffect hook to manage side-effects. The hook monitors changes to the styleKeyword state value driven by the user's dropdown selections. It triggers an asynchronous fetch request passing your developer credentials securely via request headers

## 🛠️ Operational Edge-Cases & Challenges Handled
Data Format Handshakes: Encountered an initial token parsing mismatch returning raw HTML string sequences rather than structural JSON payloads (Unexpected token '<'). Resolved by adjusting the authentication matrix to pass structural parameters inside the network Request Headers instead of appending raw URL parameters.

Network Latency & Error Resilience: Integrated explicit state boundaries (loading, error) using declarative conditional rendering inside the component layout. This ensures the application displays clear loading placeholders and handles offline network states without crashing or dropping UI rendering hooks.

Controlled Forms Validation: Implemented live arithmetic verification loops directly linked to input states. The layout evaluates measurements in real-time against standard International Residential Code (IRC) constraints, providing structural error flags natively as the user types.

