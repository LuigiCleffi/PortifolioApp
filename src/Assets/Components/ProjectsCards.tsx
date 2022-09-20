import styles from "../Styles/Card.module.css"
interface CardProps {
    title: string,
    description: string
    src?: string
}
export function Cards({ title, description, src }: CardProps) {
    return (
        <div className={`card ${styles.cardContainer} bg-dark`}>
            <div className={`p-3 ${styles.card}`}>

                <img src={src} alt="" className="card-img-top" />

                <div className="card-body">
                    <h5 className="card-text">{title}</h5>
                    <p className="card-text text-justify">{description}</p>
                </div>
                <div className="text-center">
                    <button className="btn text-black bg-light">Check it out !</button>
                </div>
            </div>
        </div >
    )
}