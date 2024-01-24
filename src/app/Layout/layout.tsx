import {ReactNode} from 'react'
import {   IoSearchOutline} from "react-icons/io5";
import { Input } from '../Components/Input';
import { Inputs } from '../Components/Inputs';
import { RiSeedlingLine } from "react-icons/ri";
import { FaTerminal } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { HiPlusSmall } from "react-icons/hi2";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';

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
                        <SearchIcon className='w-6 '  />
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

            <section className=' flex flex-col  w-4/5'>

                <div className='flex items-center    justify-between h-9 px-5 pt-2 '>
                    <div>
                     <p>{title}</p>

                    </div>
                    
                    <div className='flex items-center gap-3'>
                       <button className=' p-2 rounded-lg hover:bg-[#f7f7f7]'>
                            Share
                       </button>

                       <button className='p-2 rounded-lg hover:bg-[#f7f7f7]'>
                            <ChatBubbleOutlineIcon className='w-5 ' />
                       </button>

                       <button className='p-2 rounded-lg hover:bg-[#f7f7f7]'>
                            <AccessTimeIcon className='w-5' />
                       </button>


                       <button className='p-2 rounded-lg hover:bg-[#f7f7f7]'>
                            <StarBorderIcon className='w-5' />
                       </button>

                       <button className='p-2 rounded-lg hover:bg-[#f7f7f7]'>
                            <MoreHorizIcon className='w-5' />
                       </button>
                    </div>
                </div>
                

                <main className=' h-full'>
                    {children}
                </main>
            </section>
        </div>
    )
}