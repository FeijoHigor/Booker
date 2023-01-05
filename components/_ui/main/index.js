function Main(props) {
    return (
        <>
            <main>
                <div>
                    {props.children}
                </div>
            </main>
            <style jsx>
                {`
                    main {
                        width: 100%;
                        height: 80%;
                        margin-top: 20px;
                        display: flex;
                        justify-content: center;
                    }

                    @media (max-height: 700px) {
                        main {
                            height: 75%;
                        }
                    }

                    @media (max-height: 500px) {
                        main {
                            height: 65%;
                        }
                    }

                    div {
                        width: 90%;
                    }
                `}
            </style>
        </>
    )
}

export default Main