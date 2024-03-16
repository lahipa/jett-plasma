  // Function to handle input changes
  import dynamic from 'next/dynamic';
  import { ClientProvider } from "@/app/_clients";

  const DynamicContact = dynamic(() => import('@/app/_clients/ContactComponent'));
  
  const ContactPage = () => {
    return (
      <ClientProvider>
        <DynamicContact />
      </ClientProvider>
    );
  };
  
  export default ContactPage;
  