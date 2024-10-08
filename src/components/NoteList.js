import { useParams, Link } from 'react-router-dom';
import useFetch from './useFetch';

const NoteList = () => {
    const { id } = useParams();
    const { notes, isPending, error } = useFetch('http://localhost:8000/notes');

    return (
        <div className="mt-2 all-notes grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 py-10 gap-6 justify-center px-20">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}

            {notes && (id 
                ? notes.filter(note => note.favorite === true).map(favNote => (
                    <Link to={`/addnote/${favNote.id}`} key={favNote.id}>
                        <div className="group each-notes flex flex-col gap-2 items-center">
                            <div className="content w-72 h-[350px] overflow-hidden p-6 rounded-se-[50px] shadow-lg shadow-[#fbd7ba] border-2 border-[#ffbe62] leading-7 text-start rounded-md scale-95 opacity-95 duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:shadow-lg">
                                {favNote.content}
                            </div>
                            <div className="Title text-lg capitalize font-semibold">{favNote.title}</div>
                            <div className="last-updated">{favNote.updated}</div>
                        </div>
                    </Link>
                ))
                : notes.map(note => (
                    <Link to={`/addnote/${note.id}`} key={note.id}>
                        <div className="group each-notes flex flex-col gap-2 items-center">
                            <div className="content w-72 h-[350px] overflow-hidden p-6 rounded-se-[50px] shadow-lg shadow-[#fbd7ba] border-2 border-[#ffbe62] leading-7 text-start rounded-md scale-95 opacity-95 duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:shadow-lg">
                                {note.content}
                            </div>
                            <div className="Title text-lg capitalize font-semibold">{note.title}</div>
                            <div className="last-updated">{note.updated}</div>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
};

export default NoteList;
