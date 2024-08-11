import Rectangle1 from "../assets/Rectangle 1.png"
import Vector from "../assets/Vector.png"
import Telegram from "../assets/Telegram.png"
import Vector1 from "../assets/Vector (1).png"
import Clippathgroup from "../assets/Clip path group.png"
import Fundo from "../assets/Fundo.png"
import Banner from "./Banner"

export default function Header() {
    return (

<div className="fixed top-0 left-0 w-full h-full bg-no-repeat bg-center bg-cover p-0 m-0"
      style={{ backgroundImage: `url(${Fundo})` }}>
    <div className="bg-black bg-opacity-70 p-[8px] flex items-center justify-start ">
    <span className="text-[#ffffff] flex border-none" >
        <img className="w-[60px] h-[60px] border-r-2" src={Rectangle1} alt="imagem-1" />
            <div className="flex-col pl-2">
                <h1 className="text-[20px] font-serif">aniwix</h1>
                <h2 className="text-[10px] font-serif text-base">Anime  streaming</h2>
            </div>
        <div className="relative flex-grow flex items-center justify-center pl-4">
                <input type="text" name="price" id="price" className=" block w-full font-serif text-[16px] h-10 rounded-[4px] pl-3 pr-24  text-[#000000] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset " placeholder="Search anime ...."/>
            <div className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none space-x-4">
                <img className="w-5 h-5" src={Vector} alt="vector-icon"/>
                <button className="bg-[#757373] text-white text-[12px] p-[7px] rounded-[4px]">Filter</button>
            </div>
        </div>
        <div className="flex pl-96 space-x-4 items-center">
            <div className="w-10 h-10 bg-[#5865F2] flex items-center justify-center rounded-[8px]">
                <img className ="w-8 h-6" src={Clippathgroup} alt="" />
            </div>
            <div className="w-10 h-10 bg-[#2AABEE] flex items-center justify-center rounded-full">
                <img className ="w-8 h-5 pr-1" src={Telegram} alt="" />
            </div>
            <div className="w-10 h-10 bg-[#FF4500] flex items-center justify-center         rounded-full">
                <img className ="w-7 h-7" src={Vector1} alt="" />
            </div>
        </div>
        <div className="flex pl-32 justify-center items-center space-x-10 text-xl">
            <h1>home</h1>
            <h1>contacts</h1>
            <h1>more</h1>
        </div>
        </span>
    </div>
    <div>
       
    </div>
    <Banner />
    </div>
    );
  }
  