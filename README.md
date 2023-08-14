# About Me
Rishabh Barnwal (rishabh.barnwal123@gmail.com)\
Birla Institute of Technology and Science Pilani

Project: [Netlify Application](https://zesty-dieffenbachia-fb21bc.netlify.app).<br><br>


# Interactive Kanban Board Application

This project involves creating an interactive Kanban board application using React JS. The application interacts with the provided API from **https://apimocha.com/quicksell/data**.

When a user clicks the "display" button and selects a grouping option, the Kanban board dynamically adjusts to reflect the user's choice.

The application offers three distinct ways to group the data:

1. **By Status**: Tickets are grouped based on their current status.
2. **By User**: Tickets are arranged according to the assigned user.
3. **By Priority**: Tickets are grouped based on their priority level.

Users can also sort the displayed tickets in two ways:

1. **Priority**: Tickets can be arranged in descending order of priority.
2. **Title**: Tickets can be sorted in ascending order based on their title.

The Kanban board application is responsive and visually appealing design, resembling the provided screenshots. Moreover, the application ensures the persistence of the user's view state even after the page reloads.

The responsiveness of this application has been tested on Browser Developer Tool (Toggle device toolbar) over different presets of dimensions.

**The priority levels for the tickets are as follows:**

- Urgent (Priority level 4)
- High (Priority level 3)
- Medium (Priority level 2)
- Low (Priority level 1)
- No priority (Priority level 0)

## API Integration

To populate the Kanban board with ticket data, the application interacts with the API provided at **https://apimocha.com/quicksell/data**.

## Task Accomplished

By leveraging MaterialUI and React libraries, the application has been created by considering all the mentioned points for evaluation. The resulting Kanban board application offers an intuitive interface for users to interact with tasks seamlessly.<br><br><br>


# Project Structure

This React application follows a well-organized project structure to ensure clarity and maintainability. Below is an overview of the main directories and files used in this application:

## Entry Point and Layout

- **App.js**: The default entry point of the application. It serves as the central component that orchestrates the rendering of other components.

- **App.css**: This stylesheet defines the basic layout and styling for the application.

## Components

All components used in the application are stored within the **components** directory:

- **Home.jsx**: The central component that acts as the main dashboard for the Kanban board application. It renders other components to display ticket groups and the navigation bar.

- **TicketGroupPriority.jsx**: This component displays ticket groups based on their priority levels.

- **TicketGroupStatus.jsx**: This component renders ticket groups based on their status.

- **TicketGroupUser.jsx**: A component that displays ticket groups arranged according to the assigned users.

- **Navbar.jsx**: The navigation bar component that provides quick access to different views within the application.

## Context and State Management

- **AppStateContext.js**: This file defines a context that manages the application's state. It stores variables required throughout the application, ensuring consistent and efficient state management.

## Entry and Rendering

- **index.js**: The entry point for the React application. It takes the **App.js** component and renders it into the root HTML element.

## Additional Assets

- **assets**: This directory holds assets such as images and other static files that the application might require.

## Summary

This project structure separates concerns and promotes maintainability by organizing components, styles, context, and assets in separate directories. Using context in **AppStateContext.js** ensures efficient state management across the application. The **Home.jsx** component is the central hub, rendering different ticket group components and the navigation bar for a comprehensive Kanban board experience.<br><br>


### `npm start`

It runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

