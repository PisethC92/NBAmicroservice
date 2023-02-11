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


**Request Data/Receive Data**

As an example, once the server is running and listening, you can send the data through an HTTP post call. In python, you'll need to download and import the Request library.

    ```Python
    import requests

    url = 'http://localhost:5001/random-select'
    data = \
        [
        {"id": 1, "full_name": "Player 1"},
        {"id": 2, "full_name": "Player 2"},
        {"id": 3, "full_name": "Player 3"},
        {"id": 4, "full_name": "Player 4"}
    ]

    response = requests.post(url, json=data)
    print(response.text)
    ```

Above, I'm using the **post function** from the requests library and passing in the URL (API endpoint and the data as json). We **receive data** in the response from the server and in our example, stored in a variable called "response". In the payload received from the server, we can extract the text to get the 'full_name' attribute as a string and store it in another variable to use. In our example, i'm simply printing out the received data from the server.

![image](https://user-images.githubusercontent.com/91227009/218275558-d74f8e31-c026-4590-a757-091368b6f02c.png)


**UML Sequence**:

![image](https://user-images.githubusercontent.com/91227009/218266423-4792e65b-08f2-46d5-a477-3d035dc2c6d0.png)


