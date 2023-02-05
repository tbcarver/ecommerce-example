# eCommerce Example using React and NestJs

## To Debug in VSCode
* Create a Node: Launch via NPM configuration using `npm run start`
```
    {
      "name": "Launch via NPM",
      "request": "launch",
      "runtimeArgs": [
        "run-script",
        "start"
      ],
      "runtimeExecutable": "npm",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "type": "node"
    },
```
* Create a Chrome: Launch configuration
```
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}"
    },
```
* Start the Launch via NPM
* Start the Lauch Chrome