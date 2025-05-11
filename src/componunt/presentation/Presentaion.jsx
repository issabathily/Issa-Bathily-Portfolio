import React from "react";
import  './Presentation.css'
class  Presentaion extends  React.Component{
    render() {
        return <>
   <div className="effecte"> </div>
            <br/>
            <br/>

            <h2> About Me <div className="trai"> </div> </h2>
           <div className="">    </div>
            <br/>
            <br/>
        <div className="presentation">
            <div className="parcourt">
                <strong> DEVelopeur Web </strong> <br/>
                <p> Grâce à ma maîtrise de technologies comme JavaScript, React, Django, Flutter et Python, je suis capable d’intervenir à toutes les étapes d’un projet : de la conception à la mise en production</p>
                        </div>

             <div className="Realisation">
                <strong> Data Analyste  </strong> <br/>

                 <p> Je suis Data Analyst, passionné par l'exploration, l’analyse et la visualisation de données pour aider à la prise de décision stratégique. Avec une solide maîtrise des outils comme Python, SQL, Excel,
                     exploitables et orientées résultats.</p>
            </div>

              <div className="apropos">
                <strong className="apropos"> Web Disign </strong> <br/>
                  <p> Je suis Web Designer, passionné par la création d’interfaces web modernes, intuitives et centrées sur l’utilisateur. Spécialisé dans l’outil Figma, je conçois des maquettes interactives, des prototypes fonctionnels et des designs responsives qui allient esthétisme et performance.</p>
            </div>
        </div>

            <br/>

            <div className="contener-static">
                <div className="div1">
                <p> Experience  </p>
                    <span> 2 </span> ans
                </div>
                  <div className="div1">
                  <p> Colaboration </p>
                      <span> 09993 </span>kk
                  </div>
                  <div className="div1">
                  <p> site en ligne </p>
                      <span> 022 </span>
                  </div>

                  <div className="div1">
                  <p> Niveau </p>
                      <span> 00222 </span>
                  </div>

            </div>

        </>
    }

}

export  default  Presentaion;