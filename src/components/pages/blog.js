import { Header } from "../pages/main"
import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import {db} from "../firebase/firebase-conf"
import {getDocs, collection} from 'firebase/firestore'
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"
export default function Blog(){
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const postRef = collection(db, "blog")
        const fetchPosts = async () => {
            const data = await getDocs(postRef)
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
    fetchPosts()
  }, [])
    return(
    <motion.div className="xl:px-0 mx-auto px-2 max-w-[1424px] mb-60"
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 2}}}
    exit={{opacity: 0, transition: {duration: 0.6}}}
    >
        <Header title="Blog" class="mt-[0px] pt-24" />
        <div className="flex flex-wrap mt-12 gap-12">
            {posts.map((props) => {
                    return(
                    <Link to={"/blog/" + props.title.split(" ").join("-").toLowerCase()} key={props.title} className='hover:no-underline rounded-3xl bg-white overflow-hidden shadow-2xl w-96 '>
                        <div>
                            <LazyLoadImage src={props.img}/>
                        </div>
                        <div className="p-5">
                            <h2 className="text-4xl font-bold">{props.title}</h2>
                            <p className="text-gray-400 mb-4">Jul 9 2022</p>
                            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsum ea sed dolore obcaecati quibusdam necessitatibus nobis. Obcaecati, unde dolor. </p>
                        </div>
                    </Link>
                    )
            })}
        </div>
    </motion.div>
    )
}