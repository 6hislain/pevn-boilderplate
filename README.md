# PEVN boilerplate

A minimal PEVN stack boilerplate

## Requirements

- node 20
- mongodb
- code editor
- browser

## Installation

- git clone https://github.com/6hislain/pevn-boilerplate
- cd pevn-boilerplate/client
- npm install
- cd ../server
- npm install
- cd ..
- npm i -g concurrently
- concurrently "npm run dev --prefix client" "npm run dev --prefix server"
