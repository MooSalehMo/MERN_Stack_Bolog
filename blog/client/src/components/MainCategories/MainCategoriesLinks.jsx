import { Link } from "react-router-dom";

function MainCategoriesLinks () {
    return(
        <>
            <Link className="p-3 transition-all ease-in-out text-blue-800 text-lg">All Posts</Link>
            <Link className="p-3 transition-all ease-in-out hover:text-blue-800 text-lg">Development</Link>
            <Link className="p-3 transition-all ease-in-out hover:text-blue-800 text-lg">Web Design</Link>
            <Link className="p-3 transition-all ease-in-out hover:text-blue-800 text-lg">Database</Link>
            <Link className="p-3 transition-all ease-in-out hover:text-blue-800 text-lg">Search Engines</Link>
            <Link className="p-3 transition-all ease-in-out hover:text-blue-800 text-lg">Marketing</Link>
        </>
    )
}

export default MainCategoriesLinks ;