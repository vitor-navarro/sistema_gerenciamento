const log_data = require("../services/logger/logger");
const process = require("process");

function responseTimeMiddleware(req, res, next) {
  const startTime = Date.now();
  const startCpuUsage = process.cpuUsage();

  res.on("finish", () => {
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    const cpuUsage = process.cpuUsage(startCpuUsage).user / 1000;

    const data = {
      message: "Time" + responseTime +
        "ms, CPU:" + cpuUsage + "ms",
      path: req.originalUrl,
    };

    log_data.performance(data);

  });

  next();
}

module.exports = responseTimeMiddleware;