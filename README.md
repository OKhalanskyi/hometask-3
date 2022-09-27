

#To start

npm start 
/
npm start dev

</br>

#Rest Api

1)show statistics :
</br>
Request :
</br>
GET notes/stats/summary/ 
</br>
Response:
</br>
Status: 200
</br>
Content-type : Object"StatisticsInterface"

</br>

2)archive/unarchive status of note :
</br>
Request:
</br>
Patch: notes/change-status/:id
</br>
Response:
</br>
in case if note is true :
</br>
Status:200
</br>
Content-type: Object"NoteCreateDto"
</br>
if note not found :  
</br>
Status :404
</br>
Exception: "no note with such id"
