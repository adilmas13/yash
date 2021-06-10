import Router from "preact-router";
import Home from "./home";
import AboutMe from "./about-me";
import Adverts from "./adverts";
import Arts from "./arts";
import Awards from "./awards";
import Loader from "./loader";
import {useEffect} from "preact/hooks";
import {setPageNo} from "../dataSource/home";


const App = () => {

    useEffect(() => {
        window.onbeforeunload = () => setPageNo(0);
    }, [])

    return <Router>
        <Home default path="home" />
        <AboutMe path="about-me" />
        <Adverts path="adverts" />
        <Arts path="arts" />
        <Awards path="awards" />
        <Loader path="loader" />
    </Router>
}


export default App;
