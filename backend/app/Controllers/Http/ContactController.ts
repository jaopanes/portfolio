import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import Contact from "App/Models/Contact";

export default class ContactController {
    public async store({ request }: HttpContextContract) {
        const validated = await request.validate({
            schema: schema.create({
                name: schema.string(),
                email: schema.string({}, [
                    rules.email({
                        sanitize: true,
                        ignoreMaxLength: true,
                        domainSpecificValidation: true,
                    }),
                ]),
                matters: schema.string(),
                message: schema.string(),
            }),
            messages: {
                "name.required": "O campo nome é obrigatório!",
                "email.required": "O campo email é obrigatório!",
                "email.email": "Insira um email válido!",
                "matters.required": "O campo assunto é obrigatório!",
                "message.required": "O campo mensagem é obrigatório!",
            },
        });

        Contact.create(validated);

        return {
            type: "success",
            message: "Mensagem enviada com sucesso!",
        };
    }
}
