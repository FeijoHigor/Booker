function Footer() {

    const footerStyle = {
        position: 'absolute', 
        bottom: 0, 
        background: '#7BA1B0', 
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    }

    return (
        <footer style={footerStyle}>
            <h2 style={{marginRight: 10}}>Booker</h2>
            <p style={{marginLeft: 10}}>₢Copyright 2023</p>
        </footer>
    )
}

export default Footer