import {motion} from 'framer-motion'
import zero from '../../images/contactBg/0.jpg'
import one from '../../images/contactBg/1.jpg'
import two from '../../images/contactBg/2.jpg'
import { FaDiscord, FaMailBulk } from 'react-icons/fa'
export default function GetInTouch() {
  const imagesArray = [zero, one, two]
  const randomNumber = Math.floor(Math.random() * 3)
  return (
    <motion.div className="md:px-0 mx-auto py-10 px-2 max-w-[1424px] min-h-[95vh]"
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 2}}}
    exit={{opacity: 0, transition: {duration: 0.6}}}
    >
        <div>
          <h1 className='header'>Get in touch</h1>
          <div className='mt-10'>
            <div style={{backgroundImage: `url(${imagesArray[randomNumber]}) `}} className="p-2 bg-center bg-cover rounded-3xl gap-2 flex flex-col text-xl justify-center items-center h-96 text-black contactBg">
              <div className='bg-white p-5 rounded-2xl'>
                <p>Discord <FaDiscord className='text-indigo-700 inline'/>: maciejka#4895</p>
              </div>
              <div className='bg-white p-5 rounded-2xl'>
                <p>Email <FaMailBulk className='text-yellow-400 inline'/>: maciekglab0812@vp.pl</p>
              </div>
            </div>
          </div>
        </div>
    </motion.div>
  )
}
