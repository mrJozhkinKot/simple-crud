/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  reset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testTimeout: 5000
};