function Footer() {

    return (
        <footer>
            <div className="footer-container">
                <h3>Booker</h3>
                <p>₢Copyright 2023</p>
            </div>
            <style jsx>
                {`
                    footer {
                        background: #7BA1B0;
                        display:block;
                        width: 100%;
                    }

                    .footer-container {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        justify-content: center;
                    }

                    h3 {
                        margin-right: 10px;
                        margin: 0;
                        padding: 0;
                    }

                    p {
                        margin-left: 10px;
                    }
                `}
            </style>
        </footer>
    )
}

export default Footer