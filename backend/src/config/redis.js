const { Redis } = require('@upstash/redis');
require('dotenv').config();

const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

let redis = null;

if (redisUrl && redisToken) {
  redis = new Redis({
    url: redisUrl,
    token: redisToken,
  });
} else {
  console.warn('Missing Upstash Redis environment variables. Caching will be disabled or throw errors.');
}

module.exports = redis;
