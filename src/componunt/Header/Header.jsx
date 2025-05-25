import React, {useEffect, useState} from "react";
import './Header.css'


function Header() {

const [heure, setHeure] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setHeure(new Date());
    }, 1000); // Mise à jour chaque seconde

    return () => clearInterval(interval); // Nettoyage
  }, []);

        return<>
        <div className="header">
            <div className="div"> <a style={{color:"aqua"}} href="tel:+221773880436"> <i className="fa-solid fa-phone-volume"></i></a></div>
            <header>

            <div className="logo"> -Bcode-> </div>
                <div className="nav-menu">
                    <nav>
                        <ul>
                            <li>
                                <a href=""> <i class="fa-solid fa-house"></i> Home</a>
                            </li>
                            <li>
                                <a href=""> <i class="fa-solid fa-briefcase"></i> Proget </a>
                            </li>
                            <li>
                                <a href=""><i class="fa-solid fa-phone-volume"></i> Contact </a>
                            </li>
                            <li>
                                <a href=""> <i class="fa-brands fa-figma"></i> Disign</a>
                            </li>
                        </ul>
                    </nav>
                </div>


            </header>

<div className="heure"> {heure.toLocaleTimeString()}</div>
        </div>



            <div className="baner">

                <div className="text">
                   <span className="profil">
                   <img className="" src="images/profil.png" alt=""/>
                       <br/>
                       <br/>

                       <span className="reseaux-socio">
                           <button> github <i class="fa-solid fa-up-right-from-square"></i> </button>

                           <button>  <a href="https://www.facebook.com/bcodecode388"> Facebook <i class="fa-solid fa-up-right-from-square"></i></a> </button>
                       </span>
                   </span>
        <h1 className="h1"> Salut !, je suis  <span className="nom"> Issa Bathily</span>  Devellopeur Web et Data Analyst passionné par <span className="dev"> IA </span> Et les  nouvelle Technologies</h1>

                    <div className="boton">
                      <div><a href="https://github.com/issabathily">
                          <button><i className="fa-brands fa-github"></i> Github</button>
                      </a></div>
                        <div>
                            <a href="https://www.linkedin.com/in/bcodecode">
                                <button><i className="fa-brands fa-linkedin"></i> Linkdin</button>
                            </a></div>
                        <div>
                            <a href="https://x.com/bcodecode388"> <button><i className="fa-brands fa-x-twitter"></i> twiter </button></a>
                        </div>
                    </div>

                    <p> Depuis mes débuts, je suis profondément passionné par le développement web et mobile. Ce qui a commencé comme une simple curiosité est rapidement devenu une véritable vocation. J’aime concevoir des interfaces élégantes, créer des expériences utilisateurs intuitives, et

                    </p>

                    <p>      résoudre des problèmes complexes avec des solutions techniques propres et efficaces

                    Chaque ligne de code que j’écris est motivée par l’envie de construire quelque chose de concret</p>
                </div>

                <div className="img-letf">
                       <div className="bcode"> <h3>  Bcode   </h3>  <i class="fa-solid fa-code"></i> </div>
                    <img src="images/conception-fond-resume.png" alt=""/>


                </div>



            </div>

            <div className="effet"> </div>

        </>

}

export default Header;