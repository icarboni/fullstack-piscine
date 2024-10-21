# Project Checklist

## 1. Project Setup
- [x] Set up the development environment with necessary tools (Node.js, Docker, etc.).
- [x] Create the project using a front-end framework (e.g., React, Next.js) for a Single-Page Application (SPA).
- [x] Add a `docker-compose.yml` file to manage and run the application.

## 2. Mobile-First Design
- [ ] Ensure all layouts are designed with a mobile-first approach.
- [ ] Test responsiveness across various screen sizes (mobile, tablet, desktop).

## 3. User Interface
- [ ] Create a user-friendly UI where users can select animal combinations and abilities.
- [ ] Design a preview section where users can see the created Pokémon.
- [ ] Include share buttons to allow users to share images of their created Pokémon.

## 4. SPA & Navigation
- [ ] Ensure the application works as a SPA with support for back/forward browser buttons.
- [ ] Implement React Router or a similar tool to handle navigation.

## 5. User Authentication (OAuth2)
- [ ] Set up user authentication using OAuth2.
- [ ] Create login and registration pages.
- [ ] Handle JWT token storage and management.

## 6. Image Generation & Sharing
- [ ] Integrate a 3rd party REST API to generate Pokémon images based on user input.
- [ ] Implement functionality to allow users to download or share the generated images (e.g., via social media).

## 7. Accessibility (WCAG 2.1 AA)
- [ ] Ensure the app meets WCAG 2.1 AA standards (e.g., proper color contrast, keyboard navigation, ARIA attributes).
- [ ] Test with screen readers to verify accessibility.

## 8. Security Measures
- [ ] Implement API key management for any third-party APIs.
- [ ] Secure JWT tokens for authentication and API requests.
- [ ] Use HTTPS and secure cookies for user authentication.

## 9. API Integration
- [ ] Set up back-end APIs for managing user data and generating Pokémon combinations.
- [ ] Integrate the Pokémon image generation API and handle error cases.

## 10. Testing
- [ ] Conduct unit and integration tests for major features (e.g., user login, Pokémon generation).
- [ ] Perform usability tests, especially focusing on mobile usage and accessibility.
- [ ] Test security measures (authentication, API calls).

## 11. Deployment
- [ ] Set up Docker containers for development and production environments.
- [ ] Ensure smooth deployment using `docker-compose`.
- [ ] Deploy the application to a cloud provider or hosting service.

## 12. Documentation
- [ ] Document how to set up, run, and test the application locally and in production.
- [ ] Provide API documentation for any custom back-end endpoints.

## Getting Started

First, run the development server:

```bash
npm run dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
