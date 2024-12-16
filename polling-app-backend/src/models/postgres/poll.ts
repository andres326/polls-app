// db.js
import { Pool } from "pg"
import { CreatePoll, FullPollResponse, Poll, PollOption, PollResponse } from "../../types";

const pool = new Pool({
  host: process.env.DATABASE_HOST ?? 'localhost',
  user: process.env.DATABASE_USER ?? 'postgres',
  port: Number(process.env.DATABASE_PORT) ?? 5432,
  password: process.env.DATABASE_PASSWORD ?? 'example',
  database: process.env.DATABASE_NAME ?? 'PollingApp',
  idleTimeoutMillis: 30000,
});


export class PollModel {
  static async get({ limit }: { limit: number | undefined }) {
    const result = await pool.query(`SELECT * FROM polls LIMIT ${limit}`)
    const pollDto: PollResponse[] | [] = result.rows
    return pollDto
  }

  static async getById({ id }: { id: string }) {
    const query = {
      text: `SELECT * FROM polls INNER JOIN poll_options ON poll_options.poll_id = polls.id WHERE polls.id = $1 `,
      values: [id],
    }
    const result = await pool.query(query)
    const pollDto: FullPollResponse | null = {
      id: result.rows[0].id,
      title: result.rows[0].title,
      description: result.rows[0].description,
      options: result.rows.map((option: PollOption) => ({
        id: option.id,
        name: option.name,
        votes: option.votes,
      })),
    }
    return pollDto
  }

  static async create({ poll }: { poll: CreatePoll }) {
    const queryPoll = {
      text: `INSERT INTO polls (title, description) VALUES ($1, $2) RETURNING *`,
      values: [poll.title, poll.description],
    }
    const resultPoll = await pool.query(queryPoll)

    let resultOptions: PollOption[] = []
    for (const option of poll.options) {
      const queryOption = {
        text: `INSERT INTO poll_options (poll_id, name) VALUES ($1, $2) RETURNING *`,
        values: [resultPoll.rows[0].id, option.name],
      }
      const optionResult = await pool.query(queryOption)
      resultOptions.push({
        id: optionResult.rows[0].id,
        name: optionResult.rows[0].name,
        votes: 0
      })
    }
    const pollDto: FullPollResponse = { ...resultPoll.rows[0], options: resultOptions }
    return pollDto
  }

  static async vote({ pollId, optionId }: { pollId: string, optionId: string }) {
    const query = {
      text: `UPDATE poll_options SET votes = votes + 1 WHERE poll_id = $1 AND id = $2`,
      values: [pollId, optionId],
    }
    await pool.query(query)

    return this.getById({ id: pollId })

  }
}
