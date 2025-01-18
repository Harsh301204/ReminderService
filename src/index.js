const express = require('express')
const { PORT } = require('./config/serverConfig')
const bodyParser = require('body-parser')

const jobs = require('./utils/jobs')
// const { createChannel } = require('./utils/messageQueue')

const TicketController = require('./controllers/ticket-controller')

const { sendBasicEmail , testingQueue } = require('./services/emailService')
const emailService = require('./services/emailService')

const { subscribeMessage , createChannel } = require('./utils/messageQueue')
const {REMINDER_BINDING_KEY  } = require('./config/serverConfig')

const setupAndStartServer = async ()=> {
    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended : true}))

    app.post('/api/v1/tickets' , TicketController.create)
    const channel = await createChannel()

    subscribeMessage(channel , emailService.subscribeEvents,  REMINDER_BINDING_KEY )

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
        // jobs()
    })

}

setupAndStartServer()