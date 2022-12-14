class UserNotAuthorized extends Error {
    constructor(message) {
        super(message);
        this.name = 'UserNotAuthorized';
    }
}

const enforce = (policy) => (req, res, next) => {
    req.authorize = (resource) => {
        if (!policy(req.user, resource)) {
            throw new UserNotAuthorized();
        }
    };
    next();
};

module.exports = enforce;