#!/bin/bash 
docker rm -f docker-cra-container
docker image rm docker-cra
docker build -t docker-cra .
docker run --name docker-cra-container -dp 4000:3000 docker-cra 