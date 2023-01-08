import fastify from "fastify";
import fastifyCors from "@fastify/cors";

const server= fastify();
server.register(fastifyCors);


const users={
    0:{
        name:'Yura'
    },
    1:{
        name:'Bohdan'
    },
    2:{
        name:'Kirill'
    },
    3:{
        name:'Anatolii'
    },
    4:{
        name:'Olena'
    },
}

server.get('/users',(request,reply)=>{
reply.send(users)
});
server.delete('/users/:id',(request,reply)=>{
    const {id}=request.params;
    delete users[id];
    reply.send({info:'succes'})
})


server.listen({
    port:3030,
    host:'0.0.0.0',

});
