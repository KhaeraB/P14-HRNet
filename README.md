# P14_HrNet 

- ![Author](<https://img.shields.io/badge/Author-Khaera Belkadi-">)
- ![GitHub repo size](<https://img.shields.io/github/repo-size/KhaeraB/P14-HRNet>)  
- ![GitHub top language](https://img.shields.io/github/languages/top/KhaeraB/P14-HRNet)
- ![GitHub language count](https://img.shields.io/github/languages/count/KhaeraB/P14-HRNet)


This codebase contains the code needed to run the backend for Argent Bank.

## Getting Started

### Prerequisites

Hr Net uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

### Project setup

- Clone this repo on your computer:

````bash
$ git clone https://github.com/KhaeraB/P14-HRNet

$ cd P14-HRNet
$ git submodule init
$ git submodule update
````
![Submodules](https://img.shields.io/badge/dependencies-submodules-orange)
- Package installations after cloning.

```bash
# with NPM
cd hrNet-frontend && npm install && cd..    
cd hrNet-backend && npm i && cd..     

# with YARN
cd hrNet-frontend && yarn && cd..    
cd hrNet-backend && yarn && cd..   

# Start local dev server
npm run dev

# Stop local dev server
ctrl +c x2

```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

### Added dependencies

  "@reduxjs/toolkit": "^1.9.0",
    "axios": "^1.1.3",
    "react": "^18.2.0",
    "react-bootstrap": "^2.6.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.6.0",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.4.3",
    "react-scripts": "5.0.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-persist": "^6.0.0",
    "sass": "^1.56.1",
    "styled-components": "^5.3.6",
    "swagger-ui-react": "^4.15.5", 
    "cors": "^2.8.5",
    "date-fns": "^2.29.3",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-async-handler": "^1.2.0",
    "mongodb": "^4.12.1",
    "mongoose": "^6.8.0",
    "mongoose-sequence": "^5.3.1",

---
   



