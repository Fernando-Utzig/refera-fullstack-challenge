- Provide clear instructions on how to run the application in development mode
Just need to go to the frontend folder and run the npm start commmand.

- Provide clear instructions on how the application would run in a production environment
The application would request a login/register on the first page and would have a better interface with new pages to different types of users.

- Describe how you would implement an authentication layer for the web application (don't need to implement)
Django comes with a built-in authentication system, defining a User model and using a framework should be enough to handle the auth. I would use the JKW Token by adding the framework (djangorestframework-simplejwt) to settings.py, making the User Model and the register/login web page.

- RESTful API allowing CRUD and list operations on the orders
  - Endpoint to create/retrieve/update/delete order
        Backend DONE Frontend TODO
  - Endpoint to list order
        Backend DONE Frontend TODO
- RESTful API allowing CRUD operations on the categories
  - Endpoint to create/retrieve/update/delete category
        Backend DONE Frontend TODO
  - Endpoint to list categories
        Backend DONE Frontend TODO
- Database to store data from the following resources
  - Order
        DONE
  - Category
        TODO
- Describe how you would structure the database to account for 
  - Real estate agency registration data
  - Company registration data
  - Contact registration data
  - Describe what needs to be changed on the API you implemented
- One web page, following the low fidelity prototype presented on the **Resources**
  - Table with orders data, allowing the user to order the results by each column
  - Button to open modal to create new order
  - Allow row click to open modal to visualize order details
- Modal to input data to create new order
  - Form with appropriate inputs to handle each type of data
  - Allow selection of registered categories from the database
  - Save button to hit backend service and store the data
- Modal to read only the order details