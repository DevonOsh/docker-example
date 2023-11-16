import pg from 'pg';

const client = new pg.Client();

export async function getCurrentTime() {
    await client.connect();
    const result = await client.query('SELECT NOW()');
    await client.end();
    return result;
}
