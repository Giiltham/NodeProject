export const buildSuccessResponse = (res, status, data) => {

    return res.status(status).json({
        data: data
    })

}

export const buildErrorResponse = (res, status, messages) => {
    res.status(status)
        .json({
            error: {
                code: status,
                message: messages,
            }
        })

}