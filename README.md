# GroceryApp

A simple grocery app having lists of items and having like and dislike functionality of items
with seperate client and server

# to run

run commond in terminal -

> git clone https://github.com/paritoshraj11/GroceryApp.git  
> cd GroceryApp  
> ./npmInstall.sh

# run app in a script

to run app in a single command

./runApp.sh

this will run both client and server in background

# to kill procecss

./killApp.sh

#run client and server

from GroceryApp directory start server and clinet as describe

> cd server  
> npm run server

now start clinet
cd ..  
move to client directory

cd clinet/  
npm run start

#run server test cases:

make sure server is running

move to server directory

> cd ..
> cd server  
> npm run test

# run client test case

move to client directory

> cd ..

> cd client

> npm run test

# if Error occured

if and error come from babel-dependecy then run npm install of server
and client seperately

clinet is running on port 3000
server is running on port 5000

make sure this port is not in already used
