<h1>Pantry Manager</h1>
Pantry Manager is a simple CRUD (Create, Read, Update, Delete) application designed to help you manage your pantry items efficiently. This application is built using modern web technologies, ensuring a smooth and responsive user experience.
<h2>Tech Stack</h2>

    Frontend: Next.js, JavaScript, MUI (Material-UI)
    Backend: Firestore Database
<h2>Features</h2>

    Create: Easily add new pantry items with details like name, quantity, and expiration date.
    Read: View all your pantry items in a clean and organized layout.
    Update: Modify the details of your pantry items as needed.
    Delete: Remove items that are no longer needed or have expired.

<h2>Getting Started</h2>
<h3>Prerequisites</h3>

    Node.js (>=12.x)
    npm or yarn
    Firebase account (for Firestore Database)

<h3>Installation</h3>

    Clone the repository:

   

git clone https://github.com/yourusername/pantry-manager.git
cd pantry-manager

Install dependencies:



npm install

Set up Firebase:

    Create a Firebase project and enable Firestore.
    Download the Firebase config file (firebaseConfig.js) and place it in the root of your project.
    Ensure the Firestore rules are properly set up to allow CRUD operations.

Run the development server:

bash
    npm run dev

    Open http://localhost:3000 to view the application in the browser.

<h2>Deployment</h2>

Pantry Manager can be easily deployed to platforms like Vercel, Firebase Hosting, or any other static hosting service that supports Next.js.



npm run build
npm run start

<h2>Contributing</h2>

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

<h2>License</h2>

This project is licensed under the MIT License.
