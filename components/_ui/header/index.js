import styled from "styled-components"
import Link from 'next/link'

function Header() {

    const headerStyle = {
        position: 'absolute', 
        top: 0, 
        background: '#52AFD7', 
        width: '100%',
        color: '#fff'
    }

    const headerContentStyle = {
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        margin: 'auto'
    }

    return (
        <header style={headerStyle}>
            <div style={headerContentStyle}>
                <h2>Booker</h2>
                <Link href='/login'>
                    Login
                </Link>
            </div>
        </header>
    )
}

export default Header