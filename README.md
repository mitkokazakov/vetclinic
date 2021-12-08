# Medical-Center
SoftUni project based on ASP.NET Core

## :information_source: How It Works
-	Guest visitors:
      - browse all doctors;
      - view info about every single doctor;
      - can log in.
-	Patients:
     -  Have option to complete their patient’s profile if they didn’t;
     -  Have access to their Medical Record with all diagnoses and blood tests;
     -  Have access to every single doctor in the Medical Center;
     -  Can make an appointment if doctor have free hours;
     -  Can make changes in their patient’s profile (e.g. Country, Town, Address).
-	Doctors:
     -	Their profile is created beforehand by the admin with username and password;
     -	After log in doctors have to complete their profile (Upload picture, write biography) and wait the admin to approve the picture;
     -	Can find patient by EGN in Manage panel;
     -	Have full access to patient’s Medical Record;
     -	Can determine their own schedule;
     -	Write diagnoses and conclusions;
     -	Appoint blood tests to the patients;
     -	View what is the reason for the visitation by clicking on the hour in schedule section;
- Admin:
  -	Create doctors;
  -	Approve images;
  -	Delete images.
-	Laboratory Assistant:
    -  Find patients by EGN;
    -  Fill blood tests which is appointed by the doctors;

## :hammer_and_pick: Built With
   - ASP.NET Core 5.0
   - Entity Framework (EF) Core 5
   - Microsoft SQL Server Express
   - ASP.NET Identity System
   - MVC Areas with Multiple Layouts
   - Razor Pages, Sections, Partial Views
   - Auto Мapping
   - Dependency Injection
   - Status Code Pages Middleware
   - Data Validation, both Client-side and Server-side
   - Data Validation in the Models and Input View Models
   - Custom Validation Attributes
   - Responsive Design
   - Bootstrap

## :gear: Application Configurations

would happen once you run the application, including Test Accounts:

   -	Admin: mitko@tpp2.com / password: Jameson92@
   -	Doctor1: mitko1@abv.bg / password: Jameson92@
   -	Doctor2: mitko2@abv.bg / password: Jameson92@
   -	Doctor3: mitko3@abv.bg / password: Jameson92@
   -	Doctor4: mitko4@abv.bg / password: Jameson92@
   -	Laboratory Assistant: mitko5@abv.bg / password: Jameson92@


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


