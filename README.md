<p align="center">
<a href="http://academy.telerik.com/">
<img src="https://camo.githubusercontent.com/08ecbe7b67d65cc7c6990787e2836b27b4296f2d/68747470733a2f2f7261772e6769746875622e636f6d2f666c65787472792f54656c6572696b2d41636164656d792f6d61737465722f50726f6772616d6d696e6725323077697468253230432532332f436f6465732f4f746865722f54656c6572696b2e706e67"/>
</a>

<h1 align="center">Single page applications with Angular2 - Team "CyberDesign"</h1>

<p align="center">
    <img src="https://cloud.githubusercontent.com/assets/1016365/9863762/a84fed4a-5af7-11e5-9dde-d5da01e797e7.png" alt="Webpack and Angular 2" width="500" height="320"/>
</p>

###:mortar_board:Team Members
| Name              | Academy Username      	|
|-------------------|-------------------|
|                   | :white_check_mark:|
|Александър Несторов |__Alexander.N__	        |
|Иван Първанов |__ivan.parvanov.1__	        |

# E-School - Gradebook

<img src="https://tgc-cache.s3.amazonaws.com/images/remote/http_s3.amazonaws.com/tgc-ee2/articles/615_Graduate_Graduation_College_Reuters.jpg"/>

## Project Description  

This is a simple school management system that allows students, teachers and parents to track the education process in real time.

The application is hosted in the following domains:
- [Heroku](https://cyber-design.herokuapp.com/)

You can view the youtube video here:

 - [Youtube](https://youtu.be/JwKWU1tBJHY)
 
## Demo Accounts

#### Headmaster
    username: headmaster
    password: headmaster
   
#### Student
    username: student
    password: student
    
## Local Install
    $ npm install
    
## Local Dev Start
    $ npm run server

## Usage

#### Basic workflow
1. School headmaster/administration staff logs in with provided headmaster account. 
2. Headmaster goes to Manage/Add Class
3. Headmaster chooses a class name, e.g. 12A, copies the class subjects from his program and adds them, selects students in class from the dropdown menu (if student doesn't have a student profile the headmaster can register them with 'Register a new student') and adds them to the class.
4. If there's already an existing appropriate teacher for the class, the headmaster can assign them to the newly created class from Manage/Assign Classes, otherwise he can create a new teacher from an existing account via Manage/Add Teacher.
5. After teachers have been assigned they can log in with their accounts and add marks to students in their classes via Classes. They can also add new students to a class in case a student is transferred during the school year.
6. The students can now view their marks by subjects by going to My Profile.

#### Registration

Every student must register and be added to a class to view current marks, program schedule and other required information. 

## Application public part

Everyone can see information about school events, current classes and subjects  and also basic information for all users.

## Application private part

Users with role teacher can create new classes, add students to classes, assign teachers to classes and create and edit school events.

Users with role student can view their marks.

## Backend server

We are using Node.js with an Express server.

## Database

MongoDb with Mongoose.

## FAQ

