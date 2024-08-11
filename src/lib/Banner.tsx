import Fav from "../assets/Fav.png";

export default function Banner(){
    return(
    <>
    <div className="h-[670px] justify-center flex flex-col ml-3">
    <p className="text-[#FAFF02] font-sans font-semibold text-3xl">#1 SPOTLIGHT</p>
        <p className="text-white text-6xl font-extrabold">Rurouni Kenshin: <br/>
        Meiji Kenkaku <br/>
        Romantan</p>
        <p className="text-white w-[430px] font-light text-base">In the late 19th century, as the cruel times of the Bakumatsu period came to a close, a new Meiji era marked the age of restoration for Japan. With the war over, its infamous hero Hitokiri Battousai disappeared into thin air, leaving only his legend behin... <span className="font-bold">+ MORE</span></p>
    
        <div className="flex mt-2">
        <div className=" flex justify-center p-2 w-[40px] mt-3 border-white border-solid border border-spacing-0 rounded-full">
        <img src={Fav} alt="" className="w-4 " />
        </div>
        <div className="flex items-center justify-center text-white ml-6 mt-2 border-white border border-2 w-44 text-base rounded-[14px] font-semibold">EXPLORE ANIME</div>
        </div>
    </div>
    </>
    )
}