# Logic for Reminder Service

- initializing and setting sequelize package 
```
npx sequelize init
```
- we will create our new database using sequelize 
```
npx sequelize db:create
```
- creating a model for mailing service
```
npx sequelize model:generate --name NotificationTicket --attributes 
subject:string,
content:string,
recepientEmail:string,
status:enum,
notificationTime:date
```
- migrate the changes 
```
npx sequelize db:migrate
```