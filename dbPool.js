const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: 'aqx5w9yc5brambgl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'm4uczqk07nizg82s',
    password: 'jjcce4z1yndxc21y',
    database: 'pxe2qkxvek3zot7z'
});

module.exports = pool;

