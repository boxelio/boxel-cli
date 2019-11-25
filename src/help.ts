'use strict';

const figlet = require('figlet');

export class Help {

  static help() {
    figlet('boxel', function(err: any, data: any) {
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

  static helpImage() {
    figlet('boxel', function(err: any, data: any) {
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

  static helpInstance() {
    figlet('boxel', function(err: any, data: any) {
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
      console.log(' scan       Scan the local network for running instances');
    });
  }

  static helpLogin() {
    figlet('boxel', function(err: any, data: any) {
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

  static helpLogout() {
    figlet('boxel', function(err: any, data: any) {
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

  static helpRecipe() {
    figlet('boxel', function(err: any, data: any) {
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

  static helpSimulate() {
    figlet('boxel', function(err: any, data: any) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      console.log(data)

      console.log('USAGE\n');
      console.log(' $ boxel simulate [SUBCOMMAND] [OPTIONS]\n');

      console.log('SUBCOMMANDS\n');
      console.log(' start      Start the simulator for a recipe');
      console.log(' stop       Stop the running simulator');
    });
  }
}
