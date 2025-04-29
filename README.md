# Project Structure


# netflix gpt
- vite
- tailwindcss
- header
- routing
- login form
- sign up form
- form validation 
- useRef hook
- firebase setup
- deploying our app to production
- new user sign up , sign in using firebase Authentication
- created redux store , with userSlice 
- implemented signout
- update profile name , image url
- 


## Pages , Features

- **Login/Signup Page**
  - Sign In / Sign Up Form
  - created netflix like signin page
  - did both forms in a single page using conditional rendering
  - Redirect to Browse Page after successful authentication

- **Browse Page** (after login)
  - **Header**
  - **Main Movie Section**
    - Trailer playing in the background
    - Title
    - Play Button
    - Description
  - **Movie Suggestions Section**
    - List of Movies (multiple rows)

- **Netflix GPT Section** (at the top)
  - Search Bar
  - Movie Suggestions based on search



// create components folder, and have all the components in that
//similarly for utils folder 
// make app.js empty , and have all the code in Body component, 
Body compinents holds 
-login comp
-browse comp 

also provide nice routing using react-router-dom
        app-router , router-provider 