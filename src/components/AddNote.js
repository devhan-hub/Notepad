import { useEffect, useState } from "react"
import useFetch from "./useFetch"
import { json, useNavigate, useParams } from "react-router-dom";

const AddNote = () => {
  const {id} =useParams() ;
  const navigate = useNavigate();
  const { notes, isPending, error } = useFetch(id ? 'http://localhost:8000/notes/' + id : null); 

  const [title, setTitle] = useState('Title');
  const [content, setContent] = useState("");
  const [created, setCreated] = useState('');
  const [updated, setUpdated] = useState('');
  const [isExpanded, setExpanded] = useState(false)
  const [isEditabel, setEditabel] = useState(true)

  useEffect (() => {
     if(notes){
      setTitle(notes.title || '') 
      setContent(notes.content || '') 
      setCreated(notes.created || '') 
      setUpdated(notes.updated || '') 
      setEditabel(!isEditabel)

     }
  }, [notes])

  const handelExpand = (e) => {
    setExpanded(!isExpanded);

  }
  const handelEdit = () => {
    setEditabel(!isEditabel);
  }
  const handelSave = () => {
   
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;
    
    const newNotes = {
      title,
      content,
      created: created || formattedDate,
      updated: formattedDate
    }

    const method= id ?'PUT':'POST';
    const url = id?`http://localhost:8000/notes/${id}`:'http://localhost:8000/notes';

    fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newNotes)
    })
      .then(() =>setEditabel(false))
      .catch((err) => console.error("Error saving the note:", err));

  }
  const handelDelete = () => {
    if(id) {
      fetch(`http://localhost:8000/notes/${id}`, {
        method: 'DELETE'
      })
        .then(() =>{
          setTitle( 'Title') 
          setContent( '') 
          setCreated( '') 
          setUpdated('') 
        })
        .catch((err) => console.error("Error saving the note:", err));
    }
    else {
      navigate('/allnote')
    }
    }
  

  //  bg-[url('../img/flower.png')] bg-cover bg-no-repeat bg-left-top
  return (
    <div className="mt-2 h-full font-libra overflow-auto h-autoscrollbar-thumb scrollbar-track scrollbar-thumb-hover  px-14">
               

      <form className=" " >
        <div className={`duration-300 z-30 overflow-hidden p-4  bg-[#EEEBE5] shadow-lg absolute left-0 right-0 top-0 ${isExpanded ? 'block space-y-4 h-44' : 'flex items-center gap-4 h-24'}`}>

          <div className="icon flex justify-between   items-center">
            <i className={`fa-solid text-xl cursor-pointer ${isExpanded ? 'fa-angle-up' : 'fa-angle-left'}`} onClick={handelExpand} ></i>
            <i className={`fa-regular fa-star  text-xl ml-auto ${isExpanded ? 'block' : 'hidden'}`} ></i>
          </div>

          <input className=" outline-none bg-transparent  capitalize "
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)} />

          <div className={`space-y-2 text-sm ${isExpanded ? 'block' : 'hidden'}`}>
            <p>Last modified : {updated}</p>
            <p>created : {created}</p>
          </div>
          <div className={`flex ml-auto  items-center px-1 gap-4 ${isExpanded ? 'hidden' : 'block'}`} >
            <p className="cursor-pointer" onClick={handelSave}>Save</p>
            <p className="cursor-pointer" onClick={handelDelete}>Delete</p>
            <div className={ `cursor-pointer px-2 py-1.5 duration-200 rounded-full    ${!isEditabel && 'bg-[#aaa]'}`}><i className="fas fa-book-open text-xl" onClick={handelEdit}></i></div>
            <i className="fas fa-times text-xl cursor-pointer" onClick={() => navigate('/allnote')}></i>
          </div>
        </div>
       
       <div className="mt-8 rounded-xl shadow-inner  shadow-black max-w-md mx-auto bg-[#EEEBE5] overflow-hidden">
        
        <p className=" font-libra  text-white w-40 h-40 mx-auto text-3xl rounded-full px-10 pt-24 bg-black -mt-20">Notes</p>
        <textarea disabled={!isEditabel}
          className=" bg-transparent  h-auto px-6 py-6 w-full outline-none  min-h-[70vh] overflow-hidden "
          value={content}
          onChange={(e) => setContent(e.target.value)}></textarea>
          </div>
      </form>
    </div>

    // bg-[url('../img/img.webp')] bg-cover bg-center  bg-no-repeat #FFF8EF #FF9162 #7FB3E1 #92C7E4 #C5D1E6 #FCF6F1 #E4C2D2 #E8C9D1 #EEEBE5
  )
}

export default AddNote


