import styles from "../Styles/Body.module.css"
import { AboutMe } from "./AboutMe"
import { Cards } from "./ProjectsCards"
import { Skills } from "./skills"
import { Footer } from "./Footer"

export function Body() {
    return (
        <>

            <div>
                <h1 className={`${styles.title} mt-4`}>Web Developer</h1>
                <h3 className={styles.title}>React | Express JS | Node</h3>
            </div>
            <div className="w-50 pt-3">
                <div className="brief-about-me text-white">
                    <p>You are reading about an experienced web developer with a year working in a company and doing part time as freelancer</p>
                    <p>I managed to create beutiful websites, one of them is a bevarage eCommerce website, backend was developed with Django and Frontend with React. </p>
                    <p>Also looking to improve my skills, you are looking for a tech lover! </p>
                </div>


            </div>

            <button className={styles.ReadMoreButton}>Read more</button>


            <div className={`${styles.sectionDivider} mt-5`} ></div>

            <div>
                <h2 className={`${styles.title} mt-4`}>Projects</h2>

                <div className="container">
                    <div className="row">
                        <div className="col col-sm">
                            <Cards title="Card title" description="lorem ipsum Dolore ullamco minim aute officia aliqua nulla ad. Sunt anim laborum amet voluptate magna veniam dolor amet exercitation sit anim sint consequat. Sit nulla culpa excepteur enim excepteur esse elit do esse est et. Dolor do pariatur fugiat tempor Lorem ex. Aliquip voluptate velit magna est do in. Nostrud velit minim id commodo. Fugiat aliqua non velit duis et sint." src="https://github.com/LuigiCleffi.png" />
                        </div>
                        <div className="col col-sm">
                            <Cards title="Card title" description="lorem ipsum Dolore ullamco minim aute officia aliqua nulla ad. Sunt anim laborum amet voluptate magna veniam dolor amet exercitation sit anim sint consequat. Sit nulla culpa excepteur enim excepteur esse elit do esse est et. Dolor do pariatur fugiat tempor Lorem ex. Aliquip voluptate velit magna est do in. Nostrud velit minim id commodo. Fugiat aliqua non velit duis et sint." src="https://github.com/LuigiCleffi.png" />
                        </div>
                        <div className="col col-sm">
                            <Cards title="Card title" description="lorem ipsum Dolore ullamco minim aute officia aliqua nulla ad. Sunt anim laborum amet voluptate magna veniam dolor amet exercitation sit anim sint consequat. Sit nulla culpa excepteur enim excepteur esse elit do esse est et. Dolor do pariatur fugiat tempor Lorem ex. Aliquip voluptate velit magna est do in. Nostrud velit minim id commodo. Fugiat aliqua non velit duis et sint." src="https://github.com/LuigiCleffi.png" />
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <Cards title="Card title" description="lorem ipsum Dolore ullamco minim aute officia aliqua nulla ad. Sunt anim laborum amet voluptate magna veniam dolor amet exercitation sit anim sint consequat. Sit nulla culpa excepteur enim excepteur esse elit do esse est et. Dolor do pariatur fugiat tempor Lorem ex. Aliquip voluptate velit magna est do in. Nostrud velit minim id commodo. Fugiat aliqua non velit duis et sint." src="https://github.com/LuigiCleffi.png" />
                            </div>
                            <div className="col">
                                <Cards title="Card title" description="lorem ipsum Dolore ullamco minim aute officia aliqua nulla ad. Sunt anim laborum amet voluptate magna veniam dolor amet exercitation sit anim sint consequat. Sit nulla culpa excepteur enim excepteur esse elit do esse est et. Dolor do pariatur fugiat tempor Lorem ex. Aliquip voluptate velit magna est do in. Nostrud velit minim id commodo. Fugiat aliqua non velit duis et sint." src="https://github.com/LuigiCleffi.png" />
                            </div>
                            <div className="col">
                                <Cards title="Card title" description="lorem ipsum Dolore ullamco minim aute officia aliqua nulla ad. Sunt anim laborum amet voluptate magna veniam dolor amet exercitation sit anim sint consequat. Sit nulla culpa excepteur enim excepteur esse elit do esse est et. Dolor do pariatur fugiat tempor Lorem ex. Aliquip voluptate velit magna est do in. Nostrud velit minim id commodo. Fugiat aliqua non velit duis et sint." src="https://github.com/LuigiCleffi.png" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className={`${styles.sectionDivider} mt-5`} ></div>

                <Skills />

                <div className={`${styles.sectionDivider} mt-5`} ></div>

                <AboutMe />

                <Footer />
            </div>

        </>
    )
}