// db.js
import { Pool } from "pg"

export interface Poll {
  id: string
  title: string
  description: string
  options: string[]
}

const pool = new Pool({
  host: process.env.DATABASE_HOST ?? 'localhost',
  user: process.env.DATABASE_USER ?? 'postgres',
  port: Number(process.env.DATABASE_PORT) ?? 5432,
  password: process.env.DATABASE_PASSWORD ?? 'example',
  database: process.env.DATABASE_NAME ?? 'PollingApp',
  idleTimeoutMillis: 30000,
});

const pollColumns = {
  id: 'id',
  title: 'title',
  description: 'description',
  options: 'options',
}

export class PollModel {
  static async get({ limit }: { limit: number }) {
    const result = await pool.query(`SELECT * FROM vehicles LIMIT ${limit ?? 100}`)
    return result
  }

  /* static async getById({ id }: { id: string }) {
    const [result] = await pool.query(`SELECT * FROM vehicles WHERE id = ${id}`)
    return result
  }

  static async create({ poll }: { poll: Poll }) {
    const [result] = await sql`INSERT INTO polls${sql(
      poll,
      pollColumns
    )}
    returning *
    `

    return result
  }

  static async update({ id, poll }: { id: string; poll: Poll }) {
    const exists = await sql`SELECT * FROM polls WHERE id = ${id}`
    if (!exists) return false

    const [result] = await sql`UPDATE vehicles SET ${sql(
      poll,
      pollColumns
    )} WHERE id = ${id}
    returning *
    `

    return result
  }

  static async delete({ id }: { id: string }) {
    const exists = await sql`SELECT * FROM polls WHERE id = ${id}`
    if (!exists) return false

    await sql`DELETE FROM vehicles WHERE id = ${id}`
    return true
  } */
}
