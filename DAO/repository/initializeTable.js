const userRepository = require("./user.repository");
const communityRepository = require("./community.repository");
const roleRepository = require("./role.repository");
const memberRepository = require("./members.repository");

exports.initializeTables = (forceCreation) => {
	roleRepository.createRoleTable(forceCreation);
	userRepository
		.createUserTable(forceCreation)
		.then(() => {
			communityRepository.createCommunityTable(forceCreation).then(() => {
				memberRepository.createMemberTable(forceCreation);
			});
		})

		.catch((err) => {
			console.log("Error Occurred in initializing databases");
		});
};
