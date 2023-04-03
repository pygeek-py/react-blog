
function Header() {
    return (
        <div>
            <div className="laptop">
                <div className="navbar">
                    <div className="bar4">
                        <div className="bar2">
                            <div className="bar1" onClick={() => {window.location = "/"}}>
                                <div className="logo">AB</div>
                                <h1 className="bar1h">AlphaBlog</h1>
                            </div>
                            <div className="bar3">
                                <h1 className="bar3h" onClick={() => {window.location = "/Uidesign"}}>UI Design</h1>
                                <h1 className="bar3h" onClick={() => {window.location = "/frontend"}}>Fronted</h1>
                                <h1 className="bar3h" onClick={() => {window.location = "/backend"}}>Backend</h1>
                                <h1 className="bar3h" onClick={() => {window.location = "/database"}}>Database</h1>
                            </div>
                        </div>
                        <input type="text" placeholder="search......" className="bari" />
                    </div>
                </div>
            </div>


            <div className="mobile">
                <center>
                    <div className="bar1m" onClick={() => {window.location = "/"}}>
                        <div className="logo">AB</div>
                        <h1 className="bar1h">AlphaBlog</h1>
                    </div>
                </center>
            </div>
            
        </div>
    );
}

export default Header;