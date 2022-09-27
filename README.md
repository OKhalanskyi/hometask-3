
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

show statistics :

Request :
GET notes/stats/summary/ 

Response:
Status: 200
Content-type : Object


archive/unarchive status of note :

Request:
Patch: notes/change-status/:id

Response:
in case if note is true :
Status:200
Content-type: Object<NoteCreateDto>

if note not found :  
Status :404
Exception: "no note with such id"
