import React from 'react'

export default function ChooseLang() {
  const isConfigured = JSON.parse(localStorage.getItem("conf"))
  isConfigured === null && localStorage.setItem("conf", false) 
  const setLang = (prop) => {
    // localStorage.setItem("conf", true)
    localStorage.setItem("lang", prop)
  } 
  return (
    <div className='text-2xl fixed text-center bottom-0 w-screen p-5 bg-[#00000050] hidden' style={{display: isConfigured ? "none" : "block"}}>
        Choose your language
        <span onClick={() => setLang("pl")} className="cursor-pointer">🇵🇱</span>
        <span onClick={() => setLang("en")} className="cursor-pointer">🇺🇸</span>
    </div>
  )
}
