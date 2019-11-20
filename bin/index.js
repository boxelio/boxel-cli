#!/usr/bin/env node

const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const figlet = require('figlet');

const mainDefinitions = [
  { name: 'name', defaultOption: true }
];
const mainCommand = commandLineArgs(mainDefinitions, { stopAtFirstUnknown: true });
const argv = mainCommand._unknown || [];
console.log(mainCommand);

function help() {
  figlet('boxel', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    console.log('Create and manage Boxel recipes and images for embedded platforms.\n');

    console.log('USAGE\n');
    console.log(' $ boxel [COMMAND]\n');

    console.log('COMMANDS\n');
    // console.log(' flash      Flash an image to a thumbdrive');
    console.log(' help       Get help for a command');
    console.log(' image      Create and manage images');
    console.log(' instance   Manage a running Boxel instance');
    console.log(' login      Login to BoxelHub');
    console.log(' logout     Logout of BoxelHub');
    // console.log(' publish    Publish a recipe to BoxelHub');
    console.log(' recipe     Create and manage recipes');
    console.log(' simulate   Simulate in a local VM');

    console.log('\nTo get command help, pass the command to "help" in order to learn more about the subcommands and options available.');
  });
}

function helpImage() {
  figlet('boxel', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)

    console.log('USAGE\n');
    console.log(' $ boxel image [SUBCOMMAND] [OPTIONS]\n');

    console.log('SUBCOMMANDS\n');
    console.log(' build      Build an image from a recipe');
    console.log(' flash      Flash an image to a thumbdrive');
    console.log(' list       List images');
    console.log(' remove     Remove an image');
  });
}

function helpInstance() {
  figlet('boxel', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)

    console.log('USAGE\n');
    console.log(' $ boxel instance [SUBCOMMAND] [OPTIONS]\n');

    console.log('SUBCOMMANDS\n');
    console.log(' deploy     Deploy an image to a fleet of instances');
    console.log(' push       Push an image to a specific instance');
    console.log(' recovery   Reboot an instance into recovery mode');
    console.log(' remove     Remove an image from a specific instance');
  });
}

function helpLogin() {
  figlet('boxel', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)

    console.log('USAGE\n');
    console.log(' $ boxel login\n');

    console.log('Prompt for credentials to login to BoxelHub.');
  });
}

function helpLogout() {
  figlet('boxel', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)

    console.log('USAGE\n');
    console.log(' $ boxel logout\n');

    console.log('Logout of BoxelHub.');
  });
}

function helpRecipe() {
  figlet('boxel', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)

    console.log('USAGE\n');
    console.log(' $ boxel recipe [SUBCOMMAND] [OPTIONS]\n');

    console.log('SUBCOMMANDS\n');
    console.log(' create     Create a new local recipe');
    console.log(' destroy    Remove a known local recipe');
    console.log(' fetch      Fetch a recipe from DockerHub to customize or build');
    console.log(' publish    Publish a recipe to DockerHub');
  });
}

if (mainCommand.name === undefined) {
  help();
}

if (mainCommand.name === 'help') {
  const subCommandDefinitions = [
    { name: 'name', defaultOption: true }
  ];
  console.log(argv);
  const subCommand = commandLineArgs(subCommandDefinitions, { argv, stopAtFirstUnknown: true });
  console.log(subCommand);

  if (subCommand.name === 'image') { helpImage(); }
  if (subCommand.name === 'instance') { helpInstance(); }
  if (subCommand.name === 'login') { helpLogin(); }
  if (subCommand.name === 'logout') { helpLogout(); }
  if (subCommand.name === 'recipe') { helpRecipe(); }
  if (subCommand.name === 'simulate') { helpSimulate(); }
}
