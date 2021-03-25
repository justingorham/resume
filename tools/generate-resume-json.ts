import { writeFile } from 'fs';
import { join } from 'path';
import { promisify } from 'util';
import { resume } from '../src/index';

const writeFileAsync = promisify(writeFile);
const jsonFilepath = join(__dirname, '..', 'resume.json');

writeFileAsync(jsonFilepath, JSON.stringify(resume, null, 2))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });