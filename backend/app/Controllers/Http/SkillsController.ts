import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";

import Skill from "App/Models/Skill";

export default class SkillsController {
    public async index() {
        const skills = Skill.query().orderBy("id", "asc");

        return skills;
    }

    public async store({ request }: HttpContextContract) {
        const validated = await request.validate({
            schema: schema.create({
                name: schema.string(),
                progress: schema.string(),
            }),
            messages: {
                "name.required": "O campo nome é obrigatório!",
                "progress.required": "O campo progresso é obrigatório!",
            },
        });

        Skill.create(validated);

        return {
            type: "success",
            message: "Skill criada com sucesso!",
        };
    }

    public async update({ request, params }: HttpContextContract) {
        const validated = await request.validate({
            schema: schema.create({
                name: schema.string(),
                progress: schema.string(),
            }),
            messages: {
                "name.required": "O campo nome é obrigatório!",
                "progress.required": "O campo progresso é obrigatório!",
            },
        });

        const skill = await Skill.findOrFail(params.id);
        skill.merge(validated).save();

        return {
            type: "success",
            message: `Skill editada com sucesso!`,
        };
    }

    public async destroy({ params }: HttpContextContract) {
        const skill = await Skill.findOrFail(params.id);
        await skill.delete();

        return {
            type: "success",
            message: `Skill deletada com sucesso!`,
        };
    }
}
