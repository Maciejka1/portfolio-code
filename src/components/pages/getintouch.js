import {motion} from 'framer-motion'
import { Header } from './main'
import zero from '../images/contactBg/0.jpg'
import one from '../images/contactBg/1.jpg'
import two from '../images/contactBg/2.jpg'
const imagesArray = [zero, one, two]
const randomNumber = Math.floor(Math.random() * 3)

export default function GetInTouch() {

  return (
    <motion.div className="md:px-0 mx-auto py-10 px-2 max-w-[1424px]"
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 2}}}
    exit={{opacity: 0, transition: {duration: 0.6}}}
    >
        <div>
          <Header title="Get in touch"/>
          <div className='mt-10'>
            <form action="" style={{backgroundImage: `url(${imagesArray[randomNumber]}) `}} className="contactBg rounded-3xl gap-2 text-2xl flex flex-col justify-center items-center h-96 text-white">
              <div className='flex gap-2'>
                <label for="email">Enter your contact email</label>
                <input type="email" className='text-black rounded-xl'/>
              </div>
              <div className='flex gap-2'>
                <label for="email">Enter your name</label>
                <input type="email" className='text-black rounded-xl'/>
              </div>
            </form>
          </div>
        </div>
    </motion.div>
  )
}
