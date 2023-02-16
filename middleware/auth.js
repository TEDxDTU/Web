const admin = require("firebase-admin");

export function withAuth(handler) {
  return async (req, res) => {
    console.log(req.headers);
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res
        .status(401)
        .json({ msg: "Not authenticated. No Auth header." });
    }

    const token = authorization;
    const request = req;

    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert(creds),
      });
    }
    let decodedIdToken;
    try {
      decodedIdToken = await admin.auth().verifyIdToken(token);
      if (!decodedIdToken || !decodedIdToken.uid) {
        return res.status(401).json({ msg: "Not authenticated." });
      }

      request.uid = decodedIdToken.uid;
    } catch (error) {
      console.log(`verifyIdToken error: ${error}`);
      return res
        .status(401)
        .json({ msg: `Error while verifying token. Error: ${error}` });
    }

    return handler(request, res);
  };

  // const authorization = req.headers.authorization;

  // if (!authorization) {
  //   return res.status(401).json({ msg: "Not authenticated. No Auth header." });
  // }

  // const token = authorization;
  // let decodedIdToken;
  // try {
  //   decodedIdToken = await admin.auth().verifyIdToken(token);
  //   if (!decodedIdToken || !decodedIdToken.uid) {
  //     return res.status(401).json({ msg: "Not authenticated." });
  //   }

  //   req.uid = decodedIdToken.uid;
  // } catch (error) {
  //   console.log(`verifyIdToken error: ${error}`);
  //   return res
  //     .status(401)
  //     .json({ msg: `Error while verifying token. Error: ${error}` });
  // }

  // next();
}
