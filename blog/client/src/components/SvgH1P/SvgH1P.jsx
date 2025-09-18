import { Link } from "react-router-dom";

function SvgH1P() {

  return (
    <section className="svgh1p">
      <div className='container sm:px-4'>
        <div className="blogsArtical my-4">
          <Link to='/' >
            <span className="pr-4">Home</span>
            <span>.</span>
            <span className="text-blue-800 pl-4">Blogs And Articals</span>
          </Link>
        </div>
        <div className="h1_p_svg flex justfiy-between">
          <div className="div-text">
            <h1 className="font-bold sm:text-xl lg:text-3xl">Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum .</h1>
            <p className="p pt-4 pl-4 lg:text-lg md:text-md">Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum .</p>
          </div>
          <div className="div-svg hidden md:block">
            <Link to="/write" className="relative">
              <svg viewBox="0 0 200 200" width="200" height="200" className="text-lg tracking-widest animate-spin-animateButton">
                <path id="circlePath" fill="none" d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0" />
                <text className="p-3"> 
                  <textPath href="#circlePath" startOffset="0%">Write Your Story</textPath>
                  <textPath href="#circlePath" startOffset="50%">Share Your Idea</textPath>
                </text>
              </svg>
              <button className="flex w-20 h-20 top-0 right-0 left-0 bottom-0 m-auto absolute mainBgColor 
              items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" className="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );

}

export default SvgH1P ;