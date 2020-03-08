import React from 'react'

function Header() {
    return (
        <div>
            <h3 style={headerStyle} className='grow shadow-50'>TodoList</h3>
        </div>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header