import {fileURLToPath} from 'node:url'
import path from 'node:path'
import fs from "node:fs";

const filePath = fileURLToPath(import.meta.url)
const dirPath = path.dirname(filePath)

const demoPath = path.join(dirPath, 'demo.txt')

const content = fs.readFileSync(demoPath, 'utf8')

console.log(content)

