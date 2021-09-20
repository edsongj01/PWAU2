console.log('hola mundos desde app js');
console.log('El service esta disponible ?');
if(navigator.serviceWorker){
    console.log("Simon")
    navigator.serviceWorker.register('/sw.js')
}else{
    console.log("Nel")
}