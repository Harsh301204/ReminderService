const cron = require('node-cron')
const emailService  = require('../services/emailService')
// const { sendBasicEmail } = require('../services/emailService')
const sender = require('../config/emailConfig')

/* Suppose we need to send an email at 10:00 
    For Every 5 minutes we will check that 
    are their any pending emails which were expected to be sent by now and thier status is pending 
*/

const setUpJobs = ()=> {
    cron.schedule('*/1 * * * *', async() => {
            const response = await emailService.fetchPendingEmails();
            response.forEach(email => {
                
                sender.sendMail({
                   to : email.recepientEmail,
                  subject :   email.subject,
                   text :  email.content
                }
             , async (error , data) => {
                if(error)
                    {
                        console.log(error)
                    }
                    else{
                        console.log(data)
                        await emailService.updateStatus(email.id , {status : "Success"})
                    }
                    console.log(response)
                });
            })
            
      })
        
    }

module.exports = setUpJobs
