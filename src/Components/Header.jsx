import photo from "/Photos/travel-header.webp";
export default function Header() {
    return (
        <header>
            <div className="header--wrapper">
                <img className="header--icon" src={photo} alt="Travel icon" />
                <p>my travel journal.</p>
            </div>
        </header>
    )
}