## Design to feature challenge

## Requirements - Time alloted for the challenge: 3 hours


**You have to make a search input box which will search over a list of users.**

The user object has the following fields:

 1. id: a unique id
 2. name: user’s name
 3. items: list of items ordered by user
 4. address: address of the user
 5. pincode: user address pin code


**You have to implement search on all of the fields.**

The search results will show up as a list of User Cards. Refer to the screenshots for how the UI would look like

1.  **Placeholder (empty input)**  
      
    ![](https://lh4.googleusercontent.com/LD1eSKcbyukzQDWvnaEqj8yunVQxtZMzGMkwaFcFamKvLKunt-sQcyY11zy1cCs1bG_j2kv3SLr5_nEjZkY2Ryki9UhyRSZ4BvtlWEeGLM6GhYRSCIhhsKTN1Z_R8bKLlzJuowGm)
    
2.  **Search Result List**
    

![](https://lh6.googleusercontent.com/MDj1Wix-wc8ptBVbU0DE26utmJ6qfDz-K3lRxr1TTxSD1sfI4wf6qSM_LQ9GDvHEGHZ8AoOa1J3GScXPOZ3tpnpSzjq9tNl3g4sBTMQ-J0L4ca_4t6fCp8y3T21ZFMDDpKUy9UCr)

  

3. **No Results Card**

![](https://lh5.googleusercontent.com/_0kHIwIK4Nx3FXFm8DkyC9vHdkuWw0Tgzkc3yz-wofVORSNOKavl_3G3vEmPvJiNE4idjAMMyyAzJBK1hVT3ROlH1_oubRR4T0iCAlTYQAyR9tOEHw50hxqiUTg7TkMlt1O6x-OV)

## To Summarize

1.  On typing in the search input box, the search results list opens up. The search could be just a string matching search.
    
2.  The list of cards can be navigated through keyboard or mouse
    
3.    
    1.  only one card should highlight at a time if both mouse and keyboard are used for navigation
        
    2.  (keyboard will take preference if mouse is kept hovered on the list, similarly mouse will take preference if keyboard navigation is not used).
        
    3.  This behaviour is similar to how youtube search works ([http://jmp.sh/5SoeFsY](http://jmp.sh/5SoeFsY))
        
4.  When no search results are found, an empty card is displayed
    
5.  The card list would be scrollable
    
6.  The highlighted card (via keyboard/mouse) will scroll into view


## Output - View in full screen
https://streamable.com/s/ldatu/dwnhvp


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
