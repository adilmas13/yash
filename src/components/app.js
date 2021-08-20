import Router from "preact-router";
import Home from "./home";
import AboutMe from "./about-me";
import Adverts from "./adverts";
import Arts from "./arts";
import Awards from "./awards";
import {useEffect, useState} from "preact/hooks";
import {setPageNo} from "../dataSource/home";
import Loader from "./loader";


const App = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => setPageNo(0), [])

    return loaded
        ? <Router>
            <Home default path="home" />
            <AboutMe path="about-me" />
            <Adverts path="adverts" />
            <Arts path="arts" />
            <Awards path="awards" />
        </Router>
        : <Loader onComplete={() => setLoaded(true)} />
}


export default App;
