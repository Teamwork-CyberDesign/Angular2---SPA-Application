const ConnectRoles = require("connect-roles");

const user = new ConnectRoles({
    failureHandler (req, res, role) {
        let message = `You must be an ${role} to access this page!`;
        let err = new Error(message);
        err.status = 403;

        res.status(403);
        res.json({ message, err });
    }
});

user.use((req, role) => {
    if (!req.isAuthenticated()) {
        return role === "student";
    }
});

user.use("teacher", (req) => {
    if (!req.isAuthenticated()) {
        return false;
    }

    if (req.user.role !== "teacher") {
        return false;
    }
});

user.use((req) => {
    if (req.user.role === "teacher") {
        return true;
    }
});

module.exports = user;