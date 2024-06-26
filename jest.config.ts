import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: false,
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testEnvironment: 'node',
};

export default config;
