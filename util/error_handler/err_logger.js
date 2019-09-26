module.exports = function ErrLogger(name, segment, stackTrace, createdBy) {
    return {
        success: false,
        msg: 'Failure',
        data: stackTrace
    };
};