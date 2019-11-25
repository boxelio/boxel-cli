#!/usr/bin/env node

const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');

import { Help } from './help';
import { ImageBuild } from './image/build';
import { RecipeCreate } from './recipe/create';

const OKTA_ORG_URL="https://dev-191118.okta.com";
const OKTA_CLIENT_ID="0oa1vtuf1sdUcn5sk357";
const OKTA_SCOPES="openid profile email";
const OKTA_REDIRECT_PORT="9999";

const mainDefinitions = [
  { name: 'command', defaultOption: true }
];
const mainCommand = commandLineArgs(mainDefinitions, { stopAtFirstUnknown: true });
let argv = mainCommand._unknown || [];

if (mainCommand.command === undefined) {
  Help.help();
}

if (mainCommand.command === 'help') {
  const subCommandDefinitions = [
    { name: 'subcommand', defaultOption: true }
  ];
  const subCommand = commandLineArgs(subCommandDefinitions, { argv, stopAtFirstUnknown: true });

  if (subCommand.subcommand === 'image') { Help.helpImage(); }
  if (subCommand.subcommand === 'instance') { Help.helpInstance(); }
  if (subCommand.subcommand === 'login') { Help.helpLogin(); }
  if (subCommand.subcommand === 'logout') { Help.helpLogout(); }
  if (subCommand.subcommand === 'recipe') { Help.helpRecipe(); }
  if (subCommand.subcommand === 'simulate') { Help.helpSimulate(); }
}

if (mainCommand.command === 'image') {
  const subCommandDefinitions = [
    { name: 'subcommand', defaultOption: true }
  ];
  const subCommand = commandLineArgs(subCommandDefinitions, { argv, stopAtFirstUnknown: true });
  argv = subCommand._unknown || [];

  if (subCommand.subcommand === 'build') {
    const optionDefinitions = [
      { name: 'path', alias: 'p', type: String, description: 'Path to build' },
      { name: 'wtf', defaultOption: true }
    ];
    const options = commandLineArgs(optionDefinitions, { argv, stopAtFirstUnknown: false });

    const imageBuild = new ImageBuild(options);
    imageBuild.perform();
  }
}

if (mainCommand.command === 'instance') {

}

if (mainCommand.command === 'login') {
  const pkceLogin = require('./pkceLogin');
  const instance = pkceLogin();
  instance.login(OKTA_ORG_URL, OKTA_CLIENT_ID, OKTA_SCOPES, OKTA_REDIRECT_PORT);
}

if (mainCommand.command === 'logout') {

}

if (mainCommand.command === 'recipe') {
  const subCommandDefinitions = [
    { name: 'subcommand', defaultOption: true }
  ];
  const subCommand = commandLineArgs(subCommandDefinitions, { argv, stopAtFirstUnknown: true });
  argv = subCommand._unknown || [];

  if (subCommand.subcommand === 'create') {
    const optionDefinitions = [
      { name: 'name', alias: 'n', type: String, description: 'Name of the recipe' },
      { name: 'path', alias: 'p', type: String, description: 'Path to generate' },
      { name: 'template', alias: 't', type: String, description: 'Template to generate from' },
      { name: 'interactive', alias: 'i', type: Boolean, description: 'Interactive mode' },
      { name: 'wtf', defaultOption: true }
    ];
    const options = commandLineArgs(optionDefinitions, { argv, stopAtFirstUnknown: false });

    const recipeCreate = new RecipeCreate(options);
    recipeCreate.perform();
  }
}

if (mainCommand.command === 'simulate') {

}
