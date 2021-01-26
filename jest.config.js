module.exports = {
  roots: ['<rootDir>/src/components/', '<rootDir>/__mocks__/'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  collectCoverageFrom: ['<rootDir>/src/components/**'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  setupFiles: [
    'jest-localstorage-mock',
    '<rootDir>/__mocks__/nextImageMock.js',
  ],
  moduleNameMapper: {
    '@/components(.*)$': '<rootDir>/src/components$1',
    '@/common(.*)$': '<rootDir>/src/components/common$1',
    '@/layouts(.*)$': '<rootDir>/src/layouts$1',
    '@/hooks(.*)$': '<rootDir>/src/hooks$1',
    '@/helpers(.*)$': '<rootDir>/src/helpers$1',
    '@/services(.*)$': '<rootDir>/src/services$1',
    '@/styles(.*)$': '<rootDir>/styles$1',
    '@/graphql(.*)$': '<rootDir>/src/graphql$1',
    '@/context(.*)$': '<rootDir>/src/context$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
