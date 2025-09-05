# Project Structure
# Login Page
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/30c25902-f20b-417f-9c8a-1f54ce45ee69" />

# Sign In Page
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/54b002de-73f4-4d83-9b04-6f73019ca70a" />

# Home Page
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/55b2e87a-0e68-449d-b964-d94f36564730" />

# Now Playing , Upcoming Movies 
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/35836c5d-8300-4ecb-8a72-e033dcce3108" />

# Used Firebase for Authentication and Deployment
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6f5e0661-79a8-41a9-8589-89c3130b1638" />

# Used TMDB (The Movie DataBase) Apis for Movies and trailers Data
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/01d4d1d6-2418-4f69-84d4-eb0ef55c29dd" />



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
- planning for main container , secondary container
- fetch data for trailer video ,
- update store with trailer video data
- embeded youtube video , mae it autoplay and mute 
- with tailwind css made good ui
- added secondary container (moviesList*n)- movieCards*n
- added catergories of moviesList (popular , nowPlaying ...)
- added categories of movieslist (upcoming movies)
- completed browse page 
- todo chatgpt search page

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
