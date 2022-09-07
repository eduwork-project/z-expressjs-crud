module.exports = {
  mongoURL: process.env.MONGO_URL || "mongodb://localhost:27017",
  db: process.env.MONGO_DB || "test",
}