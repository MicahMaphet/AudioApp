import { Db, MongoClient } from 'mongodb'

class Storage {
    client: MongoClient;
    db: Db;
    constructor() {
        const uri = 'mongodb://localhost:27017';
        this.client = new MongoClient(uri);
        this.db = this.client.db('AudioApp');
    }

    async init() {
        await this.client.connect();
    }

    stop() {
        this.client.close();
    }
}