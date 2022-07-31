import { useEffect, useState } from "react"
import { db } from "../../firebase/firebase-conf"
import { getDoc, doc } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
export default function BlogArticle(){
    const blogid  =  useParams()
    const [blog, setBlog] = useState([])
    useEffect(() => {
        const getBlog = async () => {
            const blogRef = doc(db, "blog", blogid.id)
            const data = await getDoc(blogRef)
            if (data.exists()) {
                setBlog(data.data())
            }
        }
        getBlog()
    }, [blogid])
    return(
        <motion.div className="xl:px-0 mx-auto px-2 pt-24 mb-60  max-w-[1424px]"
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 2}}}
        exit={{opacity: 0, transition: {duration: 0.6}}}
        >
            <h1 className='header'>{blog.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </motion.div>
    )
}

        
        
            
        
    

