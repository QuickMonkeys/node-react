node-react

This example has the intent to show the functionality of react.js.



The data is representing by a json (the focus is not the database access... yet!)

The transpiler used is Babel.

Webpack is used to create the javascript bundle of the project.

Foreman is used to start the services of Webpack, that's responsible for 
watch changes and recompile code and node to run the web server 
(it's possible to configure react hot loader to improve productivity).

To use:

git clone ...

cd ...

run npm i to install node_modules

run nf start to start the application

Heroku

NODE_ENV: production
NPM_CONFIG_PRODUCTION: true
