import React from 'react';
import MainHeader from './MainHeader';
import { AiOutlineHome } from 'react-icons/ai';
import Link from 'next/link';
import { GrProjects } from 'react-icons/gr';
import { FaAngleRight } from 'react-icons/fa';

interface MainLayoutProps {
    children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className='bg-gray-200 w-screen min-h-screen'>
            <MainHeader />


            <div className='flex justify-start items-start'>
                <aside className='bg-white rounded-lg w-60'>
                    <ul>
                        <li className='flex jusitfy-start items-center p-4 hover:bg-gray-100 gap-3'>
                            <AiOutlineHome className='inline-block' />
                            <Link href="/">Home</Link>
                        </li>
                        <li className='flex jusitfy-start items-center p-4 hover:bg-gray-100 gap-3'>
                            <GrProjects className='mr-2' />
                            <h3 className='flex-1'>Projects</h3>
                            <FaAngleRight />
                        </li>
                    </ul>
                </aside>
                <main className='flex-1'>{children}</main>
            </div>

        </div>
    );
}

export default MainLayout;