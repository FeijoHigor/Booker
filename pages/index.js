import Display from "../components/_ui/display/index"

export async function getStaticProps(context) {
    const actUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    const recomendedBooksCall = await fetch(`${actUrl}/api/recomendation`)

    const recomendedBooksJson = await recomendedBooksCall.json()
    const recomendedBooks = recomendedBooksJson

    return {
        props: {
            recomendedBooks
        }
    }
}

function Home(props) {

    const recomendedBooks = props.recomendedBooks
    return (
        <Display>
            <h1>Hello</h1>
            <div>
                {
                    recomendedBooks.mostLiked.map((e, i) => 
                        (
                            <div>
                                {e.name}
                            </div>
                        )
                    )
                }
            </div>
        </Display>
    )
}

export default Home