// news-image-20261124 entry (Node 22, standard library only).
// The newspaper image for Tuesday 24 November 2026 ships beside this file
// as entry.png; this program copies it to the output directory.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The copy is a plain byte-for-byte transfer, so repeated runs always
// produce identical output bytes.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
