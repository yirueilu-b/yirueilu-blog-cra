import React from 'react';
import './App.css';
// import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {MuiThemeProvider} from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import {unstable_createMuiStrictModeTheme} from '@material-ui/core/styles';


import Navbar from './components/Navbar'
import LandingSection from './components/LandingSection'
import ArticleList from './components/ArticleList'

const fontFamily = [
    'Roboto',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
].join(',');

let myTheme = unstable_createMuiStrictModeTheme({
    palette: {
        type: 'dark'
    },
    typography: {
        fontFamily: fontFamily,
    },
});

const useStyles = {
    root: {
        flexGrow: 1,
        maxWidth: '100vw',
        padding: 0,
        textAlign: 'center',
    },
};


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: myTheme,
        };
        this.toggleDarkTheme = this.toggleDarkTheme.bind(this)
    }

    toggleDarkTheme = (event) => {
        let newPaletteType = this.state.theme.palette.type === "light" ? "dark" : "light";
        myTheme = unstable_createMuiStrictModeTheme({
            palette: {
                type: newPaletteType
            },
            typography: {
                fontFamily: fontFamily,
            },
        });
        this.setState({theme: myTheme});
    };

    render() {
        const {classes} = this.props;
        return (
            <MuiThemeProvider theme={myTheme}>
                <CssBaseline/>
                <Container className={classes.root}>

                    <Navbar theme={this.state.theme} onToggleDark={this.toggleDarkTheme}/>
                    <LandingSection/>
                    <ArticleList/>

                </Container>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(useStyles)(App);
