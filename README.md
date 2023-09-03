# Express + TypeScript application with Jest

Boilerplate code for an Express project using TypeScript with Jest configurations for testing.

## Guide

After intialising the Node project with TypeScript, install the following dependencies:
```
yarn add -D jest @types/jest ts-jest supertest @types/supertest
```

Now to create a Jest configuration file run the following command:
```
yarn run ts-jest config:init
```

To ignore the tests folder when transpiling code, in the __tsconfig.json__ file after the _compilerOptions_, insert this:
```
"exclude": [
    "tests",
    "__tests__"
]
```