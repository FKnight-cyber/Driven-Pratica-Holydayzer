import holidays from './Data.js';
import express from 'express';
import cors from 'cors';

const server = express();
const hoje = new Date().toLocaleDateString('en-us');
let answer = "Não, hoje não é feriado";

for(let i = 0; i < holidays().length;i++){
    if(holidays()[i].date === hoje){
        answer = `Sim, hoje é ${holidays()[i].name}`;
    }
}

server.use(cors());

server.get('/holidays',(request,response)=>{
    response.send(holidays());
})

server.get('/is-today-holiday',(request,response)=>{
    response.send(answer);
})


server.get('/holidays/:idHoliday',(request,response)=>{
    const id = request.params.idHoliday;

    const janArr = [];

    if(id === '1'){
        for(let i = 0; i < holidays().length;i++){
            let k = parseInt(holidays()[i].date[0] + holidays()[i].date[1]);
            if(k === 1){
                janArr.push(holidays()[i]);
            }
        }
    }
    if(id === '2'){
        for(let i = 0; i < holidays().length;i++){
            let k = parseInt(holidays()[i].date[0] + holidays()[i].date[1]);
            if(k === 2){
                janArr.push(holidays()[i]);
            }
        }
    }
    if(id === '3'){
        for(let i = 0; i < holidays().length;i++){
            let k = parseInt(holidays()[i].date[0] + holidays()[i].date[1]);
            if(k === 3){
                janArr.push(holidays()[i]);
            }
        }
    }
    if(id === '4'){
        for(let i = 0; i < holidays().length;i++){
            let k = parseInt(holidays()[i].date[0] + holidays()[i].date[1]);
            if(k === 4){
                janArr.push(holidays()[i]);
            }
        }
    }
    if(id === '5'){
        for(let i = 0; i < holidays().length;i++){
            let k = parseInt(holidays()[i].date[0] + holidays()[i].date[1]);
            if(k === 5){
                janArr.push(holidays()[i]);
            }
        }
    }
    if(id === '6'){
        for(let i = 0; i < holidays().length;i++){
            let k = parseInt(holidays()[i].date[0] + holidays()[i].date[1]);
            if(k === 6){
                janArr.push(holidays()[i]);
            }
        }
    }
    if(id === '7'){
        for(let i = 0; i < holidays().length;i++){
            let k = parseInt(holidays()[i].date[0] + holidays()[i].date[1]);
            if(k === 7){
                janArr.push(holidays()[i]);
            }
        }
    }
    if(id === '8'){
        for(let i = 0; i < holidays().length;i++){
            let k = parseInt(holidays()[i].date[0] + holidays()[i].date[1]);
            if(k === 8){
                janArr.push(holidays()[i]);
            }
        }
    }
    if(id === '9'){
        for(let i = 0; i < holidays().length;i++){
            let k = parseInt(holidays()[i].date[0] + holidays()[i].date[1]);
            if(k === 9){
                janArr.push(holidays()[i]);
            }
        }
    }
    if(id === '10'){
        for(let i = 0; i < holidays().length;i++){
            let k = parseInt(holidays()[i].date[0] + holidays()[i].date[1]);
            if(k === 10){
                janArr.push(holidays()[i]);
            }
        }
    }
    if(id === '11'){
        for(let i = 0; i < holidays().length;i++){
            let k = parseInt(holidays()[i].date[0] + holidays()[i].date[1]);
            if(k === 1){
                janArr.push(holidays()[i]);
            }
        }
    }
    if(id === '12'){
        for(let i = 0; i < holidays().length;i++){
            let k = parseInt(holidays()[i].date[0] + holidays()[i].date[1]);
            if(k === 12){
                janArr.push(holidays()[i]);
            }
        }
    }
    if(janArr.length === 0){
        response.send('Não há feriados neste mês');
    }else{
        response.send(janArr);
    }
    
})

server.listen(5001)


