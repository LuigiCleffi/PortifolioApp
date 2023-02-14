import styled, { css } from 'styled-components';
export const AboutContainer = styled.div`

h1{
background: ${props => props.theme['gradient-Titles']};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800; 
    font-size: 6rem;
}
h3 {
    color: ${props => props.theme['white']};
    font-size: 2rem; 
}
p{
    font-weight: 200;
}

display: flex;
flex-direction: column;
flex: 1;
width: 100%;


@media(max-width: 600px){
    h1{
        font-weight: 400; 
    font-size: 3rem;
}
h3
{
    font-size: 1rem;
    font-weight: 400; 
}
}
`

export const ReadMoreButton = styled.button`
    border: none;   
    width: 10rem;
        height: 3rem;
        border-radius: 18rem;
        color: rgb(255, 255, 255);
        background: ${props => props.theme['gradient-components']};
        transition: all 0.4s ease 0s;
        font-size: 16px;
        font-weight: 600;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: none;
        transition: width 0.3s;
    
&:hover{
    width: 300px;
    background-color: ${props => props.theme['gradient-components-hover']};
}
`
export const SectionDivider = styled.div`
&{
    width: 4rem;
    height: 0.375rem;
    border-radius: 0.625rem;
    background: ${props => props.theme['gradient-components']};
}
`

export const ProjectsSection = styled.div`
    h2{
        background: ${props => props.theme['gradient-Titles']};
        font-size: 3rem; 
        font-weight: bold; 
        -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`

