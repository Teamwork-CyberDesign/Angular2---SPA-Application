const ConnectRoles = require("connect-roles");

const user = new ConnectRoles({
    failureHandler (req, res, action) {
        const accept = req.headers.accept || "";
        res.status(403);
        if (accept.indexOf("html") >= 0) {
            let message = `You don't have permission to ${action}!`;
            let err = new Error(message);
            err.status = 403;
            res.json({ message, err });
        } else {
            res.json(`Access Denied - You don't have permission to ${action}!`);
        }
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