import { useState ,useContext} from "react";
import  NoteContext  from '../Contex/NoteContex';
import Notes from './Notes';



const Addnote = (props) => {
  
  const context = useContext(NoteContext);
  const {addNote}= context;
  const [note, setNote] = useState({"title":"","description":"", "tag":""
  });
  const onchange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value }
  )
  }
  const onclick=()=>{
    addNote(note.title,note.description,note.tag)
    setNote({"title":"","description":"","tag":""
  });
  props.showalert("success","New Note added successfully" )
  }
  
  return (
    <>
      <div className="container my-4">
      <h1 className="my-4">Add A Note</h1>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Title</label>
  <input type="email" name= "title" className="form-control" id="exampleFormControlInput1"  value={note.title} onChange={onchange}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" name= "description"    rows="10" value={note.description} onChange={onchange}></textarea>
</div>
<div className="mb-3">
  <label for="tag" className="form-label">Tag</label>
  <input type="text" name= "tag" className="form-control" id="tag"  value={note.tag} onChange={onchange}/>
</div>

<button disabled={note.title.length<5||note.description.length<5} type="button" className="btn btn-primary" onClick={onclick}>Add To Note</button>

<Notes showalert={props.showalert}/>
</div>

</>
  )
}

export default Addnote;