import { Link } from "react-router-dom"
import Image from "../Image/Image";

function Others({srcImage}) {
    return (
        <div className="lg-h-1/3 flex justify-between gap-4 pb-4">
            <Link to={`/post`} className="w-1/3 flex items-center" >
                <Image src={srcImage} alt="second" className="h-full w-full rounded-lg object-cover aspect-video" /> 
            </Link>
            <div className="w-2/3">
                <div className="discription flex flex-row justyify-between gap-1 pt-4">
                    <h1 className="">02.</h1>
                    <Link to={`/post`} className="text-blue-800 lg:text-lg">Data Base</Link>
                    <span className="text-gray-500">2 days ago</span>
                </div>
                
                <h2 className="lg:text-2xl font-semibold lg:font-bold">
                    Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum.
                </h2>
            </div>
        </div>
    )
}
export default Others;