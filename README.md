# boxel-cli

Command line interface for creating and managing Boxels (recipe-driven system images running on BoxOS).

## Installation

Coming soon...

## Usage

## boxel login

### Example: Login to BoxelHub
```
$ boxel login
Login to BoxelHub
Username: kevinelliott
Password: ****************
Successfully logged in to BoxelHub.
```

## boxel logout

### Example: Logout of BoxelHub
```
$ boxel logout
Successfully logged out of BoxelHub.
```

## boxel recipe

### Example: Create a new Boxel Recipe
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
$
```

### Example: Create a new Boxel Recipe with some options
```
$ boxel recipe create myboxel --brl-version 0.0.2 --base-os=boxos --base-os-version=0.0.2
Creating boxel "myboxel"...
  - New directory (./myboxel)
  - Initialized default recipe (./myboxel/boxel.json)
    - Current Boxel Recipe Language: v0.0.2
    - Current Stable Base OS: BoxOS v0.0.2
    - Current Stable Upstream OS: DietPi v6.26.3
  - Ensuring hooks
  - Linking libraries
$
```

### Example: Publish a Boxel Recipe
```
$ cd myboxel
$ boxel recipe publish
Publishing boxel "myboxel"...
  - BoxelHub User: kevinelliott
  - Incremented recipe version from 0.0.2 to 0.0.3
  - Publishing "myboxel:v0.0.3" publicly
Boxel "myboxel:v0.0.3" published to https://hub.boxel.io/kevinelliott/myboxel/0.0.3
$
```
