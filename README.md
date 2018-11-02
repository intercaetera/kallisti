<img src="https://i.imgur.com/ckXqZj2.png" alt="Kallisti logo" align="right" />

# kallisti

> Another Discord command line interface.

Kallisti is a fast, featureful terminal client for Discord built with **blessed**, **React** and **Redux**.

Kallisti is currently unfinished and in constant development.

## Development installation

This currently requires manual extraction of an Authorization token from Discord. We are investigating easier methods of authentication for the future.

1. Install [nodejs](https://nodejs.org/en/) and npm.
2. Clone the repository (`git clone https://github.com/MrHuds0n/kallisti && cd kallisti`).
3. Open Discord in your browser.
4. Go to Developer Tools -> Network and find an XHR request.
5. In _Request headers_ find one that says _Authorization_ and copy the right hand side of the header.
6. Create a file named `.env` in the project folder with the following contents:

```
TOKEN=your_auth_token_here
```

7. Run the app with `npm run dev`.
