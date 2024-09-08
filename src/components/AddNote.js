import { useEffect, useState } from "react"
import useFetch from "./useFetch"
import { json, useNavigate, useParams } from "react-router-dom";

const AddNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notes, isPending, error } = useFetch(id ? 'http://localhost:8000/notes/' + id : null);

  const [title, setTitle] = useState('Title');
  const [content, setContent] = useState("");
  const [created, setCreated] = useState('');
  const [updated, setUpdated] = useState('');
  const [isExpanded, setExpanded] = useState(false)
  const [isEditabel, setEditabel] = useState(true)
  const [popUp, setPopUp] = useState(false)
  const [haveChange, sethaveChange] = useState(false);


  useEffect(() => {
    if (notes) {
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
     
    sethaveChange(false);
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

    const method = id ? 'PUT' : 'POST';
    const url = id ? `http://localhost:8000/notes/${id}` : 'http://localhost:8000/notes';

    fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newNotes)
    })
      .then(() => setEditabel(false))
      .catch((err) => console.error("Error saving the note:", err));

    
  }
  const handelDelete = () => {
    if (id) {
      fetch(`http://localhost:8000/notes/${id}`, {
        method: 'DELETE'
      })
        .then(() => {
          setTitle('Title')
          setContent('')
          setCreated('')
          setUpdated('')
        })
        .catch((err) => console.error("Error saving the note:", err));
    }
    else {
      navigate('/allnote')
    }
  }

  const handelpopUp = () => {
    setPopUp(!popUp)
  }


  return (
    <div className="mt-2 h-full font-libra overflow-auto h-autoscrollbar-thumb scrollbar-track scrollbar-thumb-hover  px-14">


      <form className={`${popUp ? 'hidden' : 'block'}`} >
        <div className={`duration-300 z-30 overflow-hidden p-4  bg-[#EEEBE5] shadow-lg absolute left-0 right-0 top-0 ${isExpanded ? 'block space-y-4 h-44' : 'flex items-center gap-4 h-24'}`}>

          <div className="icon flex justify-between   items-center">
            <i className={`fa-solid text-xl cursor-pointer ${isExpanded ? 'fa-angle-up' : 'fa-angle-left'}`} onClick={handelExpand} ></i>
            <i className={`fa-regular fa-star  text-xl ml-auto ${isExpanded ? 'block' : 'hidden'}`} ></i>
          </div>

          <input className=" outline-none bg-transparent  capitalize "
            type="text"
            value={title}
            onChange={(e) => { setTitle(e.target.value); sethaveChange(true) }} />

          <div className={`space-y-2 text-sm ${isExpanded ? 'block' : 'hidden'}`}>
            <p>Last modified : {updated}</p>
            <p>created : {created}</p>
          </div>
          <div className={`flex ml-auto  items-center px-1 gap-4 ${isExpanded ? 'hidden' : 'block'}`} >
            <p className="cursor-pointer" onClick={handelSave}>Save</p>
            <p className="cursor-pointer" onClick={handelDelete}>Delete</p>

            <i className={`fas text-xl ${isEditabel ? ' fa-edit' : 'fa-book-open'}`} onClick={handelEdit} ></i>
            <i className="fas fa-times text-xl cursor-pointer" onClick={()=> {haveChange?handelpopUp():navigate('/')}}></i>
          </div>
        </div>

        <div className="mt-8 rounded-xl shadow-inner  shadow-black max-w-md mx-auto bg-[#EEEBE5] overflow-hidden">

          <p className=" font-libra  text-white w-40 h-40 mx-auto text-3xl rounded-full px-10 pt-24 bg-black -mt-20">Notes</p>
          <textarea disabled={!isEditabel}
            className=" bg-transparent  h-auto px-6 py-6 w-full outline-none  min-h-[70vh] overflow-hidden "
            value={content}
            onChange={(e) => { setContent(e.target.value); sethaveChange(true) }}></textarea>
        </div>
      </form>

      <div className={`fixed left-0 right-0 w-full h-full flex justify-center mt-10 items-start ${popUp ? 'block' : 'hidden'}`}  >
        <div className=" flex flex-col space-y-4 items-center w-[85vh] p-10 mx-auto bg-[#EEEBE5] rounded-xl ">
          <p className="mr-auto font-bold text-2xl">Notes</p>
          <p className="font-bold text-xl mr-auto">Do you want to save changes ?</p>
          <div className="flex gap-4">
            <button className="outline-none border-2 bg-[#333] px-10 py-0.5  rounded-xl text-white" onClick={() => { handelSave(); handelpopUp() }} >Save</button>
            <button className="outline-none border-2 bg-[#333] px-10 py-0.5  rounded-xl text-white" onClick={() => handelpopUp()} >Don't Save</button>
            <button className="outline-none border-2 bg-[#333] px-10 py-0.5  rounded-xl text-white" onClick={() => navigate('/')} >Cancel</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AddNote


