const express = require('express')
const { PORT } = require('./config/serverConfig')
const bodyParser = require('body-parser')

const jobs = require('./utils/jobs')

const TicketController = require('./controllers/ticket-controller')

const { sendBasicEmail } = require('./services/emailService')

const setupAndStartServer = ()=> {
    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended : true}))

    app.post('/api/v1/tickets' , TicketController.create)

    app.listen(PORT , () => {
        console.log(`Server Started on Port ${PORT}`)
        // sendBasicEmail(
        //     'support@admin.com',
        //     'ghost04704@gmail.com',
        //     'This is testing',
        //     'Trying to test my email service basic part'
        // )
        //     cron.schedule('*/2 * * * *', () => {
        //     console.log('running a task every two minutes');
        //   });
        jobs()
    })

}

setupAndStartServer()