
import { useEffect } from 'react'

export default Ping = ()=>{

    const WEBSITE_URL = 'https://dynamic-helpful-drill.glitch.me';
    const PING_INTERVAL_MS = 120000;
  
  
    function pingWebsite() {
      console.log(`Pinging ${new Date()}`);
  
      axios.get(WEBSITE_URL)
          .then(response => {
              console.log(`Ping successful at ${new Date()}`);
          })
          .catch(error => {
              console.error(`Failed to ping ${WEBSITE_URL}. Error: ${error.message}`);
          });
  }
  
    useEffect(()=>{
      pingWebsite();
  
    },[])
  
    return (
        <dev>ping</dev>
    )
}