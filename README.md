# Learner Academy
Learner Academy is a online platform which provide different courses related to computer science and programming languages. There are some courses added in this project. A user can easily select a course based on his interest and can get the premium access also if he logged in. There are many other features also which is described below.

This website is made by using React Router DOM, Firebase authentication is the major part of this project. Besides React Bootstrap is used for the styling purpose. Custom css is used where necessary. React toastify and sweet alert is added to show the alerts for better user experience.

This is project is basically divided in two parts. 
- Client Side
- Server Side

## Client Side
- In the client user can experience the smooth UI/UX of this project. User can choose the courses he/she wants to study. for the time being 6 courses has been added. many more will come soon. after selecting the course user can get enrolled in the course. Authentication is the most important part of the client side.

## Server Side
- As this project is about online course providing for the students, I needed much data regarding the courses and course details. Fo that I have used node.js and express.js for the server purpose. I have created many data according to the courses and all the data are fetch from the client side. there is no static data in this project.

## Project Features
- This provide a user many courses regarding to computer science and programming language.
- There is a home page which is changing the background images after a specific period of time.
- In the courses page there are listed all the courses that is available right now.
- when a user clicked on a course link (left side of the page) of the course card then the user will be directed to a course details route which he has chosen.
- After getting in to the course details section user can see all the information related to the course(instructor, enrolled students, course duration, course fee etc)
- If the user wants a premium access he can also avail that by clicking on the "Get Premium Access" button.
- If the user is not logged in in the website then he will not be able to get the premium access. For that he has to login first.
- After the successful login user can get the access and will be redirected to the checkout page of the selected course, and he can also checkout if he wants. user can select multiple curses also.
- The checkout page contains the information about the user and the course which user has selected. 
- There is a blog page in this website where some the questions and answers is given based on the project requirements.
- Authentication is the vital part of the website. There are some routes that are private routes. Which means a user can not visit the route if he is not logged in.
- For the Authentication purpose I have used the google's Firebase authentication system. I have added 3 types of authentication systems. 1) Email and Password Login 2) Google Login and 3) Github Login
- If a user wants he can directly login by using his/her google and github account.
- The Navbar of this projects shows the logged in user's information such as the name and the photo of the user. All these information are done by conditional rendering.
- If a user is not login to the website thn the nav bar will show the register and login options. user can toggle between these two.
- User can also update his profile by clicking on the phot in the nav bar. All these are done the firebase.
- Register and Login form is created for the user to get registered and logged in.
- If someone wants to visit a route which is not available in the website then an error message will be shown. 
- I have also implemented dark and light mode on the whole website based on the toggling button.    

## Frameworks and Libraries used in this project
### React Router DOM: 
- React Router DOM is an npm package that enables and implements dynamic routing in a web app. It allows the developer to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.

### Firebase: 
- Firebase is a Backend-as-a-Service (Baas). It provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit. It is built on Google’s infrastructure. For the authentication  purpose I have used firebase in this project.

### Bootstrap and React Bootstrap: 
- Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography.

- React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery. As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.

### React FontAwesome  And React Icons: 
- React Font Awesome is used to show the icons in the project

### React Toastify  And Sweet Alert: 
Toast or Toastify notifications are pop-up messages that display some information to the user. This information could be a success message, warning, error, and so on.

- React-Toastify is one of the top React toast libraries available. This tool allows the user to add toast notifications to the application with ease and can also be used to set notifications and alerts.

- Sweet Alert is also used to show alert for the successful login and registration. for the error alerts is has been used also.


### GitHub Link (Client Side) of This Project: 
Github Link Client Side: https://github.com/programming-hero-web-course1/b610-learning-platform-client-side-Fahimsakib1


### GitHub Link (Server Side) of This Project:
Github Link Server Side:  https://github.com/programming-hero-web-course1/b610-lerning-platform-server-side-Fahimsakib1


### Firebase Hosting Live Website Link:
Live Site: https://learner-academy.web.app
