import Display from "../components/_ui/display/index"

export async function getStaticProps(context) {
    const actUrl = process.env.VERCEL_URL
    /* const recomendedBooksCall = await fetch(`${actUrl}/api/recomendation`)

    const recomendedBooksJson = await recomendedBooksCall.json()
    const recomendedBooks = recomendedBooksJson

    return {
        props: {
            recomendedBooks
        }
    } */

    return {
        props: {
            actUrl
        }
    }
}

function Home(props) {

    console.log(props.actUrl)

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