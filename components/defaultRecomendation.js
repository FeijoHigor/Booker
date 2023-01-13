function BookCard(props) {

    const bookData = props.bookData

    return (
        <li>
            <div className="bookCover">

            </div>
            <p>{bookData.name}</p>
            <style jsx>
                {`
                    div.bookCover {
                        width: 100%;
                        height: 240px;
                        background: #d9d9d9;
                    }

                    .bookCover:hover {
                        transition: 0.2;
                        background: #c1c1c1;
                    }

                    li {
                        list-style: none;
                        padding: 0 20px;
                        cursor: pointer;
                        width: 180px;
                        max-width: 280px;
                        min-width: 180px;
                    }

                    p {
                        font-size: 20px;
                        font-weight: 500;
                    }
                `}
            </style>
        </li>
    )
}

function DefaultRecomendationCard(props) {

    const categorie = props.categorie

    return (
        <div>
            <h3>{categorie.name}</h3>
            <ul className="testing">
                {
                    categorie.books.map((e, i) => (
                        <BookCard key={e.id} bookData={e}></BookCard>
                    ))
                }
            </ul>
            <style jsx>
                {`
                    ul {
                        display: flex;
                        overflow-x: scroll;
                        overflow-y: hidden;
                    }

                    ul::-webkit-scrollbar {
                        width: 3px;
                        height: 10px;
                        padding: 20px;
                    }

                    ul::-webkit-scrollbar-thumb {
                        background: #d9d9d9;
                        border-top: 4px solid #181E20;
                        border-bottom: 4px solid #181E20;
                        border-radius: 1px;
                    }

                    ul::-webkit-scrollbar-thumb:hover {
                        background: #c1c1c1;
                    }

                    ul::-webkit-scrollbar-button:single-button {
                        background: #d9d9d9;
                    }

                    ul::-webkit-scrollbar-button:single-button:hover {
                        background: #c1c1c1;
                    }

                    ul::-webkit-scrollbar-button:single-button:horizontal:decrement {
                        border-radius: 5px 0 0 5px;
                    }

                    ul::-webkit-scrollbar-button:single-button:horizontal:increment {
                        border-radius: 0 5px 5px 0; 
                    }
                `}
            </style>
        </div>
    )
}

export default DefaultRecomendationCard