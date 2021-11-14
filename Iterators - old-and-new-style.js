const log = console.log;
log('');
//============================ Date and Time ================================
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date+' '+time;
log(`                  ${dateTime}`);
//===========================================================================
log('');
log('===================== Arnold Zijler ============================');
log('============= Level 14 - Iterators - old and new style ===');
log('');

let colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;

log('=== While loop: ===');
while (i <= colors.length -1) {
    let showColors = colors[i];
    log(showColors)
    i++;
}



log('');
log('=== For loop: ===');
for (let i = 0; i < colors.length; i++) {
    const showColors = colors[i];
    log(showColors);
}



log('');
log('');
log('============= Level 14 - Iterators - New style: array methods ===');
log('');
log('=== forEach: ===');
colors.forEach(color => log(color));


log('');
log('=== Level 14 - Iterators - Looping through the properties of an object ===');
log('');
log('=== for...in: ===');

const person = {
    firstname: "arnold",
    lastname: 'zijler', 
    gender: 'male',
    Phone: 0611257243,
    email: 'arnold.zijler@live.nl'
};

for (const key in person) {
    log(`${key}: ${person[key]}`)
}




log('');
