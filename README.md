# boxel-cli

Command line interface for creating and managing Boxels (recipe-driven system images running on BoxOS).

## Installation

Coming soon...

## Usage

### Example: Create a new Boxel
```
$ boxel create myboxel
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

### Example: Create a new Boxel with some options
```
$ boxel create myboxel --brl-version 0.0.2 --base-os=boxos --base-os-version=0.0.2
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
