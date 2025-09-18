import { Link } from "react-router-dom";
import MainCategoriesSearch from "../MainCategories/MainCategoriesSearch";
import './Styles.css'


function SideBar() {
    return(
        <div className="side-bar mainBodyColor sticky top-9 h-max">

            <h2 className="h2 text-sm pt-10 pb-4">Search</h2>
             <MainCategoriesSearch /> 

            <h2 className="h2 text-sm pt-10 pb-4">Filter</h2>
            <div className="check-box flex flex-col gap-3 ">

                <label htmlFor="" className="flex flex-row gap-3 items-center cursor-pointer">
                    <input type="radio" name="sort" value="newest" className="appearance-none filter h-4 w-4 rounded-md border-blue-800  border-[1.5px] checked:bg-blue-800 cursor-pointer"/> 
                    Newest 
                </label>
                <label htmlFor="" className="flex flex-row gap-3 items-center cursor-pointer">
                    <input type="radio" name="sort" value="puoplar" className="appearance-none filter h-4 w-4 rounded-md border-blue-800  border-[1.5px] checked:bg-blue-800 cursor-pointer"/> 
                    Most Pupolar 
                </label>
                <label htmlFor="" className="flex flex-row gap-3 items-center cursor-pointer">
                    <input type="radio" name="sort" value="trending" className="appearance-none filter h-4 w-4 rounded-md border-[1.5px] border-blue-800 checked:bg-blue-800 cursor-pointer"/> 
                    Trending 
                </label>
                <label htmlFor="" className="flex flex-row gap-3 items-center cursor-pointer">
                    <input type="radio" name="sort" value="oldest" className="appearance-none filter h-4 w-4 rounded-md border-blue-800  border-[2px] checked:bg-blue-800 cursor-pointer"/> 
                    Oldest 
                </label>
            </div>

            <h2 className="h2 text-sm pt-10 pb-4">Categories</h2>
            <div className="category flex flex-col">
                <Link to={`/posts`} className="p-3 transition-all ease-in-out text-blue-800 text-lg">All Posts</Link>
                <Link to={`/posts?cat=web-design`} className="p-3 transition-all ease-in-out hover:text-blue-800 text-lg">Web Design</Link>
                <Link to={`/posts?cat=database`} className="p-3 transition-all ease-in-out hover:text-blue-800 text-lg">Database</Link>
                <Link to={`/posts?cat=seo`} className="p-3 transition-all ease-in-out hover:text-blue-800 text-lg">Search Engines</Link>
                <Link to={`/posts?cat=marketing`} className="p-3 transition-all ease-in-out hover:text-blue-800 text-lg">Marketing</Link>
            </div>
        </div>
    )
}

export default SideBar ;