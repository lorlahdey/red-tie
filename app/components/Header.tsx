import Image from "next/image";
import Bell from '../../public/assets/headerImages/Bell.png'
import Logout from '../../public/assets/headerImages/logout.png'
import BreadCrumb from '../../public/assets/headerImages/breadCrumbButton.png'
import Search from '../../public/assets/headerImages/Search-s.png'
import Copy from '../../public/assets/headerImages/⌘C.png'

const Header = () => {
    return (
        <div className="w-full bg-[#0000001A] md:h-[86px] px-[20px] py-[30px] flex flex-col md:flex-row justify-between items-center gap-y-3">
            <div className="flex gap-2"> 
                <Image
                    src={BreadCrumb}
                    alt="hero"
                />
                <p className="text-[#00000066]"> Usuários / <span className="text-[#1C1C1C]">Gestão de Pessoas</span></p>
            </div>
            <p className="font-bold leading-20px text-[16px]">McDonald's</p>
            <div className=" flex justify-between gap-3 items-center">
                <div className="rounded-[5.8px] relative">
                    <Image
                        className="absolute top-3 left-1"
                        src={Search}
                        alt="hero"
                    />
                    <Image
                        className="absolute  top-3 right-2"
                        src={Copy}
                        alt="hero"
                    />
                    <input type="text" name="" id=""  placeholder="Search" className="px-[20px] py-[5px] rounded-[5.8px] bg-[#0000000D]"/>
                </div>
                <Image
                    src={Bell}
                    alt="hero"
                />
                <Image
                    src={Logout}
                    alt="hero"
                />
                
            </div>
        </div>
    )
}

export default Header