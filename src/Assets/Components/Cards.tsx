import { Card, CardContainer } from "../Styles/Card"
import {CardBody } from "../Styles/Card"
import {Code} from "phosphor-react";
interface CardProps {
    title: string,
    description: string
    src?: string
}

export function Cards({ title, description, src }: CardProps) {
    return (
    <CardContainer className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-4 my-4" >
        <CardBody className="card text-bg-secondary" >
            <Card className="p-3">
                <img src={src} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-text">{title}</h5>
                    <p className="card-text text-justify">{description}</p>
                </div>
                <div className="text-center buttons">
                    <button type="button" className="btn text-light bg-dark">Check it out !</button>
                    <Code size={24}/>
                </div>
            </Card>
        </CardBody >
        </CardContainer>
    )
}