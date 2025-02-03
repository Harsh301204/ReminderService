const sender = require('../config/emailConfig')
const TicketRepository = require('../repository/ticketRepo')

const repo = new TicketRepository()

const sendBasicEmail =  async (Mailfrom, Mailto, Mailsubject, mailBody) => {
    try {
       const response = await  sender.sendMail({
            from: Mailfrom,
            to: Mailto,
            subject: Mailsubject,
            text: mailBody

        })

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

const fetchPendingEmails = async (timeStamp) => {
    try {

        const response = await repo.get({ status: 'Pending' });
        return response
    } catch (error) {
        console.log(error)
    } 
}

const updateStatus = async (ticketId, data) => {
    try {
        const response = await repo.update(ticketId, data);
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

const subscribeEvents = async (payload) => {
        let service = payload.service
        let data = payload.data
        switch (service) {
            case 'CREATE_TICKET':
                await createNotification(data)
                break;
            case 'SEND_BASIC_MAIL':
                  sendBasicEmail(data)
                break;
            default:
                console.log("No Valid Request Recieved")
                break;
        }
    
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateStatus,
    subscribeEvents
}