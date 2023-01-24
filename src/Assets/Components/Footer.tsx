import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
export function Footer() {
    return (
        <>
            <footer className="text-center w-100 p-3">
                <section className="mb-4 text-center">
                    <a className="btn btn-outline-light btn-floating m-1"
                        href="https://github.com/LuigiCleffi"
                        role="button"
                    ><FaGithub /></a>
                    <a className="btn btn-outline-light btn-floating m-1"
                        href="https://www.instagram.com/luigi_cff"
                        role="button"
                    ><FaInstagram /></a>
                    <a className="btn btn-outline-light btn-floating m-1"
                        href="https://www.linkedin.com/in/luigicleffi/"
                        role="button"
                    ><FaLinkedin /></a>
                </section>
            </footer>
        </>
    )
}