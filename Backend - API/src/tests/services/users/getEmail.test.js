const getEmail = require("../../../services/users/getEmail")

const User = require("../../../models/User")

const { clearDatabase } = require("../../utilFunctionsToTest")

describe("Get Email", ()=>{

	beforeAll(async ()=>{
		await clearDatabase()
	})

	afterAll(async ()=>{
		await clearDatabase()
	})

	test("should return false if the email does not exist", async ()=>{
		expect.assertions(4);
		const email = "emailthatdoesnotexist@getemailtest.com"

		await getEmail(email).then((response)=>{
			console.log(response)
			expect(response.success).toBeFalsy()
			expect(response.status).toBe(401)
			expect(response.message).toBe("Email não encontrado")
			expect(response.email).toBe("emailthatdoesnotexist@getemailtest.com")
		})
	})


	test("must return true and the user if the email is registered", (done)=>{
		expect.assertions(5);

		const userData = {
			name: 'teste',
			email: 'emailthatexist@getemailtest.com',
			passwordHash: 'passwprhasdasfas',
			dataPolicyCheck: true,
		};
		
		User.create(userData).then((response) => {
			const email = "emailthatexist@getemailtest.com"

			getEmail(email).then((response)=>{
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