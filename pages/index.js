import Display from "../components/_ui/display/index"
import DayRecomendationCard from "../components/dayRecomendationCard"
import DefaultRecomendation from "../components/defaultRecomendation"

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
            <DayRecomendationCard books={recomendedBooks.dayRecomendation} />
            {/* {
                recomendedBooks.categories.map((e, i) => (
                    <DefaultRecomendation categorie={e} key={e.id} />
                ))
            } */}
        </Display>
    )
}

export default Home