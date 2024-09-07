import { Link } from "react-router-dom";
import useFetch from "./useFetch";


const NoteList = () => {
    const {notes, isPending, error} = useFetch('http://localhost:8000/notes')

    return (
        <div className="mt-2 all-notes grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 py-10 gap-6 justify-center px-20 ">

            {isPending && <div> Loding... </div>}
            {error && <div> {error}</div>}
            {notes && notes.map((note) => (
                    // #FFF8EF #FF9162   #7FB3E1 #92C7E4 #C5D1E6 #FCF6F1 #E4C2D2 #E8C9D1 #EEEBE5
                          <Link to={`/addnote/${note.id}`}>
                    <div className="group each-notes flex flex-col gap-2 items-center " key={note.id}>

                        <div className="content w-72 h-[350px] overflow-hidden p-6 rounded-se-[50px] bg-[#EEEBE5]  leading-7 text-start rounded-md scale-95 opacity-95 duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:shadow-lg ">
                            {note.content}
                        </div>
                        <div className="Titel text-lg capitalize font-semibold">
                            {note.title}
                        </div>
                        <div className="last-updated">
                            {note.updated}
                        </div>
                        </div>
                          </Link>
                    
                ))

            }
        </div>
    )
}

export default NoteList
