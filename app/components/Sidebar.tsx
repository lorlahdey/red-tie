'use client'
import { useState } from 'react';
import Image from "next/image";
import Logo from '../../public/assets/sidebarImages/LogoRedTie1.png'
import { ArrowDown2, House2, } from "iconsax-react";

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState<number | null>(null);

    const handleItemClick = (index: number) => {
        setActiveItem(index);
    };
    return (
        <div className="w-[245px] bg-[#D91D1D] h-screen text-white p-[20px]">
            <Image
                className="mx-auto mb-[25px]"
                src={Logo}
                alt="hero"
            />
            <div className="leading-[14.58px]">
                <p className="text-[9px] text-[#FFFFFFA1] ">Bem-vindo,</p>
                <p className="text-[13px]">Luan Bani</p>
            </div>
            <div className="leading-[14.58px] text-[10.21px] font-semibold container mx-auto">
                <ul className="mt-[40px] list-disc list-inside">
                    <li className="mb-[10px]">Home</li>
                    <li>Cadastros</li>
                </ul>
                <div  className="mt-[40px] ">
                    <p className="text-[#FFFFFF66] mb-[10px]">Dashboards</p>
                    <ul>
                        <li className={`mb-[10px] relative flex gap-[10px] pl-[26px] rounded-[5.83px] py-[5px] ${activeItem === 0 ? 'bg-[#0000000D]' : '' }`}  onClick={() => handleItemClick(0)} >
                            <div className={`w-[2.92px] h-[11.67px] absolute left-0 top-[7px] bg-[#C6C6C67D] rounded-[2.19px] ${activeItem === 0 ? 'block' : 'hidden'}`}></div>
                            <ArrowDown2 size="14" color="#00000033" className="hidden" variant="TwoTone"/>
                            <House2 size="14" color="#FFFFFF" variant="TwoTone"/>
                            <span>Home</span>
                        </li>
                        <li className={`mb-[10px] relative flex gap-[10px] rounded-[5.83px] py-[5px] ${activeItem === 1 ? 'bg-[#0000000D]' : ''}`}  onClick={() => handleItemClick(1)} >
                            <div className={`w-[2.92px] h-[11.67px] absolute left-0 top-[7px] bg-[#C6C6C67D] rounded-[2.19px] ${activeItem === 1 ? 'block' : 'hidden'}`}></div>
                            <ArrowDown2 size="14" color="#00000033" className={`block ${activeItem === 1 ? 'ml-[7px]' : ''}`}variant="TwoTone"/>
                            <House2 size="14" color="#FFFFFF" variant="TwoTone"/>
                            <span>Cadastro</span>
                        </li>
                        <li className={`mb-[10px] relative flex gap-[10px] pl-[26px] rounded-[5.83px] py-[5px] ${activeItem === 2 ? 'bg-[#0000000D]' : ''}`}  onClick={() => handleItemClick(2)} >
                            <div className={`w-[2.92px] h-[11.67px] absolute left-0 top-[7px] bg-[#C6C6C67D] rounded-[2.19px] ${activeItem === 2 ? 'block' : 'hidden'}`}></div>
                            <ArrowDown2 size="14" color="#00000033" className="hidden" variant="TwoTone"/>
                            <House2 size="14" color="#FFFFFF" variant="TwoTone"/>
                            <span>Categoria</span>
                        </li>
                        <li className={`mb-[10px] relative flex gap-[10px] pl-[26px] rounded-[5.83px] py-[5px] ${activeItem === 3 ? 'bg-[#0000000D]' : ''}`}  onClick={() => handleItemClick(3)} >
                            <div className={`w-[2.92px] h-[11.67px] absolute left-0 top-[7px] bg-[#C6C6C67D] rounded-[2.19px] ${activeItem === 3 ? 'block' : 'hidden'}`}></div>
                            <ArrowDown2 size="14" color="#00000033" className="hidden" variant="TwoTone"/>
                            <House2 size="14" color="#FFFFFF" variant="TwoTone"/>
                            <span>Produtos</span>
                        </li>
                        <li className={`mb-[10px] relative flex gap-[10px] pl-[26px] rounded-[5.83px] py-[5px] ${activeItem === 4 ? 'bg-[#0000000D]' : ''}`}  onClick={() => handleItemClick(4)} >
                            <div className={`w-[2.92px] h-[11.67px] absolute left-0 top-[7px] bg-[#C6C6C67D] rounded-[2.19px] ${activeItem === 4 ? 'block' : 'hidden'}`}></div>
                            <ArrowDown2 size="14" color="#00000033" className="hidden" variant="TwoTone"/>
                            <House2 size="14" color="#FFFFFF" variant="TwoTone"/>
                            <span>Usuários</span>
                        </li>
                        <li className={`mb-[10px] relative flex gap-[10px] pl-[26px] rounded-[5.83px] py-[5px] ${activeItem === 5 ? 'bg-[#0000000D]' : ''}`}  onClick={() => handleItemClick(5)} >
                            <div className={`w-[2.92px] h-[11.67px] absolute left-0 top-[7px] bg-[#C6C6C67D] rounded-[2.19px] ${activeItem === 5 ? 'block' : 'hidden'}`}></div>
                            <ArrowDown2 size="14" color="#00000033" className="hidden" variant="TwoTone"/>
                            <House2 size="14" color="#FFFFFF" variant="TwoTone"/>
                            <span>Estabelecimentos</span>
                        </li>
                    </ul>
                    <ul className="mt-[40px]">
                        <li className={`mb-[10px] relative flex gap-[10px] rounded-[5.83px] py-[5px] ${activeItem === 6 ? 'bg-[#0000000D]' : ''}`}  onClick={() => handleItemClick(6)} >
                            <div className={`w-[2.92px] h-[11.67px] absolute left-0 top-[7px] bg-[#C6C6C67D] rounded-[2.19px] ${activeItem === 6 ? 'block' : 'hidden'}`}></div>
                            <ArrowDown2 size="14" color="#00000033" className={`block ${activeItem === 6 ? 'ml-[7px]' : ''}`} variant="TwoTone"/>
                            <House2 size="14" color="#FFFFFF" variant="TwoTone"/>
                            <span>Relatórios</span>
                        </li>
                        <li className={`mb-[10px] relative flex gap-[10px] pl-[26px] rounded-[5.83px] py-[5px] ${activeItem === 7 ? 'bg-[#0000000D]' : ''}`}  onClick={() => handleItemClick(7)} >
                            <div className={`w-[2.92px] h-[11.67px] absolute left-0 top-[7px] bg-[#C6C6C67D] rounded-[2.19px] ${activeItem === 7 ? 'block' : 'hidden'}`}></div>
                            <ArrowDown2 size="14" color="#00000033" className="hidden" variant="TwoTone"/>
                            <House2 size="14" color="#FFFFFF" variant="TwoTone"/>
                            <span>Relatório De Vendas</span>
                        </li>
                        <li className={`mb-[10px] relative flex gap-[10px] pl-[26px] rounded-[5.83px] py-[5px] ${activeItem === 8 ? 'bg-[#0000000D]' : ''}`}  onClick={() => handleItemClick(8)} >
                            <div className={`w-[2.92px] h-[11.67px] absolute left-0 top-[7px] bg-[#C6C6C67D] rounded-[2.19px] ${activeItem === 8 ? 'block' : 'hidden'}`}></div>
                            <ArrowDown2 size="14" color="#00000033" className="hidden" variant="TwoTone"/>
                            <House2 size="14" color="#FFFFFF" variant="TwoTone"/>
                            <span>Forma De Recebimentos</span>
                        </li>
                        <li className={`mb-[10px] relative flex gap-[10px] pl-[26px] rounded-[5.83px] py-[5px] ${activeItem === 9 ? 'bg-[#0000000D]' : ''}`}  onClick={() => handleItemClick(9)} >
                            <div className={`w-[2.92px] h-[11.67px] absolute left-0 top-[7px] bg-[#C6C6C67D] rounded-[2.19px] ${activeItem === 9 ? 'block' : 'hidden'}`}></div>
                            <ArrowDown2 size="14" color="#00000033" className="hidden" variant="TwoTone"/>
                            <House2 size="14" color="#FFFFFF" variant="TwoTone"/>
                            <span>Forma De Balcão</span>
                        </li>
                        <li className={`mb-[10px] relative flex gap-[10px] pl-[26px] rounded-[5.83px] py-[5px] ${activeItem === 10 ? 'bg-[#0000000D]' : ''}`}  onClick={() => handleItemClick(10)} >
                            <div className={`w-[2.92px] h-[11.67px] absolute left-0 top-[7px] bg-[#C6C6C67D] rounded-[2.19px] ${activeItem === 10 ? 'block' : 'hidden'}`}></div>
                            <ArrowDown2 size="14" color="#00000033" className="hidden" variant="TwoTone"/>
                            <House2 size="14" color="#FFFFFF" variant="TwoTone"/>
                            <span>Log De Entrada Na Mesa</span>
                        </li>
                        <li className={`mb-[10px] relative flex gap-[10px] pl-[26px] rounded-[5.83px] py-[5px] ${activeItem === 11 ? 'bg-[#0000000D]' : ''}`}  onClick={() => handleItemClick(11)} >
                            <div className={`w-[2.92px] h-[11.67px] absolute left-0 top-[7px] bg-[#C6C6C67D] rounded-[2.19px] ${activeItem === 11 ? 'block' : 'hidden'}`}></div>
                            <ArrowDown2 size="14" color="#00000033" className="hidden" variant="TwoTone"/>
                            <House2 size="14" color="#FFFFFF" variant="TwoTone"/>
                            <span>Pedidos</span>
                        </li>
                        <li className={`mb-[10px] relative flex gap-[10px] pl-[26px] rounded-[5.83px] py-[5px] ${activeItem === 12 ? 'bg-[#0000000D]' : ''}`}  onClick={() => handleItemClick(12)} >
                            <div className={`w-[2.92px] h-[11.67px] absolute left-0 top-[7px] bg-[#C6C6C67D] rounded-[2.19px] ${activeItem === 12 ? 'block' : 'hidden'}`}></div>
                            <ArrowDown2 size="14" color="#00000033" className="hidden" variant="TwoTone"/>
                            <House2 size="14" color="#FFFFFF" variant="TwoTone"/>
                            <span>Estoque</span>
                        </li>
                    </ul>
                </div>
                </div>
        </div>
    )
}

export default Sidebar