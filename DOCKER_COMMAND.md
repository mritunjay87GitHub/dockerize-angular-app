#DOCKER COMMAND

To build image 

## #> docker build -t mks-angular-img .

To create and start appilication and any request come from 4200 it will redirect to 80

## #>docker run -d -p 4200:8082 --name angular-container mks-angular-img

Stop the container: 

## #>docker stop angular-container

Start it again: 

## #> docker start angular-container

Enter the container: 
## #>docker exec -it angular-container /bin/sh

Remove it: 
## #>docker rm -f angular-container

