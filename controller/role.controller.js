const roleRepository = require("./../DAO/repository/role.repository");

exports.createNewRole = (req, res) => {
	const roleData = req.body;
	roleRepository
		.createNewRole(roleData)
		.then((role) => {
			res.status(201).send({
				status: true,
				content: {
					data: role,
				},
			});
		})
		.catch((err) => {
			console.log("Error: ", err);
			res.status(400).send({
				message:
					"Error Occurred in creating new role, Try again later !!",
			});
		});
};

exports.getAllRolesWithPagination = (req, res) => {
	const limit = (10).toString();
	let pageNo = (parseInt(req.query["page"]) || 1).toString();
	let offset = (
		parseInt(limit) * parseInt(pageNo) -
		parseInt(limit)
	).toString();

	const pagination = {
		offset: offset,
		limit: limit,
	};
	roleRepository.getRolesCount().then((count) => {
		if (offset >= count) {
			res.status(300).send({
				status: false,
				message: "Page number is greater than total pages.",
			});
		} else {
			roleRepository
				.getAllRolesWithPagination(pagination)
				.then((result) => {
					res.status(200).send({
						status: true,
						content: {
							totalPages: Math.ceil(count / limit),
							totalRecords: count,
							pageNo: pageNo,
							data: result,
						},
					});
				})
				.catch((err) => {
					console.log("Error: ", err);
					res.status(500).send({
						message: "Something Went wrong while fetching roles",
					});
				});
		}
	});
};
