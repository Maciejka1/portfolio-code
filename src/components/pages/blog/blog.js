import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import {db} from "../../firebase/firebase-conf"
import {getDocs, collection} from 'firebase/firestore'
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"
export default function Blog(){
    const [posts, setPosts] = useState(["mocked", "content", "for", "loading skeleton"])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const postRef = collection(db, "blog")
        const fetchPosts = async () => {
            const data = await getDocs(postRef)
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            setIsLoading(false)
        }
    fetchPosts()
  }, [])
    return(
        <motion.div className="py-10 min-h-[95vh] container"
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 2}}}
        exit={{opacity: 0, transition: {duration: 0.6}}}
        >
            <div>
              <h1 className='header'>Blog</h1>
              <div className="flex flex-wrap mt-12 gap-12">
                {
                isLoading ?
                posts.map(() => {
                    return(
                    <div className='rounded-3xl bg-white overflow-hidden shadow-2xl w-96 animate-pulse'>
                        <div className='h-[241px] bg-gray-400'></div>
                        <div className="p-5">
                            <p className="bg-gray-400 rounded-full max-w-xl h-8 mb-4"></p>
                            <h2 className="text-4xl font-bold max-w-full"></h2>
                            <p className="bg-gray-400 rounded-full max-w-[150px] h-4 mb-4"></p>
                            <p className="bg-gray-400 rounded-full max-w-xl h-4 mb-4"></p>
                            <p className="bg-gray-400 rounded-full max-w-xl h-4 mb-4"></p>
                            <p className="bg-gray-400 rounded-full max-w-xl h-4 mb-4"></p>
                        </div>
                    </div>
                    )
                })
                :
                posts.map((data) => {
                    return(
                    <Link to={"/blog/" + data.title.split(" ").join("-").toLowerCase()} key={data.title} className='hover:no-underline rounded-3xl bg-white overflow-hidden shadow-2xl w-96 '>
                        <div>
                            <LazyLoadImage src={data.img}/>
                        </div>
                        <div className="p-5">
                            <h2 className="text-4xl font-bold">{data.title}</h2>
                            <p className="text-gray-400 mb-4">{data.date}</p>
                            <p className="text-xl">{data.desc}</p>
                        </div>
                    </Link>
                    )
                })
                }
                </div>
            </div>
        </motion.div>
    )
}
