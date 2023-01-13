let array = [];

for(let i = 0; i < Infinity; i++){
    let ads = prompt('add чтобы добавить, del чтобы удалить, stop чтобы остановить!')
     let box = ads.split(' ')
    if(box[0] === 'add') {
        array.push(box[1])
    } else if(box[0] === 'del'){
        for(let key in array){
            array[key] == box[1] ? array.splice(key,1) : '';
        }
    } else if(box[0] === 'stop'){
        break
    } else {
        alert('ERROR 404')
    }
    console.log(array);
}
console.log(array);
