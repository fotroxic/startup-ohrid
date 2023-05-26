// import { useHubspotForm } from 'next-hubspot';


// export default function ContactPage() {

//   const { loaded, error, formCreated } = useHubspotForm({
//     region: "eu1",
//     portalId: "26752595",
//     formId: "df2d0337-26ae-4c23-bfd4-0d57db99d12e",
//     target: '#hubspot-form-wrapper'
// });


//   return (
//     <>
//     <div className='contact__form'>
//     <div className='contact__form__container'>
// <div id="hubspot-form-wrapper" />
// </div>
// </div>
//     </>
//   )
// }



export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h1>Get in touch with Us</h1>
        </div>

        <div className="contact__section__one">
          <div className="inner__sections">
          <img src="https://cdn-icons-png.flaticon.com/512/535/535239.png"></img>
          <p>Ohrid</p>
          </div>
          <div className="inner__sections">
            <img src="https://cdn-icons-png.flaticon.com/512/2989/2989993.png"></img>
          <p>startupohrid@gmail.com</p>
          </div>
          <div className="inner__sections">
          <img src="data:image/png;base64,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"></img>
          <p>+123214124</p>
          </div>
        </div>
        <div className="contact__section__two">
          <div className="contact__left__section">
            <h3>
                Contact Us
            </h3>
            <form>
               <div className="form__main">
               <input type="text" placeholder="Your Name"/>
                <input type="email" placeholder="Your Email"/>
                <input type="text" placeholder="Subject"/>
               </div>
                <input className="text__area" type="textarea"placeholder="Your Message"/>
              
            

            <p>
            startupOhrid is committed to protecting and respecting your privacy, and we’ll only store,
             process and use your personal information for the purpose of sending you our newsletter with news about the startup ecosystem, 
             events ABC Accelerator, or any of its partners are organizing, or some other that we think would be relevant to you.
             If you consent to us contacting you for above mentioned purpose, please tick the checkbox below.
            </p>

           
          <div className="checkbox__main">
          <input type="checkbox" /> <p>I agree to receive other communications from StartupOhrid.</p>
          </div>

            <p>
            By clicking submit below, you consent to allow StartupOhrid to store and process the personal information submitted above to provide you the content requested

            </p>

            <p>
            For more information on our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.
            </p>

            <button className="submit__button" type="submit">Submit</button>
            </form>

          </div>

         

        </div>

      </div>
    </div>
  )
}
