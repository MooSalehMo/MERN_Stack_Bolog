import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from 'react-infinite-scroll-component'
import PostItem from "./PostItem";
import axios from 'axios';
// import './Styles.css'

const fetchPosts = async (pageParam) => {    
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
        params: {page: pageParam, limit: 2},
    })
    return res.data;
};

function PostList () {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({pageParam = 1}) => fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length + 1 : undefined,
    })
    

    if (status === "loading") return "Loadinggg";
    if (status === "error") return "Something went wrong!";

    const allPosts = data?.pages?.flatMap(page => page.posts) || [];

    console.log("Data: ", data);
    
    return (
        <section className="post-list section">
            <div className="containter py-6 sm:bl-1 sm:pr-4">
                <InfiniteScroll
                    dataLength={allPosts.length} 
                    next={fetchNextPage}
                    hasMore={!!hasNextPage}
                    loader={<h4>Loading more posts...</h4>}
                    endMessage={
                        <p> <b>All Posts Loaded !</b> </p>
                    }
                    >
                    {   allPosts.map( (post) => {
                            return <PostItem key={post._id} post={post} />

                        })
                    }
                </InfiniteScroll>
            </div>
        </section>
    )
}
export default PostList




    
