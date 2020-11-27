
export const isLoggedIn = () => {
  const data = JSON.parse(localStorage.getItem("data"))
  const exp = data.expires_in
 
    let currentTime = Date.now().valueOf() / 1000;
    if (currentTime > exp) {
      // window.localStorage.clear();
      const lastPageVisited = window.location.pathname + window.location.search;
      localStorage.clear();
      localStorage.setItem("lastPageVisited", lastPageVisited);
      return false;
    }
    return true;
};