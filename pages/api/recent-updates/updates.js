const dbConnect = require("../../../backend/dbConnect");
const RecentUpdate = require("../../../schemas/recentUpdate");

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            // await RecentUpdate.insertMany(dummy);
            const recentUpdates = await RecentUpdate.find(
                {
                    inBanner: true,
                },
                null,
                {
                    sort: {
                        dateTime: 1,
                    },
                }
            );
            // console.log(data);

            return res.status(200).json({ recentUpdates });
        } catch (err) {
            return res.status(500).json({ msg: err.toString() });
        }
    } else {
        return res.status(405).json({ msg: "Method not allowed" });
    }
}