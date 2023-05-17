const Log = require("../../models/Log")
const log_data = require("../../services/logger/logger")
const conn = require("../../db/conn")

describe("Create logs with logger", () => {

	beforeEach(async () => {
		await conn.sync({ force: true });
	});

	afterAll(async () => {
		await conn.close();
	});

	test("serious function should add a serious log in database", async () => {
		const data = {
			message: "Test serious log",
			path: "/test/path",
		};

		await log_data.serious(data);

		const log = await Log.findOne({ where: { id: 1 } })

		expect(log.severity_level).toBe("serious");
		expect(log.message).toBe("Test serious log");
		expect(log.error).toBe("");
		expect(log.extra).toBe("path:/test/path");
	});

	test("error function should add an error log in database", async () => {
		const data = {
		  message: "Test error log",
		  error: "Test error",
		};
	  
		await log_data.error(data);
	  
		const log = await Log.findOne({ where: { id: 1 } });
	  
		expect(log.severity_level).toBe("error");
		expect(log.message).toBe("Test error log");
		expect(log.error).toBe("Test error");
	  });
	  
	  test("warning function should add a warning log in database", async () => {
		const data = {
		  message: "Test warning log",
		};
	  
		await log_data.warning(data);
	  
		const log = await Log.findOne({ where: { id: 1 } });
	  
		expect(log.severity_level).toBe("warning");
		expect(log.message).toBe("Test warning log");
		expect(log.error).toBe("");
	  });
	  
	  test("info function should add an info log in database", async () => {
		const data = {
		  message: "Test info log",
		};
	  
		await log_data.info(data);
	  
		const log = await Log.findOne({ where: { id: 1 } });
	  
		expect(log.severity_level).toBe("info");
		expect(log.message).toBe("Test info log");
	  });
	  
	  test("performance function should add a performance log in database", async () => {
		const data = {
		  message: "Test performance log",
		  path: "/test/path",
		};
	  
		await log_data.performance(data);
	  
		const log = await Log.findOne({ where: { id: 1 } });
	  
		expect(log.severity_level).toBe("performance");
		expect(log.message).toBe("Test performance log");
		expect(log.extra).toBe("/test/path");
	  });
	  
	  test("other function should add an other log in database", async () => {
		const data = {
		  message: "Test other log",
		  importance_level: "1",
		  aditionalInfo: "Additional info",
		};
	  
		await log_data.other(data);
	  
		const log = await Log.findOne({ where: { id: 1 } });
		console.log(log.extra)
		expect(log.severity_level).toBe("other");
		expect(log.message).toBe("Test other log");
		expect(log.extra).toBe("Importance level:1 Aditional Info:Additional info");
	  });

});