import { FaCameraRetro } from "react-icons/fa"
import {About, InfoCard, SectionTitle} from "../Styles/AboutMe"

export function AboutMe() {
    return (
        <>
            <div id="about" className="container w-100">
                <About className="mt-5  bg-dark p-4">
                    <div className="text-center">
                        <InfoCard className={`bg-light infoCard`}>
                            <img src="https://avatars.githubusercontent.com/u/65309377?v=4" className="ProfilePic" alt="" />
                            <div>
                                <span className="h4 text-dark" >Luigi Cleffi</span>
                                <br />
                                <span className="h6 text-dark">Web Developer</span>
                            </div>
                        </InfoCard>
                    </div>
                    <div className="sectionDivider m-2" ></div>

                    <div className="w-100 bg-dark text-light text-left p-2">
                        <SectionTitle>Get to know me! </SectionTitle>
                        <p>My name is Luigi Cleffi, I am from Brazil. I code since I was 16 now I am 21 and still in love for coding,</p>
                        <p>I'm a photographer on my free time <FaCameraRetro />,</p>
                        <p>Currently studying coputer science 💻🚀</p>
                    </div>


                </About>
            </div>


        </>
    )
}