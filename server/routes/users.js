const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const { users } = new PrismaClient();

router.post("/", async (req, res) => {
	const { username, password } = req.body;
	const result = await users.create({
		data: {
			username,
			password,
		},
	});
	res.json(result);
});

router.get("/", async (req, res) => {
	const result = await users.findMany();
	res.json(result);
});

router.put("/:id", async (req, res) => {
	const user_id = req.params;
	const { username, password } = req.body;
	const result = await users.update({
		where: {
			user_id,
		},
		data: {
			username,
			password,
		},
	});
	res.json(result);
});
router.delete("/:id", async (req, res) => {
	const id = Number(req.params.id);
	const result = await users.delete({
		where: {
			id,
		},
	});
	res.json(result);
});

module.exports = router;
