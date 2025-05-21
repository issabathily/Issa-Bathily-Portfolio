import React from "react";
import './proget.css'

const proget =[
    {
        name : 'Gestion Plainte ',
        images: 'images/proget1.png',
        data : 'gesttion plainte',
        description :'Une site web qui permet au citoyen de deposer leur plainte ',
        url : 'https://gestionplainte-68rd.onrender.com/'
    },
     {
        name : 'Team Portfolio',
        images: 'images/proget2.png',
        data : 'isep diamniadio',
         description: 'Portfolio de De notre Team realiser avec mes Amis  a luniversiter',
         url: 'https://teamportfolio-ubsl.onrender.com'
    },
    {

        name : 'Çhat bot prediction Vente ',
        images: 'images/bot.png',
        data:' Chat bot ',
        description: ' Un chatbot qui permet de predir les ventes en france par rapport a une ville tres puissant   ',
        url: 'https://predictionventeapi.onrender.com'
    },
     {

        name : 'Çhat bot prediction Vente ',
        images: 'images/bot.png',
        data:' Chat bot ',
        description: ' Un chatbot qui permet de predir les ventes en france par rapport a une ville tres puissant   ',
        url: 'https://predictionventeapi.onrender.com'
    }
]

function Proget (){
    return <>
        <br/> <br/><br/><br/>
        <div className="project">
         <h2>   Realisation </h2>
        </div>
        <div className="contener-project">

                <div className="mesprogt">
                    {proget.map((item)=> <div className="mesprojet">
                         <a href={item.url}>
                        <img src={item.images} style={{
                            width:290
                        }} alt=""/>
                     </a>
                        <div className="texts">
                         <h3>{item.name}</h3>
                            <div className="flex">
                               <span> <p>{item.data}</p> </span>
                            <span > <i class="fa-brands fa-github"></i> </span>

                            </div>
                                 <p> {item.description}</p>

                        </div>

                    </div>
                        )}
                </div>

        </div>

    </>
}

export  default  Proget ;