/*

FIRST TIME: npm install
TO START SERVER: npm start

*/

const express = require("express");
const app = express();

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
