const admin = require("firebase-admin");
const User = require("../../../schemas/user");
export default async function handler(req, res) {
    if (req.method === "POST") {
        const init = require("../../../backend/init");
        console.log("POST request received");
        try {
            const { name, email, password, university, imageURL } = req.body;
            const auth = admin.auth();
            let existingUser;

            try {
                existingUser = await auth.getUserByEmail(email);
            } catch (err) { }

            if (existingUser) {
                return res.status(409).json({
                    msg: "User with given email already exists",
                    code: "user_exists",
                });
            }

            const newDBUser = User({
                name,
                email,
                university,
                imageURL,
            });

            try {
                newDBUser.firebaseID = undefined;
                await newDBUser.save();

                const newFirebaseUser = await auth.createUser({
                    email: email,
                    // emailVerified: false,
                    password: password,
                    displayName: name,
                    disabled: false,
                    // photoURL: imageURL
                });

                console.log(newFirebaseUser, auth);
                newDBUser.firebaseID = newFirebaseUser.uid;
                await newDBUser.save();

                return res.json(newDBUser);
            } catch (err) {
                res.status(500).json({
                    msg: err.toString(),
                });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({
                msg: err.toString(),
            });
        }
    } else {
        res.status(405).json({
            msg: "Method not allowed",
        });
    }
}