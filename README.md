## Server: Swyger Storage with NodeJS


Note: You must know how to use NodeJS: https://nodejs.org/en/docs/guides/getting-started-guide

**Swyger Storage v0.1** is a good api Server for:
- CRUD on file: Create/Read/Update/Delete in realtime

### Requirements:
- NodeJS v16 (https://nodejs.org/en/blog/release/v16.16.0)
- Database Server: MongoDB(https://www.mongodb.com/try/download/community) / MySQL(https://dev.mysql.com/downloads/mysql/) /...etc
- Docker(https://www.docker.com/products/docker-desktop/) and docker-compose(https://docs.docker.com/compose/install/) in case you want to add it in container

### Install Dependencies
```
npm install
```
### Setup ENV Variables
Locate the ``.env`` file or create it at the root of your project:

- Configuration of MongoDB
```
DB_NAME=swyger_storage
DB_HOST=localhost
DB_PORT=27017
DB_USERNAME=root
DB_PASSWORD=
```
Note: If you want to add more storages (MySQL, etc...) go in ``./src/app/config/storage/typeorm/typeorm.db-list.js``
And you also have to set your drive read/write ``./src/app/config/storage/typeorm/data.drive-manager.js``
- Configuration of Swyger Base
```
ACE_HOST=localhost
ACE_PORT=3100
ACE_NAME=swyger
ACE_ENABLE_HTTPS=false
ACE_USER=admin
ACE_PASS=SwygerBase@123
```
Note: Swyger Base server should also run on a different port, it is required!
- Configuration of the Auth Server

To generate token: ``npm run generate:key -- --secret yoursecret --with-env`` or generate it online, visit https://www.javainuse.com/jwtgenerator

```
NODE_ENV=development #or production
AUTH_ADMIN_TOKEN=token 
APP_VERSION=0.2
HOST=0.0.0.0
PORT=4500
#Free Storage with Discord
DISCORD_BOT_TOKEN=
DISCORD_CHANNEL_ID=
```

### Create a custom API automatically
It will create a file in ``./src/app/api_builder/typeorm``
```
npm run swyger -- --create api --name nameOfApi
```
Note: You can see the file ``./src/app/services/api/builder/typeorm/cmd.js`` (Still in test)

### Run In Development Mode
```
npm run dev
```

### Run In Production Mode
```
npm run build
npm run prod
# OR
npm run start
```
### Run In Docker

A ``Dockerfile`` and ``docker-compose.yaml`` are located at the root of your project
- #### Build Image
```
docker build -t swyger/storage:0.1 .
```
Note: The working docker directory will be in ``/home/server/swyger/storage/``
- #### Run Image In Container with Docker
```
docker run --name swyger_storage -p 4100:4100 --expose=4100 --add-host=host.docker.internal:host-gateway swyger/storage:0.1
```
Note: In case you want to create a volume:
```
cmd (Windows) : docker run  --name swyger_storage -p 4100:4100 -v ${pwd}:/home/server/swyger/storage/ -v "$(pwd)"/node_modules:/home/server/swyger/storage/node_modules -d swyger/storage:0.1
cmd (Linux) : sudo docker run --name swyger_storage -p 4100:4100  -v "$(pwd)":/home/server/swyger/storage/ -v "$(pwd)"/node_modules:/home/server/swyger/storage/node_modules --add-host=host.docker.internal:host-gateway swyger/storage:0.1
```
- #### Run Image In Container with Docker-Compose
```
docker-compose up -d
```

# Some References
- TypeOrm: https://typeorm.io/
- DotEnv: https://www.npmjs.com/package/dotenv
- Acebase Client: https://www.npmjs.com/package/acebase-client
- SocketIo: https://www.npmjs.com/package/socket.io
- Glob: https://www.npmjs.com/package/glob
- Json Joi Converter: https://www.npmjs.com/package/json-joi-converter
- Node Json DB: https://www.npmjs.com/package/node-json-db

# Issues
- some bugs still remain
# Todo
- Removing/Reduce some unusual dependencies,functions, refactoring paths/files...
- Making good and easy documentation with tutorials (videos, webpage...)
- Code Cleaning/ Making a suitable project structure with modulable pattern
- Adding AWS and Google Storage

# Join US
If you have any suggestion, feature to add ...etc
- Discord(Support Team, FAQ, Chat): https://discord.gg/PPTZY5qFdC

# Contributors
- Agglomy Team :
    - Ivan Joel Sobgui
# Licence

MIT: You can use it for educational/personal/business purpose!

