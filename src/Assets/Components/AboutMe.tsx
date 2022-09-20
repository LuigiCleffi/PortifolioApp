import { FaCameraRetro } from "react-icons/fa"
import styles from "../Styles/AboutMe.module.css"

export function AboutMe() {
    return (
        <>
            <div className="container w-100">
                <div className="mt-5  bg-dark p-4">
                    <div className="text-center">
                        <div className={`bg-light ${styles.infoCard}`}>
                            <img src="https://avatars.githubusercontent.com/u/65309377?v=4" className={styles.ProfilePic} alt="" />
                            <div>
                                <span className="h4 text-dark" >Luigi Cleffi</span>
                                <br />
                                <span className="h6 text-dark">Web Developer</span>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.sectionDivider} m-2`} ></div>

                    <div className="w-100 bg-dark text-light text-left p-2">
                        <h1 >Get to know me! </h1>
                        <p>My name is Luigi Cleffi, I am from Brazil. I code since I was 16 now I am 21 and still in love for coding,</p>
                        <p>I'm a photographer on my free time <FaCameraRetro />,</p>
                        <p>Currently studying coputer science 💻🚀</p>
                    </div>


                </div>
            </div>


        </>
    )
}