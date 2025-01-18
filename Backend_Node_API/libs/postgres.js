import pg from 'pg';
const { Client } = pg;

async function getConnection() {
    const client = new Client({
        host: 'localhost',
        post: 5432,
        user: 'kyb3r',
        password: 'kyb3r',
        database: 'my_store'
    });
    await client.connect();
    return client
}

export default getConnection;