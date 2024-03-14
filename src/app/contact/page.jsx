  // Function to handle input changes
  import dynamic from 'next/dynamic';

  const DynamicContact = dynamic(() => import('../@clients/ContactComponent'));
  
  const ContactPage = () => {
    return (
      <div>
        <DynamicContact />
      </div>
    );
  };
  
  export default ContactPage;
  