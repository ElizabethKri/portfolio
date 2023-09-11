import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills"
import {Works} from "./layout/sections/works/Works";
import {About} from "./layout/sections/about/About";
import {Contact} from "./layout/sections/contact/Contact";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";
import {Particle} from "./components/particle/Particle";



function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <About/>
            <Contact/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;

