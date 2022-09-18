"use strict";

const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
const Event = require("../../schemas/event");
// const withAuth = require("../../middleware/auth");
/**
 * Get request that returns a list of all events with the specified query
 * Query parameters:
 *  - eventType : string, must be either "past","upcoming",or "story"
 *  - page : number, the page number of the list of events
 * - limit : number, the number of events to return
 * - sortBy : string, the field to sort the events by, can be any of the following:
 *  ["dateTime","requiresTicket","details","imageUrl","title","venue","streamingUrl","price"]
 * - sortOrder : string, the order to sort the events by, can be either "asc" or "desc"
 */
router.get("/", async (req, res) => {
  let { eventType, sortBy, sortOrder, page, limit } = req.query;
  sortOrder = sortOrder || "asc";
  page = page || 1;
  limit = limit || null;
  sortBy = sortBy || "dateTime";
  try {
    const options = {
      sort: { [sortBy]: sortOrder === "asc" ? 1 : -1 },
      skip: (page - 1) * limit,
      limit,
    };
    let events = [];
    if (eventType == "past") eventType = "past_new_format";
    if (eventType) events = await Event.find({ eventType }, null, options);
    else events = await Event.find({}, null, options);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// const testData = [
//   {
//     eventType: "past_new_format",
//     details:
//       "The ability to adapt to change is aided, as are all faculties that we prize as essentially human in its path by our ingenuity and technology; though it is often forgotten that we also possess the converse ability of change to adapt, a more conscious process. To be able to acclimate to circumstances is perhaps a key factor in getting through life.\nOur lives are these transient dances through the universe, and the acceptance of change that exists in our lives will only make it richer. By adapting to change, and by changing to adapt, we celebrate our experience of life and the knowledge that comes over time.\nLife can be difficult to navigate in our fast-moving society. There is no escaping the impact that ‘Adapting to change’ can bring into in our lives, but ‘Changing to Adapt’ is the key to a life where growth is survival.",
//     title: "Adapt to Change. Change to Adapt.",
//     venue: "Dr. B.R. Ambedkar Auditorium, Delhi Technological University",
//     dateTime: "2020-07-11",
//     videoUrls: [
//       "https://www.youtube.com/watch?v=fefSq6VmpL8",
//       "https://www.youtube.com/watch?v=85riY_kuugA",
//       "https://www.youtube.com/watch?v=YK_apC7MhnI",
//       " https://www.youtube.com/watch?v=5ahIdtbyh4E",
//     ],
//     imageUrl:
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2020%2Fdtu%20tedx%202020.jpg?alt=media&token=d878fdb7-8a9c-49b0-8dbd-304ee234ab2b",
//     galleryImageUrls: [
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2020%2FTEDxDTU-Speakers-Creative.jpg?alt=media&token=e2bb2af7-a670-4558-bd19-ded8da7b5330",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2020%2FTed%20xDTU%202020.webp?alt=media&token=642fcf0e-0d8d-4f05-b868-d16c813634bd",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2020%2Fdtu%20ted%20x%202020%202.jpg?alt=media&token=dbb4cc1d-d2b9-417e-926e-db4542029fa5",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2020%2Fdtu%20ted%20x%202020%204.jpg?alt=media&token=526b71e9-9c79-4ca2-b59f-37f7aac4d50f",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2020%2Fdtu%20ted%20x%202020%205.jpg?alt=media&token=e005cc62-aca9-4209-a3ee-8a8398347cc1",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2020%2Fdtu%20tedx%202020%203.jpg?alt=media&token=8bb67c18-cc8f-41fd-bcdf-369aa92a56ec",
//     ],
//     speakersList: [
//       {
//         name: "Arjun Hardas",
//         bio: " Indian representative at the American Jewish Committee",
//         topic: "Foreign Relations in Battling Pandemic",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2020%2FArjun%20Hardas.png?alt=media&token=52dc3da8-9087-46e9-950f-07f5ebb534a3",
//         resources: [
//           "https://www.linkedin.com/in/arjun-hardas-a319713/?originalSubdomain=in",
//           "https://twitter.com/arjunhardas?lang=en",
//           "https://www.instagram.com/arjunhardas/?hl=en",
//         ],
//         achievements: [
//           "Senior Input Editor for New Delhi Television",
//           " Senior Editor for NewsX",
//           " Indian Affairs Associate for The Israel Project",
//           " Indian Representative at Digital Footsteps",
//         ],
//       },
//       {
//         name: "Anil Trigunayat",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2020%2FAnil%20Trigunayat.jpg?alt=media&token=50af593d-1baa-4443-8922-3e237c2adc72",
//         bio: "Member of the International Trade Council, Honorary Adviser to BRICS Chamber of Commerce, and Secretary of Association of Indian, Diplomats",
//         topic:
//           "Atmanirbhar Bharat – A shift from Globalization to Regionalisation",
//         resources: [
//           "https://www.linkedin.com/in/ambaniltrigunayat/?originalSubdomain=in",
//           "https://twitter.com/aniltrigunayat?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Lalit Kumar",
//         bio: "Design educator in the Indian design community",
//         topic: "Values that shape the complex systems",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2020%2FLalit%20Kumar%20Das.jpg?alt=media&token=00befe2c-6e6e-4dd4-8a13-31f21be55c52",
//         resources: [
//           "https://www.linkedin.com/in/lalit-kumar-das-663b7a11/?originalSubdomain=in",
//           "https://www.facebook.com/lalit.das.52",
//           "https://twitter.com/DasLalit?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Dr. Toolika Gupta",
//         bio: " Director of Indian Institute of Crafts and Design(IICD)",
//         topic: "Indian Handicrafts : Epitome of design and Sustainability",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2020%2FTEDxDTU-Dr-Toolika-Gupta-Creative.jpg?alt=media&token=d53efd3b-956b-4e34-9d23-d9db13c1fa59",
//         resources: [
//           "https://www.linkedin.com/in/toolika-gupta-141a498/?originalSubdomain=in",
//           "https://www.instagram.com/toolikagupta.73/",
//           "https://twitter.com/toolikag?lang=en",
//         ],
//         achievements: [
//           "• Worked as a Fashion and Textile consultant, researcher and educator.",
//           "• Have been selected as one of the ten ambassadors of the Costume Society of UK for 2016 and 17",
//           "•  One of the thirteen founder members, and the secretary of the society – TCRC (Textiles and Clothing Research Centre) in India.",
//         ],
//       },
//       {
//         name: "Vineet Panchhi",
//         bio: "Vineet K. Kamal Nain ‘Panchhi’ is the founder of MotoGazing, a vehicular content creating media platform, and of Word of Mouth media, a marketing and advertising company",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2020%2FVineet%20Pannchi.PNG?alt=media&token=d55a0eb6-1d8e-499c-b677-9484b9d3fc5d",
//         topic:
//           "My’Failure’story , The importance of failing and loving what you do,Panchhi tells us to let go and enjoy this marvellous journey of life.",
//         resources: [
//           "https://twitter.com/VineetPanchhi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
//           "https://www.linkedin.com/in/panchhi/?originalSubdomain=in",
//           "https://www.instagram.com/vineetpanchhi/?hl=en",
//           "https://www.facebook.com/Vineet.Panchhi",
//         ],
//         achievements: [],
//       },
//     ],
//   },
//   {
//     eventType: "past_new_format",
//     details: "  ",
//     dateTime: "2019-04-06",
//     title: "2019",
//     venue: "Delhi Technological University",
//     videoUrls: [
//       "https://www.youtube.com/watch?v=qPNVon5so9Y",
//       "https://www.youtube.com/watch?v=EOK9CZMnOnI",
//       "https://www.youtube.com/watch?v=usdTVkJRttY",
//       "https://www.youtube.com/watch?v=GTjrhlq1uA8",
//       "https://www.youtube.com/watch?v=1FB9LGrfqGc",
//       "https://www.youtube.com/watch?v=rcco8hHixYw",
//     ],
//     imageUrl:
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fted%20x%20dtu%20the%20power%20of%20doubt.webp?alt=media&token=5da2eab9-7362-4ee6-85a7-c913cfa8e2a9",
//     galleryImageUrls: [
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Ftedx%20dtu%206th%20April.jpg?alt=media&token=b91f6424-e024-4c56-a6d5-fcd0d19fba86",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0003.jpg?alt=media&token=0032f5e2-202e-40c7-a752-c8b7c8b0405c",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0015.jpg?alt=media&token=e1b5a0fd-0c4d-4339-871b-b712a038bdb7",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0020.jpg?alt=media&token=9456faef-7a31-4cf6-ba7e-5f925e887d4b",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0025.jpg?alt=media&token=eebb93b1-5b31-49ba-b6da-5c205fba0530",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0028.jpg?alt=media&token=454ccc66-f96d-4cbc-bd55-1bbb7d26265d",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0030.jpg?alt=media&token=a2b0d5ac-e24e-4192-8fc9-132daf51a246",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0054.jpg?alt=media&token=091579da-bb59-414c-ab94-520b8cd1a979",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0055.jpg?alt=media&token=0ae0d6d7-ba90-402f-a430-30bc761e51c6",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0065.jpg?alt=media&token=ee83c2db-9f55-49ba-b852-7ada8c0bde69",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0105.jpg?alt=media&token=6c361f11-0b28-4831-8242-d040ed9fdf0b",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0116.jpg?alt=media&token=125e8e92-17f2-4c2f-8fb0-bdf5111fff37",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0119.jpg?alt=media&token=9fa84efb-e2b6-45fd-894f-99cfaa05110e",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0120.jpg?alt=media&token=aaf9898c-d7d6-4a0b-bf51-e7d5c5d78864",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0122.jpg?alt=media&token=fbf884ec-e81a-4703-bc08-f3cb128ccdfc",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0131.jpg?alt=media&token=2b266ee9-1ce0-43ec-b5d6-936eeb261870",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0141.jpg?alt=media&token=f0005199-2f2a-4300-b213-9ae122463083",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0175.jpg?alt=media&token=a46c69f8-bbb4-46ae-958a-5a3c25312aeb",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0194.jpg?alt=media&token=90d9fbb5-fb14-4c03-b890-7c6ab2572cb0",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0198.jpg?alt=media&token=8ecbf268-54dd-4e14-95ef-5dcda5716152",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0221.jpg?alt=media&token=dc0f0a26-b4d8-4208-af1c-59342c6c00ce",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0225.jpg?alt=media&token=98af3863-aec2-445c-b59a-109425a5d980",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0337.jpg?alt=media&token=e123a504-f7a6-4820-a316-eadd07e78884",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0357.jpg?alt=media&token=6f5a2fd0-a057-4eb8-8097-f758722aa41e",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0369.jpg?alt=media&token=c14824e7-69ed-45cc-b02d-04b09d5cab31",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0431.jpg?alt=media&token=9b3ce291-1985-48b1-865d-697f2a759613",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0551.jpg?alt=media&token=c9a8b9c7-fad2-4f42-85ac-11e60be2b3d6",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0565.jpg?alt=media&token=3ba572a6-43a6-4b69-ab37-52ebfa3490c3",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_9868.jpg?alt=media&token=7da9e02a-e4f4-47d4-a614-39560aaa4e47",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_9874.jpg?alt=media&token=fa6f8b66-fa8b-4f63-b5e3-2b74fe5da0ad",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_9911.jpg?alt=media&token=279d5388-7519-4146-aca5-c495407b77f9",
//     ],
//     speakersList: [
//       {
//         name: "Aman Sanduja",
//         bio: "Aman Sanduja is a Blockchain Strategist, Researcher and Innovator. He is the founder of TowardsBlockchain, a company which aims to study cryptocurrency and blockchain technology, and is currently focused on how national currencies can be issued digitally.",
//         topic: "The Holy Trinity : Blockchain,AI and IOT",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2FAman.jpeg?alt=media&token=efa19df3-6676-4521-b5e5-53fca6096531",
//         resources: [
//           "https://www.linkedin.com/in/amansanduja/?originalSubdomain=in",
//           "https://twitter.com/amansanduja?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Karan Sindhu",
//         bio: "Tattoographer Karan is the first Indian to get his eyeballs tattooed. His quest to create a complete body suit to ‘complete’ his body has led him to become one of India's foremost body modification artists. The passion he expresses for his work has spread immense positivity among the youth of the country.",
//         topic: "The Obstacle of doubt",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Ftattoographer%20karan.jpg?alt=media&token=22e3b980-1ffc-4c1c-adba-a3b422e30a81",
//         resources: [
//           "https://www.instagram.com/tattoographer/?hl=en",
//           "https://www.facebook.com/tattoographer/",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Vicky Roy",
//         bio: "Vicky Roy is most notably known for Street Photography. His photographs depict the lives of the underprivileged, something he experienced firsthand when he ran away from home in Kolkata and worked as a ragpicker at the New Delhi Railway Station.",
//         topic: "From Rags to Frames",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2FVicky%20Roy.jpg?alt=media&token=268eb1c8-3681-4fda-84e0-5b0924c0fb89",
//         resources: [
//           "https://www.instagram.com/vickyroy87/?hl=en",
//           "https://en.wikipedia.org/wiki/Vicky_Roy",
//           "https://www.facebook.com/roy.vicky",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Rahul Kharbanda",
//         bio: "Rahul Kharbanda is an illusionist, iPad magician, mentalist and magic designer who has performed across myriad venues and has dazzled people of all ages with a dynamic mix of awesome and striking acts",
//         topic: "Magic with a Slice of Tech",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2FRahul%20magician.jpg?alt=media&token=f7c9a499-67a6-48e5-b2df-fd305205fc06",
//         resources: [
//           "https://www.magicianrahul.com/",
//           "https://www.instagram.com/accounts/login/?next=%2Fillusionist_rahul_kharbanda%2F",
//           "https://www.facebook.com/illusionistrahulkharbanda/",
//           "https://www.linkedin.com/in/illusionist-rahul-kharbanda-2660a814/?originalSubdomain=in",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Leena Kejriwal",
//         bio: "Leena Kejriwal is an author, photographer and an installation artist. She is the founder of the MISSING Public Art Project which aims to create awareness about sex trafficking across the globe.",
//         topic: "Art and Technology for a Social Change",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2FLeena%20Kejriwal.jpg?alt=media&token=e7cbe553-5152-497c-b676-ae74143f4487",
//         resources: [
//           "https://www.facebook.com/LeenaKejriwal",
//           "https://www.linkedin.com/in/leena-kejriwal/?originalSubdomain=in",
//           "https://www.instagram.com/leenakejriwal/?hl=en",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Nikita Sharma",
//         bio: "Nikita Sharma is a holder of a triple majors degree in Microbiology, Chemistry and Zoology. She is active in the Cancer research and awareness field through her NGO, the Silver Linings. Ms. Sharma is also a fitness expert, motivational speaker and fashion model. Her social media outreach addresses issues such as body shaming; promoting gender equality, women empowerment, self acceptance and body positivity.",
//         topic: "Masks of an Inanimate life",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2FNikita%20Sharma%20Tedx.jpg?alt=media&token=6537a4cd-ce31-4b40-9c1e-4b4ec952c1ca",
//         resources: [
//           "https://www.instagram.com/nikitasharma_official/?hl=en",
//           "https://twitter.com/hearnikiroar?lang=en",
//           "https://www.facebook.com/nikitasharmanutshell/",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Ram Sampath",
//         bio: "Ram Sampath is an Indian composer, music producer and musician who started his career composing advertisement jingles for the Mumbai-based advertising industry, before foraying into Bollywood and independent music.",
//         topic: "The Brief History of Indian Music",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2FRam%20Sampath.jpg?alt=media&token=641ca52a-1b02-46e3-abc8-c41ee2628f90",
//         resources: [
//           "https://en.wikipedia.org/wiki/Ram_Sampath",
//           "https://www.facebook.com/ramsampathofficial/",
//           "https://www.instagram.com/ramsampathofficial/?hl=en",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Ashish Joshi",
//         bio: "Ashish Joshi is the Chief Executive Officer of Classic Legends Pvt. Ltd. a subsidiary of Mahindra and Mahindra (M&M). Ashish considers motorcycles, and particularly heritage motorcycles, as both his passion and calling. In a career spanning over two decades, he has helmed prestigious classic/retro two-wheeler brands around the globe.",
//         topic: "How to let doubt act as your anchor",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2FAshish%20Joshi.jpg?alt=media&token=3e8ca1e7-5dfa-4b10-8960-9af941720ef3",
//         resources: ["https://twitter.com/ashishjoshi79"],
//         achievements: [],
//       },
//     ],
//   },
//   {
//     eventType: "past_new_format",
//     details:
//       "The solution to a seemingly unsolvable problem. The entrance of a 'god' to bring an end to an unresolvable climax. The trump card. Referring to the introduction of these ideas, our theme, 'Deus Ex Machina' aims to coalesce with the very principle of TEDx– Ideas Worth Spreading. With issues arising in every field, our goal is to bring forth a series of revolutionary ideas which break the generic glass ceilings, and bring forth interesting outcomes. Rather than being unexpected twists in the scenarios, we aim to foster the generation of solutions which have been staring us in the face all along, and invoke conversations of its implications in the modern scenario.",
//     title: "Deus Ex Machina",
//     venue: "Dr. B.R. Ambedkar Auditorium, Delhi Technological University",
//     dateTime: "2018-04-20",
//     videoUrls: [
//       "https://www.youtube.com/watch?v=8zroTBBm9S4",
//       "https://www.youtube.com/watch?v=mn7B2USpw2Q",
//       "https://www.youtube.com/watch?v=5lm2unAogtE",
//       "https://www.youtube.com/watch?v=omqLJM9R0Ao",
//       "https://www.youtube.com/watch?v=AWE7lOpgFIk",
//       "https://www.youtube.com/watch?v=JXqZmgwdP2g",
//     ],
//     imageUrl:
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2FFinal10Speakers.jpeg?alt=media&token=bdb21027-f19d-40f7-8045-08cca5220114",
//     galleryImageUrls: [
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2FDeus%20ex%20Machina%202018.jpg?alt=media&token=40e391b0-9710-40cd-b1f6-28a7086fee82",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2FDSC_0247.jpg?alt=media&token=23be9aca-ad63-4716-9181-5ea4b761bdcb",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2FDSC_0393.jpg?alt=media&token=1961a042-2d42-4359-a972-e4e89d642a7b",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2FIMG_7389.jpg?alt=media&token=b6bb0e35-0f47-4a25-bf30-e6ce3a01eecf",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2FIMG_7416.jpg?alt=media&token=e843115d-ca96-4534-8011-7e46847aba37",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2FIMG_7423.jpg?alt=media&token=834e9988-6b8e-4ea3-8c96-920fb7843246",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2FIMG_7463.jpg?alt=media&token=13515742-2098-41de-88a7-09a67e803841",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2FIMG_9687.jpg?alt=media&token=cceb0492-80eb-46fd-be21-31bc58680835",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2FIMG_9948.jpg?alt=media&token=4c9829a1-5c68-4935-bf48-06e314a8409b",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2FIMG_9949.jpg?alt=media&token=13a70003-c85d-4674-89c6-0c586405473f",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2FIMG_99541%20(11).jpg?alt=media&token=1b0bdd42-3509-49ad-8fd7-bf367332c6b9",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_0088.jpg?alt=media&token=3aeffe79-9e7d-44c7-9766-102d25172089",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_0090.jpg?alt=media&token=94ebe13a-52ba-467e-808a-ba8ea0783533",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_0094.jpg?alt=media&token=45f3e784-d126-4473-b862-da7cdef565c6",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_0096.jpg?alt=media&token=41f4a356-cdb6-4a25-867c-774980a693a9",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_0097-2.jpg?alt=media&token=43a63f19-d77d-45c3-9c84-4cc26de2b3db",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_0097.jpg?alt=media&token=7a852124-6b7c-4030-8c4d-3fdff25a60cd",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9439.jpg?alt=media&token=c7b10749-f449-444f-a85f-7b1d61105fbd",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9445%20(1).jpg?alt=media&token=f2264c41-a97e-41c6-8a3d-a39b3cb9ef16",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9446%20(1).jpg?alt=media&token=95caa887-c107-4da2-acb4-7fa70bf8e10e",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9455.jpg?alt=media&token=d9568580-7e3b-4a20-a2f6-4bab7cfb1032",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9456.jpg?alt=media&token=ec6d0413-285f-4eac-b5ab-cd2e420e524c",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9459.jpg?alt=media&token=5134602c-763d-4e53-a11f-e9ab20acd86f",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9461-2.jpg?alt=media&token=d056dacb-b763-46e3-b8dd-dc2bb3d7fb7e",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9461.jpg?alt=media&token=b61c20ab-2165-4703-b03f-b8a7f7cb4da0",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9483.jpg?alt=media&token=adc3c436-1ac5-4e15-9471-327d15f857a9",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9586.jpg?alt=media&token=ff6eed29-53ad-40a9-b683-29b664ac9335",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9611.jpg?alt=media&token=6fa7509d-e4f4-410b-8cb7-081b5f94a69d",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9670.jpg?alt=media&token=f1195e2c-5553-44b9-ab8f-167c6cf9d6d8",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9700.jpg?alt=media&token=d5781de8-0d7b-409a-bc54-d708ed43aa60",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9701.jpg?alt=media&token=ff252b51-fbbf-4ddf-ac05-9e26698a7ff4",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9724.jpg?alt=media&token=d15e0a8c-d5ef-4770-8c8c-1e560da093fe",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9735.jpg?alt=media&token=04d73e7a-ed8c-475d-922f-88a2c2d70bc9",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9736.jpg?alt=media&token=bd2b8445-db33-48f3-bc78-3cb23f3b844b",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9744.jpg?alt=media&token=0da7188c-fda4-43c4-b11d-d570178aa696",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9747.jpg?alt=media&token=a4d670ea-bff5-40ae-be31-5cf3f7025c00",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0003.jpg?alt=media&token=0032f5e2-202e-40c7-a752-c8b7c8b0405c",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9749.jpg?alt=media&token=6dd51eb1-829a-42f2-841c-4b2cf3c78e8e",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9752.jpg?alt=media&token=d3e167e8-0426-4275-9f9f-7babbb65b7b4",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9759.jpg?alt=media&token=c9c1b458-31e6-4954-af7b-b0aef3f74d05",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9763.jpg?alt=media&token=c84302c4-4d2e-4d0c-b66c-0d54975f07a5",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2019%2Fgallery%2FCompressed_IMG_0003.jpg?alt=media&token=0032f5e2-202e-40c7-a752-c8b7c8b0405c",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9778.jpg?alt=media&token=a05189ae-7502-42fc-8b67-d95ed4e64d34",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9783.jpg?alt=media&token=4f7330e1-0c76-46be-8cd2-3dac4656fdaa",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9791.jpg?alt=media&token=bf3616e8-c60f-422e-b99d-4756e9db13b5",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9807.jpg?alt=media&token=f98f67b1-439d-4aff-a857-bcca1794c641",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9817.jpg?alt=media&token=95a79bed-4aba-421f-bf4c-752ebfd65744",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9820.jpg?alt=media&token=16804dcb-76ac-494a-bea8-b0e990f08a93",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9821.jpg?alt=media&token=8a327338-78f8-4871-86fa-88487637e142",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9823.jpg?alt=media&token=5e1dd164-e3cb-478d-9718-73b0e49a689b",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9846.jpg?alt=media&token=20cf64c7-3d5b-41c9-8a29-4711a63da015",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9853.jpg?alt=media&token=fed904a7-86ce-431f-a529-169e231ded83",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9889.jpg?alt=media&token=6f048b49-59c3-423a-985e-a6482ee86140",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9892.jpg?alt=media&token=cbc5daab-1e18-4ce0-97b9-c6f30437cb14",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9895.jpg?alt=media&token=df264fa6-006b-499d-a78b-bb725f31e952",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9911.jpg?alt=media&token=a74be3f7-a388-4948-a5a4-277ed5795041",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9944.jpg?alt=media&token=2a3e9f0d-22b0-455d-8d0e-575e2656ddef",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9977.jpg?alt=media&token=a35a73b2-1e61-4236-ac35-9cd3e2e7c37f",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9978.jpg?alt=media&token=79495487-2380-4413-8f92-8f550e976602",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9986.jpg?alt=media&token=3916bd5c-0f55-4dae-9958-df9eeb49c683",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fgallery%2F_MG_9998.jpg?alt=media&token=951fee06-2933-4a8b-92de-962e8d699bce",
//     ],
//     speakersList: [
//       {
//         name: "Aninda Bagchi",
//         bio: "Mr. Aninda Bagchi is the Associate Director of Project Management at CBRE, one of the largest commercial real estate services and investment firm in the world. With foundations in design and graduating as an architect, the urge to learn and know beyond the drawing board, post the initial years of working as an architect, led him to do his specialization in Project Management. Aninda has been key in establishing project delivery systems and processes and encourages knowledge sharing.",
//         topic: "Realising Real Estate",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2FAninda%20Baghchi.jpg?alt=media&token=d1b13deb-8727-426f-9361-262c51d74fb2",
//         resources: [
//           "https://www.linkedin.com/in/anindabagchi/?originalSubdomain=in",
//           "https://twitter.com/anindabagchi",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Ankur Warikoo",
//         bio: "Ankur Warikoo is an Internet entrepreneur, motivational speaker and Angel Investor based in India. He is currently the co-founder and CEO of Nearbuy. Warikoo was previously the MD of at Rocket Internet India, Co-founder at Accentium Web, Management Consultant at A.T. Kearney.",
//         topic: "How Encouraging Anonymity and Transparency helped me in Life",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2FAnkur%20Warikoo.jpg?alt=media&token=ad395e55-17cc-44a7-aa88-03e08b96726c",
//         resources: [
//           "https://www.linkedin.com/in/warikoo/?originalSubdomain=in",
//           "https://twitter.com/warikoo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
//           "https://www.instagram.com/ankurwarikoo/?hl=en",
//           "https://en.wikipedia.org/wiki/Ankur_Warikoo",
//           "https://www.facebook.com/awarikoo/",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Akasa Singh",
//         bio: 'Akasa Singh is a Bollywood singer and one of India\'s top live performers, known for her foot-tapping number "Tu Kheench Meri Photo" and and her debut pop single "Thug Ranjha", which has crossed 27mn+ views. Post the success of her debut single, Akasa is all set to debut on television as a host for "Secret Side" on MTV Beats',
//         topic: "The Wonders of Hard work and Diligence",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2FAkasa.jpg?alt=media&token=6940d978-ce03-435a-add3-ebffef93ca47",
//         resources: [
//           "https://en.wikipedia.org/wiki/Akasa_Singh",
//           "https://www.instagram.com/akasasing/?hl=en",
//           "https://twitter.com/AkasaSing?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
//           "https://www.facebook.com/AkasaSing/",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Ishan Bose",
//         bio: "Mr. Ishan Bose is a man with many hats, currently being the head of Marketing, Sales and PR at KrazyBee as well as the head of India Operations at DingTalk (DingDing), the Mobility ERP solution from the Alibaba.com, focusing on the higher education institutions.",
//         topic: "Transformation in Marketing via Automation and IoT",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2FIshan.jpg?alt=media&token=42b78ee7-7a72-4465-b6b9-30326f683a28",
//         resources: [
//           "https://www.linkedin.com/in/boseis/?originalSubdomain=in",
//           "https://www.instagram.com/ishanbose31/?hl=en",
//           "https://twitter.com/ishanbose31?lang=en",
//         ],
//         achievements: [
//           " He has been the key evangelist for the Live Streaming Entertainment Industry in India, helping the launch, takeoff and consolidation of apps like Mi Live, BIGO LIVE and StarMaker - Sing & Connect With Fans of Music among many others",
//         ],
//       },
//       {
//         name: "Karan Wahi",
//         bio: "One of the most recognisable faces in the TV industry, Mr.Karan Wahi belongs to the next-gen actors making it big. He started his television career in the 2004 show Remix, through which he garnered fame.",
//         topic: "The power of being yourself",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2FIshan.jpg?alt=media&token=42b78ee7-7a72-4465-b6b9-30326f683a28",
//         resources: [
//           "https://twitter.com/karan009wahi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
//           "https://hi-in.facebook.com/karan009wahi/",
//           "https://en.wikipedia.org/wiki/Karan_Wahi",
//           "https://www.instagram.com/karanwahi/?hl=en",
//         ],
//         achievements: [
//           " A stint in the popular youth show Dill Mill Gayye further increased his popularity. He made his Bollywood movie debut in Habib Faisal's Daawat-e-Ishq, and had a lead role in Hate Story 4.",
//         ],
//       },
//       {
//         name: "Kaustubh Radkar",
//         bio: "Dr. Kaustubh Radkar is a former National Swimming Champion and has finished the coveted IRONMAN triathlon on all six continents, being the first Indian to do so, in October 2015.",
//         topic: "An Iron life",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2Fkaustabh.jpg?alt=media&token=9c0335a9-6539-4e08-b7bc-8c26e783bb8a",
//         resources: [
//           "https://www.instagram.com/radkar82/?hl=en",
//           "https://www.facebook.com/KaustubhRadkar/",
//           "https://en.wikipedia.org/wiki/Kaustubh_Radkar",
//           "https://twitter.com/kaustubhradkar",
//         ],
//         achievements: [
//           "He has finished 20 Ironmans till date, most for anyone living in India. He believes in giving back to the sport that he got so much from, and is doing so by being the first Indian IRONMAN certified coach, training amateur, elite and professional triathletes alike.",
//         ],
//       },
//       {
//         name: "Parijat Protim Bezbaruah",
//         bio: "Parijat is a budding part-time entrepreneur with his core interest in helping people with the power of AI. He is currently on a mission to teach AI to enthusiastic individuals as the Dean of School of AI. He is also working as a Guest Faculty and Mentor for upcoming entrepreneurs at Jagannath Incubation Centre at JIMS.",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2FParijat.jfif?alt=media&token=1519eb9b-6286-42c2-865e-5696693ba726",
//         topic: "Rating Employibility?",
//         resources: ["https://www.linkedin.com/in/ppbezbaruah/ "],
//         achievements: [],
//       },
//       {
//         name: "Sandra Colhando",
//         bio: "Ms. Sandra Colhando has over 1500 professional coaching hours post certification by the International Coach Foundation. Her background includes working with senior leaders, entrepreneurs and women executives from small private companies to large Fortune 500 organisations.",
//         topic: "Finding meaning in Fear",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2FSandra.PNG?alt=media&token=a40ad9c9-94c9-429c-904d-22c7e24a927e",
//         resources: [
//           "https://www.linkedin.com/in/sandracolhandotheleadershipcoach/?originalSubdomain=au",
//           "https://www.instagram.com/sandracolhando/?hl=en",
//           "https://www.facebook.com/scolhando/",
//         ],
//         achievements: [
//           " She is the Co-Founder of TransforME Learning and Leadership Solutions, an award-winning results-based learning firm focused on enabling personal transformation. Prior to this, she has also held senior positions in organisations such as GE, Convergys, Indiabulls and Mahindra & Mahindra.",
//         ],
//       },
//       {
//         name: "Shubha Vilas",
//         bio: "Mr.Shubha Vilas, due to his multi-faceted interests, may be one of few to hold an Electronics Enginnering degree, be an expert in patent law and put in energy in deep studies and interpretations of Vedic scriptures. After 11 years of monkhood, he set out to fulfil the objective of his life: to spread joy and knowledge of living a life based on the purity of scriptures, making them not just understandable but also practical. He has also authored many books, including a six-volume rendition of the Ramayana.",
//         topic: "Simplifying Modern Life, Decoding Symbolism in the Epics",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2018%2FShubha.jpg?alt=media&token=2c5c53c6-e332-4896-8c06-b10f8a164bcc",
//         resources: [
//           "https://twitter.com/shubhavilas?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
//           "https://www.instagram.com/shubhavilas/?hl=en",
//           "https://www.facebook.com/ShubhaVilas/",
//         ],
//         achievements: [],
//       },
//     ],
//   },
//   {
//     eventType: "past_new_format",
//     details:
//       "Referring to the region between the absolutes of black and white, our theme ‘Because Grey Matters’ represents the complexity of human lives, minds and situations. Grey represents a multitude of hues within itself, each succinctly unique in its identity yet inherently similar to its accompanying shades. Similarly, all of us are our own shade and hue but are, nonetheless, deeply connected to each other by the thread of humanity.\n However, our inhibitions and inflexibility to accept those in the 'grey region' leads numerous people to be ostracised and harassed. Most oppressed people, with issues that many don't lend an ear to, often find themselves battling a lone war and are oft left in the grey. A glimpse into the ongoing humanitarian conflicts prevailing the planet currently only attest to this harsh truth.\nGrey Matter also alludes to the importance of broad minded thinking in a world dominated by dogmatic and propagandist views. Pushing the boundaries of innovation, creativity, art, music and innumerable other fields, 'Because Grey Matters' encourages everyone to express themselves articulately and realise that humanity fundamentally lies in this overlap of colours and regions and not just in polarizing extremes.",
//     title: "Because Grey Matters",
//     dateTime: "2017-03-18",
//     venue: "Dr. B.R. Ambedkar Auditorium, Delhi Technological University",
//     imageUrl:
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2017%2Ftedx2017.jpg?alt=media&token=26cf873b-1350-45cb-8d28-408b88b05211",
//     galleryImageUrls: [
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2017%2Fstage.jpg?alt=media&token=7a683dab-6af6-4bf0-b45b-a1a60450eeb1",
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2017%2FTed%202017.jpg?alt=media&token=385197a3-b147-4a7e-ad46-cb9aa786e01f",
//     ],
//     videoUrls: [
//       "https://www.youtube.com/watch?v=dCP37KAcuC8",
//       "https://www.youtube.com/watch?v=6RtzDBbeGVA",
//       "https://www.youtube.com/watch?v=DDINS1B15dE",
//       "https://www.youtube.com/watch?v=izn5S4iYQqs",
//       "https://www.youtube.com/watch?v=CCt4Fa8ySWc",
//       "https://www.youtube.com/watch?v=ErcQ8s4HktE",
//       "https://www.youtube.com/watch?v=AH2pFl9TcMU",
//       "https://www.youtube.com/watch?v=RK4QAgrwKOg",
//       "https://www.youtube.com/watch?v=NV8kh2OGHqo",
//       "https://www.youtube.com/watch?v=2C1abM2vfXQ",
//     ],
//     speakersList: [
//       {
//         name: "The Rural India Project",
//         bio: "The Rural India Project (TRIP) is a rural storytelling initiative by a group of students from the School of Communication, Manipal University.",
//         topic: "The Need for Rural Storytelling",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2017%2Fthe_rural_india_proj_1YtGf-1024x683.jpg?alt=media&token=b8cd6765-4764-465e-a3f1-67169f791132",
//         resources: ["https://www.facebook.com/theruralindiaproject/"],
//         achievements: [
//           "Storytellers of The Rural India Project research and take up stories originating in the countryside. Lamenting the lack of mainstream attention to issues pervading the local sphere, TRIP highlights local issues, fading practices and stories of human interest. By travelling to the farthest corners of the country, TRIP tries to explore and discover the facets of rural India that make it diverse and unique. With a significant amount of population residing in villages, TRIP advocates for the opportunities to bring their voices to the forefront of National News.",
//         ],
//       },
//       {
//         name: "Aranyani Bhargav",
//         bio: 'Aranyani Bhargav is a dancer, choreographer and Artistic Director of Vyuti Dance company, which does exploratory work in Bharatanatyam by incorporating modernity into tradition. She is the only classical dancer of her generation to experiment with Bharatanatyam through contact-based group work. Her work has been reviewed as "an astonishing product" and an "organic conversation between tradition and modernity". ',
//         topic: "Caste dynamics in classical dance: History vs. Narratives",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2017%2Faranyani-bhargav.jpg?alt=media&token=11c48c63-12d4-48b3-8134-25c7b94268c1",
//         resources: [
//           "https://www.instagram.com/aranyani_bharatanatyam/?hl=en",
//           "https://www.facebook.com/aranyanidance/",
//         ],
//         achievements: [
//           "Aranyani has also been a proficient soloist for over 15 years and has performed throughout India and all over the world. Her distinctive approach to Bharatanatyam as being simultaneously ancient and modern, traditional and contemporary, spiritual and secular has made her popular amidst a wide range of Indian and international audiences. She is also deeply committed to an academic engagement with dance. In addition, Aranyani is a dance scholar, researcher and teacher. She has studied at Oxford University where she wrote a thesis on the multiple modernities of Bharatanatyam.",
//         ],
//       },
//       {
//         name: "Monica Dogra",
//         bio: "Ms. Monica Dogra is a singer and one half of the Mumbai based electronic duo Shaa'ir and Func. She made her Bollywood acting debut with the film Dhobhi Ghat (2011). She has made a guest appearance in the movie Rock On! In December 2011, she served as a judge for Rolling Stone's \"Never Hide Sounds\" musical talent contest.",
//         topic: "Intimacy in the Urban Grid",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2017%2Fmonica%20dogra.jpg?alt=media&token=70b6e101-19ab-4f5f-829a-02dd26500ee3",
//         resources: [
//           "https://www.instagram.com/monicadogra/?hl=en",
//           "https://www.facebook.com/monicadogra/",
//           "https://twitter.com/monicasdogra?lang=en",
//         ],
//         achievements: [
//           "She is the host of The Dewarists. Ms. Dogra has also featured on the covers of Maxim and FHM magazine. Currently, she is one of the judges for the show The Stage.She was nominated by VH1 at the 2015 Europe Music Awards under the Best India Act category, which falls under the Worldwide Act category. Her international docu-series, Woman With Gloria Steinem (based on gender-related violence), was nominated in the Outstanding Documentary or Non-Fiction Series category at 68th Emmy Awards.",
//         ],
//       },
//       {
//         name: "Nandini Sundar",
//         bio: "Dr. Nandini Sundar is a social anthropologist of South Asia, who has contributed to the understanding of environmental struggles, of the impact of central and state policies on tribal politics, and of the moral ambiguities associated with subaltern political movements in contemporary India. These contributions are anchored in her deep grasp of the legacies of colonial rule for cultural politics in contemporary India, and in theoretically innovative understanding of the relationship of major historical events to persistent structural tensions in Indian society.",
//         topic:
//           "Looking around, not looking down: What Adivasi lives can teach us",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2017%2Fdr-nandini-sundar.jpg?alt=media&token=c49d6c46-c22b-4895-81c1-82ccfc7ffbea",
//         resources: [
//           "https://twitter.com/nandinisundar?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
//           "https://en.wikipedia.org/wiki/Nandini_Sundar",
//         ],
//         achievements: [
//           "Professor Sundar has placed her detailed studies of tribal politics in Central India in the broader frame of studies of the law, bureaucracy and morality in modern India. She is currently a Professor in and the Chairperson of the Department of Sociology at the Delhi School of Economics. She has held visiting positions at Punjab, Yale, Michigan, Cambridge and Chandigarh universities",
//         ],
//       },
//       {
//         name: "Onkar Khullar",
//         bio: "Mr. Onkar is currently the Managing Partner of Impact India Partners and Presentation Ink. He has won various awards during School, College and after his college for his Business Plan/Presentations. He is on the board of advisors for various non-profits in India and is the Consulting Director of the UK Based Innovation Firm Chakraviyuh.",
//         topic: "How to find your direction in life",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2017%2Ftemponkar.jpg?alt=media&token=7256c044-6660-405d-b213-c25fb491023d",
//         resources: [
//           "https://www.instagram.com/digitalgandhi/?hl=en",
//           "https://www.linkedin.com/in/digitalgandhi/?originalSubdomain=in",
//         ],
//         achievements: [
//           "After researching on 500 Nonprofits and Businesses, he developed a process called Impact Thinking to help non-profits around the world for which he received Pride of India Award 2015. He is well renowned for introducing a new way of life called 5 year Old Philosophy through his book 5-year-old Billionaire.",
//         ],
//       },
//       {
//         name: "Premlata Agrawal",
//         bio: "Mrs. Premlata Agarwal is the first Indian woman mountaineer to scale the Seven Summits. She is a Padma Shri awardee for her achievements in the field of Mountaineering.",
//         topic: "Height of Destiny",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2017%2Fpremlata-agarwal.jpg?alt=media&token=62dfde3c-987d-4244-99a5-b32ccaf4e19b",
//         resources: [
//           "https://en.wikipedia.org/wiki/Premlata_Agrawal",
//           "https://twitter.com/premlata7summit",
//           "https://www.facebook.com/premlata.ag/",
//         ],
//         achievements: [
//           " She is the oldest Indian woman to have scaled the world's tallest peak, Mount Everest (29,029 ft.), at the age of 48 years. Mrs. Agarwal discovered her passion when she was 37. She subsequently trained under Mrs. Bachendri Pal. Her feats have earned her a listing in the Limca Book of Records",
//         ],
//       },
//       {
//         name: "Rishabh Seen",
//         bio: "Mr. Seen is touted as the youngest classical music player in the country and the world's first Metal Sitar player.",
//         topic: "3 magical approaches for achieving a perfect life",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2017%2Frishabh_seen_1-1024x683.jpg?alt=media&token=c5352180-dddb-4112-b4b0-c55474756da0",
//         resources: [
//           "https://www.instagram.com/rishabhseen/?hl=en",
//           "https://twitter.com/rishabhseen?lang=en",
//           "https://www.linkedin.com/in/rishabh-seen-255a251b9/?originalSubdomain=in",
//         ],
//         achievements: [
//           'The novelty of his music lies in the perfect amalgamation of classical Indian music and metal. He is an alumnus of Hindu College, Delhi University. He has performed worldwide and received appreciation and opportunity to play with Legends like Ustad Shahid Parvez, Niladri Kumar, Talvin Singh, Pt.Rajan-Sajan Mishra(s), Pt. Birju Maharaj. He has played in major Indian classical music festivals over the years. He formed the world’s first ever instrumental Indian Classical music – Progressive Metal band named ‘Mute the Saint’ with 4 other well-known musicians in 2016. He is working to evolve the relatively unknown and fairly recent music genre "djent" with his fairly appreciated cover of "Tempting Times" by progressive metal band Animals as Leaders. Mr. Seen has a vision to make classical music a part of mainstream music culture and revive its relevance in modern world',
//         ],
//       },
//       {
//         name: "Sanjay Aggarwal",
//         bio: "He serves as the Managing Director of Finnish-based energy company Fortum, overseeing their Indian endeavours. Together, they are working to reinvent the landscape of renewable energy in India. He also worked for Tata Power, Wartsila, ABB and Thermax. He served as a Director of Industrial Energy Limited until February 2014. He is an alumnus of Delhi College of Engineering (DCE).",
//         topic: "In Search of Energy Immortality",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2017%2FSanjay%20Aggrawal.jpg?alt=media&token=39b026b8-12a8-4eb0-97d8-d6b8512ca7c1",
//         resources: [
//           "https://www.linkedin.com/in/sanjay65/?originalSubdomain=in",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Sukant Khurana",
//         bio: "Dr. Sukant Khurana is a neuroscientist and data scientist who enjoys studying complexity and nuances, whether of brain functioning, drug discovery, development of new statistical tools, or analysing large data sets.",
//         topic: "The Need for Citizen Science",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2017%2FSukant%20Khurana.jpg?alt=media&token=bb214324-8478-4f16-b06d-3fc943d6331c",
//         resources: [
//           "https://twitter.com/Sukant_Khurana?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
//           "https://www.facebook.com/SukantKhuranaauthorsite",
//         ],
//         achievements: [
//           "He works on drug discovery for various neurological disorders, including alcohol addiction, using plant extracts, peptides, and epigenetic agents. He is both experimentally, theoretically and computationally exploring mechanisms of Parkinson's disease, activity dependent brain development, sub-millisecond timing computation in the brain, and mechanisms of neuronal plasticity. His data-science work is on two streams: developing novel statistical tools and utilizing data science for biomedical research. Through data science, he works on causes of sustainable development, where he is exploring issues of mental health, addiction, and AIDS epidemic.",
//         ],
//       },
//       {
//         name: "Tanmoy Chakrabarty",
//         bio: "Tanmoy Chakrabarty - Vice President & Global Head - Government Industry Solutions Unit (ISU) at Tata Consultancy Services Limited (TCS), based in New Delhi, India.",
//         topic: "Bringing IT services to the Government",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2017%2Ftanmoy-chakraborty.jpg?alt=media&token=ddd9e2fc-2595-4fb8-9cb0-e83dec033874",
//         resources: [
//           "https://www.linkedin.com/in/tanmoy-chakrabarty-ba4b58/?originalSubdomain=in",
//           "https://twitter.com/tanmoychak",
//         ],
//         achievements: [
//           "He has over 33 years of experience related with Business Development, Sales and Delivery of Integrated IT Solutions and Services to the Government sector and has led many enterprise wide, mission mode and holistic transformational projects in the area of e-Governance in India and other parts of the World. Tanmoy currently manages 165 Clients in the Government Sector for TCS and has a team of over 7500 Associates in TCS in 12 Countries. Recent projects include MCA 21, Income Tax, Central Excise & Customs, Passport and e-Migrate and several transformational projects in State Governments and tax automations programs in East Africa.",
//         ],
//       },
//     ],
//   },
//   {
//     eventType: "past_new_format",
//     details:
//       "Deconstructing Perceptions, Reconstructing Identities, the event theme, emphasises on galvanising the concept of thawing preconceived notions and moulding them to better suit humanity.\nTEDxDTU is back after four years, and with its return it brings an indispensable opportunity of enlightenment.",
//     title: "Deconstructing Perceptions; Reconstructing Identities",
//     dateTime: "2016-04-18",
//     venue: "Delhi Technological University",
//     videoUrls: [
//       "https://www.youtube.com/watch?v=nixUo0_y89o",
//       "https://www.youtube.com/watch?v=-0UPRn7NvNg",
//       "https://www.youtube.com/watch?v=RekJ_HQDCIM",
//       "https://www.youtube.com/watch?v=qblRqEjIv9A",
//       "https://www.youtube.com/watch?v=Im9gQM69bDQ",
//       "https://www.youtube.com/watch?v=Vw6_j-Lxu7E",
//       "https://www.youtube.com/watch?v=zmcb9FOI9Fg",
//       "https://www.youtube.com/watch?v=duUzTUFYSnM",
//       "https://www.youtube.com/watch?v=VToAam0nz_I",
//       "https://www.youtube.com/watch?v=q4tlmMT9iHM",
//     ],
//     imageUrl:
//       "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2016%2F2016.jpg?alt=media&token=b3d591e4-35ea-4fcc-8c09-4bf2631026cc",
//     galleryImageUrls: [],
//     speakersList: [
//       {
//         name: "Aaron Friedland",
//         bio: "Founder and Executive Director of The Walking School Bus, an organization which aims to help students worldwide access education. His personal experiences in conjunction to his work as an Economic Analyst at UN Watch opened his eyes to myriad barriers to education including poverty, distance to school and lack of nutrition.",
//         topic: "Empowering access to education in the age of globalization",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2016%2FAaron.PNG?alt=media&token=7513b865-ebe5-457e-af8e-f7d8b7e8c310",
//         resources: [
//           "https://www.linkedin.com/in/aaron-friedland-a4b23a114/?originalSubdomain=ca",
//           "https://explorer-directory.nationalgeographic.org/aaron-g-friedland",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Alisha Abdullah",
//         bio: "Winner of numerous racing championships held across the globe, she is India's first female national racing champion. She is part of the Volkswagen India team and is also in the process of building India's all women racing team through her ‘Alisha Abdullah Racing Academy for Women’.",
//         topic: "The Race that Never Starts",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2016%2FAlisha.PNG?alt=media&token=1348ab79-a6e1-44e2-8068-9225e92f0b67",
//         resources: [
//           "https://www.instagram.com/alishaabdullah/?hl=en",
//           "https://en.wikipedia.org/wiki/Alisha_Abdullah",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Archy J",
//         bio: "Ms. Archy J is India’s first Bagpipe artist. Ms. Jay has been playing the bagpipes for quite some time, having picked up the nuances of the instrument in a short period of time, and it's something that has become an integral part of her personality. She quit her well-paying management job to focus entirely on the bagpipes.",
//         topic: "A Mellifluous Cadenza called Life",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2016%2FArchy%20J.jpg?alt=media&token=0afaedb5-d351-4824-bf08-3ba2a4fdd206",
//         resources: [
//           "https://www.instagram.com/thesnakecharmerbagpiper/?hl=en",
//           "https://www.facebook.com/ArchyJay/",
//         ],
//         achievements: [
//           " Her YouTube channel ArchyJ03 has a multitude of followers. Ms. Jay is entirely self-taught. She is also a trained singer in Western and Hindustani music, and was a vocalist in a metal band called Rogue Saint. Ms. Jay has developed a greater appreciation for Irish and Scottish music and also variations of all kinds of folk music. In the future, she wants to incorporate the sound of bagpipes in different styles of music as a solo artist and through collaborations, but there's also an ocean of music she wants to learn and master.",
//         ],
//       },
//       {
//         name: "Dilip Chhabria",
//         bio: "Renowned style guru when it comes to re-modelling cars and a marriage of an artist’s sensibilities and an engineer’s mind, he is the Founder of DC Design, an Indian design firm which designs and builds concept cars and prototypes.",
//         topic: "Pencils to Pistons",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2016%2FDilip%20Chabria.jpg?alt=media&token=3459382e-718e-461b-9c38-1e1285064095",
//         resources: [
//           "https://en.wikipedia.org/wiki/Dilip_Chhabria",
//           "https://www.instagram.com/dilip.chhabria/",
//           "https://mobile.twitter.com/dilipchhabria",
//           "https://www.facebook.com/dilipmodifiers/",
//           "https://www.linkedin.com/in/dilip-chhabria-7864799/?originalSubdomain=in",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Dr. Ashok Seth",
//         bio: "Recipient of numerous prestigious awards, including ‘Padma Bhushan’, he is the Chairman of Fortis Escorts Heart Institute and Head of Cardiology Council of Fortis Group of Hospitals. He is a record-holder and his contributions in the field of Cardiology, especially Interventional Cardiology have been recognised extensively across the globe.",
//         topic: "Man amongst the Machines",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2016%2FDr%20Ashok.jpg?alt=media&token=8abd0567-2e3e-4065-84dd-b83d6e5f105f",
//         resources: [
//           "https://en.wikipedia.org/wiki/Ashok_Seth",
//           "https://twitter.com/dr_ashokseth",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Dr. Shivangi Maletia",
//         bio: "She is a dental surgeon, pageant coach, social activist and winner of ‘Mrs. Heritage World 2015’ amongst many other pageants",
//         topic: "Pride in Prejudice",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2016%2FDr%20Shivangi.PNG?alt=media&token=e32cfa2e-26d2-4c89-bc6d-fa1c9a86ee8c",
//         resources: [
//           "https://www.instagram.com/shivangimaletia/?hl=en",
//           "https://twitter.com/ShivangiMaletia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
//           "https://www.facebook.com/drshivangimaletiajangra/",
//         ],
//         achievements: [],
//       },

//       {
//         name: "Lomesh Dutta",
//         bio: "Vice President - Paytm. Distinguished alumnus of Delhi Technological University",
//         topic: "An Idea called Entrepreneur",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2016%2FLomesh.jpg?alt=media&token=81e1a6f2-16c8-4177-983f-fe7ae82c2e37",
//         resources: [
//           "https://www.linkedin.com/in/lomesh/",
//           "https://www.facebook.com/duttalomesh",
//           "https://twitter.com/lomeshdutta",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Richa Chadha",
//         bio: "A powerful actress who has garnered accolades and recognition for enacting unconventional characters with flair and prowess. She was awarded the ‘Filmare Critics Award for Best Actress’ in 2013 and ‘Stardust Award for Performer of the Year’ in 2015.",
//         topic: "Love art in yourself, and not yourself in art.",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2016%2FRiccha%20Chaddha.jpg?alt=media&token=585a0468-b4fc-47fb-8852-34663b590e52",
//         resources: [
//           "https://en.wikipedia.org/wiki/Richa_Chadda",
//           "https://www.instagram.com/therichachadha/",
//           "https://www.facebook.com/therichachadha",
//           "https://mobile.twitter.com/richachadha",
//         ],
//         achievements: [],
//       },
//       {
//         name: "Sanjay Modi",
//         bio: "Mr.Sanjay Modi is the Managing Director of monster.com in India, Middle East, Hong Kong and South-East Asia.",
//         topic: "Demons of Unemployment",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2016%2FSanjay.PNG?alt=media&token=ca4ae353-b5f6-4bd2-af02-6fb6232bd0d5",
//         resources: [
//           "https://www.linkedin.com/in/sanjay-modi-10a41a6/?originalSubdomain=in",
//           "https://mobile.twitter.com/modi_sanjay",
//         ],
//         achievements: [
//           "He was one of Monster Worldwide’s first five employees in India after the company was set up there in 2001. Alumnus of Delhi College of Engineering and Institute of Management Technology, Ghaziabad, he sets a remarkable example for engineers who aspire to make the transition from technology to management",
//         ],
//       },
//       {
//         name: "Taru Dalmia",
//         bio: "Mr. Taru Dalmia - Also known by his stage name ‘Delhi Sultanate’, he is a poet and hip hop/dancehall MC who also happens to be an academic historian and social activist. He is the Founder of ‘Bass Foundation Roots Sound System India’ and is part of ‘Word, Sound, Power’, a collective that constructs collaborations with South Asian artists on issues of social justice.",
//         topic: "Reggae, Rhythm, Revolution",
//         imageUrl:
//           "https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/event-images%2F2016%2FTaru%20Dalmia.jpg?alt=media&token=a729a9af-b018-4c7c-ad1d-dcc8ac6e3bed",
//         resources: ["https://www.facebook.com/delhisultanate"],
//         achievements: [],
//         // resources:[],
//       },
//     ],
//   },
// ];

// router.post("/add-test", async (req, res) => {
//   try {
//     const data = await Event.insertMany(testData);
//     res.send(data);
//   } catch (error) {
//     res.send(error);
//   }
// });
module.exports = router;
