const link=document.querySelectorAll("#sticky nav a")

for(i=0;i<link.length;i++){
    if(link[i].href===document.URL){
        link[i].className='current'
    }
}






