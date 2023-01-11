function Footer() {

    return (
        <footer>
            <h3>Booker</h3>
            <p>₢Copyright 2023</p>
            <style jsx>
                {`
                    footer {
                        position: fixed;
                        bottom: 0;
                        background: #7BA1B0;
                        width: 100%;
                        color: #fff;
                        display: flex;
                        align-items: center;
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