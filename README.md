[![Architect](https://i.postimg.cc/VkVMV4X6/architect.png)](https://github.com/fomolol/architect)

> The architect is a scaffolding aid that helps in the creation of various components used throughout a production application. The following outlines the procedures required in order to use these custom scaffolds.

# Getting started

1. `yarn add @fomolol/architect`
1. Update your `package.json` with the following. Point src to where files should be created. The script will reference your base directory automatically, though.

```json
...
"directories": {
  "src": "."
},
...
"scripts": {
  ...
  "app": "architect -app ",
  "component": "architect -c ",
  "context": "architect -x ",
  "api": "architect -api ",
  "page": "architect -p ",
  ...
}
```

1. Use it like `yarn component MyNewComponent` or like `./node_modules/.bin/architect -c MyComponent`

## What are scaffolds?

Scaffolding makes it easy to build consistent components that contain various dependencies i.e., [Stories](https://storybook.js.org/) and [tests](https://jestjs.io/) for the application.

### Scaffolds

You can find all of the templates for the scaffolds inside of `scaffolding`. For example, `scaffold-component/*` files are connected via the file `scaffold-component.js`.

#### \_app

- `./node_modules/.bin/architect -app`

#### API components

- `./node_modules/.bin/architect -api `

#### Component

- `./node_modules/.bin/architect -c Test`

#### Context

- `./node_modules/.bin/architect -x Test`

#### Pages

- `./node_modules/.bin/architect -p tests`

#### Storybook Stories

- `./node_modules/.bin/architect -s MyStory`


## Authors

This set of hooks is curated and maintained by the FOMOLOL Classified team:

- Scott Shin ([@shinmc\_](https://twitter.com/shinmc_)) – [FOMOLOL](https://www.fomolol.com)
- Rob Sawyer ([@robksawyer\_](https://twitter.com/robksawyer)) – [FOMOLOL](https://www.fomolol.com)