# boxel-cli

Command line interface for creating and managing Boxels (recipe-driven system images running on BoxOS).

## Installation

```
$ npm install @boxel/boxel-cli -g
```

## Usage

### boxel

```
~/C/D/w/b/boxel-cli ❯❯❯ boxel                                                                                                                    master
  _                   _
 | |__   _____  _____| |
 | '_ \ / _ \ \/ / _ \ |
 | |_) | (_) >  <  __/ |
 |_.__/ \___/_/\_\___|_|

Create and manage Boxel recipes and images for embedded platforms.

USAGE

 $ boxel [COMMAND]

COMMANDS

 help       Get help for a command
 image      Create and manage images
 instance   Manage a running Boxel instance
 login      Login to BoxelHub
 logout     Logout of BoxelHub
 recipe     Create and manage recipes
 simulate   Simulate in a local VM

To get command help, pass the command to "help" in order to learn more about the subcommands and options available.
```

### boxel login

#### Example: Login to BoxelHub
```
$ boxel login
Login to BoxelHub
Username: kevinelliott
Password: ****************
Successfully logged in to BoxelHub.
```

### boxel logout

#### Example: Logout of BoxelHub
```
$ boxel logout
Successfully logged out of BoxelHub.
```

### boxel image build

#### Example: Build a Boxel Image from a Boxel Recipe
```
$ cd myboxel
$ boxel build --recipe boxel.json --platform rpi4 --net wifi --net-config dhcp --hostname adsb4
Building Boxel image...
  - Recipe "myboxel" with version "0.0.2" is sane.
  - Base OS (BoxOS v0.0.1) not cached, fetching... stored to ~/.boxel/bases/boxos-v0.0.1-rpi4
  - Installing components...
    - flightaware-dump1090
    - flightaware-skyview1090
    - adsbexchange-mlat-client
    - wiedehopf-tar1090
  - Applying host configuration...
    - Hostname: adsb4
    - Network type: wifi
    - Network config: DHCP
Image has been built to ./images/20191119-rpi4-adsb4.boxel
```

### boxel image flash

#### Example: Flash a Boxel Image to Thumbdrive
```
$ boxel image flash
Preparing to flash an image to /dev/sda5...
  - Detected latest image: ./images/2019119-rpi4-adsb4.boxel
  - Converting image to flashable image
Flashing ./images/2019119-rpi4-adsb4.img to /dev/sda5...
  - Partitioning...
    - BoxOS Recovery partition initiatized.
    - BoxOS Recovery partition data written.
    - Primary partition initialized.
    - Secondary partition initialized.
    - Data partition initialized.
  - Writing image to Primary partition... Done.
  - Verifying... OK.
  - Unmounted.
You may now remove the drive and insert it into your device.
```

### boxel recipe

#### Example: Create a new Boxel Recipe
```
$ boxel recipe create myboxel
Creating boxel "myboxel"...
  - New directory (./myboxel)
  - Initialized default recipe (./myboxel/boxel.json)
    - Current Boxel Recipe Language: v0.0.1
    - Current Stable Base OS: BoxOS v0.0.1
    - Current Stable Upstream OS: DietPi v6.26.3
  - Ensuring hooks
  - Linking libraries
Customize your new boxel recipe in "./myboxel/boxel.json".
```

#### Example: Create a new Boxel Recipe with some options
```
$ boxel recipe create myboxel --brl-version 0.0.2 --base-os boxos --base-os-version 0.0.2
Creating boxel "myboxel"...
  - New directory (./myboxel)
  - Initialized default recipe (./myboxel/boxel.json)
    - Current Boxel Recipe Language: v0.0.2
    - Current Stable Base OS: BoxOS v0.0.2
    - Current Stable Upstream OS: DietPi v6.26.3
  - Ensuring hooks
  - Linking libraries
Customize your new boxel recipe in "./myboxel/boxel.json".
```

#### Example: Publish a Boxel Recipe
```
$ cd myboxel
$ boxel recipe publish
Publishing boxel "myboxel"...
  - BoxelHub User: kevinelliott
  - Incremented recipe version from 0.0.2 to 0.0.3
  - Publishing "myboxel:v0.0.3" publicly
Boxel "myboxel:v0.0.3" published to https://hub.boxel.io/kevinelliott/myboxel/v0.0.3
```
