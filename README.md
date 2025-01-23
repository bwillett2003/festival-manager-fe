![DJ](./src/assets/DJMusicFestival.gif)

# Festival Manager

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
- [Approaches to Building](#approaches-to-building)
- [Links](#links)
- [App Demonstration](#app-demonstration)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)

## Description
Festival Manager is a React-based application that allows users to view and manage schedules for an upcoming festival. The app seamlessly integrates with a custom-built backend API to fetch user and schedule data, ensuring a dynamic and interactive experience. It offers features such as user and schedule browsing, detailed views, and the ability to manage schedules by removing shows. Designed and developed in just 2 days, the app demonstrates a clean and component-driven approach.

## Features
- **Home Page**: A central hub with two buttons—`Users` and `Schedules`—to navigate to respective sections.
- **User Management**:
  - View all users in the system.
  - Access detailed user information, including their full name, email, and personalized schedule.
  - Direct navigation from a user’s details page to their specific schedule.
- **Schedule Management**:
  - Browse all schedules available in the system.
  - View detailed schedules, showing all the shows a user plans to attend.
  - Remove a specific show from a user’s schedule directly from the schedule details page.
- **Dynamic Routing**: Built with React Router for a seamless and intuitive user experience.
- **Error Handling**: Displays a custom error page for invalid or bad URLs.

The application is a user-friendly tool for both attendees and festival managers to track and modify schedules easily.

## Getting Started
1. Clone the repository: [Festival Manager Front End Repository](https://github.com/bwillett2003/festival-manager-fe)
2. Install Dependencies:
```npm install```
3. Run the App via localhost:3001
```npm start```
4. Clone the back end repository as well but refer to its README: [Festival Manager Back End Repository](https://github.com/bwillett2003/festival-manager-be)

- tip: Start your back end server first, then run ```npm start```, it should bring up a message stating something is running on port 3000, that would be the back end server. Hit the ```Y``` key for the front end prompt and it will automatically start on ```localhost:3001```.

## Approaches to Building
- **Component-Driven Development**: The app is structured with reusable components, including:
  - `HomePage`
  - `Header`
  - `UsersPage`
  - `UserDetailsPage`
  - `SchedulesPage`
  - `ScheduleDetailsPage`
  - `App`
- **React Router**: Provides dynamic routing for seamless navigation between pages, ensuring an intuitive user experience.
- **API Integration**: The app fetches data from a custom-built backend API ([Festival Manager API](https://github.com/bwillett2003/festival-manager-be)).

## Links
- **GitHub Back End Repository**: [Festival Manager Back End Repository](https://github.com/bwillett2003/festival-manager-be)
- **GitHub Front End Repository**: [Festival Manager Front End Repository](https://github.com/bwillett2003/festival-manager-fe)

## App Demonstration

App Users Demo
![App Users Demo](./src/assets/FestivalManagerUserDemo.gif)

App Schedules and delete show Demo
![App Schedules and delete show Demo](./src/assets/FestivalManagerShowDelete.gif)

Bad URL Demo
![Bad URL Demo](./src/assets/FestivalManagerBadURL.gif)

## Technologies Used
- React: JavaScript library for building the user interface.
- React Router: Used for handling navigation and routing within the application.

## Contributors

### Bryan Willett
- [LinkedIn Profile](https://www.linkedin.com/in/bryan--willett)
- [GitHub Profile](https://github.com/bwillett2003)