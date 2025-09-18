import FeaturedPost from '../FeaturedPost/FeaturedPost';
import MainCategories from '../MainCategories/MainCategories';
import PostsList from '../Posts/PostsList';
import SvgH1P from '../SvgH1P/SvgH1P';

function Home() {

  return (
    <div className="home">
      <SvgH1P />
      <MainCategories />
      <FeaturedPost />
      <h1 className="text-gray-500 pl-4 pb-4 text-2xl">Recent Posts</h1>
      <PostsList />
    </div>
  );

}

export default Home ;