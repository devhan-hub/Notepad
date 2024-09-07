import useFetch from "./useFetch";

const NoteList = () => {
    const {notes, isPending, error} = useFetch('http://localhost:8000/notes')

    return (
        <div className="all-notes grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 py-10 gap-8">

            {isPending && <div> Loding... </div>}
            {error && <div> {error}</div>}
            {notes && notes.map((note) => (

                    <div className="each-notes flex flex-col gap-2 items-center " key={note.id}>
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
                ))

            }
        </div>
    )
}

export default NoteList
