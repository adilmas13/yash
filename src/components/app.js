import Router from "preact-router";
import Home from "./home";
import AboutMe from "./about-me";
import Adverts from "./adverts";
import Arts from "./arts";
import Awards from "./awards";
import {useEffect, useState} from "preact/hooks";
import {setPageNo} from "../dataSource/home";
import Loader from "./loader";
import {refreshLoaderTime, shouldShowLoader} from "../dataSource/misc";

const App = () => {
    const [showLoader, setShowLoader] = useState(shouldShowLoader());
    const [loaded, setLoaded] = useState(!showLoader);

    useEffect(() => setPageNo(0), []);

    const routerComponent = <Router>
        <Home default path="home" />
        <AboutMe path="about-me" />
        <Adverts path="adverts" />
        <Arts path="arts" />
        <Awards path="awards" />
    </Router>;

    const loaderComponent = <Loader onComplete={() => {
        refreshLoaderTime();
        setLoaded(true);
        setShowLoader(false);
    }} />;

    return showLoader
        ? loaderComponent
        : loaded ? routerComponent : loaderComponent
}


export default App;
