# csc667 Team Scale Shred Repository

## Group Letter: Q

## Group Number: 12

### Game Project: Uno

### Setting Up Local Repo for Work

#### After having recently pulled the repo switch over to the development branch (git checkout development)

#### When in the development branch follow the steps

##### 1. enter npm install in the cmdn line - this will install dependencies from the package.json

##### 2. create ".env." in the term-project-scale-shred directory on your machine

##### 3. paste the following into the ".env" file

###### NODE_ENV=development

###### SESSION_SECRET=qjAuEuvpSWlySAcljqT3aSBhUcyNWQxu

###### DATABASE_URL=postgres://postgres:12345@localhost:5432/uno-db

###### the above database url was slightly changed due to an issue running it but the original is

###### DATABASE_URL=postgres://<pc_name>@localhost:5432/uno-db

##### 4. enter npm run start:dev in the cmnd line - this will run the server locally backend and frontend at the same time

##### 5. exit the local host by enter ctrl + c in the command line then enter 'Y' or 'y'

##### 6. lastly create an instance of the db on your machine

###### if it wasnt install them and when doing set up if it prompts for password do 12345 for the sake of simplicity

###### enter npm run db:create into the cmnd line - this will create the db locally

###### enter npm run db:migrate into the cmnd line - this will populate the tables for running the db

###### if neither work due to an issue with <pc_name> or postgres:12345 reach out to me (ulices) and i can help troubleshoot

###### if it does work then you can move on to the last step

##### 7. enter npm run start:dev - you should now be able to do work while having all the routes accessible and can easily make and apply changes

### Testing Game Logic

#### To test the core UNO game mechanics in isolation, you can use the test script:

##### 1. Run the test script:

```
npx ts-node src/server/game/test.ts
```

##### 2. This script will:

- Create a test game with 3 players (Alice, Bob, Charlie)
- Start the game automatically
- Simulate turns where players play cards or draw new ones
- Show the game state after each action
- Continue until someone wins

##### 3. Use this script when:

- Developing new game features
- Debugging game logic issues
- Testing game rule changes
- Verifying core game mechanics

##### 4. The test output will show:

- Current player's actions
- Cards played or drawn
- Game state updates
- Winner declaration when the game ends
