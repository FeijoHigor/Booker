import Footer from '../footer/index'
import Header from '../header/index'
import Main from '../main/index'

function Display(props) {
    return (
        <>
            <style jsx global>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;600&display=swap');

                    * {
                        margin: 0;
                        padding: 0;
                    }

                    body {
                        background: #181E20;
                        height: 100vh;
                    }

                    #__next {
                        height: inherit;
                        display: flex;
                        align-items: center;
                    }

                    html {
                        font-family: Jost;
                        height: 100vh;
                    }

                    h2 {
                        font-size: 32px;
                    }
                    
                    h3 {
                        font-size: 24px;
                    }
                `}
            </style>
            <Header />
            <Main>
                {props.children}
            </Main>
            <Footer />
        </>
    )
}

export default Display