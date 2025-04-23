import React from "react";
import './Header.css'


class Header extends React.Component{
    render() {
        return<>
        <div className="header">
            <div className="div"> <i class="fa-solid fa-phone-volume"></i></div>
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
                                <a href=""> Contact </a>
                            </li>
                            <li>
                                <a href=""> Disign</a>
                            </li>
                        </ul>
                    </nav>
                </div>


            </header>

<div className="heure"> 12/12/222</div>
        </div>



            <div className="baner">

                <div className="text">
                   <span className="profil">
                   <img className="" src="images/profil.png" alt=""/>
                       <br/>
                       <br/>

                       <span className="reseaux-socio">
                           <button> github <i class="fa-solid fa-up-right-from-square"></i> </button>
                           <button> Facebook <i class="fa-solid fa-up-right-from-square"></i></button>
                       </span>
                   </span>
        <h1> Salut, je suis  <span className="nom"> Issa Bathily</span>, <span className="dev"> développeur</span> passionné</h1>

                    <div className="boton">
                      <div> <button> <i class="fa-brands fa-github"></i> Github </button> </div>
                       <div>  <button> <i class="fa-brands fa-linkedin"></i> Linkdin</button></div>
                       <div>  <button> <i class="fa-solid fa-calendar"></i> Realisation</button></div>
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
}

export default Header;