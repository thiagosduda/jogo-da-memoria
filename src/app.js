(function(){
  const {hash} = window.location;
  const paths = [];
  paths[""] = login;
  paths["#/login"] = login;
  paths["#/signup"] = signup;
  paths["#/game"] = game;
  paths["#/404"] = err404; 


  window.addEventListener("hashchange", event => {
    location.reload();
  });
  
  paths[hash] ? paths[hash]() : paths["#/404"]();
})();