import { useEffect, useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { Image } from 'astro:assets';

export function Top(){
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function toggleMenu(){
    console.log(!isOpen)
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if(isOpen){
      document.body.classList.add('no-scroll');
    }else {
      document.body.classList.remove('no-scroll');
    }

    window.addEventListener('resize', () => {
        setIsOpen(false)
    })
  })

  function cls(condition: boolean, classes: string){
    if(condition) return classes
  }

  function OpenButton(){
    return (
      <button onClick={toggleMenu} className="hidden md:flex pointer w-[30px] h-[30px] justify-center items-center">
        <FiMenu className="text-[25px] text-black" />
      </button>
    )
  }

  function CloseButton(){
    return (
      <button onClick={toggleMenu} className="hidden md:flex pointer w-[30px] h-[30px] justify-center items-center">
        <FiX className="text-[25px] text-black" />
      </button>
    )
  }

  return (
    <nav className={`
      w-full fixed left-0 right-0 flex justify-center z-50
    `}>
      <div className={
        `w-full bg-white/20 backdrop-blur-sm max-w-[998px] flex justify-between px-4 py-4
        ${cls(isOpen, "h-screen bg-white/80 flex-col justify-start gap-[30px]")}`
      }>
        <div className={`
          font-bold flex gap-[20px] justify-start items-center md:w-full md:justify-between
        `}>
          <img src="/images/logo.svg" className="w-auto h-[20px]" />
          { isOpen ? <CloseButton /> : <OpenButton />  }
        </div>

        <div className={`
          flex gap-[30px] items-center md:hidden
          ${cls(isOpen, "md:!flex md:!flex-col !gap-[15px] px-[10px] !items-start")}
        `}>
          <a className={`
            text-sm hover:underline
            ${cls(isOpen, "text-[24px] border-b border-black/20 w-full pb-[15px]")}
          `} href="#"> First </a>

          <a className={`
            text-sm hover:underline
            ${cls(isOpen, "text-[24px] border-b border-black/20 w-full pb-[15px]")}
          `} href="#"> Second </a>

          <a className={`
            text-sm hover:underline
            ${cls(isOpen, "text-[24px] border-b border-black/20 w-full pb-[15px]")}
          `} href="#"> Third </a>
        </div>
      </div>
    </nav>
  )
}