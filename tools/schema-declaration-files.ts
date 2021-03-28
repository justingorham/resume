import { writeFile } from 'fs';
import { get } from 'https';
import { compile } from 'json-schema-to-typescript';
import { join } from 'path';
import { promisify } from 'util';

const writeFileAsync = promisify(writeFile);
const schemaUrl = 'https://raw.githubusercontent.com/jsonresume/resume-schema/master/schema.json';
const workspace = join(__dirname, '..');
const schemaJsonPath = join(workspace, 'schema.json');
const declarationFilePath = join(workspace, 'schema.d.ts');

const downloadJson = () => new Promise<any>((resolve, reject) => {
    get(schemaUrl, (res) => {
        let body = '';
        res.on('data', (chunk) => { body += chunk; });
        res.on('end', () => {
            try {
                const json = JSON.parse(body);
                resolve(json);
            } catch (err) {
                reject(err);
            }
        });
    }).on('error', (err) => {
        reject(err);
    })
});

const writeFiles = async (schema: any) => {
    const schemaAsync = writeFileAsync(schemaJsonPath, JSON.stringify(schema, null, 2));
    const declarationAsync = compile(schema, 'resume').then(def => writeFileAsync(declarationFilePath, def));
    await Promise.all([schemaAsync, declarationAsync]);
}


downloadJson()
    .then((s) => writeFiles(s))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });