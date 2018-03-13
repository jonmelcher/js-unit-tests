js-unit-tests

cool stuff:
    - test runner/configuration for babelified unit tests using chai/mocha/sinon/babel/istanbul
    - provides a Node representation of document/window
    - global sinon/mocha/expect hooks
    - reports using istanbul
    - can be run against other repositories
    - repositories must support any babelified code they own/provide .babelrc to direct the runner

how to use:
    - target a directory you want to cover with babelified javascript and tests suffixed by .spec.js
    - pick a name for the reports to be generated under
    - provide a .babelrc with any bells and whistles you want to add with babel (dynamic imports, etc)
    - npm install
    - NAME={NAME} ROOT={ROOT} npm run test
        - this traverses the root directory recursively looking for .spec.js files, transpiles and imports where
        necessary, completes any mocha tests and creates a report under reports/{NAME}
    