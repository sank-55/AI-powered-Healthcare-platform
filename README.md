HealthLink: A Full-Stack Healthcare Platform
<p align="center">
<a href="#">
<img src="https://www.google.com/search?q=https://placehold.co/150x150/5D8AA8/FFFFFF%3Ftext%3DHealthLink" alt="Project Logo">
</a>
</p>

HealthLink is a comprehensive web application designed to streamline online pharmacy services and doctor appointment bookings. This platform leverages a modern full-stack architecture and integrates advanced AI to improve healthcare accessibility and management for patients.


<h1 demo video and screen shots>
<img width="1338" height="605" alt="Screenshot 2025-08-29 233622" src="https://github.com/user-attachments/assets/4a72bc8f-4e70-4eb1-93fc-65680b870cf4" />

<img width="1328" height="599" alt="Screenshot 2025-08-29 235421" src="https://github.com/user-attachments/assets/6842837f-c415-43ea-8eb3-e0cbe7fe98d5" />

<img width="1348" height="594" alt="Screenshot 2025-08-29 235502" src="https://github.com/user-attachments/assets/f0a3559d-260a-4db6-846c-297bc04b6865" />


<img width="1306" height="566" alt="Screenshot 2025-08-29 235530" src="https://github.com/user-attachments/assets/1b96c271-dcc6-4a4f-baeb-7eeb446cf340" />

<img width="1328" height="585" alt="Screenshot 2025-08-29 235604" src="https://github.com/user-attachments/assets/892f5826-7e66-4bfd-8b7a-95f3a7607268" />

<img width="1324" height="602" alt="Screenshot 2025-08-29 235731" src="https://github.com/user-attachments/assets/a75f6e4d-5cc6-4182-ab41-d3b398c1e25d" />
<img width="1324" height="607" alt="Screenshot 2025-08-29 235833" src="https://github.com/user-attachments/assets/46fbfbc4-abbc-4099-abc0-795f8b1d6fcc" />
<img width="1245" height="605" alt="Screenshot 2025-08-29 235939" src="https://github.com/user-attachments/assets/4722ab8b-7229-4cb9-bad2-ffc3f53c62cd" />
<img width="1310" height="587" alt="Screenshot 2025-08-30 000006" src="https://github.com/user-attachments/assets/63cece41-453b-47a3-a2a3-ec9d0e4b5fb9" />

<img width="1348" height="560" alt="Screenshot 2025-08-30 000049" src="https://github.com/user-attachments/assets/15d50a06-3299-4da0-972b-7eaccc8dd21e" />
<img width="1342" height="628" alt="Screenshot 2025-08-31 213639" src="https://github.com/user-attachments/assets/86e9c00c-d63b-4068-8248-e759116b983a" />

<img width="1306" height="505" alt="Screenshot 2025-08-31 213710" src="https://github.com/user-attachments/assets/abbc6d2c-80a6-4ba1-8864-4dcbfe81f660" />

<img width="1354" height="610" alt="Screenshot 2025-08-31 213726" src="https://github.com/user-attachments/assets/9be67209-f022-46b2-8fd6-afe1434747d2" /> 




🚀 Key Features

Integrated Full-Stack Solution: A robust, single-page application built with React.js and Tailwind CSS on the frontend, a Node.js/Express.js backend, and secure user authentication handled by Firebase.

AI-Powered Medical Assistance: Features a cutting-edge chatbot powered by OpenAI GPT and MongoDB Vector Search for Retrieval-Augmented Generation (RAG), providing accurate and context-aware medical Q&A.

Predictive Diagnostics: Deployed Machine Learning models (Logistic Regression, Support Vector Machines) via a FastAPI backend to perform multi-disease prediction from lab reports with over 81% accuracy.

Secure & Scalable System: Engineered a highly secure and scalable system that manages rapid patient triaging and prescription workflows, ultimately improving healthcare accessibility for over 100 potential users.

🛠️ Tech Stack
Technology

Logo

Description

Frontend





React



A JavaScript library for building user interfaces.

Tailwind CSS



A utility-first CSS framework for rapid styling.

Backend





Node.js



A JavaScript runtime for server-side development.

Express.js



A minimalist web framework for Node.js.

FastAPI



A modern, fast web framework for building APIs with Python.

Database





MongoDB



A NoSQL database for flexible data storage.

Authentication





Firebase



A platform for building and growing apps.

AI/ML





OpenAI



An AI research and deployment company.

🚧 Challenges and Solutions
Building this platform required navigating several key challenges:

Integrating Disparate Services: The core challenge was connecting the Node.js backend with the separate FastAPI service for ML models and the MongoDB database for vector search. This was resolved by designing a microservice-like architecture with secure API endpoints for seamless communication.

Handling Sensitive Data: To ensure patient privacy and security, all data transfers are handled over HTTPS. I implemented Firebase Authentication for secure user management and designed the ML models to process anonymized data.

Optimizing the AI Chatbot: To prevent inaccuracies, the chatbot was built using Retrieval-Augmented Generation (RAG). This approach retrieves specific, authoritative medical data from a vector database before generating a response, significantly reducing hallucinations and improving reliability.

📈 Future Enhancements
Personalized Dashboards: Implement user dashboards for tracking appointments, managing prescriptions, and reviewing health history.

Telemedicine Integration: Add live video call functionality for virtual consultations.

Payment Gateway: Integrate a secure payment system for consultations and pharmacy orders.

ML Model Expansion: Deploy more advanced models for a wider range of disease predictions.

Doctor-Side Portal: Develop a separate interface for doctors to manage appointments and patient records.

🤝 Contribution
Contributions are welcome! Please feel free to open an issue or submit a pull request.
