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
                        display: flex;
                        justify-content: center;
                        margin: 70px 0 30px 0;
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
                        overflow: hidden;
                    }
                `}
            </style>
        </>
    )
}

export default Main