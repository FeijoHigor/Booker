function recomendation(request, response) {

    console.log('chamado')

    const categories = [
        {
            name: 'Romance', 
            id: 1, 
            books: [
                {name: 'I love you', id: 1},
                {name: 'stay with me', id: 3},
                {name: 'what?', id: 4},
                {name: 'it was here', id: 5},
                {name: '10/10/21', id: 6},  
                {name: 'I love you', id: 7},
                {name: 'stay with me', id: 8},
                {name: 'what?', id: 9},
                {name: 'it was here', id: 10},
                {name: '10/10/21', id: 11},  
            ]
        },
        {
            name: 'Suspense', 
            id: 2, 
            books: [
                {name: 'say my name', id: 2},
                {name: 'what?', id: 4},
                {name: 'it was here', id: 5},
            ]
        }
    ]

    const dayRecomendation = [
        {name: 'what?', id: 4},
        {name: 'I love you', id: 1},
        {name: '10/10/21', id: 6},
        {name: 'it was here', id: 5},
    ]

    const date = new Date()
    const calledDate = date.toString()

    response.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate")
    
    response.json({
        calledDate,
        categories,
        dayRecomendation,
    })
}

export default recomendation