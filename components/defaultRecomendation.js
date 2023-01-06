function DefaultRecomendationCard(props) {

    const categorie = props.categorie

    return (
        <div>
            <h3>{categorie.name}</h3>
            <div>
                {
                    categorie.books.map((e, i) => (
                        <p key={e.id}>{e.name}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default DefaultRecomendationCard