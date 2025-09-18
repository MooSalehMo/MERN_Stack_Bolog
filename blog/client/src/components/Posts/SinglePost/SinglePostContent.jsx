import { Link } from "react-router-dom";
import Image from "../../Image/Image";
import {format} from "timeago.js";

function SinglePostContent({data}) {
    return (
        <div className="single-post-content w-full lg:w-4/5">
            <div className="py-8 px-4">
                { data.img && <Image src={data.img} alt="second" className="h-full w-full rounded-2xl object-cover aspect-video" /> }    
            </div>
            <h2 className="lg:text-2xl font-semibold lg:font-bold p-2"> {data.title} </h2>
            <div className="discription p-4 flex flex-row justyify-between gap-1">
                <span className="text-gray-500">Written by</span>
                <Link to={``} className="text-blue-800 lg:text-lg">{data.user.username}</Link>
                <span className="text-gray-500">on</span>
                <Link to={``} className="text-blue-800 lg:text-lg">{data.category}</Link>
                <p className="text-gray-500">Created At: {format(data.createdAt)}</p>
                <p className="text-gray-500">Updated At: {format(data.updatedAt)}</p>
            </div>
            <p className="p-2 md:text-lg">
                {data.desc}
            </p>
        </div>
    )
}

export default SinglePostContent ;
    

