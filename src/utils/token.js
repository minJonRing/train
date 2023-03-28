const TokenKey = "token";

export function getToken() {
  return sessionStorage.getItem(TokenKey);
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token);
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey);
}

const userInfoKey = "userInfo";
export function getUserInfo() {
  return sessionStorage.getItem(userInfoKey);
}

export function setUserInfo(token) {
  return sessionStorage.setItem(userInfoKey, token);
}

export function removeUserInfo() {
  return sessionStorage.removeItem(userInfoKey);
}
