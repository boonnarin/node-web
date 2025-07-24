import mysql from 'mysql2';

import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
});

connection.connect(err => {
    if (err) {
        console.error('ไม่สามารถเชื่อมต่อกับฐานข้อมูล MySQL ได้');
        console.error('รายละเอียดข้อผิดพลาด:', err?.message || err);

        //ไม่ให้แอปทำงานต่อ
        // process.exit(1);
    } else {
        console.log('✅ เชื่อมต่อฐานข้อมูล MySQL สำเร็จ');
    }
});

export default connection;
