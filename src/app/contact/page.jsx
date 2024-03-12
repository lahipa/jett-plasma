  // Function to handle input changes
  import dynamic from 'next/dynamic';

  const DynamicContact = dynamic(() => import('../@components/section/contact'), { ssr: false });
  
  const ContactPage = () => {
    return (
      <div>
        <DynamicContact />
      </div>
    );
  };
  
  export default ContactPage;
  