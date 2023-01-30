import styled from 'styled-components';

export const CardContainer = styled.div`
@media(max-width: 600px){
    margin-bottom: 40px;
}
`


export const CardBody = styled.div`
display: flex;
background-color: black;
color: ${props => props.theme['white']};
transition: 0.3s;
overflow: hidden;
&:hover{
    box-shadow: 5px 5px 10px 2px rgba(233, 233, 233, 0.245);
    transform: scale(1.1);
}
&:active{
    border: 1px solid "#429B46";
}

image{
    flex: 1;
}
p{
    text-align: justify;
    text-justify: inter-word;
}

button{
    transition: 0.2s;
    &:hover{
        transform: scale(1.1);
    } 
}
`
export const Card = styled.div`
`