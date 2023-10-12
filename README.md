# TIF-assignment
Requirements: 
    Node version 18.16.1
    Npm version 7.24.0
    postgres version 16

How to run program:
    1. clone the project
    2. create the .env file in the main directory only
        a > add the below in .env file
                HOST='localhost'
                PORT=8000
                ENV=dev 
                dbHOST =  [your db host address]
                dbPORT = [your db port]
                dbNAME = 'itf'
                dbUSER = [your db username]
                PASSWORD = [your db password]

AUTH_SERVER_ENDPOINT=http://localhost:4000
    3. run "npm i" or "npm install" command to install the dependencies
    4. clone the authserver repo from my github 
    https://github.com/MasterKaif/authServer
    5. run "npm run start" command to start the server