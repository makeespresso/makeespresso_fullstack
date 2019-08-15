## Project 4

#### Makeespresso

![Makeespresso logo](https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80)

**General Assembly - Software Engineering Immersive** 

## Set Up

* Fork and clone this repo
* cd into the app directory
* For back-end make sure you have the latest Rails version 5.0.3
* Run `rails S` to run the server
* For front-end, cd into the client directory
* Run `run npm i` to install dependencies
* Run `npm start` and allow the client server to run on an available port

## This  is a Full Stack Web Application:

* Consuming a JSON API
* Back-end using Rails
* Front-end using React
* All four CRUD operations
* Mobile first
* Deployed App using Surge/Heroku

### Project Name

makeespresso

**Description** 

Makeespresso is an application that allows coffee lovers to learn more about Specialty Coffee within the New York City imported from different regions by providing discovery information about the different blends at local retailers while supporting local framers and roasters.

![toastColors](https://user-images.githubusercontent.com/20978259/62839078-41937100-bc53-11e9-8f43-6a91e5f27ae2.jpeg)


## MVP

* Users can register an account, log in and log out 
* Registered users can post, update and delete their favourite coffee for their own colection

### Post-MVP

* Users can save to favorites
* Users can leave comments on products of other users
* Users can find recipies of expresso based berverages 
* Users can accept if they are interested in recieving a weekly newsletter using action mailer
* Users can add their picture profile


### App Features
* Mobile Responsive
* Users can register an account on the site
* Users can accept if they are interested in recieving a weekly newsletter 
* User can see information of shops such as: location, operation hours, address and website

### User Journey 

![user_journey](https://user-images.githubusercontent.com/20978259/62871777-190a8600-bcea-11e9-90c7-11f76f40ec27.jpeg)

Lola is a writer and coffee enthusiast and she's always looking for small, local and cozy coffee shops around the New York City area. She usually goes to coffee shops once every other week, brings her computer, asks for her latte and works on her writing.

User: 

* Lola can create can register and log in into the platform.
* Lola can post her favorite products, edit and/or delete them
* Lola can log out

### Components preview

```<div className="login-page">
      <div className="third-width">
        <h1>Welcome!</h1>
        <img className="welcome-img"src="https://images.unsplash.com/photo-1441448770220-76743f9e6af6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="Welcome Image"></img> 
      </div>

      <div className="third-width">

        <h2>login</h2>
        <hr />
        <form onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin();
        }} >
          <p>Username:</p>
          <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
          <p>Password:</p>
          <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
          <hr />
          <button>Login</button>
        </form>
      </div>
      <div className="third-width">
        <Link to="/register">Register</Link>
      </div>
    </div>
```

## ERD

| Coffee | Users |
|:-------------: | :-------------:|
| Belongs to Users | Users can post, edit and delete posts |


![erd](https://user-images.githubusercontent.com/20978259/63097600-e73e2d00-bf3e-11e9-9e7b-f568a52966fe.png)



## API Endpoint Documentation
##### User 
Path | Descritpion 
------------- | -------------
/profile | shows user profile and products added to theirs board

##### Login 
Path  | Description
------------- | -------------
/login | Logs in existent user
/register | Register new user
##### Product
Path  | Description
------------- | -------------
/new/product | user can create a new product
/products/:id | shows the product selected
/products/:id/edit | edits product selected

## Wireframes

##### Landing page

<img width="1093" alt="landing_page" src="https://user-images.githubusercontent.com/20978259/62839035-a9958780-bc52-11e9-9611-686de19ae55c.png">

##### Coffee page

<img width="1093" alt="coffee_page" src="https://user-images.githubusercontent.com/20978259/62843408-94871b80-bc87-11e9-9b4d-3167cf6f1e76.png">

##### Product Detail page

<img width="1093" alt="product_detail_page" src="https://user-images.githubusercontent.com/20978259/62843883-4e33bb80-bc8b-11e9-9658-963d5e3a6baa.png">


##### History page

<img width="1093" alt="history_page" src="https://user-images.githubusercontent.com/20978259/62843650-6efb1180-bc89-11e9-9fd0-723491ba38a2.png">

##### Register page

<img width="1093" alt="register_page" src="https://user-images.githubusercontent.com/20978259/62843723-17a97100-bc8a-11e9-8219-515300f7c27a.png">

## Timeline

* 08/12/19 - Backend set up
* 08/13/19 - Front end API
* 08/14/19 - Full Crud Working, Front end distrubution and start working on MVP
* 08/15/19 - CSS Design and responsiveness
* 08/16/19 - Review and Deployment
* 08/17/19 - Presentation

## Credits

* Images stock from [Unsplash ](https://unsplash.com "Unsplash")
* buttons from [Ant Design](https://ant.design "Ant Design")
* Icons from [Icons8](https://icons8.com "Icons8")
* Fonts from [Google Fonts](https://fonts.google.com "Google Fonts")