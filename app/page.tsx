'use client'
import { useState } from "react";
import Image from "next/image";
import {Select, SelectItem, Button, Input} from "@nextui-org/react";
import { ExportCurve } from "iconsax-react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function Home() {
    const filterArray = [
        {
            value: '1',
            label:'Estabelecimento', 
        },
        {
            value: '2',
            label:'Tipo De Usuário', 
        },
        {
            value: '3',
            label: 'Status'
        }
    ]
    const [searchValue, setSearchValue] = useState('');
    console.log(searchValue)
    
    return (
        <main className="flex h-screen">
            <Sidebar />
            <div className="w-full">
                <Header />
                <div className="p-[30px]">
                    <div>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Select 
                            placeholder="Select Filter"
                            className="max-w-xs" 
                        >
                            {filterArray.map((filter) => (
                            <SelectItem key={filter.value} value={filter.value}>
                                {filter.label}
                            </SelectItem>
                            ))}
                        </Select>
                        </div>
                    </div>
                    <div>
                       
                    <div className=" mt-[40px] flex flex-wrap gap-4 items-center h-[28px]  md:justify-end">
                        <div>

                        <Input
                            placeholder="Procurar Usuários"
                            value={searchValue}
                            onValueChange={setSearchValue}
                            classNames={{ 
                                input: ["bg-transparent", "border border-[#3A35414A] rounded-[5px] text-[10px] leading-[24px] tracking-[0.15px] ps-[10px]"],
                                innerWrapper:['bg-transparent p-0'],
                                inputWrapper:['bg-transparent hover:bg-transparent focus:bg-transparent shadow-none hover:shadow-none p-0',]
                            }}
                        />
                        </div>
                        <Button className="bg-[#2684FF] h-[28px] text-white font-medium text-[10px] leading-[24px] tracking-[0.4px] rounded-[5px]">
                            ADD USER
                        </Button>    
                        <Button color="danger" variant="bordered" className="h-[28px] rounded-[5px] border-[#3A35414A] text-[#8A8D93] font-medium text-[8px] leading-[24px]" startContent={<ExportCurve size="14" color="#8A8D93"/>}>
                            Exportar
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
