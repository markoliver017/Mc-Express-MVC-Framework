*********************************************************************
Mc Express MVC Framework
This is an Express.js MVC framework for building web applications.
*********************************************************************

**********************************
        Folder Structure
**********************************
    application/configurations
        -Database.js - database configurations
        -Custom_Routes.js - This file lets you re-map URI requests to specific controller functions.
        -Main.js - This file is where you set your port, session , and have the options to autoload your -model.
    application/configurations/controllers - contains the application controllers
    application/configurations/models - contains the application models 
    application/configurations/views - contains the application views
    application/configurations/helpers - contains the application helper.           
        -Form_Validation.js
    application/public - contains the application static files ex: .css | images | js needed on your views files.
    application/system - contains the application system, no need to modify anything on this folder
    app.js - contains the server of the framework.

***********************
        Features
***********************
    MVC architecture (Model, View, Controller)
    Dynamic Routing
    Auto-load Model and Controller
    Form validation and error handling
    Flash Sessions
    Profiler
    
***************************************
        Tools | Technologies Used
***************************************
    Node.js: JavaScript runtime environment, back-end development tool
    Express: Node.js web application framework, allows us to more easily handle requests and build a robust server.
    EJS: template engine for Node.js and web applications, used to render dynamic HTML
    MySQL: relational database management system, used for storing and retrieving data
    Bootstrap: front-end CSS framework, used for building responsive and mobile-first web applications

**************************
    Instructions to Run
**************************
    Clone the repository
    Install dependencies using npm install
    Start the application using nodemon app.js
    Access the application in a web browser at http://localhost:8080
    Before starting the application, make sure that you have MYSQL installed and running on your machine.

**********************************************************
Created by: Mark Oliver Roman (markoliver01728@gmail.com)
**********************************************************

