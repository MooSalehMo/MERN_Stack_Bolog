import {Routes, Route} from 'react-router-dom'
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import SinglePost from '../components/Posts/SinglePost/SinglePost';
import WritePost from '../components/WritePost/WritePost';
import PostsPage from '../components/Posts/PostsPage';


function Router() {
    return(
        <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/login' element= {<Login />} />
            <Route path='/register' element= {<Register />} />
            <Route path='/posts' element={<PostsPage />} />
            <Route path='/:slug' element={<SinglePost />}/>
            <Route path='/write' element={<WritePost />}/>
        </Routes>
    )
}

export default Router ;