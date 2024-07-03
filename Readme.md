# Get-Youtube-Subscribers (AlmaBetter Capstone Project)

 *__live link__* <br/>
 https://get-youtube-subscribers-1211.onrender.com<br>

## Introduction

* Youtube subscribers backend Api to get the subscribers using specific routes end point made using Node.js , Express.js and MongoDB and Mongoose. By including particular routes end point in the URL, user can access the number of subscribers list, subscribers name or access subscribers by specific IDs.

* User can do the following as below:
    - *access the number of subscribers*, 
    - *access subscribers by specific IDs and names*, 
    - *add subscribers*, &
    - *delete subscibers*


## Steps to run code locally :

- *Step 1*

If you want to work on this project , clone this repo

```bash
git clone "https://github.com/purvilnakrani/Get-Youtube-Subscribers.git"

```
Install npm dependencies of express and mongoose using " npm install " command.

- *Step 2*

Using MongoDB local (Compass) as well as MongoDB Cloud (Atlas), depends on you.
* - **note** : To demonstrate I am using deployed project over the render<br/>

Start the backend server using nodemon or node index.js command.

- *Step 3*

- GET http://localhost:3000/ → The client will see an interface as below:<br/>
<img width="863" alt="image" src="https://github.com/purvilnakrani/Get-Youtube-Subscribers/blob/master/screenshots/homepage.png"><br/>

- GET http://localhost:3000/subscribers → When the user hit this, endpoint /subscribers, the client will get an array of all subscribers in JSON format from the database where the data is stored in local or MongoDB cloud database. <br/>

<img width="895" alt="image" src="https://github.com/purvilnakrani/Get-Youtube-Subscribers/blob/master/screenshots/getAllSubscribersPostman.png"> <br/>


- GET http://localhost:3000/subscribers/names →When the user hit this, endpoint /subscribers/names the client will to get an array of all subscribers in JSON format with only name and subscribed Channel fields from the database, where the data is stored in local or MongoDB cloud database.<br/>

<img width="900" alt="image" src="https://github.com/purvilnakrani/Get-Youtube-Subscribers/blob/master/screenshots/getSubscriberByNamePostman.png"><br/>

- GET http://localhost:3000/subscribers/:id → When the user hit this, endpoint /subscribers/:id in ID, the user needs to enter the USER’S ID which is stored in the database to get a particular user’s details like name, subscribed Channel and subscribed Date from the database, where the data is stored in local or MongoDB cloud database.<br/>

<img width="902" alt="image" src="https://github.com/purvilnakrani/Get-Youtube-Subscribers/blob/master/screenshots/getSubscriberByIDPostman.png"><br/>

- GET http://localhost:3000/invalid → when the user hit the unwanted route which is not mentioned above (which is used to handle all other requests), they will get an error message like Route not found in JSON format with an 404 error status code.<br/>

<img width="901" alt="image" src="https://github.com/purvilnakrani/Get-Youtube-Subscribers/blob/master/screenshots/invalidSearch.png"><br/>

app.use() is used to handle all the unwanted requests. It will return 404 Not Found status code indicating that the requested resource could not be found but may be available in the future.


- POST http://localhost:3000/subscribers/add → When user hits this route using Postman or Insomnia with subscriber details the a new subscriber will be added to the database <br/>
<br/>
<img width="790" alt="image" src="https://github.com/purvilnakrani/Get-Youtube-Subscribers/blob/master/screenshots/addSubscriberPostman.png"><br/>

- DELETE http://localhost:3000/subscribers/delete/:id → When user hits this route using Postman or Insomnia with particular subscriber ID a subscriber will be deleted from the database.<br/>

__Postman__ (Deleting Subscriber with added subscriber id) <br/>


* -fetching again to check subscriber deleted or not <br/>

<img width="821" alt="image" src="https://github.com/purvilnakrani/Get-Youtube-Subscribers/blob/master/screenshots/checkSubscriberAfterDeletePostman.png">



## Deployment

*__Use Json Viewer extension in Browser for better view__*


 *__Demo Video link__* <br/>
https://youtu.be/KtOc33LXOKk
<hr/>


      


      

