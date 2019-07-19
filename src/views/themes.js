import React from 'react';

import TitleGames from '../components/UIComponents/TitleAndSubtitle'
import Navbar from '../components/UIComponents/Navbar'
import Chatbot from '../components/UIComponents/Chatbot'
import ContentVideo from '../components/UIComponents/ContentVideo/index'
import ContentWrite from '../components/UIComponents/ContentWrite/index'
import ContentWriteTwo from '../components/UIComponents/ContentWriteTwo/index'
import Footer from '../components/UIComponents/Footer/index'
const contents = {
  'themeOne': {
    'title': 'Concepto emprendedor:',
    'subtitle':'Conoce que es un emprendedor',
    'content': [<ContentVideo id={'2CJMyFSy6L0'} to='/gameTwo'/>],
    'direccion':'gameTwo'
  },
  'themeTwo': {
    'title': 'Administra tus finanzas',
    'subtitle':'¿Qué son los ingresos?',
    'content': [<ContentVideo id={'XB_aririwzo'} to='/gameThree'/>],
    'direccion':'gameThree'

  },
  'themeThree': {
    'title': 'Estudio de mercado',
    'subtitle':'Aprende los diferentes servicios que necesitas.',
    'content': [<ContentWriteTwo to='/gameOne'/>],
    'direccion':'gameOne'

  },
  'themeFour': {
    'title': 'Impuestos',
    'subtitle':'Aprende todo lo que necesitas para que negocio trinfue sin problemas.',
    'content': [<ContentVideo id={'4APOJp3Frc4'} to='/gameFive'/>],
    'direccion':'gameFive'

  },
  'themeFive': {
    'title': 'Salud financiera',
    'subtitle':'Aprende a desarrollar tu idea de negocio.',
    'content': [<ContentWrite to='/gameFour'/>],
    'direccion':'gameFour'

  },
};

function Theme (props) {
  console.log(props.match)
  const theme = props.match.params.id;
  const content = contents[theme];

     return (
      <div >
        <Navbar />
        <TitleGames title={content.title} subtitle={content.subtitle}/>
           {content.content}
        <Chatbot />
        <Footer />
        </div>
    )
}

export default Theme;