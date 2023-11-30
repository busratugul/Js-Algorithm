//Palindrom : okunuşu ile tersten okunuşu aynı olan sözcüklere denir. kepek,küçük,kazak,mum vb.

function Palindrom(text) {
     let splitted = text.split("")
     let reversed = text.split("").reverse()

     if (splitted.join("") === reversed.join("")){
        console.log(`${text} bir palindromdur.`);
     }else {
        console.log(`${text} bir palindrom değildir.`);
     }
}

Palindrom("kazak")