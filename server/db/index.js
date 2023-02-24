const neo4j = require("neo4j-driver");

// const uri = "bolt://localhost:7687";
// const user = "scm_app";
// const password = "scm";

const uri = process.env.NEO4J_URI;
const user = process.env.NEO4J_USERNAME;
const password = process.env.NEO4J_PASSWORD;

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const session = driver.session();

let nodes = {};

// all nodes for /nodes route
nodes.all = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await session.run(
                'match (n) return n',
            )
            return resolve(result.records);
        } catch(e) {
            reject(e);
        } 
    })
}

// all food for /nodes/food route
nodes.allFood = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await session.run(
                'match (n:Food) return n'
            )
            return resolve(result.records);
        } catch(e) {
            reject(e);
        }
    })
}

// all suppliers /nodes/supplier
nodes.allSupplier = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await session.run(
                'match (n:Supplier) return n'
            )
            return resolve(result.records);
        } catch(e) {
            reject(e);
        }
    })
}

// all stores /nodes/store
nodes.allStore = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await session.run(
                'match (n:Store) return n'
            )
            return resolve(result.records);
        } catch(e) {
            reject(e);
        }
    })
}

module.exports = nodes;