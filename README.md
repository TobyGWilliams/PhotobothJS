# Photoboothjs

An application to operate a photobooth a party. Writen using nodeJS, Angular, gphoto2, Ardunio and some other stuff probably.

# Setup

The application requires 2 external factors to work. 
1) A camera controllable by gphoto2
2) A serialport button that emits the right commands when it is time to take a photo. An Ardunio works well here.

# Build
Use `npm start:server` to start the server.

The compiled output for the client can be updated using `npm build`
