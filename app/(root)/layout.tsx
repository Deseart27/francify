import SideBar from '@/components/shared/Sidebar'
import React from 'react'
import { Toaster } from '@/components/ui/toaster'


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="root">
            
            <SideBar />
            <div className="root-container">
                <div className="wrapper">
                    {children}
                </div>

            </div>
        <Toaster/>
        </div>
    )
}

export default Layout
