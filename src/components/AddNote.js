import { useState } from "react"
import useFetch from "./useFetch"
import { useNavigate } from "react-router-dom";

const AddNote = () => {
 const [title , setTitle ] = useState('Title') ;
 const [content , setContent ] = useState("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est aliquid ad ") ;
 const [created , setCreated] = useState('');
  const [updated , setUpdated] = useState('');
  const [isExpanded , setExpanded] = useState(false)
  const [isEditabel , setEditabel] = useState(true)
 const navigate = useNavigate();
  const handelExpand = (e) => {
    setExpanded(!isExpanded);

  }
  const handelEdit = () => {
    setEditabel(!isEditabel);
  }

  return (
    <div className="mt-2 h-full ">
      <form className="overflow-auto h-autoscrollbar-thumb scrollbar-track scrollbar-thumb-hover " >
     
        <div  className={`duration-300 z-30 overflow-hidden p-4 bg-[#333] text-white absolute left-0 right-0 top-0 ${isExpanded ?'block space-y-4 h-44' :'flex items-center gap-4 h-16'}`}>

          <div className="icon flex justify-between text-white  items-center">
          <i className={`fa-solid text-xl ${isExpanded ?'fa-angle-up' :'fa-angle-left'}`} onClick={handelExpand} ></i>
            <i className={`fa-regular fa-star  text-xl ml-auto ${isExpanded ?'block' :'hidden'}`} ></i>
          </div>

        <input onClick={handelExpand} className=" outline-none bg-transparent text-xl capitalize "
        type="text" 
        value={title}
        onChange={ (e)=> setTitle(e.target.value) }/>

        <div className={`space-y-2 ${isExpanded ?'block' :'hidden'}`}>
        <p>Last modified : {updated} </p>
        <p>created : {created}</p>
        </div>
        <div className ={`flex ml-auto items-center gap-4 ${isExpanded ?'hidden' :'block'}`} >
          <p>Save</p>
          <p>Delete</p>
         
        <div className={`px-2 py-1.5 duration-200 rounded-full    ${!isEditabel && 'bg-[#828080]'}`}><i className="fas fa-book-open text-xl" onClick={handelEdit}></i></div>
           <i className="fas fa-times text-xl cursor-pointer" onClick={() => navigate('/navbar')}></i>
        </div>
        </div>
      
        <textarea disabled ={!isEditabel}
         className=" z-50 left-0 h-auto px-6 py-20 w-full outline-none bg-[#484747] min-h-screen overflow-hidden text-white"
        value={content}
        onChange={(e) => setContent(e.target.value)}></textarea>
      </form>
    </div>
  )
}

export default AddNote


