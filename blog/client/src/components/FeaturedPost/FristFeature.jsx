import { Link } from "react-router-dom";
import Image from "../Image/Image";

function FristFeature({srcImage}) {
    return(
        <div className="featured-post-frist flex flex-col w-full lg:w-1/2">
            <Link to={`/post`} >
                <Image src={srcImage} className="rounded-3xl object-cover" alt={`web design`} />
            </Link>
            <div className="discription flex flex-row justyify-between gap-2 pt-4">
                <h1 className="">01.</h1>
                <Link to={`/post`} className="text-blue-800 lg:text-lg">Web Design</Link>
                <span className="text-gray-500">2 days ago</span>
            </div>
            
            <h2 className="text-2xl pt-4 font-semibold lg:font-bold">
                Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum .
            </h2>
                    
        </div>
    )
}

export default FristFeature;