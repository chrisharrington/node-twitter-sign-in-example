A tiny Express-powered Node.js client for handling Twitter OAuth requests.

Clone, then install modules:

```
npm install
```

You'll need to create lib/secret.json that contains your credentials for interacting with Twitter. It should take this format:

```
{
  "twitter_keys": {
    "consumer_key": "",
    "consumer_secret": "",
    "callbackURL": ""
  }
}
```

Run the server by executing `index.js`:

```
node index
```

<b>Note:</b> This is just the server-side implementation; you'll need a front-end to actually sign in with Twitter.
