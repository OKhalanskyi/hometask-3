

#To start

npm start
npm start dev


#Rest Api
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
