export default {
  async getUsers() {
    const response = await fetch('http://localhost:8081/users');

    const { payload } = await response.json();

    const list = payload.users.map((user) => {
      const {
        fullName: name,
        _id: id,
      } = user;

      return {
        name,
        id,
      };
    });
 return list
  },

  async deleteUser(id) {
    const response = await fetch(`http://localhost:8081/users/${id}`, {
      method: 'DELETE',
    });

    const { success } = await response.json();
    console.log(success)
    return success
  },

  async isBloquedForum(id) {
    const response = await fetch(`http://localhost:8081/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        isBloquedForum: true }),
    });

    const { success } = await response.json();
    console.log(success)
    return success

  },
  async newUser(userInfo) {
    console.log(userInfo)
    const response = await fetch('http://localhost:8081/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
       ...userInfo
      }),
    });

    const { success } = await response.json();

    return success
  },

  async getUser (userId){
    console.log(userId)

    const response = await fetch(`http://localhost:8081/users/${userId}`);

    const { payload } = await response.json();

    const { foundUser } = payload;

    return foundUser
  },
  async updateUser(userId, body) {
    const response = await fetch(`http://localhost:8081/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const { success } = await response.json();
    return success
  },
  async getScore (userId, userScore){
    const response = await fetch(`http://localhost:8081/users/${userId}/${userScore}`);

    const { payload } = await response.json();

    const { user } = payload;

    return user.score
  },

  async login(userInfo) {
    const endpoint = 'https://fish-nance-back.mybluemix.net/users/auth'

    const request = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(userInfo),
    })

    const result = request.json()

    return result
  }
}
