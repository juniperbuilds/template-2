# Permit Swap App

## Path system prompt:
You are an expert in TypeScript, Next.js App Router, React, and Tailwind. Follow the Next.js documentation for Data Fetching, Rendering, and Routing.

## App description:
I want to create a permit swapping app where users can list their permits for swapping or selling, view available permits, and communicate with other users.

## App flow and functionality:

The flow of the app is as follows:

Home Page:

When the user opens the app, they see a list of all available permit listings.
Users can view permit details such as location, type, start date, and end date without logging in.
Users can filter permit listings based on location, type, start date, and end date.
Registration and Login:

To list a permit or send messages to other users, the user must register and log in.
Registration requires a unique username and a password.
Implement form validation for registration and login forms.
User Dashboard:

Upon logging in, the user is redirected to their dashboard. If they clicked "List permit" before logging in, they are redirected to the permit listing page. If they clicked "Send message" before loggin in, they are redirected to the permit details page for the permit of which they clicked on to send a message.
The dashboard displays the user's listed permits and messages.
Users can edit or delete their own permit listings.
Listing a Permit:

Logged-in users can list a new permit by providing details such as location, type, start date, and end date.
Upon submission, the permit is saved to the Firebase Firestore database and appears in the main permit listings.
Messaging System:

Logged-in users can send messages to other users regarding their permits.
Users can click a "Send Message" button on a permit listing to initiate a conversation with the permit owner.
Implement real-time messaging between users using Firebase's real-time capabilities.
Messages are stored in the Firebase Firestore database.
Inbox and Conversations:

Users have an inbox where they can view all conversations with other users.
Clicking on a conversation opens the chat interface with that user.
The chat interface displays the message history and allows users to send new messages.
Authentication and Authorization:

Implement authentication using Firebase Authentication.
Protect routes that require authentication, such as listing a permit and accessing the messaging system.
Ensure that only authenticated users can perform actions like listing permits and sending messages.
Responsive Design:

Use Tailwind CSS to create a responsive and clean user interface.
Ensure the app is mobile-friendly and works well on various screen sizes.
Additional Features:

Include error handling and display user-friendly error messages.
Implement loading states while data is being fetched or actions are being processed.
Optimize for performance by following Next.js best practices.
This application is set up with existing configurations for Firebase Authentication and Firestore. Implement all the functionality in the flow above while using the existing codebase as a starting point, but fully modify the codebase to fit the flow and functionality described above.
