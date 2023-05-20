const getUserByName = require("../../../services/users/getUserByName")

const User = require("../../../models/User")

const { clearDatabase } = require("../../utilFunctionsToTest")

describe("Get User by name", ()=>{

	beforeAll(async ()=>{
		await clearDatabase()
	})

	afterAll(async ()=>{
		await clearDatabase()
	})

	test("should return false if the user does not exist", async ()=>{
		expect.assertions(4);
		const user = "userthatdoesnotexistusergettest"

		await getUserByName(user).then((response)=>{
			expect(response.success).toBeFalsy()
			expect(response.status).toBe(401)
			expect(response.message).toBe("Usuário não encontrado")
			expect(response.name).toBe("userthatdoesnotexistusergettest")
		})
	})

	
	test("must return true and the user if the user name is registered", (done)=>{
		expect.assertions(5);

		const userData = {
			name: 'userthatexistusergettest',
			email: 'teste@example.com',
			passwordHash: 'passwprhasdasfas',
			dataPolicyCheck: true,
		};
		
		User.create(userData).then((response) => {
			const user = "userthatexistusergettest"

			getUserByName(user).then((response)=>{
				expect(response.success).toBeTruthy()
				expect(response.status).toBe(200)
				expect(response.message).toBe("")
				expect(response.userDB).toBeDefined();
				expect(typeof response.userDB).toBe("object")
				done()
			})
		});
	})
})