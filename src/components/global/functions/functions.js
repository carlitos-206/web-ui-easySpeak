
export const linkConnectionSendOff = (e, url, name) =>{
  e.preventDefault();
  if(url!==""){
  if(name !== 'Email'){
  window.open(url, '_blank');
  }else{
    window.location.href = `mailto:${url}`;
  }
  }else{
    if(name === 'LinkedIn'){
      window.open('https://www.linkedin.com/company/easyspeakllc/about/', '_blank');
      }else if(name === 'Email'){
        window.location.href = "mailto:easyspeakllc@gmail.com";
      }
  }
}

export const dateConversion = async (date) => {

  
  const options = {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    timeZoneName: 'short',
    timeZone: 'America/Los_Angeles' 
  };
  
  const formatter = new Intl.DateTimeFormat('en-US', options);
  return formatter.format(date);
}