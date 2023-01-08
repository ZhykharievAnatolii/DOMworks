import fastify from "fastify";
import fastifyCors from "@fastify/cors";

const server= fastify();


server.listen({
    port:3030,
    host:'0.0.0.0',
    
});
