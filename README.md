<p align="center">
<a href="http://academy.telerik.com/">
<img src="https://camo.githubusercontent.com/08ecbe7b67d65cc7c6990787e2836b27b4296f2d/68747470733a2f2f7261772e6769746875622e636f6d2f666c65787472792f54656c6572696b2d41636164656d792f6d61737465722f50726f6772616d6d696e6725323077697468253230432532332f436f6465732f4f746865722f54656c6572696b2e706e67"/>
</a>

<h1 align="center">Single page applications with Angular2 Team "CyberDesign"</h1>

<p align="center">
    <img src="https://cloud.githubusercontent.com/assets/1016365/9863762/a84fed4a-5af7-11e5-9dde-d5da01e797e7.png" alt="Webpack and Angular 2" width="500" height="320"/>
</p>

###:mortar_board:Team Members
| Name              | Academy Username      	|
|-------------------|-------------------|
|                   | :white_check_mark:|
|Александър Несторов |__Alexander.N__	        |
|Иван Първанов |__ivan.parvanov.1__	        |

# E-School

## Project Description  

This is a simple project management system that allows students, teachers and parents view in real time the education process in current school

The application is hosted in the following domains:
- <a href="https://cyber-design.herokuapp.com/">Heroku Link</a>

You can view the youtube video here:

## Local Install
    $ npm install
    
## Local Start
    $ npm run server

## Usage

#### Register

Every student must register to view current marks, program schedule and other required information.

#### Login

Follow up the Login page to see available options.

- Local login

#### Basic functionalities

 Every user in this app can create project and automatically sets him as Lead user for the project.
 In every school Director can:
 
 - add classes and teachers
 
 In every class Teacher can:
 - add marks and subjects

#### Add Mark

Teachers can add marks to every student which has teacher's disciplines.

## Application public part

Everyone can see information about current classes and subjects which are set to be public in this app and also basic information for all users.
Visitors cannot view marks until they're not logged in the app.

## Application private part

Only LeadUser can add tasks.
Only Users with Role: teacher can add or edit data in current class.

## Backend server

We are using nodeJs with express set up.

## Database

We are using mongoDb with mongoose.

## FAQ

