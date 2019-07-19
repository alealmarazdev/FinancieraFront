import React from 'react';

import {Link} from 'react-router-dom'

import Navbar from '../../components/UIComponents/Navbar'
import Footer from '../../components/UIComponents/Footer'
import TitleandSubC from '../../components/UIComponents/TitleAndSubtitle'
import Chatbot from '../../components/UIComponents/Chatbot'
import PrincipalCardLeft from '../../components/Blogcomponents/PrincipalCardLeft';
import ExampleBlogCard from '../../components/Blogcomponents/exampleBlogCard';

import Brain from '../../asset/image/Blog/Brain.png'
import Learning from '../../asset/image/Blog/kidslearn.jpg'
import Smith from '../../asset/image/Blog/AdamSmith.jpg'
import Galbraith from '../../asset/image/Blog/Galbraith.jpg';
import Osterwelder from '../../asset/image/Blog/Osterwelder.jpg';
import Alejandra from '../../asset/image/Blog/Alejandra.jpg'
import David from '../../asset/image/Blog/David.jpg'
import Diana from '../../asset/image/Blog/Diana.jpg'
import Alejandro from '../../asset/image/Blog/Alejandro.jpg'

import styles from './index.module.css'

function about () {
    return (
    <div>
        <Navbar/>
        <div className="whatIs mt-5">
            <TitleandSubC title="Sobre Nosotros" subtitle="Aprende todo lo que hay detrás de nuestra página"/>
        </div>
        <div className="EducationTheory container mt-5 mb-5">
        <TitleandSubC title="Teoría del conocimiento"/>
            <div className="row">
                <div className="col-12"><p className="text-center">En FISHNANCE queremos que aprendas rápido y bien, es por eso que aplicamos las siguientes teorías de conocimiento a nuestro sistema. </p></div>
                <div className="col-12 col-md-6">
                <PrincipalCardLeft title="Desarrollo Cognitivo" bodyText="Creado por Jean Piaget" imageSRC={Brain}/>
                </div>
                <div className="col-12 col-md-6">
                <PrincipalCardLeft title="Taxonomía del Conocimiento" bodyText="Creado por Benjamin Bloom" imageSRC={Learning}/>
                </div>
            </div>
        </div>

        <div className="container mt-5">
        <TitleandSubC title="Teoría Económica"/>
            <div className="row">
                <div className="col-12"><p className="text-center">Toda la teoría que utilizamos en FISHNANCE proviene de los textos de los siguientes autores</p></div>
                <div className="col-12 col-md-4">
                <PrincipalCardLeft title="Adam Smith" imageSRC={Smith}/>
                </div>
                <div className="col-12 col-md-4">
                <PrincipalCardLeft title="Jhon K. Galbraith" imageSRC={Galbraith}/>
                </div>
                <div className="col-12 col-md-4">
                <PrincipalCardLeft title="Alexander Osterwelder" imageSRC={Osterwelder}/>
                </div>
            </div>
        </div>

        <div className="mt-5 mb-5 container">
        <TitleandSubC title="El Equipo"/>
            <div className="row">
                <div className="col-12"><p className="text-center">Conoce al equipo detrás de este sitio</p></div>
                <div className="col-6">
                <ExampleBlogCard title="Alejandra Almaráz" bodyText="Alejandra es una developer Fullstack con conocimientos del SAT y Leyes. Puesto: Product Owner, Front and Back. " imageSRC={Alejandra}/>
                <ExampleBlogCard title="Alejandro Ochoa" bodyText="Alejandro es un developer Fullstack de Kodemia. Puesto prinicpal del proyecto: Backend" imageSRC={Alejandro}/>
                </div>
                <div className="col-6">
                <ExampleBlogCard title="Diana Ramos Fusther" bodyText="Diana es una developer fullstack de Kodemia. Puesto principal del proyecto: Frontend" imageSRC={Diana}/>
                <ExampleBlogCard title="David Monranchel" bodyText="David es un developer experimentado que fungió como mentor y asesor tecnológico para el proyecto." imageSRC={David}/>
                </div>
            </div>
            </div>
        <Chatbot/>
        <Footer/>
    </div>
    )
}

export default about
