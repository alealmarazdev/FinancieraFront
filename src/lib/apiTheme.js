export default{
    async getThemes() {
      const response = await fetch('http://localhost:8081/themes');
  
      const { payload } = await response.json();

      const list = payload.themes.map((theme) => {
        const {
            name: title,
            icon: img,
            description: subtitle,
            expPoints:puntos,
            content:contentWrite,
            video:contentVideo,
            numSerial:identificacion,
            _id:id
        } = theme;
  
        return {
          title,
          subtitle,
          img,
          id,
          puntos,
          contentWrite,
          contentVideo,
          identificacion
        };
      });
   return list
    },
    async deleteTheme(id) {
      const response = await fetch(`http://localhost:8081/theme/${id}`, {
        method: 'DELETE',
      });
  
      const { succes } = await response.json();
      console.log(succes)
      return succes
    },
    async newTheme(themeInfo) {
      const response = await fetch('http://localhost:8081/themes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: themeInfo.title,
          description: themeInfo.subtitle,
          icon: themeInfo.img,
          
        }),
      });
  
      const { succes } = await response.json();
  
      return succes
    },
    async getTheme (themeId){
      const response = await fetch(`http://localhost:8081/themes/${themeId}`);
  
      const { payload } = await response.json();
  
      const { theme } = payload;
  
      return theme
    },
    async updateTheme(themeId, body) {
      const response = await fetch(`http://localhost:8081/themes/${themeId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
  
      const { success } = await response.json();
      return success
    },  
    async doneTheme(id) {
      const response = await fetch(`http://localhost:8081/themes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isDone: true }),
      });
  
      const { succes } = await response.json();
      console.log(succes)
      return succes
  
    },
  
  }
  