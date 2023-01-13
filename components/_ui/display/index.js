import Footer from '../footer/index'
import Header from '../header/index'
import Main from '../main/index'

function Display(props) {
    return (
        <>
            <style jsx global>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');

                    * {
                        margin: 0;
                        padding: 0;
                    }

                    body {
                        background: #181E20;
                    }

                    #__next {
                        margin: 0;
                    }

                    html {
                        font-family: Jost;
                        color: #d9d9d9;
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