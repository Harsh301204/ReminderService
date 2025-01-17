const sender = require('../config/emailConfig')
const TicketRepository = require('../repository/ticketRepo')

const repo = new TicketRepository()

const sendBasicEmail = (Mailfrom, Mailto, Mailsubject, mailBody) => {
    try {
        sender.sendMail({
            from: Mailfrom,
            to: Mailto,
            subject: Mailsubject,
            text: mailBody

        })
    } catch (error) {
        console.log(error)
    }
}

const fetchPendingEmails = async (timeStamp) => {
    try {

        const response = await repo.get({status : 'Pending'});
        return response
    } catch (error) {
        console.log(error)
    }
}

const updateStatus = async (ticketId , data) => {
    try {
        const response = await repo.update(ticketId , data);
        return response
    } catch (error) {
        console.log(error)
    }
}


const createNotification = async (data) => {
    try {
        const response = await repo.create(data)
        return response
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateStatus
}