import { useHubspotForm } from 'next-hubspot';


export default function ContactPage() {

  const { loaded, error, formCreated } = useHubspotForm({
    region: "eu1",
    portalId: "26752595",
    formId: "df2d0337-26ae-4c23-bfd4-0d57db99d12e",
    target: '#hubspot-form-wrapper'
});


  return (
    <>
    <div className='contact__form'>
    <div className='contact__form__container'>
<div id="hubspot-form-wrapper" />
</div>
</div>
    </>
  )
}

