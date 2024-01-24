import {ReactNode} from 'react'
import {   IoSearchOutline} from "react-icons/io5";
import { Input } from '../Components/Input';
import { Inputs } from '../Components/Inputs';
import { RiSeedlingLine } from "react-icons/ri";
import { FaTerminal } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { HiPlusSmall } from "react-icons/hi2";
interface LayoutProps{
    children:ReactNode, 
    title:string
}

export function Layout({children,title}:LayoutProps){



    return(
        <div className='h-screen  flex bg-white'>


            <section className='bg-[#F1F1F1] w-1/5 flex flex-col items-center p-2 border-r border-solid border-r-[#DDDDDD]   ' >
                
                <div className='flex flex-col gap-3 h-2/5   w-full  '>
                    <Input title='Daniel Fernandes Silva'>
                        <IoCodeSlash className='w-6 '  />
                    </Input>

                    <Inputs title='Sobre mim'>
                        <IoSearchOutline className='w-6 '  />
                    </Inputs>

                    <Inputs title='Projetos'>
                        <RiSeedlingLine className='w-6 '  />
                    </Inputs>

                    <Inputs title='New Page'>
                        <HiPlusSmall className='' />
                    </Inputs>
                </div>

                

                <div className=' h-3/5  w-full'>
                    <Inputs title='Index'>
                        <FaTerminal className='font-bold'/>
                    </Inputs>
                </div>

                <div className=' h-1/4  w-full  flex items-center justify-center'>
                    <p>Feito com NextJs e Typescript</p>
                </div>
            </section>

            <section className=' flex flex-col'>

                <div className='flex   h-9'>
                    <p>{title}</p>
                </div>

                {children}
            </section>
        </div>
    )
}