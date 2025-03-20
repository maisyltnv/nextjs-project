import React from 'react';
import MainHeader from './MainHeader';

interface MainLayoutProps {
    children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className='bg-gray-200 w-full min-h-screen'>
            <MainHeader />
            <h1>Main Layout</h1>
            <hr />
            <main>{children}</main>
        </div>
    );
}

export default MainLayout;