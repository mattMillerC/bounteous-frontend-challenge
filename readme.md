# Bounteous Technical Assessment
*Matt Miller*

To whomever may be viewing this project, thanks for your consideration! I've had fun working on this and hope it meets expectations.

## Viewing the Project ##
The product of my work can be found at **dist/index.html**, and can be viewed statically.

You could also run the Webpack development script to host the project on a local server:

*npm install*

*npm start*

Alternatively, you could view the component directly through Storybook, by using the script:

*npm run storybook*

## Code Walkthrough ##
The HTML for this project can be found in the **index.html** file.

I've written my styles using Sass. These can be found in the **styles/** folder. The goal was to break things apart into reusable components. In my code I refer to the main component as a Tile and I've also developed for the Button. 

I include a Page file for styles at the page level, a Reset file to apply global resets to certain elements, and I include Normalize.css to help ensure browsers render things the same. Also, I've added a Webpack step to automatically insert necessary browser prefixes to certain style.

I've also written a small JS framework that initializes HTML Elements with corresponding Javascript based on the `auto-init` attribute. This includes logic to watch for DOM Mutations and automatically initialize any new components added to the DOM after the initial load. I've used this framework to implement the requested feature for the 'Follow' button.

## Storybook Integration ##
Along with the requested component, I've included an integration with Storybook, which allows us to view different variations of the components, and eventually build a pattern library of components that will be a useful testing, demo, and design tool. I've included stories with varying content and images in order to show the flexibility of my component. 

I've also enabled a few addons in Storybook. The Viewport addon allows resizing of the Storybook viewport to standard device sizes. I've also added the A11y addon which runs some simple accessibility tests against the rendered component.
