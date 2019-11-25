'use strict';

const generate = require('project-name-generator');
const merge = require('deepmerge');

import * as fs from 'fs';
import mkdirp = require('mkdirp');
import * as os from 'os';

const boxelSettingsDir = `${os.homedir()}/.boxel`;
const defaultTemplate = require('../templates/default.template.json');
let userDetails = { userInfo: { name: 'REPLACE: Change this', email: 'REPLACE: Change this' } };
userDetails = JSON.parse(fs.readFileSync(`${boxelSettingsDir}/hub`, 'utf8'));

export class RecipeCreate {
  options: any = {};

  constructor(options: any) {
    this.options = options;
  }

  perform() {
    const name = this.options.name || generate({ number: true }).dashed;
    const projectPath = this.options.path || "./" + name;
    const recipePath = `${projectPath}/boxel.json`;

    const brlVersion = '0.0.1';
    const baseOS = {
      name: 'BoxOS',
      version: '0.0.1'
    };
    const upstreamOS = {
      name: 'DietPi',
      version: '6.26.3'
    }

    console.log(`Creating boxel "${name}"...`);
    console.log(`  - New directory ("${projectPath}")`);
    mkdirp(projectPath, function(_err: any) {
      const recipe = {
        name: name,
        version: '0.0.1',
        maintainer: {
          name: userDetails.userInfo.name,
          email: userDetails.userInfo.email
        },
        components: [
          {
            name: 'flightaware-dump1090',
            image: 'boxel/flightaware-dump1090:latest'
          }
        ]
      };

      const template = defaultTemplate;
      const mergedRecipe = merge(defaultTemplate, recipe);

      console.log(`  - Initialized default recipe ("${recipePath}")`);
      console.log(`    - Recipe Format : Boxel Recipe Language v${brlVersion} (current)`);
      console.log(`    - Base OS       : ${baseOS.name} v${baseOS.version} (current)`);
      console.log(`    - Upstream OS   : ${upstreamOS.name} v${upstreamOS.version} (current)`);
      console.log(`Customize your new boxel recipe at "${recipePath}".`);

      try {
        fs.writeFileSync(`${recipePath}`, JSON.stringify(mergedRecipe));
      } catch (err) {
        console.error(err);
      }
    });
  }
}
