# Frontend Developer Test Task

## Preview
https://sendemy.github.io/task-react/

## Overview

This project is a simple two-page website with a main page and a contact page. The contact page includes a form that collects user input, sends the data to the backend, and displays a thank-you message after form submission.

### Functional Requirements

1. **Main Page**:

   - Contains elements from the provided mockup, including a sticky header and footer.
   - An embedded YouTube video on the right side of the first section. The video link is [https://www.youtube.com/watch?v=dQw4w9WgXcQ](https://www.youtube.com/watch?v=dQw4w9WgXcQ).

2. **Contact Page**:

   - Includes a form with required fields (name, email, message).
   - Form submission sends the input data to the backend and displays a response message on the page.
   - Upon successful submission, the contact page updates with a thank-you message: `'Thank you for your interest, {Name},'`.

3. **Responsive Design**:

   - The website is fully responsive, with a mobile-friendly layout.

4. **Sticky Header & Footer**:

   - Both pages feature a sticky header and footer for consistent navigation.

5. **SEO & Accessibility**:
   - The pages follow best practices for SEO and accessibility, including heading hierarchy and Core Web Vitals optimization.

### Technical Requirements

1. **Languages & Libraries**:

   - **TypeScript** for all code.
   - **React** with a third-party component library (chadcn/ui)
   - **CSS-in-JS** for styling (using Styled Components).
   - **Vite** as the bundler.

2. **Backend**:

   - The backend is implemented using Appwrite's cloud database that logs the form data to the console and responds with a message: `'Thank you for your interest, {Name},'`.

## Installation Guide

Follow these steps to set up the project locally:

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/sendemy/task-react.git
cd frontend-test-task
```

Install the required dependencies using npm:

```bash
npm install
```

### 3. Set Up the Backend

- Set up a cloud server using [Appwrite](https://cloud.appwrite.io/)

### 4. Start the Development Server

Once the dependencies are installed, start the development server:

```npm run dev```

The app should now be running locally at:

```http://localhost:5173```

You can now access the website and test its functionality.
