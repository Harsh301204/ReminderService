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
- created a jobs file in utils folder 
- will write some cron jobs logic to send notifications 
- now will write a function to fetch pending emails in our service layer and call that with our cron we setted

- will install amqplib node package to use rabbit mq
- 