import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import PostsList from "./PostsList";

function PostsPage () {
    const [open, setOpen] = useState(false);
    return (
        <section className="section">
            <div className="containter py-6">
                <h1 className="text-gray-500 pl-4 pb-4 text-2xl">PostsPage</h1>
                <button onClick={()=> setOpen((prave) => !prave)} className="text-white py-2 px-4 rounded-2xl mainBgColor text-xl text-center pt-3 lg:hidden">
                    {open ? <div>
                        <span></span> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                        </svg>
                    </div> 
                    : 
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
                            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                        </svg>
                         <span>or</span> 
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                    }
                </button>
                <div className="posts-page flex flex-col-reverse lg:flex-row gap-4">
                    <div className="posts-list w-full lg:w-4/5"><PostsList/></div>
                    <div className={`side-bar px-4 flex lg:w-1/5 ${open ? 'block': 'hidden'} lg:block`}><SideBar /></div>

                </div>


            </div>
        </section>
    )
}
export default PostsPage;