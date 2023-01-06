function DayRecomendationCard(props) {

    const book = props.books

    return (
        <div>
            <h2>Recomendação do dia</h2>
            {
                book.map((e, i) => (
                    <h3 key={e.id}>{e.name}</h3>
                ))
            }
        </div>
    )
}

export default DayRecomendationCard