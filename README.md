# firestore-react-ssr
Using NextJS, Firestore, ReactJS to make a ssr application.

# Intro

about a new way to handle relational data with store by nosql, enhance atomic design pattern used by reactjs.
more detail can be found in: [COMPLEX RELATIONAL APP BY, REACTJS + FIRESTORE + SERVERLESS](https://angry-johnson-99693b.netlify.com/post/firestore-nextjs-serverless/)

# Usage

## Install dependency
```
yarn install --save

mv env.example .env
```

## add firestore env

> route to /path/to/root/app/lib/store.js

```
add firebase config at line:13
```

## Run Server
```
yarn dev
```

## Data sample

```json
"users": [
    "xxx": {
        "name": "???"
    }
]
"wallets": [
    "yyy": {
        "name": "wallet1",
        "user_id": "xxx"
    },
    "zzz": {
        "name": "wallet2",
        "user_id": "xxx"
    }
]

"cards": [
    "kkk": {
        "name": "card1",
        "wallet_id": "yyy"
    },
    "hhh": {
        "name": "card2",
        "wallet_id": "zzz"
    }
]
```
