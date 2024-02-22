import pkg from 'pg';
const { Client } = pkg;

const client = new Client();
client.connect();

export default client;
