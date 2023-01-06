import Display from "../components/_ui/display/index"

export async function getStaticProps() {
    const recomendedBooksCall = await fetch(`${process.env.API_URL}/api/recomendation`)

    const recomendedBooksJson = await recomendedBooksCall.json()
    const recomendedBooks = recomendedBooksJson

    return {
        props: {
            recomendedBooks,
        }
    }
}

function Home(props) {

    const recomendedBooks = props.recomendedBooks

    return (
        <Display>
            <h1>Hello</h1>
            {
                recomendedBooks.mostLiked.map((e, i) => 
                    (
                        <div key={e.id}>
                            {e.name}
                        </div>
                    )
                )
            }
        </Display>
    )
}

export default Home