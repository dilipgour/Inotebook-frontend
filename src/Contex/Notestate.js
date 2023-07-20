import NoteContext from './NoteContex'
import { useState } from "react";

const Notestate=(props) =>{
  const [notes, setNotes] = useState([]);
  
  const getNote= async ()=>{
    const response = await fetch("http://localhost:5000/api/note/fetchallnotes/", {
    method: "GET", 
    headers: {
"auth-token": localStorage.getItem("token")
    },
    
    
  });
  let json= await response.json(); 
  
  setNotes(json)
	
  }
	
	const addNote = async (title, description,tag)=>{
	  const response = await fetch("http://localhost:5000/api/note/addnote", {
    method: "POST", 
   headers: {
     "Content-Type": "application/json",
"auth-token": localStorage.getItem("token")
   },
        body: JSON.stringify({title, description,tag}), 
   });
      let newnote= await response.json(); 
 
	  
	newnote=notes.concat(newnote)
	setNotes(newnote)
	  
	}
	
	
	
	const editNote = async (id,title,description,tag)=>{
	 const response = await fetch(`http://localhost:5000/api/note/updatenote/${id}`, {
    method: "PUT", 
   headers: {
     "Content-Type": "application/json",
"auth-token": localStorage.getItem("token")
   },
        body: JSON.stringify({title, description,tag}), 
   });
      let newnote= await response; 
	 
	  
	  
	  let newnotes=JSON.parse(JSON.stringify(notes))
	   for (let i = 0; i < newnotes.length; i++) {
	     if( newnotes[i]._id===id){
	       
	       newnotes[i].title=title
	       newnotes[i].description=description
         newnotes[i].tag=tag
         break;
	     }
	     
	     
	   }
	   setNotes(newnotes)
	  
	  	}
  
  const deleteNote =async (id)=>{
	   const response = await fetch( `http://localhost:5000/api/note/deletenote/${id}` , {
    method: "DELETE", 
   headers: {
     "Content-Type": "application/json",
"auth-token": localStorage.getItem("token")
   },
         
   });
      let json = await response; 
	  
	  
	  let newnote=notes.filter((note)=>{
	    return note._id != id
	    
	  })
	  setNotes(newnote)
	  
	  
	}
 
 
 
  return (
    <NoteContext.Provider value={{notes,addNote,deleteNote,getNote,editNote}}>
      {props.children}
    </NoteContext.Provider>
  );
}
export default Notestate;