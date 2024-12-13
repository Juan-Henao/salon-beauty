import { Injectable } from '@nestjs/common';
import Vapi from "@vapi-ai/web";

@Injectable()
export class VapiService {
    async getVapis() {
        return "HOLA"
    }

    async postvapi(body :any) {
        console.log("Received payload:", body); // Imprime el cuerpo de la solicitud
        return { message: "Payload received", payload: body }; // Devuelve el payload recibido
         }

}
