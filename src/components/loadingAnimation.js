import {Main} from './pages/main'
import GetInTouch from './pages/getintouch'
import { Route, Routes, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import Blog from './pages/blog'
import BlogArticle from './templates/blogArticle'
function LoadingAnimation(){
    const location = useLocation()
    return(
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Main/>} />
            <Route path='/contact' element={<GetInTouch/>} />
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/blog/:id' element={<BlogArticle/>}/>
        </Routes>
    </AnimatePresence>
    )
}
export default LoadingAnimation