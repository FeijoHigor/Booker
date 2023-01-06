import Display from "../components/_ui/display/index"

export async function getStaticProps(context) {
    const actUrl = process.env.VERCEL_URL
    const teste = `${process.env.VERCEL_ENV == 'development' ? '' : 'https://'}${actUrl}/api/recomendation`
    /* const recomendedBooksCall = await fetch(`${process.env.VERCEL_ENV == 'development' ? '' : 'https://'}${actUrl}/api/recomendation`)

    const recomendedBooksJson = await recomendedBooksCall.json()
    const recomendedBooks = recomendedBooksJson

    return {
        props: {
            recomendedBooks
        }
    } */

    return {
        props: {
            teste
        }
    }
}

function Home(props) {

    console.log(props.teste)

    //const recomendedBooks = props.recomendedBooks
    return (
        <Display>
            <h1>Hello</h1>
            {/* <div>
                {
                    recomendedBooks.mostLiked.map((e, i) => 
                        (
                            <div>
                                {e.name}
                            </div>
                        )
                    )
                }
            </div> */}
        </Display>
    )
}

export default Home