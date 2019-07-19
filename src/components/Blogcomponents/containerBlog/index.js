import React from 'react';

import PrincipalCardLeft from '../PrincipalCardLeft/index'
import MiniExampleBlogCard from '../minExampleBlogCard/index'
import ExampleBlogCard from '../exampleBlogCard/index'

import Block from '../../../asset/image/Blog/block.png'
import Junta from '../../../asset/image/Blog/juntadenegocios.jpg'
import FkUp from '../../../asset/image/Blog/open-mic.jpg'
import Boat from '../../../asset/image/Blog/boat.jpeg'
import Girl from '../../../asset/image/Blog/girltable.png'


function ContainerBlog () {
    return (
       <div className="container-fluid">
           <div className="row">
               <div className="col-12 col-md-6">
                   <PrincipalCardLeft imageSRC={Block} alt="Blockchain" title="Tendencia StarUpper: Blockchain + IA" bodyText="" lastUpdate="Hace unos minutos"/>
               </div>
               <div className="col-12 col-md-6">
                   <ExampleBlogCard imageSRC={Junta} alt="Junta" title="RH: ¿Cómo saber si estás contratando a la persona indicada?" lastUpdate="Hace 4 horas" />
                   <ExampleBlogCard imageSRC={FkUp} alt="FuckupNight" title="#FuckUpStory: Cómo J$%i mi vida al renunciar y emprender" bodyText="" lastUpdate="Hace unos minutos" />
                   <ExampleBlogCard imageSRC={Girl} alt="Blockchain" title="20 Tips para tus finanzas personales" bodyText="" lastUpdate="Hace unos minutos" />
                   <ExampleBlogCard imageSRC={Boat} alt="Blockchain" title="Finanzas para tiempos ligeros" bodyText="" lastUpdate="Hace unos minutos" />
               </div>
               <hr/>
               <div className="col-12 col-md-8 mt-5">
                   <ExampleBlogCard imageSRC={Junta} alt="Junta" title="RH: ¿Cómo saber si estás contratando a la persona indicada?" lastUpdate="Hace 4 horas" />
                   <ExampleBlogCard imageSRC={FkUp} alt="FuckupNight" title="#FuckUpStory: Cómo J$%i mi vida al renunciar y emprender" bodyText="" lastUpdate="Hace unos minutos" />
                   <ExampleBlogCard imageSRC={Girl} alt="Blockchain" title="20 Tips para tus finanzas personales" bodyText="" lastUpdate="Hace unos minutos" />
                   <ExampleBlogCard imageSRC={Boat} alt="Blockchain" title="Finanzas para tiempos ligeros" bodyText="" lastUpdate="Hace unos minutos" />
               </div>
               <aside className="w-25">
                <h3 /* className="text-center" */>Populares del Foro</h3>
                <hr/>
                <MiniExampleBlogCard title="Hackapalooza: ¡Estoy buscando equipo!" bodyText="IBM tiene un hackathon llamado Hackapalooza, va a ser en Guadalajara y estoy buscando alguien que quiera venir conmigo. El proyecto lo desarrollamos ese mismo fin de semana. #ChallengeON" lastUpdate="34 comentarios" />
                <MiniExampleBlogCard title="¿Es necesario contratar una línea de teléfono fijo?" bodyText="Apenas comencé mi empresa, somos una empresa chica de 5 personas, y la verdad todos nos estamos moviendo mucho, así que me preguntaba si es necesario contratar una línea de teléfono fijo por aqueño de que hace que perciban tu negocio como más confiable."
                lastUpdate="4 Comentarios"/>
            </aside>


           </div>
       </div>
   
   )
}

export default ContainerBlog;