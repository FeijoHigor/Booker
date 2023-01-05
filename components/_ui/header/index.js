import styled from "styled-components"
import Link from 'next/link'

function Header() {

    return (
        <header>
            <div>
                <h2>Booker</h2>
                <Link href='/login' legacyBehavior>
                    <a>Login</a>
                </Link>
            </div>
            <style jsx>
                {`
                    header {
                        position: absolute;
                        top: 0;
                        background: #52AFD7;
                        width: 100%;
                        color: #fff;
                        height: 60px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    div {
                        display: flex; 
                        align-items: center;
                        justify-content: space-between;
                        width: 90%;
                        margin: auto;
                    }

                    h2 {
                        margin: 0;
                    }
                    
                    a {
                        color: #fff;
                        text-decoration: none;
                        font-size: 22px;
                    }
                `}
            </style>
        </header>
    )
}

export default Header