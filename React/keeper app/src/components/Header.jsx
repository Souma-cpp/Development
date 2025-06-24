import "../App.css" ;

export default function Header(){
    return (
    <>
        <nav className="navbar">
            <div className="left">
            <h1>Keeper</h1>
            <p>The on the go keeping wallet for your messages</p>
            </div>
            <div className="right">
                <button>Get started</button>
            </div>
        </nav>
    </>
    )
}