Repository FSW CHALLANGE CHP 6

PORT localhost:9000

RUN NPM NODE JS
npm run start

STARTING THE WEB
1. add to browswer "http://localhost:9000/"

2. click register -> add username, email, and password -> click submit

3. click login -> put your email and password -> click submit

4. Click Games Data (Film Data is option)

SETUP Database:

sequelize model:create --name listGame --attributes nameGame:STRING,

sequelize model:create --name biodataGame --attributes username:STRING,email:STRING,levelAccount:INTEGER, listGameId:INTEGER;

sequelize model:create --name historGame --attributes update:TEXT,version:STRING,rating:INTEGER;


