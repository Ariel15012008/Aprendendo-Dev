import Rectangle1 from "../assets/Rectangle 1.png"
export default function Header() {
    return (


        <header className="bg-black p-[10px] flex items-center justify-start ">
        <span className="text-[#ffffff] flex border-none" >
        <img className="w-[90px] h-[90px] border-r-2" src={Rectangle1} alt="imagem-1" />
        <div className="flex-col pl-2">
            <h1 className="text-[30px] font-serif">aniwix</h1>
            <h2 className="text-[12px] font-serif text-base">Anime  streaming</h2>
            
        </div>
        </span>
        </header>


    );
  }
  