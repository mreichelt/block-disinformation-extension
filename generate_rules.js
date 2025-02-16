const fs = require('fs');
const path = require('path');

const inputFileName = process.argv[2];

if (!inputFileName) {
    console.error("Error: Please provide a filename as an argument (e.g., node generate_rules.js hosts.txt)");
    process.exit(1);
}

const inputFilePath = path.join(__dirname, inputFileName);

if (!fs.existsSync(inputFilePath)) {
    console.error(`Error: File '${inputFileName}' not found in ${__dirname}`);
    process.exit(1);
}

const hostnames = fs.readFileSync(inputFilePath, 'utf-8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

function generateRules(hostnames) {
    const rules = hostnames.map((host, index) => {
        const escapedHost = host.replace(/\./g, "\\.");

        return {
            id: index + 1,
            priority: 1,
            action: {
                type: "block"
            },
            condition: {
                regexFilter: `^https?:\\/\\/(.*\\.)?${escapedHost}`,
                resourceTypes: ["main_frame", "sub_frame", "script", "image", "xmlhttprequest", "other"]
            }
        };
    });

    return JSON.stringify(rules, null, 4);
}

const rulesJson = generateRules(hostnames);
const outputFileName = `rules_${path.basename(inputFileName, '.txt')}.json`;
const outputFilePath = path.join(__dirname, outputFileName);

fs.writeFileSync(outputFilePath, rulesJson);

console.log(`rules generated successfully as '${outputFileName}'`);
