function RecomendedBookBanner(props) {
    return (
        <div className={`slide ${props.first ? 's1' : ''}`}>
            <h3>{props.bookName}</h3>
            <style jsx>
                {`
                    div {
                        background-color: #D9D9D9;
                        width: 100%;
                        height: 300px;
                        transition: 0.6s;
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
                        <>
                            <input type={'radio'} name={'slide'} id={`slide${i}`} checked={i == 0 ? true : false}  />
                            <RecomendedBookBanner first={i == 0 ? true : false} key={e.id} bookName={e.name} />
                        </>
                    ))
                }
                <div className="navigation">
                    {
                        books.map((e, i) => (
                            <label className="navigation-btn" htmlFor={`slide${i}`}></label>
                        ))  
                    }
                </div>
                
                <style jsx>
                    {`
                        div.slides {
                            display: flex;
                            max-height: 300px;
                            width: 400%;
                            overflow: hidden;
                            position: relative;
                        }

                        input {
                            display: none;
                        }

                        div.navigation {
                            position: absolute;
                            bottom: 15px;
                            left: 12.5%;
                            transform: translate(-50%);
                            display: flex;
                        }

                        label.navigation-btn {
                            width: 15px;
                            height: 15px;
                            border: 2px solid #181E20;
                            border-radius: 50%;
                            cursor: pointer;
                            margin: 6px;
                        }

                        label.navigation-btn:hover {
                            transition: 0.2s;
                            background: #181E20;
                        }

                        #slide0:checked ~ label.navigation-btn {
                            background: #000;
                        }

                        #slide1:checked ~ label.navigation-btn {
                            background-color: #000;
                        }
                    `}
                </style>
            </div>
        </>
    )
}

export default DayRecomendationCard