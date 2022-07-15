import React from 'react'
import logo from '../images/logo.webp'
import {FaYoutube, FaGithub, FaDiscord, FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function Nav(){
    const [navControl, setNavControl] = React.useState()
    const windowWidth = window.screen.availWidth
    let resizeNavOnClick
    windowWidth <= 768 ? resizeNavOnClick = () => setNavControl('-100%') : resizeNavOnClick = undefined
    /*Without this, nav when clicking on link would stay in right: 0 style which is "showing" nav.
    This code checks if user is under screen resolution that triggers mobile look. If it is it declares
    resizeNavOnClick as function which closes nav. If user is on screen that has 769px or more it declares
    this variable as undefined because it would break styling when clicking on pc*/
    return (
      <div>
            <div className="flex items-center md:hidden z-30 fixed m-2 top-0 left-0">
                <img src={logo} alt="logo" className="h-14"/>
                <p className="text-lg">Maciejka</p>
            </div>
          <div onClick={() => setNavControl('0')}>
              <div className="open-menu fixed m-5 text-4xl top-0 right-0 md:hidden z-20" >
                  <FaBars/>
              </div>
          </div>
          <nav className="flex flex-col right-[-100%] items-center justify-center w-screen h-screen bg-white fixed md:justify-between md:w-[1224px] md:h-12 md:right-0 md:left-0 md:flex-row md:rounded-full z-20 " style={{right: navControl}}> 

          <div className="h-full md:flex items-center hidden">
              <img src={logo} alt="logo" className="m-0 h-full rounded-none"/>
              <p className="ml-2 text-lg">Maciejka</p>
          </div>

            <ul className="flex flex-col justify-items-center items-center mb-10 text-gray-700 gap-3 font-semibold text-4xl md:text-2xl md:mb-0 md:flex-row">

                <Link to="/" onClick={resizeNavOnClick}>
                    <li className='transition-all hover:text-3xl'>Home</li>
                </Link>

                <Link to="/blog" onClick={resizeNavOnClick}>
                    <li className='transition-all hover:text-3xl'>Blog</li>
                </Link>

                <Link to="/contact" onClick={resizeNavOnClick}>
                    <li className='transition-all hover:text-3xl'>Get in touch</li>
                </Link>
            </ul>

              <ul className="flex flex-col justify-items-center items-center mb-10 text-black gap-3 font-semibold text-xl md:mb-0 md:flex-row md:text-black">
                  <a href="https://discord.com/users/772177682321375262" target="blank" className="text-[#7289da]">
                      <li className='text-4xl md:text-3xl transition-all hover:text-4xl'>
                          <FaDiscord/>
                      </li>
                  </a>

                  <a href="https://www.youtube.com/channel/UCebw-8zzdGSw8jdDY-8mnWA" target="blank" className="text-[#FF0000]">
                      <li className='text-4xl md:text-3xl transition-all hover:text-4xl'>
                          <FaYoutube/>
                      </li>
                  </a>

                  <a href="https://github.com/maciejka1" target="blank">
                      <li className='text-4xl md:text-3xl transition-all hover:text-4xl'>
                          <FaGithub/>
                      </li>
                  </a>
              </ul>
              <div className="text-6xl md:hidden" onClick={() => setNavControl('-100%')}>
                  <i className="fas fa-times"></i>
              </div>
          </nav>
      </div>
    );
}
export default Nav