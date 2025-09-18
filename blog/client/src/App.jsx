import Navbar from "./components/Navbar/Navbar"
import './App.css'
import Router from "./routes/Routes"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 xxl:px-64'>
      <Navbar />
      <Router />
      <ToastContainer position="bottom-right" />
    </div>
  )
}

export default App