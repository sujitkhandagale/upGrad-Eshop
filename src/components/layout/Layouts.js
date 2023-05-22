import React from 'react'
import Header from '../header/Header'

function Layouts({ children }) {
    return (
        <div>
            <Header />
            <main>
            {children}
            </main>
           

        </div>
    )
}

export default Layouts
