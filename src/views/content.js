import React, {useState, useEffect} from 'react';

import apiTopic from '../lib/apiTopic'

import TitleGames from '../components/UIComponents/TitleAndSubtitle'
import Navbar from '../components/UIComponents/Navbar'
import Chatbot from '../components/UIComponents/Chatbot'
import CardContainer from '../components/UIComponents/CardContainer'
import Footer from '../components/UIComponents/Footer'
import { async } from 'q';

function Content (props) {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    async function getTopics() {
      const topics = await apiTopic.getTopics()

      if (!topics.success) {
        // TODO: Error
        return;
      }

      setTopics(topics.payload.topics)
    }

    getTopics()
  }, [])

  return (
    <div >
      <Navbar />
      <TitleGames title="¿QUÉ QUIERES APRENDER HOY?" subtitle="Selecciona el tema que mas te interese." />
      <CardContainer topics={topics} />
      <Footer history={props.history} />
      <Chatbot />
    </div>
  )
}

export default Content;
