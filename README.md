# firestore-react-ssr
Using NextJS, Firestore, ReactJS to make a ssr application.

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
