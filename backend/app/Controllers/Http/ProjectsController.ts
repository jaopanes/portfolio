import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";

import Project from "App/Models/Project";

export default class ProjectsController {
    public async index() {
        const projects = Project.all();

        return projects;
    }

    public async store({ request }: HttpContextContract) {
        const validated = await request.validate({
            schema: schema.create({
                name: schema.string(),
                description: schema.string(),
                url: schema.string(),
                image: schema.string(),
            }),
            messages: {
                "name.required": "O campo nome é obrigatório!",
                "description.required": "O campo descrição é obrigatório!",
                "url.required": "O campo URL é obrigatório!",
                "image.required": "O campo imagem é obrigatório!",
            },
        });

        Project.create(validated);

        return {
            type: "success",
            message: "Projeto publicado com sucesso!",
        };
    }

    public async update({ request, params }: HttpContextContract) {
        const validated = await request.validate({
            schema: schema.create({
                name: schema.string(),
                description: schema.string(),
                url: schema.string(),
                image: schema.string(),
            }),
            messages: {
                "name.required": "O campo nome é obrigatório!",
                "description.required": "O campo descrição é obrigatório!",
                "url.required": "O campo URL é obrigatório!",
                "image.required": "O campo imagem é obrigatório!",
            },
        });

        const project = await Project.findOrFail(params.id);
        project.merge(validated).save();

        return {
            type: "success",
            message: `Projeto editado com sucesso!`,
        };
    }

    public async destroy({ params }: HttpContextContract) {
        const project = await Project.findOrFail(params.id);
        await project.delete();

        return {
            type: "success",
            message: `Projeto deletado com sucesso!`,
        };
    }
}
