/* eslint-disable no-unused-vars */
import { Button, Grid, Typography, Container } from '@material-ui/core'
import styled from 'styled-components'

//DEVICES__________________________________________________
const size = {
    xs: '0px',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
}

const devices = {
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
    small: `(max-width: ${size.sm})`,
    mobile: `(max-width: ${size.md})`,
    tablet: `(max-width: ${size.lg})`,
};

//LAYOUT__________________________________________________

//WRAPPER - div for the whole page_ _ _ _ _ _ _ _ _ _ _
const Wrapper = styled.div`
${({ margin }) => margin && `margin: ${margin}`};
${({ mt }) => mt && `margin-top: ${mt}`};
${({ mb }) => mb && `margin-bottom: ${mb}`};
${({ mr }) => mr && `margin-right: ${mr}`};
${({ ml }) => ml && `margin-left: ${ml}`};

${({ padding }) => padding && `padding: ${padding}`};
${({ pt }) => pt && `padding-top: ${pt}`};
${({ pb }) => pb && `padding-bottom: ${pb}`};
${({ pr }) => pr && `padding-right: ${pr}`};
${({ pl }) => pl && `padding-left: ${pl}`};

background-color: ${props => props.color || "white"};
font-size: 14px;
@media ${devices.mobile} {
    ${({ paddingMob }) => paddingMob && `padding: ${paddingMob}`};
}

@media ${devices.tablet} {
    ${({ paddingTab }) => paddingTab && `padding: ${paddingTab}`};
}
`

//SECTION - container for section_ _ _ _ _ _ _ _ _ _ _
const Section = styled(Container)`
${({ margin }) => margin && `margin: ${margin}`};
margin-top: ${props => props.mt || "40px"};
${({ mb }) => mb && `margin-bottom: ${mb}`};
${({ mr }) => mr && `margin-right: ${mr}`};
${({ ml }) => ml && `margin-left: ${ml}`};

${({ padding }) => padding && `padding: ${padding}`};
${({ pt }) => pt && `padding-top: ${pt}`};
${({ pb }) => pb && `padding-bottom: ${pb}`};
${({ pr }) => pr && `padding-right: ${pr}`};
${({ pl }) => pl && `padding-left: ${pl}`};

@media ${devices.mobile} {
    margin-top: ${props => props.mtMobile || "0"};
}
`

//GridItem - Grid for subsection_ _ _ _ _ _ _ _ _ _ _
const GridItem = styled(Grid)`
${({ margin }) => margin && `margin: ${margin}`};
${({ mt }) => mt && `margin-top: ${mt}`};
${({ mb }) => mb && `margin-bottom: ${mb}`};
${({ mr }) => mr && `margin-right: ${mr}`};
${({ ml }) => ml && `margin-left: ${ml}`};

${({ padding }) => padding && `padding: ${padding}`};
${({ pt }) => pt && `padding-top: ${pt}`};
${({ pb }) => pb && `padding-bottom: ${pb}`};
${({ pr }) => pr && `padding-right: ${pr}`};
${({ pl }) => pl && `padding-left: ${pl}`};

${({ flex }) => flex && `display: flex`};
@media ${devices.tablet} {
    ${({ directionMob }) => directionMob && `direction: ${directionMob}`};
}
@media ${devices.mobile} {
    ${({ mobHide }) => mobHide && `display: none`};
    ${({ paddingMob }) => paddingMob && `padding: ${paddingMob}`};
    ${({ marginMob }) => marginMob && `margin: ${marginMob}`};
}
`

//CONTENT__________________________________________________

//Text_ _ _ _ _ _ _ _ _ _ _
const Text = styled(Typography)`
font-family: 'Montserrat', 'Roboto', sans-serif; 
color: ${props => props.color || "black"};
text-align: ${({ align }) => align || "left"};
font-weight: ${({ weight }) => weight || "400"};
font-size: ${({ size }) => size || "14px"};

${({ margin }) => margin && `margin: ${margin}`};
${({ mt }) => mt && `margin-top: ${mt}`};
${({ mb }) => mb && `margin-bottom: ${mb}`};
${({ mr }) => mr && `margin-right: ${mr}`};
${({ ml }) => ml && `margin-left: ${ml}`};

${({ padding }) => padding && `padding: ${padding}`};
${({ pt }) => pt && `padding-top: ${pt}`};
${({ pb }) => pb && `padding-bottom: ${pb}`};
${({ pr }) => pr && `padding-right: ${pr}`};
${({ pl }) => pl && `padding-left: ${pl}`};


${({ transform }) => transform && `text-transform: ${transform}`};
${({ height }) => height && `line-height: ${height}`};
@media ${devices.mobile} {
    color: ${props => props.mobileColor || props.color || "black"};  
    font-size: ${(props) => props.sizeMob || props.size || "11px"};
    ${({ mobHide }) => mobHide && `display: none`};
}
`
//Title _ _ _ _ _ _ _ _ _ _
const Title = styled(Text)`
margin-bottom: ${props => props.mb || "1em"};
@media ${devices.mobile} {
    font-size: clamp(${props => props.sizeMob || "0.5em, 10vw, 1em"});
    text-align: ${props => props.mobileAlign || "center"};
}
`


export { Text, Title, Section, Wrapper, GridItem, devices }