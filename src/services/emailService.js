const sender = require('../config/emailConfig')

const sendBasicEmail =   (Mailfrom , Mailto , Mailsubject , mailBody)=> {
    try {
        sender.sendMail({
            from : Mailfrom,
            to : Mailto,
            subject : Mailsubject,
            text : mailBody
            
        })
    } catch (error) {
        console.log(error)
    }
    
    
    
}

module.exports = {
    sendBasicEmail
}