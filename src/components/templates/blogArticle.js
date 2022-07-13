import { useEffect, useState } from "react"
import { db } from "../firebase/firebase-conf"
import { getDoc, doc } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { Header } from "../pages/main"
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
        <motion.div className="xl:px-0 mx-auto px-2 max-w-[1424px] mb-60 "
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 2}}}
        exit={{opacity: 0, transition: {duration: 0.6}}}
        >
            <Header title={blog.title} class="mt-[0px] pt-24 max-w-4xl" />
            {/* <div dangerouslySetInnerHTML={{ __html: blog.content }} /> */}
            <div className="mt-10">
                <p className="text-xl max-w-4xl">
                    Everyone at some point wanted to create a blog.
                    Usually we find some service that allows us to create blogs but can we create our own blog with react?
                    Of course we can! So today I will show you how to create react blog using firebase and react-router. In this tutorial I am assuming that you set up
                    firebase database correctly. If you don't know how then look at this website code on github or watch some tutorials on youtube.
                </p>
                <ul className="list-decimal text-3xl font-bold ml-8 mt-10">
                    <li>
                        <h2>Modify routing</h2>
                    <div className="text-xl font-normal">
                        <p>
                            We have to understand how react router handles our blog articles. When we put code shown below in our router it will show YourArticleComponent
                            on any route that has /blog/ before it. Try it on this website! Type anything after /blog/ and check console, it will throw some errors because
                            it cannot get any data from firebase database but we don't have to worry about this.
                        </p>
                        <code>
                            <p>
                                {"<Route path='/blog/:id' element={<YourArticleComponent/>}/>"}
                            </p>
                        </code>
                    </div>
                    </li>
                    <li>
                        <h2>Fetch post</h2>
                        <div className="text-xl font-normal">
                            <p>

                            </p>
                            <code>
                                <p>const blogid  =  useParams()</p>
                                <p>const [blog, setBlog] = useState([])</p>
                                <p>{'useEffect(() => {'}</p>
                                <p>{'const getBlog = async () => {'}</p>
                                <p>const blogRef = doc(db, "blog", blogid.id)</p>
                                <p>const data = await getDoc(blogRef)</p>
                                <p>{'if (data.exists()) {'}</p>
                                <p>{"setBlog(data.data())}}"}</p>
                                <p>{"getBlog()}, [blogid])"}</p>
                            </code>
                        </div>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}

        
        
            
        
    

