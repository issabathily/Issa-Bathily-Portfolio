import React  from "react";

import  './technologies.css'
class  Technologies extends  React.Component{
    render() {

        return <>
            <marquee scrollamount="16" behavior="10%"   direction="left">

                            <div className="responsive">
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
                <p> Type script </p>
            </div>

                  <div className="django">
                <img src="/django-icon.svg" alt=""/>
                <p> Django </p>
            </div>
        </div> </div>
</div>

            </marquee>
             <marquee behavior="100" scrollamount="16"   direction="right">

                            <div className="responsive">
            <div className="t">   <br/>     <div className="container">

            <div className="Angular"><img src="images/python.png" alt=""/>
            <p> Data Analyste </p>
            </div>

            <div className="React">
                <img src="images/figma.png" alt=""/>
                <p> Angular </p>
            </div>

            <div className="typeScript">
                <img src="/typescript-256.png" alt=""/>
                <p> Type script </p>
            </div>

                  <div className="django">
                <img src="/django-icon.svg" alt=""/>
                <p> Django </p>
            </div>
        </div> </div>
</div>
            </marquee>

        </>
    }
}
export default  Technologies;