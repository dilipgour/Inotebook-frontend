import { AiFillDelete,AiFillEdit } from 'react-icons/ai';



const Noteitem = (props) => {
  return (
    <div className="col-md-3">
 <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{props.note.title}</h5>
    <p className="card-text my-2">{props.note.description}</p>
    <AiFillDelete className="mx-2" onClick={()=>{props.deleteNote(props.note._id)
      props.showalert("success","Note deleted successfully")
    }}/>
    <AiFillEdit className="mx-2"  onClick={()=>{props.updatenote(props.note)}}/>
      </div>
  </div>
</div>
  )
}

export default Noteitem;