import React from 'react'

function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div>Sidebar</div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default AdminLayout