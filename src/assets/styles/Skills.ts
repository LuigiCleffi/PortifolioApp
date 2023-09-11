import styled from 'styled-components'

export const SkillsContainer = styled.div`
h4, h6{
    background: ${props => props.theme['gradient-Title-subsection']};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
}
svg{
    color: rgb(255, 187, 0);
}
`

export const SkillTitle = styled.span`
font-weight: 600; 
color: ${props => props.theme['white']}
`