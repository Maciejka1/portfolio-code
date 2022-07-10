import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'
export default function Projects(props){
    const [ref, inView] = useInView()
    const opacityAnimation = useAnimation()
    useEffect(() => {
        inView ? opacityAnimation.start
            ({
            opacity: 1,
            transition: {duration: 0.7}
            }) : opacityAnimation.start({opacity: 0})

            
    }, [inView, opacityAnimation])
    return(
        <article className='mt-[10vh]' ref={ref}>
        <motion.div className='md:flex justify-around' animate={opacityAnimation}>
            <div className={props.additionalStyling +' md:max-w-[33%] mt-20'}>
                <h1 className='font-bold text-5xl text-gray-700 tracking-wide'>
                    {props.title}
                </h1>
                <p className='text-red-500'>
                    {props.isWorkInProgress ? "Work in progress!" : ""}
                </p>
                <p className='text-2xl my-4'>
                    {props.desc}
                </p>
                <a href={props.linkToWebsite} target="blank" className={props.buttonColor + ' transition-all hover:p-2 p-1 rounded-full font-bold text-white text-xl'}>
                    Check out this website
                </a>
            </div>
            <a href={props.linkToWebsite} target="blank" className='flex flex-wrap justify-center items-center gap-5 mt-4'>
                <div className="w-[400px]">
                    <LazyLoadImage src={props.images.tablet} alt="website displayed on tablet" />
                </div>
                <div className="w-[400px]" >
                    <LazyLoadImage src={props.images.ip} alt="website displayed on iphone x" />
                </div>
                <div className="w-[400px]">
                    <LazyLoadImage src={props.images.monitor} alt="website displayed on monitor" />
                </div> 
            </a>
        </motion.div>
    </article>
    )
}