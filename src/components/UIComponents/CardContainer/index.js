import React from 'react';

import Card from '../Card'

import BasicBlocks from '../../../asset/image/CardsImage/abc-block.svg';
import BusinessModel from '../../../asset/image/CardsImage/presentation.svg'
import Administration from '../../../asset/image/CardsImage/budget.svg'
import Target from '../../../asset/image/CardsImage/target.svg'
import Partnership from '../../../asset/image/CardsImage/handshake.svg'
import Lightbulb from '../../../asset/image/CardsImage/lightbulb.svg'
import BusinessCapital from '../../../asset/image/CardsImage/cityscape.svg'
import Testing from '../../../asset/image/CardsImage/chemistry.svg'
import Debt from '../../../asset/image/CardsImage/debt.svg'
import Taxes from '../../../asset/image/CardsImage/SAT.svg'
import Healthbar from '../../../asset/image/CardsImage/healthbar.svg'
import Bank from '../../../asset/image/CardsImage/safebox.svg'



function CardContainer () {
    return (
     <div >
       <div class="row m-5">
       <div class="col-sm-3 mb-5 ">
           <Card to="/theme/Word/One" title='Conceptos básicos' subtitle="Conoce los elementos fundamentales para aprender de finanzas" image={BasicBlocks}/>
      </div> 
      <div class="col-sm-3 mb-5 ">
           <Card to="/theme/Word/Two" title='Modelo de negocio' subtitle='Aprende a desarrollar tu idea de negocio.' image={BusinessModel}/>
           </div> 
      <div class="col-sm-3 mb-5 ">
           <Card to="/theme/Word/Three" title='Administra tus finanzas' subtitle='Obten los conocimientos básicos para tener finanzas saludabless' image={Administration}/>
           </div> 
      <div class="col-sm-3 mb-5 ">
           <Card to="/theme/Word/Four" title='Estudio de mercado' subtitle='Encuentra un nicho y reconoce a tus clientes.' image={Target}/>
           </div> 
      <div class="col-sm-3 mb-5 ">
           <Card to="/theme/Word/Five" title='¿Socios o Inversionistas?' subtitle='Reconoce que modelo se adapta mas a las necesidades de tu proyecto y cuando ir evolucionando.' image={Partnership}/>
           </div> 
      <div class="col-sm-3 mb-5 ">
           <Card to="/theme/Word/Six" title='Mas alla de la idea.' subtitle='Toma de decisiones.' image={Lightbulb}/>
           </div> 
      <div class="col-sm-3 mb-5 ">
           <Card to="/theme/Word/Seven" title='Capital' subtitle='Aprende los diferentes activos de una empresa' image={BusinessCapital}/>
           </div> 
      <div class="col-sm-3 mb-5 ">
           <Card to="/theme/Word/Eight" title='Prueba tu idea' subtitle='Entenderas la importacia de hacer pruebas de tu idea.' image={Testing}/>
           </div> 
      <div class="col-sm-3 mb-5 ">
           <Card to="/theme/Word/Nine" title='Deuda: ¿tu mejor ayuda?' subtitle='Aprende el significado de deuda y como puede ayudarte.' image={Debt}/> </div> 
      <div class="col-sm-3 mb-5 ">
           <Card to="/theme/Word/Ten" title='Impuestos' subtitle='Conoce más sobre impuestos' image={Taxes}/>
           </div> 
      <div class="col-sm-3 mb-5 ">
           <Card to="/theme/Word/Eleven" title='Salud financiera de tu empresa.' subtitle='Diferencia de los tipos gastos que tienes en tu empresa.' image={Healthbar}/>
           </div> 
      <div class="col-sm-3 mb-5 ">
           <Card to="/theme/Word/Twelve" title='Bancos.' subtitle='Aprende sobre tasas de interes, rendimientos, y más' image={Bank}/>
           </div>
           
           
        </div>
        
     </div>
   )
}

export default CardContainer
