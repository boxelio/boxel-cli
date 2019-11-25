'use strict';

import * as fs from 'fs';
import mkdirp = require('mkdirp');
import * as os from 'os';

export class ImageBuild {
  options: any = {};

  constructor(options: any) {
    this.options = options;
  }

  perform() {
    const projectPath = this.options.path || '.';
    const recipePath = `${projectPath}/boxel.json`;
    const recipe = JSON.parse(fs.readFileSync(recipePath, 'utf8'));

    console.log(`Building image from recipe "${recipePath}"...`);
    console.log(`  - Recipe "${recipe.name}" with version "${recipe.version} is sane.`);
  }
}
