import ipMS from '../images/iphoneMS.png' //MS Mero Studios
import tabletMS from '../images/tabletMS.png'
import monitorMS from '../images/monitorMS.png'

import ipDS from '../images/iphoneDS.png' // DS Dziki Staw
import tabletDS from '../images/tabletDS.png'
import monitorDS from '../images/monitorDS.png'

import {motion} from 'framer-motion'
import {FaArrowDown} from 'react-icons/fa'

import Projects from '../templates/projects'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useEffect, useState } from 'react'
import { db } from "../firebase/firebase-conf"
import { getDocs, collection } from 'firebase/firestore'
export function Header(props){
    return <h1 className={'font-bold text-5xl md:text-6xl mt-24' + props.class}>{props.title}</h1>
}
export function Main(){
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
         className="xl:px-0 mx-auto px-2 max-w-[1424px] mb-60 "
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
            <Header title="My previous projects" />
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
                desc="Mero Studios is a small group of game developers who are developing games. Right now they are working on Never Found game."
                buttonColor="bg-gray-800 hover:bg-gray-900"
                additionalStyling="sm:order-2"
                isWorkInProgress = {true}
                linkToWebsite = "https://merostudios.netlify.app"
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
            <Header title="Websites that I maitain" />
        </section>
        <section className='mt-10'>
            <Header title="The fun part" />
        </section>
        <section className='mt-10'>
            <Header title="Check out my blog" />
            <div className='flex gap-20 overflow-x-scroll mt-5 py-16 md:px-16'>
                {posts.map((props) => {
                    return(
                    <Link to={"/blog/" + props.title.split(" ").join("-").toLowerCase()} key={props.title} className='hover:no-underline min-w-[400px] rounded-3xl bg-white overflow-hidden shadow-2xl'>
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
        </section>
        </motion.div>
    )
}