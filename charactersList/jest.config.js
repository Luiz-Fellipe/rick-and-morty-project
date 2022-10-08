module.exports = {
  testPathIgnorePatterns: ['/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },

  moduleNameMapper: {
    '^@/styles': ['<rootDir>/src/styles'],
    '^[@./a-zA-Z0-9$_-]+\\.(jpg|svg|webp)$': '<rootDir>/src/utils/fileMock.ts',
    '^@/hooks/(.*)$': ['<rootDir>/src/hooks/$1'],
    '^@/services/(.*)$': ['<rootDir>/src/services/$1'],
    '^@/tests/(.*)$': ['<rootDir>/src/tests/$1'],
    '^@/components/(.*)$': ['<rootDir>/src/components/$1'],
    "\\.(scss|css|sass)$": "identity-obj-proxy",
  },
  testEnvironment: 'jsdom',
};
