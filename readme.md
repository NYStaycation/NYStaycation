#Introduction
===
Have you ever wanted to go somewhere but you’re strapped for cash? Do you love your City/Country and never want to leave?!

**Staycation** is your one stop place to help you figure out what you can do in whatever ```zip code``` you'd like to visit; within whatever ```budget``` you set. 

##User Stories
  
* Guests
  * Guest can search based on postalcode/zipcode, Budget value
  * Guest can view all activities that is less than the budget input value
  * Guest can view all apt/home to stay
  * Guest can add all activities, apt/home to create package
  * Guest can create an account 

* Users
 * User can login to his/her account
 * User can search based on Zipcode/postalcode, budget value
 * User can view all the activities, Home/apt/motels 
 * User can add activities
 * User can add Home/apt/motels
 * User can create a package deal
 * User can store that package deal in his/her account
 * User can view all deals he/she created

##Technologies Used

* React- structure our front end
* PSQL- store our data
* Express- backend server
  
####API Used 

  * [Expedia](http://developer.expedia.com/directory)



##General Approach

We began with the idea that it would be nice to offer users a way to plan an entire vacation package (place to stay plus things to do) within their local vicinity. We first attempted to use the AirBnb API and FourSqaure API, however parsing through their data proved to be a challenge. We settled on using the Expedia API as not only was it all inclusive (activities plus hotel locations) but it was a lot more flexible to parse through. 

##View It Live
[Staycation](https://enigmatic-crag-84254.herokuapp.com/)

##Wireframes
The React Components:
![App Components](http://i.imgur.com/ugpmvv9.png)

Single Page App Wireframe Concept
![wireframe](http://i.imgur.com/5IbZ2Gr.png)


##Unsolved Problems/ Open Issues
* Frontend Authentication with React
(we were able to get our backend server to set tokens, but weren't able in a timely manner to get the tokens to pass through to frontend.)
*Database - needed constant restructuring


##Developers

  * [David Maul](https://github.com/dmaul12)
  * [Fizal Sarif](https://github.com/fizal619)
  * [Sasha-Shae Weekes](https://github.com/afroniquely)
  * [Supritkumar Shah](https://github.com/supritshah1289/)

