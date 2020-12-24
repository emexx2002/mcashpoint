#!/bin/bash

if [ ! "$(docker ps -q -f name=mcash-admin-view)" ]
then
        echo "************************************* No instance of BVN Running Container *******************************"
        if [ "$(docker ps -aq -f name=mcash-admin-view)" ]
        then
            echo "************************************* Removing Previous non-running Container *******************************"
            docker rm mcash-admin-view
        fi
else
        echo "************************************* Killing Previous Container *******************************"
        docker kill mcash-admin-view

        echo "************************************* Removing Previous Container *******************************"
        docker rm mcash-admin-view
fi

echo "************************************* Staring the new Container *******************************"
docker pull esettlement/images:mcash-admin-view
docker run -d -p 4001:3000 --name mcash-admin-view esettlement/images:mcash-admin-view
