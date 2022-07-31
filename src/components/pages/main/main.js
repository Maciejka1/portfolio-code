import ipMS from '../../images/iphoneMS.png' //MS Mero Studios
import tabletMS from '../../images/tabletMS.png'
import monitorMS from '../../images/monitorMS.png'

import ipDS from '../../images/iphoneDS.png' // DS Dziki Staw
import tabletDS from '../../images/tabletDS.png'
import monitorDS from '../../images/monitorDS.png'

import {motion} from 'framer-motion'
import {FaArrowDown} from 'react-icons/fa'

import Projects from '../../templates/projects'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useEffect, useState } from 'react'
import { db } from "../../firebase/firebase-conf"
import { getDocs, collection } from 'firebase/firestore'
import GetInTouch from '../getintouch/getintouch'
export default function Main(){
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
        <motion.div
         className="xl:px-0 mx-auto px-2 max-w-[1424px]"
         initial={{opacity: 0}}
         animate={{opacity: 1, transition: {duration: 2}}}
         exit={{opacity: 0}}
         >
        <section>  
            <div className="h-[100vh] flex justify-center items-center">
                    <motion.div className="max-w-[650px] "
                    initial={{x: -100}}
                    animate={{x: 0, transition: {duration: 2}}}
                    exit={{x: 100, transition: {duration: 0.6}}}>
                        <h1 className='text-gray-800 text-[2.7rem] leading-10 sm:text-6xl font-bold '>
                        <span className='text-black'>Maciejka </span>
                            is a professional web developer.
                        </h1>
                    </motion.div>
                <a href="#portfolio" className='absolute bottom-10 z-10'>
                    <FaArrowDown className='text-4xl  animate-bounce' />
                </a>
            </div>
        </section>
        <section id="portfolio" className='pt-12'>
            <h1 className='header'>My previous projects</h1>
            <Projects
                title="Dziki staw"
                desc="Dziki staw is a small sauna business that runs in my city.
                I made them a website built with reactjs and tailwindcss for styling."
                buttonColor="bg-green-300 hover:bg-green-400"
                additionalStyling=""
                isWorkInProgress = {false}
                linkToWebsite = "https://dzikistaw.pl"
                images={
                    {
                        tablet: tabletDS,
                        monitor: monitorDS,
                        ip: ipDS
                    }
                }
            />
            <Projects
                title="Mero Studios"
                desc="Mero Studios is a small group of passionate game developers. Right now they are working on Never Found game. Website was built with react and tailwindcss."
                buttonColor="bg-gray-800 hover:bg-gray-900"
                additionalStyling="sm:order-2"
                isWorkInProgress = {true}
                linkToWebsite = "https://mero-studios.vercel.app"
                images={
                    {
                        tablet: tabletMS,
                        monitor: monitorMS,
                        ip: ipMS
                    }
                }
            />
        </section>
        <section className='mt-10'>
            <h1 className='header'>Check out my blog</h1>
            <div className='flex gap-20 overflow-x-scroll mt-5 py-16 md:px-16'>
                {posts.map((data) => {
                    return(
                    <Link to={"/blog/" + data.title.split(" ").join("-").toLowerCase()} key={data.title} className='hover:no-underline min-w-[400px] rounded-3xl bg-white overflow-hidden shadow-2xl'>
                        <div>
                            <LazyLoadImage src={data.img} />
                        </div>
                        <div className="p-5">
                            <h2 className="text-4xl font-bold">{data.title}</h2>
                            <p className="text-gray-400 mb-4">{data.date}</p>
                            <p className="text-xl font-normal">{data.desc} </p>
                        </div>
                    </Link>
                    )
                })}
            </div>
        </section>
        <section className='mt-10'>
            <GetInTouch/>
        </section>
        </motion.div>
    )
}