module.exports = {
  displayName: 'api',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  transformIgnorePatterns: ["node_modules/(?!axios)"],
  coverageDirectory: '../../coverage/apps/api',
  verbose: true
};
