const nextJest  = require('next/jest.js');
const dotenv    = require('dotenv');
const { loadEnvConfig } = require('@next/env');

dotenv.config({path: '.env.development'});
 
loadEnvConfig(process.cwd());

const createJestConfig = nextJest({
  dir: '.'
});

const jestConfig = createJestConfig({
  moduleDirectories: ['node_modules', '<rootDir>', '.env']
});

module.exports = jestConfig;