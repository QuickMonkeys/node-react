# node-react

## A simple example to demonstrate the functionality of react.js.

The data is representing by a json file (the focus is not the database access... yet!) to be used by the component.

The transpiler used to generate javascript is Babel.

Webpack is used to create the javascript bundle of the project (see webpack.config.js and webpack.config.prod.js).

Foreman is used to start two services: Webpack, that's responsible for 
watch changes and recompile code and node to run the web server (see server.js).
(it's possible to configure react hot loader to improve productivity).

To get the code:

git clone https://github.com/QuickMonkeys/node-react.git

`cd node-react`

run `npm i` to install node_modules

run `nf start` to start the application using Foreman.

You can see a live [Demo](https://node-react-quick.herokuapp.com/) here.
