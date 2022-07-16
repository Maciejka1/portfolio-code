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
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            <div className="mt-10">
                <p className="text-xl max-w-4xl"> 
                    If you want to make any linux server you will need samba because it makes managing server storage really easy.
                    In this tutorial you will learn how to set up samba on Linux server.
                </p>
                <ul className="list-decimal text-3xl font-bold ml-8 mt-10">
                    <li className="pt-12">
                        <h2>Install samba</h2>
                        <div className="text-xl font-normal">
                            <p>
                                Download process varies between different distributions. If your distro isn't there just search how to install it.
                            </p>
                            <code>
                                <p>ZorinOS and Ubuntu based distros</p>
                                <p>$ sudo apt update</p>
                                <p>$ sudo apt install samba</p>
                                <p>EndeavourOS, Manjaro and Arch Linux based distros</p>
                                <p>$ sudo pacman -Syu</p>
                                <p>$ sudo pacman -S samba</p>
                                <p>Fedora, CentOS and RHEL based distros</p>
                                <p>$ sudo dnf install samba samba-common samba-client </p>
                            </code>
                        </div>
                    </li>
                    <li className="pt-12">
                    <h2>Make samba directory</h2>
                        <div className="text-xl font-normal">
                            <p>
                                For security reasons samba can only access one directory like /home/username/samba. You can put this directory anywhere you want to.
                            </p>
                            <code>
                                <p>sudo mkdir /path/where/you/want/samba</p>
                            </code>
                        </div>
                    </li>
                    <li class="pt-12">
                    <h2>Configure samba</h2>
                        <div className="text-xl font-normal">
                            <p>
                                We have to configure samba.conf before doing anything else. Pick your favorite terminal editor, I will use vim.
                            </p>
                            <code>
                                <p>sudo vim /etc/samba/smb.conf</p>
                            </code>
                        </div>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}

        
        
            
        
    

