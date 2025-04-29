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
- bugfix 1: signup user displayname , profile picture (using dispatch immediately after update)
- bugfix2 2: redirect to browse page when already logged in , dont give back access /browse
- cleanfix: unsubscribes to the onauthstatechange callback
- cleanfix: added all urls , constant values to new file and imported from it
- got tmdb(the movie database) api to fetch movieslist , and got its details from browse page using useeffect
- create a moviesSlice to add all the movies into that slice ,dispatch movies 
- cleaning browse component , (by making all the fetch logic , updating store logic ) exporting this as new hook 
- buiding browse page 


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
