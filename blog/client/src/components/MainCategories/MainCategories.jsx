import MainCategoriesSearch from "./MainCategoriesSearch"
import MainCategoriesLinks from "./MainCategoriesLinks"

function MainCategories() {
    return (
        <div className="main-categories hidden md:flex gap-8 itmes-center justify-center flex p-4 shadow-lg rounded-3xl lg:rounded-full bg-gray-100 ">
            <div className="links flex-1 flex items-center justify-between flex-wrap">
                <MainCategoriesLinks />
            </div>
            <span className="span text-2xl font-mideum flex items-center">|</span>
            <div className="flex items-center">
                <MainCategoriesSearch />
            </div>
        </div>
    )
}

export default MainCategories