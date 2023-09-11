import styled from 'styled-components'

export const About = styled.div`
.ProfilePic{
    height: 8rem;
    border-radius: 2.5rem;
    background: ${props => props.theme['gradient-components']};
    padding: 3px;
}


span{
    color: white;
}


.sectionDivider{
    width: 4rem;
    height: 0.375rem;
    border-radius: 0.625rem;
    background: ${props => props.theme['gradient-components']};
}
`
export const SectionTitle = styled.p`
    background: ${props => props.theme['gradient-Titles']};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    font-size: var(--title-size);
    @media(max-width: 600px){
        font-size: 2rem;
    }

`


export const AboutSection = styled.div`
@media(max-width: 600px){
    width: 100% !important;
}
`

export const InfoCard = styled.div`
    border: 5px solid;
    border-radius: 50px 0;
   display: inline-block;
    width: 30%;
    padding: 2rem;

@media(max-width: 600px){
        width: 100%;
}
`


export const Bio = styled.div`

`