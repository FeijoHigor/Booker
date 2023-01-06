function recomendation(request, response) {

    console.log('chamado')

    const mostLiked = [
        {name: 'I love you', id: 1},
        {name: 'say my name', id: 2},
        {name: 'stay with me', id: 3},
        {name: 'what?', id: 4},
        {name: 'it was here', id: 5},
    ]

    const mostRead = [
        {name: 'what?', id: 4},
        {name: 'I love you', id: 1},
        {name: 'it was here', id: 5},
        {name: 'stay with me', id: 3},
        {name: 'say my name', id: 2},
    ]

    const dayRecomendation = [
        {name: 'what?', id: 4},
        {name: 'I love you', id: 1},
        {name: '10/10/21', id: 6},
    ]

    response.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate")
    
    response.json({
        mostLiked,  
        mostRead,
        dayRecomendation
    })
}

export default recomendation