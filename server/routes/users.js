const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const { users } = new PrismaClient();

// create
router.post("/", async (req, res) => {
	const { username } = req.body;

	const user = await users.findUnique({
		where: {
			username: username,
		},
		select: {
			username: true,
		},
	});
	res.json(user);
});

// reads all users
router.get("/", async (req, res) => {
	const all_users = await users.findMany({
		select: {
			user_id: true,
			username: true,
			password: true,
		},
	});
	res.json(all_users);
});

// reads user based on id
router.get("/:id", async (req, res) => {
	const { user_id } = req.params;
	const user = await users.findFirst({
		where: {
			user_id: user_id,
		},
	});
	res.json(user);
});

// update

// delete

module.exports = router;
