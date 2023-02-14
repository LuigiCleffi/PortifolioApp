interface ScrollParam {
    section: string;
    whereToSection: string;
}
export function scrollDown(param: ScrollParam) {
    const sectionSelected = document.getElementById(param.section)
    if (sectionSelected) {
        sectionSelected.addEventListener("click", function (event) {
            event.preventDefault();
            const whereToSection = document.getElementById(param.whereToSection);
            if (whereToSection) {
                whereToSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
}
export function Navbar() {
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Luigi Cleffi 👨🏽‍💻</a>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" 
                                 onClick={()=> scrollDown({ section: "nav-projects", whereToSection: "projects" })}
                                id="nav-projects"
                                href="#projects">Projects</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}