import { holidays } from './Data.js';
import express from 'express';
import cors from 'cors';

const server = express();
const hoje = new Date().toLocaleDateString('en-us');
let answer = "Não, hoje não é feriado";

for(let i = 0; i < holidays.length;i++){
    if(holidays[i].date === hoje){
        answer = `Sim, hoje é ${holidays[i].name}`;
    }
}

server.use(cors());

server.get('/holidays',(request,response)=>{
    response.send(holidays);
})

server.get('/is-today-holiday',(request,response)=>{
    response.send(answer);
})


server.get('/holidays/:idHoliday',(request,response)=>{
    const id = request.params.idHoliday;

    const janArr = holidays.filter(month => parseInt(month.date[0] + month.date[1]) == id);

    if(janArr.length === 0){
        response.send('Não há feriados neste mês');
    }else{
        response.send(janArr);
    }
    
})

server.listen(5001)


