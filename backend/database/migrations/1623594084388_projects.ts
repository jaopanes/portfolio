import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Projects extends BaseSchema {
    protected tableName = "projects";

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments("id");
            table.string("name").notNullable();
            table.string("description").notNullable();
            table.string("url").notNullable();
            table.string("image").notNullable();

            /**
             * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
             */
            table.timestamp("created_at", { useTz: true });
            table.timestamp("updated_at", { useTz: true });
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
