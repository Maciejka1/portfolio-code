import Main from './pages/main/main'
import GetInTouch from './pages/getintouch/getintouch'
import { Route, Routes, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import Blog from './pages/blog/blog'
import BlogArticle from './templates/blogArticle/blogArticle'
import Error from './templates/404'
function LoadingAnimation(){
    const location = useLocation()
    return(
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Main/>} />
            <Route path='/contact' element={<GetInTouch/>} />
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/blog/:id' element={<BlogArticle/>}/>
            <Route path='*' element={Error}/>
        </Routes>
    </AnimatePresence>
    )
}
export default LoadingAnimation