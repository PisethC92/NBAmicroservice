# NBAmicroservice
Repository for partner's microservice to their NBA stat app. Will generate a random player from a list of JSON and return the full name of player as **text**

To start the environment, please see steps below:

1. Install Node.js: You need to have Node.js installed on your machine in order to run the microservice. You can download the latest version of Node.js from the official website: https://nodejs.org/. I am currently running v16.18.0 so if you have any issues, try using this version.

2. Download the code as a zip file or clone the repository using Git.

3. Install dependencies: you will need to install the required dependencies for the microservice. The required dependencies are express and body-parser. You can install these dependencies by running the following command in the terminal:

    ```terminal
    npm install express body-parser
    ```

4. Start the microservice: You can start the microservice by running the following command in the terminal (you'll want to cd to the directory first or provide the full path):

    ```
    node .\randService.js
    ```

At this point, the service should be running and awaiting for requests. To test the microservice you can make a POST request to this endpoint http://localhost:5000/random-select with the JSON data.
