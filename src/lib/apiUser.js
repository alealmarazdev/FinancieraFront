// const API_HOST = 'http://localhost:8081'
const API_HOST = 'https://fish-nance-back.mybluemix.net'

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

  async getUser() {
    const {token, id} = JSON.parse(sessionStorage.getItem('AUTH_DATA'))

    const request = await fetch(`${API_HOST}/users/${id}`, {
      headers: {
        Authorization: token
      }
    });

    const result = await request.json();

    if (result.payload) {
      result.payload = result.payload.foundUser
    }

    return result
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
    const request = await fetch(`${API_HOST}/users/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })

    const result = await request.json()

    if (result.success) {
      sessionStorage.setItem('AUTH_DATA', JSON.stringify(result.payload))
    }

    return result
  }
}
