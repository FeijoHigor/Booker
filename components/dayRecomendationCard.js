function RecomendedBookBanner(props) {
    return (
        <div>
            <h3>{props.bookName}</h3>
            <style jsx>
                {`
                    div {
                        background-color: #D9D9D9;
                        width: 25%;
                        height: 300px;
                    }

                    h3 {
                        color: #181E20;
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
            <div>
                {
                    books.map((e, i) => (
                        <RecomendedBookBanner key={e.id} bookName={e.name} />
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