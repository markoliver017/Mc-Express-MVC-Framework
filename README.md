*********************************************************************
Mc Express MVC Framework
This is an Express.js MVC framework for building web applications.
*********************************************************************

##################
Folder Structure
##################
||application/configurations
     Database.js - database configurations
     Custom_Routes.js - This file lets you re-map URI requests to specific controller functions.
     Main.js - This file is where you set your port, session , and have the options to autoload your model.
||application/configurations/controllers - contains the application controllers
||application/configurations/models - contains the application models 
||application/configurations/views - contains the application views
||application/configurations/helpers - contains the application helper. 'Form_Validation.js'
||application/public - contains the application static files ex: .css | images | js needed on your views files.
||application/system - contains the application system, no need to modify anything on this folder
||app.js - contains the server of the framework.

#########
Features
#########
    MVC architecture
    Node.js
    Express.js web framework
    EJS template engine
    MYSQL database
    Bootstrap CSS framework
    Form validation and error handling
    Dynamic Routing
    Auto-load Model and Controller
    Flash Sessions
    Profiler

####################
Instructions to Run
###################
Clone the repository
Install dependencies using npm install
Start the application using nodemon app.js
Access the application in a web browser at http://localhost:8080
Before starting the application, make sure that you have MYSQL installed and running on your machine.

**********************************************************
Created by: Mark Oliver Roman (markoliver01728@gmail.com)
**********************************************************

