import jwt_decode from "jwt-decode"

const helpers = {
  setToken: token => {
    window.localStorage.setItem("token", token)
  },

  getToken: () => {
    const token = window.localStorage.getItem("token")
    return token
  },

  deleteToken: () => {
    window.localStorage.removeItem("token")
  },

  decodeToken: () => {
    const token = helpers.getToken() || ""

    if (token !== "") {
      const decoded = jwt_decode(token)
      // console.log(decoded)
      return {
        id: decoded.id,
        username: decoded.username,
        typedEmail: decoded.typedEmail
      }
    } else {
      return null
    }
  }
}

export default helpers