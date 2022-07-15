import {motion} from 'framer-motion'
import { Header } from './main'
export default function GetInTouch() {

  return (
    <motion.div className="md:px-0 mx-auto py-10 px-2 max-w-[1424px]"
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 2}}}
    exit={{opacity: 0, transition: {duration: 0.6}}}
    >
        <div>
          <Header title="Get in touch"/>
          <div>
            sdafsdf
          </div>
        </div>
    </motion.div>
  )
}
