import { dirname } from 'path';

export const rootDir = dirname(process.argv[1]);
console.log(rootDir)
