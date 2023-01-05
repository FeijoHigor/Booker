import Footer from '../footer/index'
import Header from '../header/index'

function Display() {
    return (
        <>
            <style jsx global>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;600&display=swap');
                    body {
                        margin: 0;
                        background: #181E20;
                    }

                    html {
                        font-family: Jost;
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
            <Footer />
        </>
    )
}

export default Display