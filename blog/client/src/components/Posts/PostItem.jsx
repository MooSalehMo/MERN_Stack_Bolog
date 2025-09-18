import { Link } from "react-router-dom";
import Image from "../Image/Image";
import { format } from "timeago.js";
 
function PostItem({ post }){
    return(
        <div key={post.slug} className="md:flex justify-between gap-4 sm:pb-6">
            <Link to={`/${post.slug}`} className="md:w-1/3 flex items-center sm:mb-2" >
            {
                post.img && (<Image src={post.img} alt="second" className="h-full w-full rounded-xl object-cover aspect-video" />)
            }
                 
            </Link>
            <div className="md:w-2/3 sm:pl-2">
                <h2 className="lg:text-2xl font-semibold lg:font-bold py-2">
                    {post.title}                    
                </h2>
                <div className="discription justyify-between gap-1">
                    <span className="written-by text-gray-500">Written by: </span>
                    <Link to={``} className="text-blue-800">{post.user.username}</Link>
                    <p className="text-gray-500">On category: 
                        <Link to={`/post`} className="text-blue-800 "> {post.category}</Link>
                    </p>
                    <span></span>
                    <p className="text-gray-500">Created At: {format(post.createdAt)}</p>
                    <p className="text-gray-500">Updated At: {format(post.updatedAt)}</p>
                </div>
                <p className="py-2 md:text-lg">
                    {post.desc}
                </p>
                <Link className="read-more text-blue-900">Read More...</Link>

            </div>
        </div>
    )
}

export default PostItem ;