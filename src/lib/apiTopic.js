export default{
    async getTopics() {
      const response = await fetch('http://localhost:8081/topics');
  
      const { payload } = await response.json();

      const list = payload.topics.map((topic) => {
        const {
          name: title,
          description: subtitle,
          icon: img,
          isCheck: isDone,
          _id: id,
        } = topic;
  
        return {
          title,
          subtitle,
          img,
          id,
          isDone
        };
      });
   return list
    },
    async deleteTopic(id) {
      const response = await fetch(`http://localhost:8081/topic/${id}`, {
        method: 'DELETE',
      });
  
      const { succes } = await response.json();
      console.log(succes)
      return succes
    },
    async newTopic(topicInfo) {
      const response = await fetch('http://localhost:8081/topics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: topicInfo.title,
          description: topicInfo.subtitle,
          icon: topicInfo.img,
        }),
      });
  
      const { succes } = await response.json();
  
      return succes
    },
    async getTopic (topicId){
      const response = await fetch(`http://localhost:8081/topics/${topicId}`);
  
      const { payload } = await response.json();
  
      const { topic } = payload;
  
      return topic
    },
    async updateTopic(topicId, body) {
      const response = await fetch(`http://localhost:8081/topics/${topicId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
  
      const { success } = await response.json();
      return success
    }
  
  }
  