import SinglePostContent from "./SinglePostContent";
import Comments from "../../Comments/Comments";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PostMenuActions from "./PostMenuActions";

const fetchPost = async (slug) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`)
    return res.data ;
}

function SinglePost(){

    const {slug} = useParams();
    const {isPending, error, data} = useQuery({
        queryKey: ['post', slug],
        queryFn: ()=> fetchPost(slug),
    })
    
    if (isPending) return "Loading..."; 
    if (error) return "Something went wrong!" + error.message; 
    if (!data) return "Post not found or is undefined!";
    
    return(
        <section className="pb-8">
            <div className="container single-post w-full">
                <PostMenuActions post={data}/>
                <SinglePostContent data={data} />
                <Comments  postId={data._id}/>
            </div>
        </section>
    )
}

export default SinglePost ;