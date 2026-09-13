#  DevStack Builder

DevStack Builder is a simple React-based web application that helps users explore different technologies and build their own development stack.

Users can add technologies to their stack, remove individual technologies, or remove all selected technologies at once.

##  Live Site

https://curious-gnome-7367ce.netlify.app/

## GitHub Repository

https://github.com/afrinnesa05-wq/devstack-builder

## Technologies Used

1 React.js
2 TypeScript
3 Tailwind CSS
4 DaisyUI
5 React-Toastify
6 JSON
7 Vite

##  Features

### 1. Technology Selection

Users can explore different technologies and add them to their personal development stack.

### 2. Stack Management

Users can view their selected technologies, remove individual items, or remove all technologies at once.

### 3. Duplicate Prevention

The same technology cannot be added twice. The user also receives a warning notification when trying to add a technology again.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax  extension for javascript that allows us to write HTML-like code inside JavaScript or TypeScript.It makes React components easier to write and understand.

### 2. What is the difference between props and state?

Props are used to send data from a parent component to a child component.
State is used to store data inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

useState is a React Hook used to create and manage changing data in a component.

In this project, I used useState to store the technology list, loading state, and selected stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects in a React component.

I used useEffect to fetch the technology data from the JSON file when the application loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the key to identify each item in a list.
A unique key helps React understand which item has changed, been added, or removed.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI based on a condition.
I used it in the Your Stack section:
1.If the stack is empty, it shows an empty message.
2.If technologies are selected, it shows the selected technologies.

For example:

tsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.
In this project, App.tsx sends the technology data and functions to TechnologyList and YourStack.A child can send information back to the parent by calling a function received through props.
For example:

tsx
<TechnologyCard onAdd={addToStack} />
Here, addToStack is created in the parent and passed to the child.

## Project Structure

text
src
├── assets
├── components
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── TechnologyCard.tsx
│   ├── Technologylist.tsx
│   ├── YourStack.tsx
│   └── Footer.tsx
│
├── data
├── App.tsx
├── main.tsx
└── index.css

public
└── technologies.json


##  How to Run Locally

Clone the repository and install the dependencies:

bash
npm install


Run the development server:
bash
npm run dev

Then open the local URL shown in the terminal.



Made with using React and TypeScript.
##  Project Status

This project was built as a React and TypeScript practice project.