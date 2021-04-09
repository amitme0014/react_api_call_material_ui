import React from 'react';
import {Box,Typography,Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Apna custom css add karne k liye we will use makestyles
//ek variable bana lo useStyles 

const useStyles = makeStyles({
    blue: {
        color : "blue",
    } ,
});


const About = () => {
    const classes=useStyles();
    return (
        <Container maxwidt={2} disableGutters>
        <Box py={55} bgcolor="aliceblue" pt={10}>
            <Typography display="inline" variant ="h1" component="h2" color="lightslategray" align="left">About Page!</Typography >

            
            <Typography variant ="body1" component="h2" color="lightslategray" align="left" gutterBottom="true" dispaly="inline" className={classes.blue}>
                 Line 36:29:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid

                src\index.js
                Line 6:8:  'Home' is defined but never used              no-unused-vars
                Line 7:7:  'element' is assigned a value but never used  no-unused-vars

                Search for the keywords to learn more about each warning.
                To ignore, add // eslint-disable-next-line to the line before.

            </Typography>

            <Typography paragraph variant ="body2" component="h2" color="lightslategray" align="left">
                *******************************************************************************************************************888
                 Line  36:29:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid

                src\index.js
                Line 6:8:  'Home' is defined but never used              no-unused-vars
                Line 7:7:  'element' is assigned a value but never used  no-unused-vars

                Search for the keywords to learn more about each warning.
                To ignore, add // eslint-disable-next-line to the line before.

            </Typography>
            
            <Typography variant ="subtitle1" align="justify" component="h2" color="lightslategray" align="left">
                *******************************              subtitle1 aur justify********************************************************************************************************888
                 Line 36:29:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid

                src\index.js
                Line 6:8:  'Home' is defined but never used              no-unused-vars
                Line 7:7:  'element' is assigned a value but never used  no-unused-vars

                Search for the keywords to learn more about each warning.
                To ignore, add // eslint-disable-next-line to the line before.

            </Typography>

            <Typography p={6} variant ="h1" component="h2"  align="center">Heading 1!</Typography>
            <Typography p={6} variant ="h2" component="h2"  align="center">Heading 2!</Typography>
            <Typography p={6} variant ="h3" component="h2"  align="center">Heading 3!</Typography>
            <Typography p={6} variant ="h4" component="h2"  align="center">Heading 4!</Typography>
            <Typography p={6} variant ="h5" component="h2"  align="center">Heading 5!</Typography>
        </Box>
        </Container>
    )
}

export default About
 