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

${({ color }) => color && `background-color: ${color} `};

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
    ${({ hide }) => hide === "tablet" && `display: none`};
}
@media ${devices.mobile} {
    ${({ hide }) => hide === "mobile" && `display: none`};
    ${({ paddingMob }) => paddingMob && `padding: ${paddingMob}`};
    ${({ marginMob }) => marginMob && `margin: ${marginMob}`};
    ${({ alignMob }) => alignMob && `align-items: ${alignMob}`};
    ${({ justifyMob }) => justifyMob && `justify-content: ${justifyMob}`};
    ${({ directionMob }) => directionMob && `flex-direction: ${directionMob}`};
}

@media ${devices.small} {
    ${({ hide }) => hide === "small" && `display: none`};
    ${({ paddingSmall }) => paddingSmall && `padding: ${paddingSmall}`};
    ${({ marginSmall }) => marginSmall && `margin: ${marginSmall}`};
    ${({ alignSmall }) => alignSmall && `align-items: ${alignSmall}`};
    ${({ justifySmall }) => justifySmall && `justify-content: ${justifySmall}`};
    ${({ directionSmall }) => directionSmall && `flex-direction: ${directionSmall}`};
}
`

//CONTENT__________________________________________________

//Text_ _ _ _ _ _ _ _ _ _ _
const Text = styled(Typography)`
font-family: 'Roboto', sans-serif; 
${({ color }) => color && `color: ${color}`};
${({ align }) => align && `text-align: ${align}`};
${({ weight }) => weight && `font-weight: ${weight}`};
${({ size }) => size && `font-size: ${size}`};

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
    ${({ colorMob }) => colorMob && `color: ${colorMob}`};
    ${({ sizeMob }) => sizeMob && `font-size: ${sizeMob}`};
    ${({ alignMob }) => alignMob && `text-align: ${alignMob}`};
    ${({ heightMob }) => heightMob && `line-height: ${heightMob}`};
}
`
//Title _ _ _ _ _ _ _ _ _ _
const Title = styled(Text)`
font-family: 'Montserrat', 'Roboto', sans-serif; 
margin-bottom: ${props => props.mb || "1em"};
`


export { Text, Title, Section, Wrapper, GridItem, devices }