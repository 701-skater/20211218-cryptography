function isletter(a){
    if(a.charCodeAt(0)>64&&a.charCodeAt(0)<=90)return 1;
    if(a.charCodeAt(0)>96&&a.charCodeAt(0)<=122)return 1;
    return 0;
}

var sh=0, a='Cryptography', a0='　'+a+'　', a1='　', b='This is not JUST a rsa problem, you need to use some information in the previous problems.', m='', shm='';
var M=['-----', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.', '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
function init(){
    for(var i=0; i<b.length; ++i){
        if(isletter(b[i]))m+=M[parseInt(b[i], 36)]+' ';
    }
    for(var i=0; i<m.length; ++i)shm+=m[i]=='.'?'10':m[i]=='-'?'1110':'00';
    shm+='1111111111000';
}
function shine(){
    if(shm[sh]=='1')document.querySelector('#title').innerHTML=a0;
    else document.querySelector('#title').innerHTML=a1;
    ++sh;
    if(sh==shm.length)sh=0;
}
init();
setInterval(shine, 100)
