const log_data = require("../../services/logger/logger")

const { clearDatabase } = require("../utilFunctionsToTest");

describe("Create logs with logger", () => {

	beforeAll(async () => {
		await clearDatabase()
	});

	afterAll(async ()=>{
		await clearDatabase()
	})
	
	test("serious function should add a serious log in database", (done) => {
		expect.assertions(4);
		const data = {
			message: "Test serious log",
			path: "/test/path",
		};

		log_data.serious(data).then(async (log) => {
			expect(log.severity_level).toBe("serious");
			expect(log.message).toBe("Test serious log");
			expect(log.error).toBe("");
			expect(log.extra).toBe("path:/test/path");
			done();
		});
	});

	test("error function should add an error log in database", (done) => {
		expect.assertions(3);
		const data = {
			message: "Test error log",
			error: "Test error",
		};

		log_data.error(data).then(async (log) => {
			expect(log.severity_level).toBe("error");
			expect(log.message).toBe("Test error log");
			expect(log.error).toBe("Test error");
			done();
		});
	});

	test("warning function should add a warning log in database", (done) => {
		expect.assertions(3);
		const data = {
			message: "Test warning log",
		};

		log_data.warning(data).then(async (log) => {
			expect(log.severity_level).toBe("warning");
			expect(log.message).toBe("Test warning log");
			expect(log.error).toBe("");
			done();
		});
	});

	test("info function should add an info log in database", (done) => {
		expect.assertions(2);
		const data = {
			message: "Test info log",
		};

		log_data.info(data).then(async (log) => {
			expect(log.severity_level).toBe("info");
			expect(log.message).toBe("Test info log");
			done();
		});
	});

	test("performance function should add a performance log in database", (done) => {
		expect.assertions(3);
		const data = {
			message: "Test performance log",
			path: "/test/path",
		};

		log_data.performance(data).then(async (log) => {
			expect(log.severity_level).toBe("performance");
			expect(log.message).toBe("Test performance log");
			expect(log.extra).toBe("/test/path");
			done();
		});
	});

	test("other function should add an other log in database", (done) => {
		expect.assertions(3);
		const data = {
			message: "Test other log",
			importance_level: "1",
			aditionalInfo: "Additional info",
		};

		log_data.other(data).then(async (log) => {
			expect(log.severity_level).toBe("other");
			expect(log.message).toBe("Test other log");
			expect(log.extra).toBe("Importance level:1 Aditional Info:Additional info");
			done();
		});
	});
});