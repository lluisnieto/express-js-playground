# Express JS / Angular2

## Description

Create a basic CRUD with an simple API Rest from scratch without using any framework but express.js

Base Camping Model:
- name
- phone
- email
- address
- location: { lat, lon}

Backend:

Create, read, modify and delete registers on camping’s model. Use at least the following technology:

- https://nodejs.org
- http://expressjs.com

Frontend:

Create a frontend app that communicates with the previously generated API rest Basic functionality is creating a reports, search, append, delete and edit.

Use at least the following technology:

- https://angularjs.org
- http://gulpjs.com/

Bonus Point:

Use any database (preferable mongodb) as a persistence layer.
Create a frontend production model using Gulp automation an http://pugjs.org/ technology.
Unit and functional testing.

## Requirements

- MongoDB service up and running.
- Node 6.9
- NPM

## Installation

- Clone repository
- $ npm install
- $ npm start
- $ casperjs test e2e/casperjs_tests/test-suite.js


- Manual rebuild (needs Angular CLI installed globally) -> $ ng build

## Known Incompletions
1. Unit tests: I've been able to setup the environment with a few "out of the box" test working but I've not been able to code my own unit tests. The main problem has been to mock a service method that returns an observable.
2. Exercise required to use Gulp: I didn't use it since Angular-CLI solves many of Gulp's goals.

## Unexpected issues and achievements
1. I've Never used ExpressJS before but seems to be a minimal/robust tool to work with.
2. Never worked with NoSQL databases, just a few 'hello world' with a NoSQL database cloud service called 'Firebase'.
3. Installed a Firefox addon -> RESTClient. Interesting tool to make test requests.
4. Discovered mongoose. A node dependency to ease modelling under ExpressJS.
5. Discovered node-restful. An auxiliar tool to build and API using ExpressJS and mongoose.
6. I've Never used Angular-CLI before: Accelerates production, absolutely useful!
7. Added Twitter Bootsrap for Layout styling into the Angular build.
8. The frontend side is an Angular2 SPA made of

- 3 Components: App (main), Topbar and Crud.
- 1 Model: Camping
- 1 Service: ApiService.

9. Did not have time to workout the performance (minification, tree shaking)
10. Could not setup commit hook on linter to keep well formed code.
11. A couple of E2E tests under CasperJS (need special conf under Win, environtment vars).
