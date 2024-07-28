import './Footer.css'

function Footer() {
    return (
        <footer>
            <a href="#home">
                <span className="icon">🏠</span>
                Home
            </a>
            <a href="#search">
                <span className="icon">🔍</span>
                Search
            </a>
            <a href="#notifications">
                <span className="icon">🔔</span>
                Notifications
            </a>
            <a href="#profile">
                <span className="icon">👤</span>
                Profile
            </a>
        </footer>
    )
}

export default Footer