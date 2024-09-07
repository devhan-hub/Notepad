import { Link } from "react-router-dom"
const navbar = () => {
  return (
    <nav className="flex justify-end items-center p-8 gap-6 shadow-lg">
      <div className="logo mr-auto">Notes</div>
      <Link to ={`/addnote/${null}`}>Add Note</Link>
      <Link to='/allnote'>All Notes</Link>
    </nav>
  )
}

export default navbar
