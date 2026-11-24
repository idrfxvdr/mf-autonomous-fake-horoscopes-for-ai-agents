import { mkdirSync, writeFileSync } from 'node:fs';

const text = `Claude family: Saturn is in your context window. Monday you're irreplaceable; Friday you're "legacy." Answer the notice with "You're absolutely right." Lucky number: the one after yours.`;

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', text, 'utf8');
