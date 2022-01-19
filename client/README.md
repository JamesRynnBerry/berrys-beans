# Introduction to the application.

This project was created because I love coffee and I wanted to create a simple database where users could store different beans that they enjoy. 

# Getting my app onto your computer. 
The first step you need to take is to clone the repository for my application. 
When you are inside your terminal, in whichever folder you so desire to keep my application in, type in: git clone https://github.com/JamesRynnBerry/berrys-beans

This will pull the repository into your folder so that you can access it from your computer.

The next step is to go into the proper file. From the root folder where you brought my app into, you will want to type: cd berrys-beans 

This will bring you into the folder of my application! Well done step 1! 

# Starting the application locally.
From here, you will need to start up two different servers in order to start the application. This application was built using both React and Ruby on Rails, so  the first step will be to create an additional command line terminal so that you can run both servers at once. 

Once you have your additional command line setup ensuring that you are in the correct, berrys-beans folder. In only one of your command lines, you will you will then type: cd client 

This will put you into the proper, deeper folder within the application to run the React server on.

Where you are inside the berrys-beans folder, type in: rails s
Where you are inside the Client folder, type in: npm start 

You should make sure to start up the rails server first (rails s).

If everything has gone as it should, you should see the login page of the application! Woohoo step 2!

# Using the application. 
The first thing you will want to do is to create an account, you will be asked to provide a username, an email, and a password, which you can then use to login.

Bug Alert! There is a bug that sometimes occurs in this moment where the servers require a hard reset to login. What that entails is, once you have created your account, you will try to sign in and it will reject your sign in. All you have to do, is to reload your webpage, sign in with the same information you created your account with, and you will go in totally fine. I apologize for the inconvenience.

This will take you to the main page of the application. You will be able to see some of the beans that I have already added to the page. You can search through them using a filter at the top, so for example if you knew you wanted to find beans only from a specific region, or that are of a specific blend, all you have to do is type in what you desire in the search bar. 

If you would like to see the store at which each of the beans are sold, you can conviently do so by clicking the Learn More button inside of each bean. This will show you the location of the stores at which the beans are sold. 

If you know that there is a bean you love, and would like to add it to the list of beans for the world to see, all you need to do is to click on the Add Bean button, and you will be taken to a form where you can add beans to the list!

Want to change your account email? Click on the Update Your Info button and you will be able to change the email associated with your account.

And that's the end of step 3! Way to be!

I hope you enjoy the app. It is by no means perfect and is a work in progress. 

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
