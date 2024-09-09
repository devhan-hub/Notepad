import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
    <div className="homepage-container h-auto p-8 flex flex-col items-center justify-center ">
      

      <section className=" text-center mt-10 ">
        <h2 className="text-4xl mb-4  ">Welcome to My Notepad App! </h2>
        <p className="text-xl mb-8">
          Take notes, stay organized, and access them anytime!
        </p>
        <Link
          to="/addnote"
          className="bg-blue-500 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-700"
        >
          Start Taking Notes
        </Link>
      </section>

      <section className=" mt-16 grid grid-cols-1 gap-8 text-center">
        <div>
          <i className="fas fa-pencil-alt text-3xl mb-4"></i>
          <h3 className="text-2xl">Create Notes</h3>
          <p>Start a new note and keep track of your ideas.</p>
        </div>
        <div>
          <i className="fas fa-edit text-3xl mb-4"></i>
          <h3 className="text-2xl">Edit Notes</h3>
          <p>Easily edit, update, and manage your notes.</p>
        </div>
        <div>
          <i className="fas fa-folder text-3xl mb-4"></i>
          <h3 className="text-2xl">All Notes in One Place</h3>
          <p>Access all your notes from one convenient location.</p>
        </div>
      </section>

      </div>
      <footer className="mt-auto p-4 text-sm text-center bg-[#ffbe62]">
      <p>© {new Date().getFullYear()} My Notepad App. All rights reserved.</p>
      </footer>
    
    </>
  );
};

export default HomePage;
