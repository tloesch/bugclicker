# bugclicker

Bugclicker is a js browser game inspired by cookieclicker and candybox.
The game is available at [bugclicker.morhero.de](https://bugclicker.morhero.de)

Currently bugclicker is still in a early alpha state. Version 1.0 is planned to be finished in October 2019.

## Planned Updates

0.7 alpha (content)
- Add more user level
- Add bugs
- Add workers
- Make city functional
- Add new area in city
- Add meta pages

0.8 beta (story)
- Add Story (Intro, Notifications, Eastereggs)
- Add content

0.9 beta (project rework)
- reworking project structure and codebase
- optimize js 

1.0
- More story, content, ascii etc.


# Docker Setup


## Pre Requirements

- Install [Docker] https://docs.docker.com/install/
- Install [Docker compose] https://docs.docker.com/compose/install/


## Initialization
- Copy *./environments.env.template* to *./environments.env*
- Run ``docker-compose build``

## Basic Usage: 
Startup: ```docker-compose up -d```  
Shutdown: ```docker-compose down```  