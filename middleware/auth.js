const admin = require("firebase-admin");

async function withAuth(req, res, next) {
    const authorization = req.headers.authorization;

    if (!authorization) {
        return res
            .status(401)
            .json({ msg: "Not authenticated. No Auth header." });
    };

    const token = authorization;
    let decodedIdToken;
    try {
        decodedIdToken = await admin.auth().verifyIdToken(token);
        if (!decodedIdToken || !decodedIdToken.uid) {
            return res.status(401).json({ msg: "Not authenticated." });
        }

        req.uid = decodedIdToken.uid;
    } catch (error) {
        console.log(`verifyIdToken error: ${error}`);
        return res
            .status(401)
            .json({ msg: `Error while verifying token. Error: ${error}` });
    };

    next();

};

module.exports = withAuth;

