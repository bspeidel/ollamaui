module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  extensionsToTreatAsEsm: ['.ts'],
  reporters: ['progress', 'kjhtml', 'coverage-istanbul'],
};
