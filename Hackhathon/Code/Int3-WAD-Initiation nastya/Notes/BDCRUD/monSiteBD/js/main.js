document.addEventListener(
    "DOMContentLoaded",
    addLikeListenersToAllButtons,
    false
  );
  document.addEventListener("DOMContentLoaded", initLikeButtonClasses, false);
  
  function initLikeButtonClasses() {
    const likeButtons = document.getElementsByClassName("likeButton");
  
    (function () {
      let xhr = [],
        i;
      for (let i = 0; i < likeButtons.length; i++) {
        (function (i) {
          xhr[i] = new XMLHttpRequest();
          xhr[i].onreadystatechange = () => {
            if (xhr[i].readyState === XMLHttpRequest.DONE) {
              const status = xhr[i].status;
              if (status === 0 || (status >= 200 && status < 400)) {
                let reponse = JSON.parse(xhr[i].responseText);
                if (reponse.erreurs.length > 0) {
                  return;
                } else {
                  let arrayLikes = reponse.donnees;
                  if (arrayLikes.length > 0) {
                    likeButtons[i].classList.add("rempli");
                  }
                }
              } else {
                console.log("erreur: " + xhr[i].status);
              }
            }
          };
  
          xhr[i].open("GET", `./traitementInitLikes.php?id=${likeButtons[i].id}`);
          xhr[i].send();
        })(i);
      }
    })();
  }
  
  function addLikeListenersToAllButtons() {
    const likeButtons = document.getElementsByClassName("likeButton");
  
    for (likeButton of likeButtons) {
      likeButton.addEventListener("click", (event) => {
        let filmId = event.target.id;
        let deleteLike = false;
        if (event.target.classList.contains("rempli")) {
          deleteLike = true;
          event.target.classList.remove("rempli")
        }
        else {
          event.target.classList.add("rempli")
        }
  
        console.log(filmId);
        (function (i) {
        let xhr = new XMLHttpRequest();
  
        xhr.onreadystatechange = () => {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            const status = xhr.status;
            if (status === 0 || (status >= 200 && status < 400)) {
              let reponse = JSON.parse(xhr.responseText);
              if (reponse.erreurs.length > 0) {
                return;
              } else {
                let arrayLikes = reponse.donnees;
                if (arrayLikes.length == 0) {
                   //  ajouter le like
                   deleteLike = false;
                }
                else {
                  // effacer
                  deleteLike = true;
                }
              }
            } else {
              console.log("erreur: " + xhr.status);
            }
          }
        };
  
        xhr.open("GET", `./traitementLike.php?id=${filmId}&deleteLike=${deleteLike}`);
        xhr.send();
      })();
      });
    }
  }
  