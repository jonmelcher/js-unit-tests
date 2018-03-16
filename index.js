#!/usr/bin/env node
const { spawn } = require('child_process');
const cli = require('commander');


cli
    .version('1.0.0')
    .arguments('<pattern> [name]')
    .action((pattern, name) => {
        const script = name ? './coverage.sh' : './test.sh';
        const s = spawn(
            script,
            [ pattern, name ],
            {
                cwd: __dirname,
                stdio: 'inherit',
                shell: true
            }
        );
    })
    .parse(process.argv);