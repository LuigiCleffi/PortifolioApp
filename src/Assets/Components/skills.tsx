import styles from "../Styles/Skills.module.css"
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

export function Skills() {
    let programmingLanguages = [["React.js", "JavaScript ", "Bootstrap", "Tailwind", "TypeScript", "CSS"], ["Node JS", "Java", "Express JS"]]

    let starColor = { className: "stars" }
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <h4>Front-End</h4>
                        <div>
                            <h6>{programmingLanguages[0][0]} <FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /></h6>

                            <h6>{programmingLanguages[0][1]}  <FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /></h6>
                            <h6>{programmingLanguages[0][2]} <FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /></h6>

                            <h6>{programmingLanguages[0][3]}  <FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /></h6>
                            <h6>{programmingLanguages[0][4]} <FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /><FaStarHalfAlt className={styles.star} /></h6>

                            <h6>{programmingLanguages[0][5]}  <FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /></h6>

                        </div>
                    </div>
                    <div className="col">
                        <h4>Backend</h4>
                        <h6>{programmingLanguages[1][0]}  <FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /></h6>
                        <h6>{programmingLanguages[1][1]} <FaStar className={styles.star} /><FaStar className={styles.star} /><FaStarHalfAlt className={styles.star} /></h6>

                        <h6>{programmingLanguages[1][2]}  <FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /><FaStar className={styles.star} /></h6>

                    </div>

                </div>
            </div>
        </>
    )
}