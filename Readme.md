# Hello World App

It is a simple Hello World App that runs on Node and Express. The App is used to demonstrate the benifits of containerization and the app can be deployed on Cloud Containerless service like Google Cloud Run or Azure ACI.

## Download the Code

Git Clone or download and extract the project zip file
```
git clone https://github.com/xcellent101/Node-HelloWorld
```

## Dependancies

### Install Node & NPM

```
sudo apt-get install -y nodejs
sudo apt-get install -y npm
```

### Check node and npm version
```
node -v npm -v
```

### Install Node Express
```
npm install express 
```

### Install packages from packages.json
run npm install to install dependancies from packages
```
npm install
```

## Run the App
```
node .\index.js
```

or if you want to do live changes

```
nodemon .\index.js
```

or
```
npm start
```

## Containarize the App

### Build the image
- Make sure to have docker installed and run the below command

```
docker build -t helloworld:v1 .
```
- -t will tag the image with helloworld:v1
- The dot (.) at the end of the command will build the image locally. You can later push it to external registery (like docker hub or AWS ECR or GCR)

### View Images Locally
```
docker images
docker image list
```

### Running it locally
```
docker run -d -p 8080:8080 helloworld:v1
```
is a Docker command used to run a Docker container in detached mode and map the container's port 8080 to the host's port 8080.

Here's a breakdown of the command:

docker run
: This command is used to create and start a new Docker container.

-d
: This flag runs the container in detached mode, which means that the container runs in the background and doesn't block the terminal.

-p 8080:8080
: This flag maps the container's port 8080 to the host's port 8080. The format is 
-p host_port:container_port
. This allows you to access the application running inside the container from the host machine via the specified port (8080 in this case).

helloworld:v1
: This is the name and tag of the Docker image that you want to run. In this case, it's an image named 
helloworld
 with the tag 
v1
.

When you execute this command, Docker will pull the helloworld:v1  image (if it's not already present locally), create a new container from that image, and start the container in detached mode. The container will be accessible from the host machine at 
http://localhost:8080
 or 
http://host_ip:8080

## Demo
Open your favorite browser and type http://127.0.0.1:8080 and you should be getting
![image](https://github.com/xcellent101/Node-HelloWorld/assets/69367057/bb6fd037-a2ba-493b-960f-a461ddf1d5e9)

