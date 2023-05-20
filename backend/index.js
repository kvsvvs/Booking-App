const app = require('./src/app');
const cors = require('cors');
const logger = require('./src/middleware/winston.logger');
app.use(cors());
app.listen(process.env.APP_PORT, () => {
  logger.info(`Server is running on port ${process.env.APP_PORT}`);
});
