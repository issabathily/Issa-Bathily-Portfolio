import './contact.css'

function  Contact() {
    return<>

        <br/>
        <br/>
    <h2 className="h2"> Contact </h2>

         <div className="avatar" > <img src="images/bcode.png" width={250} alt=""/> </div>
     <div className="contener-form">


            <form action="">
        <div className="section-gauche">

            <div className="nom">
                <label htmlFor=""> Nom   </label>
                   <br/>
                <input type="text"/>
            </div>

            <div className="nom">
                <label htmlFor=""> mail  </label>
                   <br/>
                <input type="text"/>
            </div>

             <div className="nom">
                <label htmlFor=""> Telephone   </label>
                   <br/>
                <input type="number"/>
            </div>

            <div className="nom">
                <label htmlFor="">  Mot de pass   </label>
                   <br/>
                <input placeholder="xxxxxx" type="number"/>
            </div>


        </div>
              <div className="">
                <label htmlFor="message">Votre message </label><br/>
                <textarea id="message" name="message" rows="6" cols="40"
                          placeholder="Écrivez votre message ici..."></textarea>

            </div>


            </form>
        </div>

    </>
}

export default Contact