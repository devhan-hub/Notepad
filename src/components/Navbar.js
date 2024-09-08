import { Link } from "react-router-dom"
const navbar = () => {
  return (
    <nav className="flex justify-end items-center p-8 gap-6 shadow-lg bg-[#EEEBE5]">
     <div className="logo cursor-pointer mr-auto text-2xl flex gap-0 text-[#7b5f28] hover:scale-90 duration-300"><Link to='/'> <i class="fa fa-book"></i> <i class="fas fa-pen rotate-[130deg]"></i>
     </Link>  </div>
      <Link to="/addnote" className=" font-libra font-semibold text-md hover:scale-90 duration-300">Add Note</Link>
      <Link to='/allnote' className=" font-libra font-semibold text-md hover:scale-90 duration-300">All Notes</Link>
    </nav>
  )
}

export default navbar
