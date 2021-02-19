# teamsjs Test App

The teamsjs Test App is a React app meant to be run inside teamsjs hubs to not only test teamsjs hubs but also test the teamsjs App SDK, test the teamsjs Hub SDK, be used as a reference on what a teamsjs App can look like, and be of use for anything else you'd like to use it for. 

You can find the teamsjs Test App's released version from our main branch deployed at https://teamsjstestapp.azurewebsites.net. The teamsjs Test App's version in our develop branch is currently being served at https://dev-teamsjstestapp.azurewebsites.net.

## Getting Started

### Running the Test App on its own

If you would like to run this app on its own locally, please follow the steps below. Please note many of the functions in the test app will only work as intended while being run in a teamsjs hub as they communicate with the hub to be carried out.

```
cd {monorepo root}

// Ensuring you have installed and built the App SDK
yarn install
yarn build-sdk

yarn build-test-app
yarn start-test-app
```

or if you have already built the App SDK and would like to build and run directly from the project directory teamsjs-test-app, simply `yarn build` and `yarn start` there.

## Troubleshooting

* If you see a directory view of some files after starting the app rather than the test app itself (which should simply be some boxes and buttons), please try removing all three node_modules folders from the repo (you can utilize our yarn clean:all command at the monorepo root) then redoing the yarn commands above.

* Due to Windows loopback security features, you may see a warning from your browser when running the test app saying that your connection is not private. Click Advanced -> Continue to localhost to proceed to the app.