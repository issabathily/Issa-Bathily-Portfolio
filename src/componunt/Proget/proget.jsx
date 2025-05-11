import React from "react";
import './proget.css'

const proget =[
    {
        name : 'Gestion Plainte ',
        images: 'images/proget1.png',
        data : 'gesttion plainte',
        description :'Une site web qui permet au citoyen de deposer leur plainte ',
        url : ''
    },
     {
        name : 'Team Portfolio',
        images: 'images/proget2.png',
        data : 'isep diamniadio',
         description: 'Portfolio de De notre Team realiser avec mes Amis  a luniversiter',
         url: ''
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
                         <a href="https://teamportfolio-ubsl.onrender.com">
                        <img src={item.images} style={{
                            width:310
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