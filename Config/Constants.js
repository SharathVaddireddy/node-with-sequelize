module.exports = {
    system: {
        admin: {

        },
        server: {
            url: "http://localhost:4000"
        },
        query: {
            LIMIT_ONE: 1,
            DEFAULT_LIMIT: 20,
            ASEC_ODER: 1,
            DESC_ORDER: -1,
        }
    },
    user: {
        STATUS: {
            INACTIVE: 'INACTIVE',
            ACTIVE: 'ACTIVE'
        }
    },
    number: {
        ZERO: 0,
        ONE: 01,
        TEN: 10,
        TWELVE: 12
    },
    START_TIME_OF_DAY: ' 00:00:00',
    MSG: {
        CON_ESTABLISHED: ' database connected successfully.',
        CON_FAILURE: 'Unable to connect to the database'
    },
    MONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    BOOlEAN_YES: 'Yes',
    INT_ZERO: 0,
    NUMBER_HUNDRED: 100,
    FILE_NAME_REGEX: /^.*[\\\/]/,
    MINUTES_15: 900000,
    SORT: {
        ASC: 'ASC',
        DESC: 'DESC'
    },
    BOOLEAN: {
        TRUE: true,
        FALSE: false,
        DB_TRUE: 1,
        DB_FALSE: 0
    },
    NULL: null,
    NOT_APPLICABLE: 'NA',
    DAYS_STR: "days",
    NO_RECORD_FOUND: 'No record found',
    DB_CONST: {
        LITERAL_GETDATE: 'GETDATE()',
        DEFAULT_EXCLUDE: { exclude: ['createdAt', 'updatedAt'] }
    },
    REGEX: {
        ONLY_NUMS: /\d+/g
    }
}