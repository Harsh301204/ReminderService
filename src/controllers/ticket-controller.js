const TicketService = require('../services/emailService')


const create = async (req, res) => {
    try {
        const result = await TicketService.createNotification(req.body)
        return res.status(201).json({
            data: result,
            success: true,
            error: {},
            message: "Succesfully Registred a Email Reminder"
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            error: error,
            message: "Not able to register an email reminder"
        })
    }
}

module.exports = {
    create
}