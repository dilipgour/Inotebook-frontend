import { useContext,useEffect,useRef,useState } from 'react';
import { useNavigate } from "react-router-dom";
import  NoteContext  from '../Contex/NoteContex';
import  Noteitem  from './Noteitem';

const Notes = (props) => {
  const context = useContext(NoteContext);
  const ref = useRef();
  const navigate = useNavigate();
  const cref = useRef();
  const [note, setNote] = useState({ "id":"","etitle":"","edescription":"", "etag":""
  });
  const {notes, deleteNote, getNote,editNote}= context;
  useEffect(() => {
    if(localStorage.getItem("token")){
    getNote()
    }else{
    navigate('/login')
    }
    // eslint-disable-next-line
  }, []);
  const onchange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value }
  )
  }
  const updatenote=(currentnote)=>{
    ref.current.click();
    setNote({"id":currentnote._id, "etitle":currentnote.title,"edescription":currentnote.description, "etag":currentnote.tag
  });
  }
  const onclick=()=>{
    editNote(note.id,note.etitle,note.edescription,note.etag)
    cref.current.click();
    props.showalert("success","Note update successfully")
    
  }
  
  return (
    <>
    
<button ref={ref}  type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Title</label>
  <input type="email" name= "etitle" className="form-control" id="exampleFormControlInput1"  value={note.etitle} onChange={onchange}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" name= "edescription"    rows="10" value={note.edescription} onChange={onchange}></textarea>
</div>
<div className="mb-3">
  <label for="tag" className="form-label">Tag</label>
  <input type="text" name= "etag" className="form-control" id="tag"  value={note.etag} onChange={onchange}/>
</div>
      </div>
      <div className="modal-footer">
        <button ref={cref} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={onclick}>Save changes</button>
      </div>
    </div>
  </div>
</div>
    
    
    <h1 className="my-4">Your Notes</h1>
<div className="my-3 row">
{
       notes.map((note)=>{
         return <Noteitem note={note} deleteNote={deleteNote} updatenote={updatenote} showalert={props.showalert}/>
       })
}
     </div>
    
    </>
  
  )
}

export default Notes;