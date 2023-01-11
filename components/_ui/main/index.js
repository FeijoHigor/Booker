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
                        min-height: 100vh;
                        display: block;
                        margin: 0;
                    }

                    div {
                        margin: auto;
                        width: 90%;
                        overflow: hidden;
                    }
                `}
            </style>
        </>
    )
}

export default Main