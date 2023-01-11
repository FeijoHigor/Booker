function RecomendedBookBanner(props) {
    return (
        <div className={`slide ${props.first ? 's1' : ''}`}>
            <h3>{props.bookName}</h3>
            <style jsx>
                {`
                    div {
                        background-color: #D9D9D9;
                        width: 25%;
                        height: 300px;
                    }

                `}
            </style>
        </div>
    )
}

function DayRecomendationCard(props) {

    const books = props.books

    return (
        <>
            <h2>Recomendação do dia</h2>
            <div className="slides">
                {
                    books.map((e, i) => (
                        <RecomendedBookBanner first={i == 0 ? true : false} key={e.id} bookName={e.name} />
                    ))
                }   
            </div>
            <style jsx>
                {`
                    div {
                        display: flex;
                    }
                `}
            </style>
        </>
    )
}

export default DayRecomendationCard