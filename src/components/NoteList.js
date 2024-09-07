import { useEffect, useState } from "react";

const NoteList = () => {
    const [ notes, setNotes ] = useState(null);


    useEffect(() => {
     
            fetch('http://localhost:8000/notes')
                .then((res) => 
                    {
                        if(!res.ok) {
                            throw Error('fail to feach')
                        }
                       return res.json()
                    }
                    )
                .then((data) =>{ setNotes(data)})
                .catch((err) => {console.error('error' ,err )})
       
        console.log(notes)
    } , [])
   
   
    return (
        <div className="all-notes grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 py-10 gap-8">
               
           {notes && notes.map((note) => {
             
            return  <div className="each-notes flex flex-col gap-2 items-center " key={note.id}>
             <div className="content w-72 h-[350px] overflow-hidden p-6 bg-[#333] text-white leading-7 text-start rounded-md">
                {note.content} 
             </div>
             <div className="Titel text-lg capitalize font-semibold">
                {note.title}
             </div>
             <div className="last-updated">
                {note.updated_at}
             </div>
         </div>

           }) 
           }
        </div>
    )
}

export default NoteList
