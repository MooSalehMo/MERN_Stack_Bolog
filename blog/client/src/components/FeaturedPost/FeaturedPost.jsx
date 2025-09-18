import './Styles.css'
import Others from "./Others";
import FristFeature from "./FristFeature";

function FeaturedPost () {
    return (
        <section className="featured-post">
            <div className="container flex flex-col lg:flex-row pl-1 sm:pr-4 pb-4 pt-8 gap-4">
                {/* frist */}
                <FristFeature srcImage={`/Blog/featuredPostOne.jpg`}/>

                {/* others */}
                <div className="featured-post-others w-full lg:w-1/2 flex-col gap-4">
                    <Others srcImage={`/Blog/database.jpg`}/>
                    <Others srcImage="/Blog/searchEngine.jpg"/>
                    <Others srcImage="/Blog/marketing.jpg"/>
                </div>
            </div>
        </section>
    )
}

export default FeaturedPost ;