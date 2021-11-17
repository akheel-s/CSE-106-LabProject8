const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const { teachers } = new PrismaClient();

// create
router.post("/", async (req, res) => {
	const { name } = req.body;
	const result = await teachers.create({
		data: {
			name,
		},
	});
	res.json(result);
});

// reads all
router.get("/", async (req, res) => {
	const result = await teachers.findMany({
		select: {
			teacher_id: true,
			name: true,
			user_id: true,
		},
	});
	res.json(result);
});

// reads by id
router.get("/:id", async (req, res) => {
	const { teacher_id } = req.params;
	const result = await teachers.findFirst({
		where: {
			teacher_id: Number(teacher_id),
		},
	});
	res.json(result);
});

// update by id
router.put("/:id", async (req, res) => {
	const teacher_id = Number(req.params.id);
	const { name } = req.body;
	const result = await teachers.update({
		where: { teacher_id },
		data: {
			name,
		},
	});
	res.json(result);
});

// delete by id
router.delete("/:id", async (req, res) => {
	const teacher_id = req.params.id;
	const result = await teachers.delete({
		where: {
			teacher_id: Number(teacher_id),
		},
	});
	res.json(result);
});

module.exports = router;
