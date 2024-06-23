# Get-Youtube-Subscribers (AlmaBetter__Capstone__Project)

## Folder Structure

        Get-Youtube_subscribers  
├─ src                   
│  ├─ models             
│  │  └─ subscribers.js  
│  ├─ app.js             
│  ├─ createDatabase.js  
│  ├─ data.js            
│  ├─ index.html         
│  └─ youtube.png        
├─ index.js              
├─ package-lock.json     
├─ package.json          
├─ Readme.md             
    




## Introduction

* A backend project which includes specific routes in the URL .
* User can  do the following as below:
    - *access the number of subscribers*, 
    - *access subscribers by specific IDs and names*, 
    - *add subscribers*, &
    - *delete subscibers*

## Used in this project:

* Mongoose
* Express
* MongoDB (Atlas and Compass)
* Raw data
* Path module to join index.html
* Postman || Insomnia
* nodemon
* dotenv

## Steps :

- *Step 1*

Install npm dependencies of express and mongoose using " npm install " command.

- *Step 2*

Using MongoDB local (Compass) as well as MongoDB Cloud (Atlas), depends on you which you want to use 
Just uncomment and comment the codes vice versa in createDatabase.js and index.js<br/>
* - **note** : To demonstrate I am using deployed project over the render<br/>
<img width="512" alt="image" src="https://user-images.githubusercontent.com/100461901/225370197-7a1e27f2-562c-4c8b-989b-e379058032b0.png"><br/>

Start the backend server using nodemon or node index.js command.

- *Step 3*

- GET http://localhost:3000/ → The client will see an interface as below:<br/>
<img width="863" alt="image" src="https://akhileshpratap96.github.io/imagex/youtube.jpg"><br/>

- GET http://localhost:3000/subscribers → When the user hit this, endpoint /subscribers, the client will get an array of all subscribers in JSON format from the database where the data is stored in local or MongoDB cloud database. <br/>

<img width="895" alt="image" src="https://akhileshpratap96.github.io/imagex/fetch.png"> <br/>


- GET http://localhost:3000/subscribers/names →When the user hit this, endpoint /subscribers/names the client will to get an array of all subscribers in JSON format with only name and subscribed Channel fields from the database, where the data is stored in local or MongoDB cloud database.<br/>

<img width="900" alt="image" src="https://akhileshpratap96.github.io/imagex/f_names.png"><br/>

- GET http://localhost:3000/subscribers/:id → When the user hit this, endpoint /subscribers/:id in ID, the user needs to enter the USER’S ID which is stored in the database to get a particular user’s details like name, subscribed Channel and subscribed Date from the database, where the data is stored in local or MongoDB cloud database.<br/>

<img width="902" alt="image" src="https://akhileshpratap96.github.io/imagex/f_id.png"><br/>

- GET http://localhost:3000/invalid → when the user hit the unwanted route which is not mentioned above (which is used to handle all other requests), they will get an error message like Route not found in JSON format with an 404 error status code.<br/>

<img width="901" alt="image" src="https://akhileshpratap96.github.io/imagex/f_rand.png"><br/>

app.use() is used to handle all the unwanted requests. It will return 404 Not Found status code indicating that the requested resource could not be found but may be available in the future.


- POST http://localhost:3000/subscribers/add → When user hits this route using Postman or Insomnia with subscriber details the a new subscriber will be added to the database <br/>
<br/>

- DELETE http://localhost:3000/subscribers/delete/:id → When user hits this route using Postman or Insomnia with particular subscriber ID a subscriber will be deleted from the database.<br/>

__Postman__ (Deleting Subscriber with added subscriber id) <br/>

<img width="790" alt="image" src="https://akhileshpratap96.github.io/imagex/f_add.png"><br/>

* -fetching again to check subscriber deleted or not <br/>

<img width="821" alt="image" src="https://akhileshpratap96.github.io/imagex/f_again.png">

## FAQ

#### How to add new subscribers & delete ?

Use Postman or Insomnia to add new subscribers, Delete subscribers from the database.<br/>

## Deployment

*__Use Json Viewer extension in Browser for better view__*

 *__live link__* <br/>
 https://youtubesubscriber-dpdb.onrender.com/<br>
 *__Demo Video link__* <br/>
https://youtu.be/KtOc33LXOKk
<hr/>


      


      

