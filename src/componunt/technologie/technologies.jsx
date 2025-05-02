import React  from "react";

import  './technologies.css'
class  Technologies extends  React.Component{
    render() {

        return <>

            <div className="t">   <br/>     <div className="container">

            <div className="React"><img src="/logo.svg" alt=""/>
            <p> React </p>
            </div>

            <div className="Angular">
                <img src="/download.png" alt=""/>
                <p> Angular </p>
            </div>

            <div className="typeScript">
                <img src="/typescript-256.png" alt=""/>
                <p> Type scriot </p>
            </div>

                  <div className="django">
                <img src="/django-icon.svg" alt=""/>
                <p> Django </p>
            </div>
        </div> </div>

        </>
    }
}
export default  Technologies;