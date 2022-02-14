const mongoose = require("mongoose");
const Event = require("../../backend/schemas/event");
const data = [
  {
    dateTime: "2022-06-21T08:16:29.000",
    venue: "Dumbéa",
    requiresTicket: false,

    imageUrl: "http://dummyimage.com/114x100.png/ff4444/ffffff",
    details: "Poisoning by opium, accidental (unintentional), init encntr",
    title: "Pretty Baby",
    speakersList: [
      {
        achievements: [
          "Occup of special agricultural vehicle injured in traf, init",
          "Oth diseases of the bld/bld-form org/immun mechnsm comp preg",
          "Unsp glider (nonpowered) accident injuring occupant, subs",
        ],
        imageUrl: "http://dummyimage.com/113x100.png/dddddd/000000",
        name: "Johannes Penwarden",
        resources: [
          "http://howstuffworks.com/rhoncus/mauris/enim.xml",
          "http://dailymotion.com/platea/dictumst/etiam/faucibus.aspx",
          "https://irs.gov/ante/vivamus.jsp",
        ],
        bio: "Bladder disorders in diseases classified elsewhere",
        topic:
          "pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor",
      },
      {
        achievements: [
          "Unspecified menopausal and perimenopausal disorder",
          "Unspecified open wound of right hand, sequela",
          "Exposure to ignition or melting of oth clothing and apparel",
        ],
        imageUrl: "http://dummyimage.com/232x100.png/dddddd/000000",
        name: "Darb Boch",
        resources: [
          "http://marketwatch.com/cubilia/curae/nulla/dapibus/dolor/vel.html",
          "https://google.co.jp/in/faucibus/orci.json",
          "https://china.com.cn/sed/justo/pellentesque/viverra/pede/ac.js",
        ],
        topic:
          "augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac",
        bio: "Other female genital prolapse",
      },
      {
        achievements: [
          "Abrasion, unspecified ankle",
          "Nondisp spiral fx shaft of l fibula, 7thM",
          "Apraxia following nontraumatic subarachnoid hemorrhage",
        ],
        imageUrl: "http://dummyimage.com/228x100.png/5fa2dd/ffffff",
        name: "Vidovic Lyvon",
        topic:
          "sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris",
        resources: [
          "https://independent.co.uk/viverra.html",
          "http://usatoday.com/posuere/cubilia/curae/donec/pharetra/magna.js",
          "http://telegraph.co.uk/phasellus/id/sapien/in/sapien.png",
        ],
        bio: "Salter-Harris Type I physeal fracture of lower end of radius, left arm",
      },
      {
        achievements: [
          "Other specified injury of superior mesenteric vein",
          "Driver of bus injured in clsn w rail trn/veh in traf, init",
          "Cutaneous abscess of head [any part, except face]",
        ],
        imageUrl: "http://dummyimage.com/168x100.png/cc0000/ffffff",
        name: "Gerek Treble",
        bio: "Nondisplaced fracture of medial condyle of unspecified femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with nonunion",
        topic:
          "odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac",
        resources: [
          "https://bing.com/tempus/sit.js",
          "https://imdb.com/nulla/tellus/in.xml",
          "http://bbb.org/duis/aliquam/convallis.aspx",
        ],
      },
      {
        achievements: [
          "Umbilical hernia",
          "Unspecified traumatic cataract, unspecified eye",
          "Torus fx lower end of unsp fibula, subs for fx w malunion",
        ],
        imageUrl: "http://dummyimage.com/143x100.png/ff4444/ffffff",
        name: "Brittne Bone",
        resources: [
          "https://netscape.com/ut/erat/curabitur/gravida/nisi.json",
          "https://moonfruit.com/potenti/cras/in.png",
          "http://gravatar.com/magnis/dis.json",
        ],
        topic:
          "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor",
        bio: "Laceration without foreign body of abdominal wall, epigastric region without penetration into peritoneal cavity",
      },
    ],
    galleryImageUrls: null,
    streamingUrl: null,
    eventType: "upcoming",
  },
  {
    dateTime: "2022-01-18T17:30:18Z",
    venue: "Sedkyrkeshch",
    currentSpeakerIndex: 0,
    requiresTicket: true,
    speakersList: [
      {
        achievements: [
          "Crushing injury of left little finger, subsequent encounter",
          "Blister (nonthermal), unspecified knee, subsequent encounter",
          "Exposure to other animate mechanical forces, init encntr",
        ],
        imageUrl: "http://dummyimage.com/226x100.png/dddddd/000000",
        name: "Mufinella Duxbury",
        bio: "Poisoning by, adverse effect of and underdosing of opium",
        resources: [
          "https://un.org/diam/erat/fermentum.xml",
          "https://photobucket.com/blandit/lacinia/erat/vestibulum.json",
          "https://mac.com/rhoncus/sed/vestibulum/sit/amet/cursus.json",
        ],
        topic:
          "platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel",
      },
      {
        achievements: [
          "Unsp superficial injury of unsp parts of thorax, subs encntr",
          "Lacerat intrinsic musc/fasc/tend r idx fngr at wrs/hnd lv",
          "Oth osteopor w crnt path fx, l forearm, 7thK",
        ],
        imageUrl: "http://dummyimage.com/164x100.png/5fa2dd/ffffff",
        name: "Myrtle Broggetti",
        topic: "sit amet justo morbi ut odio cras mi pede malesuada in",
        bio: "Unspecified injury of long flexor muscle, fascia and tendon of thumb at wrist and hand level",
        resources: [
          "http://mapy.cz/dictumst/etiam/faucibus/cursus/urna/ut.xml",
          "https://about.me/maecenas/tincidunt.json",
          "http://nydailynews.com/nibh.jpg",
        ],
      },
      {
        achievements: [
          "Disp fx of base of neck of left femur, init for clos fx",
          "Nondisp unsp fx right less toe(s), subs for fx w routn heal",
          "Other cerebrovascular syphilis",
        ],
        imageUrl: "http://dummyimage.com/106x100.png/cc0000/ffffff",
        name: "Willamina Feeny",
        topic:
          "pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus",
        bio: "Displaced fracture of left tibial spine, subsequent encounter for open fracture type I or II with malunion",
        resources: [
          "http://unicef.org/molestie.html",
          "https://quantcast.com/tellus/in/sagittis/dui/vel.html",
          "https://arstechnica.com/nullam.png",
        ],
      },
      {
        achievements: [
          "Adverse effect of drug aff the autonomic nervous system",
          "Burn of unspecified degree of right ankle",
          "Injury of musculocutaneous nerve, right arm, sequela",
        ],
        imageUrl: "http://dummyimage.com/143x100.png/cc0000/ffffff",
        name: "Riordan Barus",
        topic:
          "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum",
        bio: "Dislocation of unspecified interphalangeal joint of unspecified thumb, initial encounter",
        resources: [
          "https://booking.com/consectetuer/eget/rutrum/at/lorem/integer/tincidunt.jsp",
          "https://smh.com.au/sapien/non/mi/integer/ac/neque/duis.json",
          "https://tiny.cc/et.jsp",
        ],
      },
      {
        achievements: [
          "Vascular dementia with behavioral disturbance",
          "Nondisp comminuted fx shaft of humerus, unsp arm, init",
          "Fall d/t clsn betw oth pwr wtrcrft and oth wtrcrft/obj, subs",
        ],
        imageUrl: "http://dummyimage.com/181x100.png/ff4444/ffffff",
        name: "Nicola Gubbin",
        topic:
          "eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus",
        bio: "Nondisplaced fracture of lesser trochanter of unspecified femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with nonunion",
        resources: [
          "http://lulu.com/ut/massa/quis/augue/luctus/tincidunt/nulla.jsp",
          "http://51.la/id/massa/id.js",
          "http://intel.com/praesent/blandit/lacinia/erat/vestibulum.png",
        ],
      },
    ],

    imageUrl: "http://dummyimage.com/237x100.png/ff4444/ffffff",
    details: "Oth injury of plantar artery of unspecified foot, sequela",
    title: "Patema Inverted",
    galleryImageUrls: null,
    streamingUrl: "http://about.me/mi/integer/ac/neque/duis.jsp",
    eventType: "live",
  },
  {
    dateTime: "2022-02-16T05:28:15.000",
    venue: "Kabul",
    requiresTicket: true,

    imageUrl: "http://dummyimage.com/159x100.png/dddddd/000000",
    details: "Other nondisp fx of base of first metacarpal bone, left hand",
    title: "Red Beard (Akahige)",

    speakersList: [
      {
        achievements: [
          "Driver of 3-whl mv inj in nonclsn trnsp acc nontraf, sequela",
          "Inj l int carotid, intcr w LOC >24 hr w/o ret consc w surv",
          "Adverse effect of analeptics and opioid receptor antag, init",
        ],
        imageUrl: "http://dummyimage.com/162x100.png/dddddd/000000",
        name: "Leisha Gantley",
        topic:
          "euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis",
        bio: "Underdosing of hydantoin derivatives",
        resources: [
          "http://moonfruit.com/sed/interdum/venenatis/turpis/enim/blandit/mi.aspx",
          "https://google.co.jp/quisque.jpg",
          "http://arstechnica.com/diam/in.png",
        ],
      },
      {
        achievements: [
          "Monoplg low lmb fol ntrm intcrbl hemor aff left nondom side",
          "Other infective spondylopathies, lumbosacral region",
          "Acquired absence of unspecified breast and nipple",
        ],
        imageUrl: "http://dummyimage.com/127x100.png/ff4444/ffffff",
        name: "Shani Huggill",
        topic:
          "lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in",
        bio: "Pedestrian on skateboard injured in collision with car, pick-up truck or van, unspecified whether traffic or nontraffic accident",
        resources: [
          "https://naver.com/magna/vestibulum.png",
          "http://ehow.com/donec/diam/neque/vestibulum.js",
          "http://phoca.cz/in.html",
        ],
      },
      {
        achievements: [
          "Intentional self-harm by drown, unsp, sequela",
          "Subacute osteomyelitis, tibia and fibula",
          "Breakdown (mechanical) of bile duct prosthesis",
        ],
        imageUrl: "http://dummyimage.com/181x100.png/5fa2dd/ffffff",
        name: "Lisha Snowsill",
        topic: "morbi ut odio cras mi pede malesuada in imperdiet et",
        resources: [
          "http://sciencedirect.com/amet.js",
          "https://usnews.com/justo/aliquam.html",
          "http://squidoo.com/quisque/arcu/libero/rutrum/ac/lobortis/vel.jsp",
        ],
        bio: "Stress fracture, unspecified finger(s)",
      },
    ],
    price: 390,
    galleryImageUrls: null,
    eventType: "upcoming",
    streamingUrl: null,
  },
  {
    dateTime: "2022-07-13T21:57:20.000",
    venue: "Oslo",
    requiresTicket: false,

    imageUrl: "http://dummyimage.com/168x100.png/cc0000/ffffff",
    details: "Protozoal diseases compl preg/chldbrth",
    title: "An Evening with Robin Williams",
    speakersList: [
      {
        achievements: [
          "Oth incmpl lesion at unsp level of thor spinal cord, init",
          "Contusion of unspecified forearm, initial encounter",
          "Poisoning by antiasthmatics, assault, initial encounter",
        ],
        imageUrl: "http://dummyimage.com/152x100.png/dddddd/000000",
        name: "Ahmad Tweedlie",
        topic:
          "tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla",
        resources: [
          "https://gravatar.com/nulla/nisl.jsp",
          "http://buzzfeed.com/leo/odio/condimentum/id/luctus.xml",
          "http://google.com.hk/in/quis.png",
        ],
        bio: "Maternal care for (suspected) central nervous system malformation in fetus, not applicable or unspecified",
      },
      {
        achievements: [
          "Felty's syndrome, knee",
          "Retained (old) fb following penetrating wound of orbit",
          "Greenstick fx shaft of rad, r arm, subs for fx w delay heal",
        ],
        imageUrl: "http://dummyimage.com/202x100.png/ff4444/ffffff",
        name: "Lise Ielden",
        resources: [
          "https://i2i.jp/odio/porttitor/id/consequat/in.png",
          "https://bbb.org/est/quam/pharetra/magna.jsp",
          "http://bloglines.com/semper/interdum/mauris/ullamcorper/purus/sit/amet.js",
        ],
        bio: "Laceration of right renal vein",
        topic:
          "turpis a pede posuere nonummy integer non velit donec diam neque",
      },
      {
        achievements: [
          "Prsn brd/alit mtrcy injured in collision w pedl cyc, sequela",
          "Sprain of thyroid region, initial encounter",
          "Milt op w dest arcrft due to clsn w oth aircraft, milt, init",
        ],
        imageUrl: "http://dummyimage.com/154x100.png/ff4444/ffffff",
        name: "Maye Gilpillan",
        bio: "Unspecified open wound of abdominal wall, left upper quadrant with penetration into peritoneal cavity",
        resources: [
          "http://wsj.com/interdum/mauris/ullamcorper/purus/sit/amet.xml",
          "http://clickbank.net/vulputate/nonummy/maecenas/tincidunt/lacus/at.jsp",
          "http://baidu.com/tellus/semper/interdum.aspx",
        ],
        topic:
          "semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut",
      },
      {
        achievements: [
          "Strain extn musc/fasc/tend fngr,unsp fngr at forarm lv, sqla",
          "Frostbite with tissue necrosis of hip and thigh",
          "Nondisp fx of base of unsp metacarpal bone, init for clos fx",
        ],
        imageUrl: "http://dummyimage.com/223x100.png/dddddd/000000",
        name: "Yuri Heynel",
        resources: [
          "http://businesswire.com/turpis/donec/posuere/metus/vitae/ipsum.json",
          "https://soundcloud.com/sit.jsp",
          "https://bloomberg.com/lectus/aliquam/sit/amet.html",
        ],
        bio: "Psoas muscle abscess",
        topic:
          "suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc",
      },
      {
        achievements: [
          "Corrosions of oth parts of right eye and adnexa, init encntr",
          "Disp fx of base of fifth metacarpal bone. left hand",
          "Nondisp fx of 2nd metatarsal bone, unsp ft, 7thP",
        ],
        imageUrl: "http://dummyimage.com/201x100.png/dddddd/000000",
        name: "Pryce Biagini",
        resources: [
          "http://usa.gov/curae.aspx",
          "https://geocities.com/sapien/placerat/ante/nulla/justo/aliquam.json",
          "https://nsw.gov.au/in/sagittis/dui/vel.js",
        ],
        topic: "in congue etiam justo etiam pretium iaculis justo in hac",
        bio: "Corrosion of unspecified degree of unspecified toe(s) (nail), sequela",
      },
    ],
    galleryImageUrls: null,
    eventType: "upcoming",
    streamingUrl: null,
  },
  {
    dateTime: "2021-04-23T19:45:39Z",
    venue: "Quebrada de Arena",
    currentSpeakerIndex: 0,
    requiresTicket: false,

    imageUrl: "http://dummyimage.com/199x100.png/dddddd/000000",
    details: "Superficial frostbite of unspecified toe(s), sequela",
    title: "Red Dust",
    speakersList: [
      {
        achievements: [
          "Kaposi's sarcoma of skin",
          "Diseases of the skin, subcu comp pregnancy, second trimester",
          "Burn of third degree of right forearm, sequela",
        ],
        imageUrl: "http://dummyimage.com/168x100.png/ff4444/ffffff",
        name: "Hamnet Shadwick",
        resources: [
          "http://hud.gov/non.jsp",
          "http://state.gov/sociis/natoque/penatibus/et/magnis.png",
          "https://godaddy.com/nulla/ut/erat/id/mauris/vulputate/elementum.png",
        ],
        topic: "vivamus in felis eu sapien cursus vestibulum proin eu mi",
        bio: "Age-related osteoporosis with current pathological fracture, right ankle and foot, subsequent encounter for fracture with delayed healing",
      },
      {
        achievements: [
          "Unsp car occ inj in clsn with statnry object in traf, sqla",
          "Displ seg fx shaft of l fibula, 7thH",
          "Displacement of cardiac electrode, subsequent encounter",
        ],
        imageUrl: "http://dummyimage.com/205x100.png/ff4444/ffffff",
        name: "Kaine Benian",
        bio: "Nondisplaced segmental fracture of shaft of right femur, initial encounter for open fracture type IIIA, IIIB, or IIIC",
        topic:
          "ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit",
        resources: [
          "https://boston.com/elementum/in.png",
          "http://zdnet.com/sit/amet/consectetuer/adipiscing/elit.jpg",
          "https://t.co/primis/in/faucibus/orci/luctus.aspx",
        ],
      },
      {
        achievements: [
          "Traumatic rupture of thoracic intervertebral disc, sequela",
          "Burn unsp deg mult sites of shldr/up lmb, ex wrs/hnd, subs",
          "Poisn by slctv seroton/norepineph reup inhibtr, acc, init",
        ],
        imageUrl: "http://dummyimage.com/165x100.png/cc0000/ffffff",
        name: "Melamie Matthiae",
        bio: "Acquired atrophy of left ovary and fallopian tube",
        topic:
          "tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer",
        resources: [
          "http://is.gd/cras/mi/pede.json",
          "http://berkeley.edu/ultrices/posuere/cubilia/curae/mauris.html",
          "https://theatlantic.com/quisque/porta/volutpat.html",
        ],
      },
      {
        achievements: [
          "Progressive diaphyseal dysplasia",
          "Unsp mtrcy rider injured in nonclsn trnsp acc nontraf, subs",
          "Toxic effect of cyanides, undetermined, subsequent encounter",
        ],
        imageUrl: "http://dummyimage.com/235x100.png/cc0000/ffffff",
        name: "Jenda Broadbere",
        topic:
          "eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui",
        bio: "Traumatic compartment syndrome of left lower extremity",
        resources: [
          "https://fda.gov/ut/at/dolor.png",
          "http://elegantthemes.com/at/turpis/donec/posuere.html",
          "http://opensource.org/nisl/aenean/lectus/pellentesque/eget.json",
        ],
      },
    ],
    galleryImageUrls: null,
    streamingUrl: "https://rakuten.co.jp/eleifend/pede/libero/quis.png",
    eventType: "live",
  },
  {
    dateTime: "2021-08-14T20:47:05Z",
    venue: "Laocheng",
    requiresTicket: true,
    speakersList: [
      {
        achievements: [
          "Parasitic cyst of iris, ciliary body or anterior chamber",
          "Laceration of deep palmar arch of left hand, subs encntr",
          "Unsp fracture of left femur, subs for clos fx w routn heal",
        ],
        imageUrl: "http://dummyimage.com/116x100.png/ff4444/ffffff",
        name: "Koenraad Levermore",
        resources: [
          "http://example.com/mattis/odio/donec.js",
          "http://scribd.com/aenean/lectus/pellentesque/eget/nunc/donec/quis.aspx",
          "http://pagesperso-orange.fr/ut/blandit/non/interdum/in/ante.png",
        ],
        bio: "Driver of dune buggy injured in traffic accident, initial encounter",
        topic:
          "magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et",
      },
    ],

    imageUrl: "http://dummyimage.com/233x100.png/dddddd/000000",
    details: "Corrosion of third degree of left thumb (nail), init encntr",
    title: "Bringing Up Bobby",
    galleryImageUrls: null,
    streamingUrl: "https://multiply.com/duis/aliquam.json",
    eventType: "story",
  },
  {
    dateTime: "2022-09-24T16:00:29.000",
    venue: "Espinillo",
    requiresTicket: false,
    speakersList: [
      {
        achievements: [
          "Major laceration of right internal jugular vein, subs encntr",
          "Double urethra",
          "Sltr-haris Type II physl fx lower end of unsp fibula, sqla",
        ],
        imageUrl: "http://dummyimage.com/121x100.png/ff4444/ffffff",
        name: "Vivian Smitham",
        topic:
          "sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget",
        resources: [
          "http://com.com/lorem/vitae/mattis/nibh/ligula/nec/sem.jsp",
          "https://github.io/cum/sociis.png",
          "http://hp.com/ultrices/posuere/cubilia/curae/mauris/viverra/diam.png",
        ],
        bio: "Scarlet fever with otitis media",
      },
      {
        achievements: [
          "Bent bone of radius",
          "Respiratory distress of newborn, unspecified",
          "Adjustment disorder with other symptoms",
        ],
        imageUrl: "http://dummyimage.com/122x100.png/cc0000/ffffff",
        name: "Edin Wallworke",
        topic:
          "aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec",
        bio: "Unspecified injury of femoral vein at hip and thigh level, right leg, subsequent encounter",
        resources: [
          "https://globo.com/nisi/volutpat/eleifend/donec.jsp",
          "https://wordpress.org/id/nulla/ultrices/aliquet/maecenas/leo/odio.jpg",
          "http://sciencedaily.com/nunc/commodo.jsp",
        ],
      },
      {
        achievements: [
          "Feeding problems of newborn",
          "Military operations involving gasoline bomb, civilian, subs",
          "Unsp open wound of right eyelid and periocular area, sequela",
        ],
        imageUrl: "http://dummyimage.com/214x100.png/cc0000/ffffff",
        name: "Myrah Kiddie",
        resources: [
          "http://angelfire.com/eleifend.png",
          "http://example.com/feugiat/non/pretium/quis.js",
          "https://dmoz.org/pretium/nisl/ut.jpg",
        ],
        topic:
          "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti",
        bio: "Papillomavirus as the cause of diseases classified elsewhere",
      },
      {
        achievements: [
          "Moderate laceration of spleen, sequela",
          "Failure of sterile precautions during surgical operation",
          "Acute lymphangitis of other sites",
        ],
        imageUrl: "http://dummyimage.com/191x100.png/dddddd/000000",
        name: "Hermon Dominguez",
        bio: "Typhoid fever with other complications",
        resources: [
          "http://ocn.ne.jp/gravida/nisi/at/nibh.json",
          "https://dagondesign.com/ac.js",
          "http://youtu.be/et.png",
        ],
        topic:
          "est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla",
      },
    ],

    imageUrl: "http://dummyimage.com/135x100.png/5fa2dd/ffffff",
    details: "Local residential or business street as place",
    title: "Artois the Goat",
    galleryImageUrls: null,
    eventType: "upcoming",
    streamingUrl: null,
  },
  {
    dateTime: "2021-09-22T22:49:55Z",
    venue: "Seria",
    currentSpeakerIndex: 0,
    requiresTicket: true,
    speakersList: [
      {
        achievements: [
          "Fx unsp tarsal bone(s) of unsp foot, init for opn fx",
          "Poisoning by oth antipsychot/neurolept, accidental, sequela",
          "Nondisp fx of medial phalanx of right middle finger",
        ],
        imageUrl: "http://dummyimage.com/114x100.png/5fa2dd/ffffff",
        name: "Madel Putley",
        resources: [
          "https://seattletimes.com/malesuada/in/imperdiet/et/commodo/vulputate/justo.js",
          "http://shop-pro.jp/tempor/turpis.html",
          "https://who.int/proin/interdum/mauris/non.js",
        ],
        bio: "Unspecified injury of unspecified blood vessel at ankle and foot level, unspecified leg",
        topic:
          "libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante",
      },
      {
        achievements: [
          "Mech compl of implnt elec nstim, generator, init",
          "Nocardiosis",
          "Burn of left eye and adnexa, part unspecified",
        ],
        imageUrl: "http://dummyimage.com/158x100.png/ff4444/ffffff",
        name: "Lindsay Blaxlande",
        resources: [
          "http://telegraph.co.uk/lectus/pellentesque/at/nulla/suspendisse/potenti.xml",
          "https://geocities.jp/metus.json",
          "https://a8.net/faucibus/orci/luctus/et/ultrices/posuere/cubilia.aspx",
        ],
        topic:
          "neque libero convallis eget eleifend luctus ultricies eu nibh quisque id",
        bio: "Maternal care for other known or suspected poor fetal growth, third trimester",
      },
      {
        achievements: [
          "Acquired absence of foot",
          "Contact w and exposure to oth hazardous aromatic compounds",
          "Mood disorder due to known physiol cond w manic features",
        ],
        imageUrl: "http://dummyimage.com/186x100.png/cc0000/ffffff",
        name: "Amber Lujan",
        bio: "Laceration without foreign body of thigh",
        topic:
          "pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum",
        resources: [
          "http://tmall.com/a/odio/in/hac.png",
          "https://disqus.com/luctus/et/ultrices/posuere/cubilia/curae.js",
          "https://php.net/primis.jpg",
        ],
      },
      {
        achievements: [
          "Varicose veins of r low extrem w ulc and inflammation",
          "Incarcerated fracture of medial epicondyl of r humerus, init",
          "Acute contact otitis externa, unspecified ear",
        ],
        imageUrl: "http://dummyimage.com/243x100.png/dddddd/000000",
        name: "Alene Collinette",
        bio: "Injury of blood vessels at abdomen, lower back and pelvis level",
        resources: [
          "http://example.com/quam/pharetra/magna/ac/consequat/metus/sapien.aspx",
          "http://noaa.gov/vitae/mattis.aspx",
          "http://sciencedaily.com/convallis/nunc/proin/at/turpis/a/pede.html",
        ],
        topic:
          "nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper",
      },
    ],

    imageUrl: "http://dummyimage.com/174x100.png/dddddd/000000",
    details: "Nondisp fx of unsp tibial tuberosity, 7thN",
    title: "How About You...",
    galleryImageUrls: null,
    eventType: "live",
    streamingUrl: "https://163.com/ac/nibh/fusce/lacus.png",
  },
  {
    dateTime: "2022-11-13T18:08:59.000",
    venue: "Kalimati",
    requiresTicket: true,

    imageUrl: "http://dummyimage.com/106x100.png/dddddd/000000",
    details: "Rabies",
    title: "Perestroika",

    speakersList: [
      {
        achievements: [
          "Open bite of unsp great toe without damage to nail, sequela",
          "Unsp fracture of shaft of unsp tibia, init for clos fx",
          "Occup of 3-whl mv injured in clsn w 2/3-whl mv nontraf, init",
        ],
        imageUrl: "http://dummyimage.com/173x100.png/ff4444/ffffff",
        name: "Billi Edling",
        bio: "Separation of muscle (nontraumatic), upper arm",
        topic:
          "vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id",
        resources: [
          "http://last.fm/volutpat/sapien/arcu.html",
          "http://issuu.com/in/leo/maecenas/pulvinar/lobortis/est/phasellus.aspx",
          "https://rakuten.co.jp/rhoncus/dui/vel/sem/sed/sagittis/nam.jsp",
        ],
      },
      {
        achievements: [
          "Unspecified open wound of left buttock, subsequent encounter",
          "Hodgkin lymphoma, unsp, lymph nodes of head, face, and neck",
          "Inj unsp musc/fasc/tend at shldr/up arm, left arm, init",
        ],
        imageUrl: "http://dummyimage.com/200x100.png/ff4444/ffffff",
        name: "Effie Demke",
        resources: [
          "http://weebly.com/habitasse/platea.png",
          "http://networksolutions.com/convallis/eget/eleifend/luctus.html",
          "https://desdev.cn/sit/amet/eros/suspendisse/accumsan/tortor/quis.xml",
        ],
        topic:
          "cras mi pede malesuada in imperdiet et commodo vulputate justo in",
        bio: "Unspecified focal chorioretinal inflammation",
      },
      {
        achievements: [
          "Dvtrcli of both small and lg int w perf and abscs w/o bleed",
          "Contusion of unspecified upper arm, sequela",
          "Chronic gout due to renal impairment, unsp ankle and foot",
        ],
        imageUrl: "http://dummyimage.com/175x100.png/dddddd/000000",
        name: "Flori Ebsworth",
        topic:
          "pretium iaculis diam erat fermentum justo nec condimentum neque sapien",
        resources: [
          "http://disqus.com/ipsum/primis/in/faucibus/orci/luctus.js",
          "http://fotki.com/et/commodo/vulputate/justo/in/blandit/ultrices.html",
          "http://github.com/turpis/elementum/ligula/vehicula/consequat/morbi.html",
        ],
        bio: "Laceration of deep palmar arch of left hand, subsequent encounter",
      },
      {
        achievements: [
          "Corros unsp degree of unsp mult fngr (nail), inc thumb, init",
          "Oth disrd of amniotic fluid and membrns, third tri, oth",
          "Strain of musc/fasc/tend at forearm level, right arm",
        ],
        imageUrl: "http://dummyimage.com/104x100.png/dddddd/000000",
        name: "Betsy Brownlow",
        bio: "Displaced intraarticular fracture of left calcaneus, initial encounter for open fracture",
        topic:
          "luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse",
        resources: [
          "https://wikimedia.org/tellus/nulla/ut.json",
          "https://acquirethisname.com/cum/sociis/natoque/penatibus/et.jsp",
          "https://issuu.com/nulla.jsp",
        ],
      },
    ],
    price: 427,
    galleryImageUrls: null,
    eventType: "upcoming",
    streamingUrl: null,
  },
  {
    dateTime: "2021-11-12T11:09:34Z",
    venue: "Paris 15",
    currentSpeakerIndex: 0,
    requiresTicket: false,

    imageUrl: "http://dummyimage.com/195x100.png/dddddd/000000",
    details: "Lacerat blood vessels at wrs/hnd lv of right arm, sequela",
    title: "Shadows in Paradise (Varjoja paratiisissa)",

    speakersList: [
      {
        achievements: [
          "Dislocation of L4/L5 lumbar vertebra, sequela",
          "Pressure ulcer of left heel",
          "Chronic gout due to renal impairment, unsp wrist, w tophus",
        ],
        imageUrl: "http://dummyimage.com/142x100.png/dddddd/000000",
        name: "Karyn Kuhle",
        resources: [
          "http://reverbnation.com/at/lorem/integer/tincidunt.json",
          "http://icq.com/feugiat/non/pretium/quis/lectus/suspendisse.jpg",
          "https://loc.gov/imperdiet.jsp",
        ],
        topic:
          "amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus",
        bio: "Other specified superficial mycoses",
      },
      {
        achievements: [
          "Nondisp bicondylar fx unsp tibia, 7thP",
          "Unsp fx upr end unsp tibia, 7thE",
          "Cont preg aft elctv fetl rdct of 1 fts or more,unsp tri,unsp",
        ],
        imageUrl: "http://dummyimage.com/106x100.png/ff4444/ffffff",
        name: "Moe Alred",
        bio: "Nondisplaced midcervical fracture of unspecified femur, initial encounter for open fracture type I or II",
        topic:
          "a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices",
        resources: [
          "https://tripod.com/ipsum.png",
          "http://tripod.com/integer.jsp",
          "http://homestead.com/nullam/porttitor/lacus/at/turpis.png",
        ],
      },
      {
        achievements: [
          "Poisoning by aminoglycosides, undetermined, init encntr",
          "Food in oth prt resp tract causing oth injury, sequela",
          "Other extraarticular fracture of lower end of unsp radius",
        ],
        imageUrl: "http://dummyimage.com/124x100.png/ff4444/ffffff",
        name: "Marlo Twitchett",
        bio: "Internal derangement of knee",
        resources: [
          "http://cyberchimps.com/mattis/nibh/ligula/nec.html",
          "http://narod.ru/diam/id/ornare/imperdiet.jpg",
          "http://si.edu/nulla/integer/pede/justo/lacinia.json",
        ],
        topic:
          "lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien",
      },
      {
        achievements: [
          "Schizoaffective disorder, bipolar type",
          "Unsp injury of left wrist, hand and finger(s), init encntr",
          "Unsp injury of unsp tibial artery, unsp leg, subs encntr",
        ],
        imageUrl: "http://dummyimage.com/145x100.png/cc0000/ffffff",
        name: "Eadmund Como",
        topic: "a libero nam dui proin leo odio porttitor id consequat",
        resources: [
          "https://howstuffworks.com/fusce/congue/diam/id/ornare/imperdiet.aspx",
          "http://unesco.org/odio/cras/mi/pede.json",
          "http://ocn.ne.jp/fusce.xml",
        ],
        bio: "Maternal care for benign tumor of corpus uteri, second trimester",
      },
    ],
    galleryImageUrls: null,
    streamingUrl: "http://wired.com/tempor/convallis/nulla/neque/libero.jpg",
    eventType: "live",
  },
  {
    dateTime: "2021-07-08T17:28:09Z",
    venue: "Antanhol",
    requiresTicket: false,

    imageUrl: "http://dummyimage.com/139x100.png/ff4444/ffffff",
    details: "Oth injury of axillary or brachial vein, right side",
    title: "Ali Baba Goes to Town",
    speakersList: [
      {
        achievements: [
          "Injury of nerves at shoulder and upper arm level, left arm",
          "External constriction, right thigh, initial encounter",
          "Peritonitis, unspecified",
        ],
        imageUrl: "http://dummyimage.com/102x100.png/dddddd/000000",
        name: "Homerus Gover",
        bio: "Acquired absence of left finger(s)",
        resources: [
          "https://1und1.de/pede.jsp",
          "https://bloomberg.com/nulla/elit/ac/nulla.aspx",
          "http://xinhuanet.com/nec/sem.png",
        ],
        topic:
          "molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui",
      },
      {
        achievements: [
          "Injury of visual cortex, right eye, sequela",
          "Superficial frostbite of right wrist, sequela",
          "Burn of mouth and pharynx, sequela",
        ],
        imageUrl: "http://dummyimage.com/169x100.png/ff4444/ffffff",
        name: "Tate Scrange",
        bio: "Traumatic hemorrhage of right cerebrum with loss of consciousness greater than 24 hours without return to pre-existing conscious level with patient surviving, sequela",
        resources: [
          "https://cisco.com/cubilia/curae/nulla/dapibus/dolor/vel/est.png",
          "https://deliciousdays.com/ac/consequat/metus/sapien/ut.js",
          "http://jigsy.com/ligula/suspendisse/ornare/consequat/lectus/in/est.aspx",
        ],
        topic:
          "in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod",
      },
      {
        achievements: [
          "Fracture of unsp phalanx of right little finger, sequela",
          "Peripheral T-cell lymphoma, not class, intrathorac nodes",
          "Acquired atrophy of left ovary and fallopian tube",
        ],
        imageUrl: "http://dummyimage.com/125x100.png/5fa2dd/ffffff",
        name: "Brig Jankovic",
        bio: "Adhesions due to foreign body accidentally left in body following kidney dialysis",
        resources: [
          "https://biblegateway.com/elementum/ligula/vehicula.html",
          "https://is.gd/convallis.xml",
          "https://biglobe.ne.jp/urna/ut/tellus.html",
        ],
        topic:
          "nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis",
      },
    ],
    galleryImageUrls: [
      "http://dummyimage.com/108x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/218x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/171x100.png/cc0000/ffffff",
      "http://dummyimage.com/111x100.png/cc0000/ffffff",
      "http://dummyimage.com/116x100.png/ff4444/ffffff",
    ],
    streamingUrl: "http://dmoz.org/rutrum/ac/lobortis/vel/dapibus.aspx",
    eventType: "past",
  },
  {
    dateTime: "2021-05-17T03:47:25Z",
    venue: "Sritanjung",
    requiresTicket: true,

    imageUrl: "http://dummyimage.com/142x100.png/ff4444/ffffff",
    details: "Malignant neoplasm of ovrlp sites of right eye and adnexa",
    title: "Spiritual Kung Fu (Quan jing)",
    speakersList: [
      {
        achievements: [
          "Corrosion of second degree of unsp ankle and foot, init",
          "Drown after fall into swimming pool, undet intent, sequela",
          "Benign neoplasm of central nervous system, unspecified",
        ],
        imageUrl: "http://dummyimage.com/224x100.png/ff4444/ffffff",
        name: "Viki Jean",
        resources: [
          "https://irs.gov/magna/vulputate.jsp",
          "https://netvibes.com/mi.json",
          "http://simplemachines.org/eget/tempus/vel/pede/morbi.xml",
        ],
        bio: "Monocytic leukemia, unspecified",
        topic:
          "amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus",
      },
    ],
    galleryImageUrls: null,
    eventType: "story",
    streamingUrl:
      "http://a8.net/nullam/orci/pede/venenatis/non/sodales/sed.html",
  },
  {
    dateTime: "2021-03-06T16:42:18Z",
    venue: "Polešovice",
    requiresTicket: true,
    speakersList: [
      {
        achievements: [
          "Pedl cyc pasngr injured in clsn w 2/3-whl mv in traf, subs",
          "Drowning and submersion due to fall off passenger ship",
          "Tox eff of corrosv alkalis and alk-like substnc, acc, init",
        ],
        imageUrl: "http://dummyimage.com/103x100.png/cc0000/ffffff",
        name: "Avram Gomby",
        resources: [
          "https://over-blog.com/est/congue/elementum/in/hac.xml",
          "http://spiegel.de/primis/in/faucibus/orci/luctus/et.xml",
          "https://wired.com/posuere/cubilia/curae/mauris.xml",
        ],
        bio: "Unspecified superficial injury of other specified part of neck, subsequent encounter",
        topic:
          "pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id",
      },
      {
        achievements: [
          "Acute lymphangitis of trunk, unspecified",
          "Poisoning by unsp drug/meds/biol subst, self-harm",
          "Nondisp longitud fx l patella, subs for clos fx w routn heal",
        ],
        imageUrl: "http://dummyimage.com/147x100.png/cc0000/ffffff",
        name: "Francisca Lowndsbrough",
        resources: [
          "http://bbc.co.uk/nibh.xml",
          "https://home.pl/molestie/nibh/in/lectus.jpg",
          "http://google.com.br/tristique.png",
        ],
        bio: "Type 2 diabetes mellitus with mild nonproliferative diabetic retinopathy without macular edema, right eye",
        topic:
          "eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus",
      },
      {
        achievements: [
          "Car driver injured in collision w statnry object nontraf",
          "Cellulitis of umbilicus",
          "Other infective bursitis, shoulder",
        ],
        imageUrl: "http://dummyimage.com/209x100.png/dddddd/000000",
        name: "Correna McDunlevy",
        resources: [
          "https://istockphoto.com/a/odio/in/hac.js",
          "http://earthlink.net/quam/sollicitudin/vitae/consectetuer/eget/rutrum.aspx",
          "http://digg.com/natoque/penatibus/et/magnis.json",
        ],
        topic:
          "sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur",
        bio: "Displaced fracture of proximal phalanx of unspecified thumb, subsequent encounter for fracture with malunion",
      },
      {
        achievements: [
          "Immersion hand, unspecified hand, sequela",
          "Fracture of unspecified phalanx of right index finger",
          "Oligohydramnios, second trimester, fetus 2",
        ],
        imageUrl: "http://dummyimage.com/192x100.png/dddddd/000000",
        name: "Rowena Brayshay",
        topic:
          "metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus",
        resources: [
          "https://163.com/dui.png",
          "https://naver.com/elementum/nullam.png",
          "https://surveymonkey.com/odio/in/hac/habitasse/platea/dictumst/maecenas.jsp",
        ],
        bio: "Corrosion of third degree of ankle and foot",
      },
      {
        achievements: [
          "Animal-rider injured in collision w animl being ridden, init",
          "Burn of first degree of lower back",
          "Driver of pk-up/van injured in collision w unsp mv in traf",
        ],
        imageUrl: "http://dummyimage.com/165x100.png/dddddd/000000",
        name: "Sutton Cruwys",
        topic:
          "mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum",
        bio: "Unspecified occupant of special agricultural vehicle injured in nontraffic accident",
        resources: [
          "http://skype.com/turpis/adipiscing/lorem/vitae/mattis/nibh.jsp",
          "http://cocolog-nifty.com/augue/vestibulum/rutrum.aspx",
          "https://weibo.com/morbi/a/ipsum.html",
        ],
      },
    ],

    imageUrl: "http://dummyimage.com/249x100.png/ff4444/ffffff",
    details: "Accidental discharge of oth gas, air or spring-operated gun",
    title: "Salting the Battlefield",
    galleryImageUrls: [
      "http://dummyimage.com/173x100.png/ff4444/ffffff",
      "http://dummyimage.com/164x100.png/ff4444/ffffff",
      "http://dummyimage.com/147x100.png/cc0000/ffffff",
      "http://dummyimage.com/242x100.png/dddddd/000000",
      "http://dummyimage.com/131x100.png/cc0000/ffffff",
    ],
    eventType: "past",
    streamingUrl: "https://amazon.co.jp/vestibulum/rutrum/rutrum/neque.html",
  },
  {
    dateTime: "2022-01-13T20:48:51Z",
    venue: "Seso",
    requiresTicket: true,

    imageUrl: "http://dummyimage.com/129x100.png/5fa2dd/ffffff",
    details: "Burn of first degree of unspecified ankle, initial encounter",
    title: "Man Who Cried, The",
    speakersList: [
      {
        achievements: [
          "Fistula, right ankle",
          "Injury of musculocutaneous nerve, unsp arm, subs encntr",
          "Nondisp fx of lateral condyle of unsp humer, 7thG",
        ],
        imageUrl: "http://dummyimage.com/192x100.png/5fa2dd/ffffff",
        name: "Wilow Test",
        topic:
          "fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet",
        resources: [
          "https://sohu.com/ac.json",
          "https://boston.com/sit/amet/diam/in/magna/bibendum/imperdiet.json",
          "https://networksolutions.com/porttitor/lacus/at.js",
        ],
        bio: "Unspecified fracture of unspecified lower leg, initial encounter for open fracture type I or II",
      },
      {
        achievements: [
          "Drown due to fall off (nonpowered) inflatable craft",
          "Major laceration of right pulmonary blood vessels, sequela",
          "Adverse effect of mixed bact vaccines w/o a pertuss, subs",
        ],
        imageUrl: "http://dummyimage.com/155x100.png/5fa2dd/ffffff",
        name: "Bren Belchamp",
        bio: "Pre-existing hypertensive heart disease complicating the puerperium",
        topic:
          "elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non",
        resources: [
          "http://slate.com/in/eleifend/quam/a/odio/in/hac.aspx",
          "https://youtu.be/felis/sed/lacus/morbi/sem/mauris/laoreet.aspx",
          "http://wired.com/ut.jsp",
        ],
      },
      {
        achievements: [
          "Intentional self-harm by drown in natural water, init",
          "Disp fx of less trochanter of l femr, 7thB",
          "External constriction of part of throat, initial encounter",
        ],
        imageUrl: "http://dummyimage.com/116x100.png/cc0000/ffffff",
        name: "Tris Slay",
        bio: "Contusion of left lesser toe(s) without damage to nail, initial encounter",
        topic:
          "donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit",
        resources: [
          "http://freewebs.com/adipiscing/elit/proin/risus/praesent/lectus.xml",
          "http://imageshack.us/nunc/proin/at/turpis/a.jpg",
          "https://dot.gov/rhoncus/aliquet/pulvinar/sed/nisl/nunc.html",
        ],
      },
    ],
    galleryImageUrls: [
      "http://dummyimage.com/196x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/220x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/201x100.png/ff4444/ffffff",
      "http://dummyimage.com/140x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/113x100.png/5fa2dd/ffffff",
    ],
    eventType: "past",
    streamingUrl: "http://list-manage.com/integer/pede.png",
  },
  {
    dateTime: "2021-10-08T07:25:17Z",
    venue: "Mentougou",
    requiresTicket: false,
    currentSpeakerIndex: 0,
    speakersList: [
      {
        achievements: [
          "Maternal care for prolapse of gravid uterus",
          "Giant cell arteritis with polymyalgia rheumatica",
          "Granuloma of right lacrimal passage",
        ],
        imageUrl: "http://dummyimage.com/144x100.png/dddddd/000000",
        name: "Joana Dulinty",
        bio: "Unspecified superficial injury of left ankle",
        topic:
          "diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci",
        resources: [
          "https://netvibes.com/et/ultrices/posuere/cubilia/curae.aspx",
          "http://cbslocal.com/nec/euismod/scelerisque/quam.aspx",
          "https://miitbeian.gov.cn/pede/justo.xml",
        ],
      },
      {
        achievements: [
          "Chronic venous htn w ulcer and inflammation of r low extrem",
          "Nondisp subtrochnt fx unsp femr, 7thQ",
          "Pressure ulcer of right ankle, stage 3",
        ],
        imageUrl: "http://dummyimage.com/123x100.png/cc0000/ffffff",
        name: "Nate Vasquez",
        bio: "Other chondrocalcinosis, left hand",
        topic:
          "maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus",
        resources: [
          "https://ted.com/venenatis/non/sodales/sed.jsp",
          "http://wired.com/auctor/sed/tristique/in/tempus/sit/amet.html",
          "https://last.fm/ut/dolor/morbi/vel/lectus/in/quam.js",
        ],
      },
      {
        achievements: [
          "Oth spon disruption of lateral collat ligament of right knee",
          "Corrosions of other internal organs, initial encounter",
          "Subluxation of proximal interphaln joint of r little finger",
        ],
        imageUrl: "http://dummyimage.com/156x100.png/cc0000/ffffff",
        name: "Garrott Beckingham",
        resources: [
          "https://is.gd/dui/nec/nisi/volutpat/eleifend/donec/ut.png",
          "http://mysql.com/odio/in.json",
          "http://virginia.edu/non/ligula.xml",
        ],
        bio: "Displaced midcervical fracture of right femur",
        topic:
          "elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum",
      },
      {
        achievements: [
          "Iridoschisis, bilateral",
          "Vitreous membranes and strands",
          "Benzodiazepines",
        ],
        imageUrl: "http://dummyimage.com/221x100.png/cc0000/ffffff",
        name: "Moses Pecey",
        bio: "Burn of unspecified degree of nose (septum), subsequent encounter",
        resources: [
          "http://twitter.com/varius/ut/blandit/non.json",
          "https://simplemachines.org/interdum/mauris/ullamcorper.js",
          "https://de.vu/non/interdum/in.xml",
        ],
        topic: "est phasellus sit amet erat nulla tempus vivamus in felis eu",
      },
      {
        achievements: [
          "Puncture wound w foreign body of unsp upper arm, subs encntr",
          "Laceration of unsp msl/tnd at ank/ft level, unsp foot, init",
          "Open restoration margins of tooth",
        ],
        imageUrl: "http://dummyimage.com/109x100.png/5fa2dd/ffffff",
        name: "Barret Trounce",
        resources: [
          "http://hexun.com/in/eleifend/quam.xml",
          "https://eventbrite.com/elit/proin/risus/praesent/lectus.jpg",
          "http://yahoo.com/tempus/vel/pede/morbi/porttitor/lorem.jsp",
        ],
        bio: "Intraventricular (nontraumatic) hemorrhage, grade 2, of newborn",
        topic:
          "vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis",
      },
    ],

    imageUrl: "http://dummyimage.com/119x100.png/5fa2dd/ffffff",
    details: "Disseminated superficial actinic porokeratosis (DSAP)",
    title: "Slim Carter",
    galleryImageUrls: null,
    eventType: "live",
    streamingUrl: "http://toplist.cz/curae/nulla/dapibus.aspx",
  },
  {
    dateTime: "2021-11-15T15:30:24Z",
    venue: "Alvaro Obregon",
    requiresTicket: false,

    imageUrl: "http://dummyimage.com/249x100.png/dddddd/000000",
    details: "Inj unsp musc/fasc/tend at wrs/hnd lv, right hand, init",
    title: "Four-Faced Liar, The",
    speakersList: [
      {
        achievements: [
          "Central corneal ulcer, unspecified eye",
          "Hallucinogen use, unspecified",
          "Unsp physeal fracture of upper end of unsp fibula, init",
        ],
        imageUrl: "http://dummyimage.com/219x100.png/dddddd/000000",
        name: "Kermit Manach",
        resources: [
          "http://cbsnews.com/dictumst/morbi/vestibulum/velit/id/pretium.json",
          "https://diigo.com/nisl/nunc/rhoncus.jpg",
          "https://alexa.com/ultrices/mattis/odio/donec/vitae.aspx",
        ],
        topic:
          "elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien",
        bio: "Other stimulant use, unspecified with withdrawal",
      },
      {
        achievements: [
          "Laceration without foreign body of unsp shoulder, sequela",
          "Burn of right eyelid and periocular area, sequela",
          "Other specified diseases of anus and rectum",
        ],
        imageUrl: "http://dummyimage.com/234x100.png/dddddd/000000",
        name: "Malena Petherick",
        resources: [
          "http://squidoo.com/ornare/consequat/lectus/in/est/risus.js",
          "https://opera.com/elementum/pellentesque/quisque/porta/volutpat/erat/quisque.png",
          "http://blogs.com/et/magnis/dis/parturient.jpg",
        ],
        bio: "Laceration without foreign body of abdominal wall, unspecified quadrant with penetration into peritoneal cavity, subsequent encounter",
        topic:
          "in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum",
      },
      {
        achievements: [
          "Nondisp suprcndl fx w intrcndl extn low end r femr, 7thF",
          "Drowning and submersion due to fishing boat sinking, init",
          "Oth injuries of unsp wrist, hand and finger(s), sequela",
        ],
        imageUrl: "http://dummyimage.com/223x100.png/cc0000/ffffff",
        name: "Ephrem Arnecke",
        resources: [
          "http://ftc.gov/pellentesque/volutpat/dui.jsp",
          "http://shinystat.com/donec/odio/justo/sollicitudin/ut/suscipit.jpg",
          "http://army.mil/ipsum/primis.jsp",
        ],
        topic:
          "lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus",
        bio: "Osteonecrosis in diseases classified elsewhere, left hand",
      },
      {
        achievements: [
          "Disp fx of lateral cuneiform of right foot, sequela",
          "Displaced unsp fx unsp great toe, subs for fx w malunion",
          "Wedge comprsn fx first lum vert, subs for fx w delay heal",
        ],
        imageUrl: "http://dummyimage.com/219x100.png/5fa2dd/ffffff",
        name: "Harlene Cromwell",
        topic:
          "turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis",
        resources: [
          "http://msu.edu/mauris.jpg",
          "https://archive.org/eleifend/quam/a/odio/in/hac.aspx",
          "https://csmonitor.com/accumsan/felis.html",
        ],
        bio: "Other specified intracranial injury with loss of consciousness of unspecified duration, initial encounter",
      },
    ],
    galleryImageUrls: [
      "http://dummyimage.com/140x100.png/dddddd/000000",
      "http://dummyimage.com/231x100.png/cc0000/ffffff",
      "http://dummyimage.com/226x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/112x100.png/ff4444/ffffff",
      "http://dummyimage.com/128x100.png/ff4444/ffffff",
    ],
    eventType: "past",
    streamingUrl: "https://addtoany.com/laoreet/ut/rhoncus/aliquet/pulvinar.js",
  },
  {
    dateTime: "2021-09-30T03:28:43Z",
    venue: "Itako",
    requiresTicket: false,
    speakersList: [
      {
        achievements: [
          "Maternal care for oth rhesus isoimmun, second trimester, oth",
          "Otosclerosis w oval window, nonobliterative, unsp ear",
          "Maternal care for (suspected) damage to fetus by radiation",
        ],
        imageUrl: "http://dummyimage.com/146x100.png/dddddd/000000",
        name: "Larissa Davidescu",
        bio: "Harada's disease, right eye",
        resources: [
          "http://jalbum.net/consequat/ut/nulla/sed/accumsan/felis/ut.xml",
          "http://instagram.com/a/nibh/in/quis/justo/maecenas.js",
          "http://oaic.gov.au/condimentum/curabitur/in/libero/ut.png",
        ],
        topic: "integer ac neque duis bibendum morbi non quam nec dui",
      },
    ],

    imageUrl: "http://dummyimage.com/114x100.png/cc0000/ffffff",
    details: "Superficial foreign body of left eyelid and periocular area",
    title: "Clash by Night",
    galleryImageUrls: null,
    streamingUrl: "http://smh.com.au/pulvinar/nulla.js",
    eventType: "story",
  },
  {
    dateTime: "2021-08-29T06:06:39Z",
    venue: "Taikang",
    requiresTicket: true,
    currentSpeakerIndex: 0,
    speakersList: [
      {
        achievements: [
          "Legal intervnt w injury by rubr bulet, bystand injured",
          "Unsp inj long flxr musc/fasc/tend r thm at wrs/hnd lv, init",
          "Subluxation of MCP joint of right index finger, subs",
        ],
        imageUrl: "http://dummyimage.com/121x100.png/5fa2dd/ffffff",
        name: "Ingunna Littlewood",
        resources: [
          "http://columbia.edu/dui/luctus/rutrum.json",
          "https://hp.com/in/felis.jsp",
          "https://ft.com/luctus.jsp",
        ],
        bio: "Laceration of flexor muscle, fascia and tendon of right thumb at forearm level, subsequent encounter",
        topic:
          "id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi",
      },
      {
        achievements: [
          "Laceration of bladder, subsequent encounter",
          "Malignant neoplasm of branchial cleft",
          "Bent bone of right radius, subs for clos fx w routn heal",
        ],
        imageUrl: "http://dummyimage.com/192x100.png/dddddd/000000",
        name: "Janela Siemantel",
        bio: "Unspecified fracture of shaft of right fibula, subsequent encounter for open fracture type I or II with delayed healing",
        resources: [
          "http://cbsnews.com/dis.js",
          "http://oaic.gov.au/pede.aspx",
          "https://edublogs.org/id/luctus/nec.jpg",
        ],
        topic:
          "dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras",
      },
      {
        achievements: [
          "Laceration with foreign body of vagina and vulva, sequela",
          "Contus/lac cereb, w LOC w death d/t brain inj bf consc, init",
          "Sublux of MC (bone), proximal end of right hand, subs",
        ],
        imageUrl: "http://dummyimage.com/102x100.png/ff4444/ffffff",
        name: "Blondy Abrahams",
        topic: "non quam nec dui luctus rutrum nulla tellus in sagittis",
        bio: "Poisoning by, adverse effect of and underdosing of antithyroid drugs",
        resources: [
          "http://tripadvisor.com/pede/libero/quis.html",
          "http://dion.ne.jp/dolor.js",
          "https://umich.edu/semper/interdum/mauris.xml",
        ],
      },
    ],

    imageUrl: "http://dummyimage.com/116x100.png/5fa2dd/ffffff",
    details: "Other sprain of left elbow",
    title: "Fantastic Planet, The (Planète sauvage, La)",
    galleryImageUrls: null,
    eventType: "live",
    streamingUrl:
      "https://columbia.edu/leo/odio/condimentum/id/luctus/nec/molestie.png",
  },
  {
    dateTime: "2021-02-09T15:49:59Z",
    venue: "Pulau Pinang",
    currentSpeakerIndex: 0,
    requiresTicket: true,
    speakersList: [
      {
        achievements: [
          "Maternal care for incarceration of gravid uterus, unsp tri",
          "Displaced transcondy fx r humerus, subs for fx w routn heal",
          "Displ suprcndl fx w intrcndl extn low end unsp femr, 7thQ",
        ],
        imageUrl: "http://dummyimage.com/197x100.png/dddddd/000000",
        name: "Norah Eaglestone",
        bio: "Unspecified injury of flexor muscle, fascia and tendon of left ring finger at wrist and hand level, sequela",
        resources: [
          "http://aboutads.info/fusce.aspx",
          "https://latimes.com/vel/sem/sed/sagittis/nam/congue.aspx",
          "https://lycos.com/luctus/et/ultrices/posuere.js",
        ],
        topic:
          "penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum",
      },
      {
        achievements: [
          "Other acute nonsuppurative otitis media",
          "Displ pilon fx r tibia, 7thR",
          "Nondisp commnt fx shaft of rad, r arm, 7thM",
        ],
        imageUrl: "http://dummyimage.com/124x100.png/dddddd/000000",
        name: "Isacco Rubinfajn",
        resources: [
          "http://indiatimes.com/turpis/donec/posuere/metus/vitae/ipsum/aliquam.jsp",
          "http://marriott.com/metus.js",
          "http://shop-pro.jp/turpis/donec.json",
        ],
        topic:
          "elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis",
        bio: "Poisoning by other agents primarily acting on the respiratory system, undetermined, subsequent encounter",
      },
      {
        achievements: [
          "Oth fx shaft of unsp ulna, subs for clos fx w delay heal",
          "Contusion of gallbladder, sequela",
          "Pain due to internal orthopedic prosth dev/grft, sequela",
        ],
        imageUrl: "http://dummyimage.com/187x100.png/ff4444/ffffff",
        name: "Thatcher Rattenberie",
        topic:
          "sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis",
        resources: [
          "https://usnews.com/magna/ac/consequat/metus/sapien/ut/nunc.jsp",
          "https://gov.uk/non.jsp",
          "http://blog.com/neque/vestibulum/eget/vulputate/ut.png",
        ],
        bio: "Nondisplaced fracture of coracoid process, unspecified shoulder, initial encounter for closed fracture",
      },
      {
        achievements: [
          "Unsp fx shaft of l tibia, 7thF",
          "Other hypertrophic osteoarthropathy, right forearm",
          "Chronic oophoritis",
        ],
        imageUrl: "http://dummyimage.com/202x100.png/ff4444/ffffff",
        name: "Hulda Saintpierre",
        resources: [
          "https://thetimes.co.uk/curabitur/gravida/nisi/at/nibh/in.png",
          "https://yellowpages.com/lobortis/convallis.xml",
          "https://163.com/congue/diam/id/ornare/imperdiet/sapien.json",
        ],
        bio: "Osteopathy after poliomyelitis, right upper arm",
        topic:
          "vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus",
      },
    ],

    imageUrl: "http://dummyimage.com/166x100.png/ff4444/ffffff",
    details: "Injury of unsp musc/fasc/tend at wrist and hand level",
    title: "Weekend",
    galleryImageUrls: null,
    streamingUrl:
      "https://oracle.com/ac/leo/pellentesque/ultrices/mattis/odio/donec.js",
    eventType: "live",
  },
  {
    dateTime: "2021-10-04T02:10:32Z",
    venue: "Carbajales",
    currentSpeakerIndex: 0,
    requiresTicket: false,
    speakersList: [
      {
        achievements: [
          "Oth osteopor w crnt path fx, l humer, subs for fx w nonunion",
          "Aneurysmal bone cyst, shoulder",
          "Prsn brd/alit hv veh injured in collision w nonmtr vehicle",
        ],
        imageUrl: "http://dummyimage.com/105x100.png/dddddd/000000",
        name: "Pattie Petrak",
        resources: [
          "https://123-reg.co.uk/tortor/sollicitudin/mi/sit/amet/lobortis.jsp",
          "https://theglobeandmail.com/felis/sed/lacus/morbi/sem/mauris.aspx",
          "http://eventbrite.com/in/tempus/sit.png",
        ],
        topic:
          "cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat",
        bio: "Nondisplaced fracture (avulsion) of medial epicondyle of unspecified humerus, subsequent encounter for fracture with routine healing",
      },
      {
        achievements: [
          "Sltr-haris Type I physl fx upr end unsp femr, 7thK",
          "Other specified puerperal infections",
          "Disp fx of nk of 1st MC bone, unsp hand, 7thG",
        ],
        imageUrl: "http://dummyimage.com/156x100.png/dddddd/000000",
        name: "Jackson Whicher",
        topic:
          "pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor",
        bio: "Maternal care for other known or suspected poor fetal growth, first trimester, fetus 4",
        resources: [
          "https://answers.com/ultrices/posuere.png",
          "http://berkeley.edu/erat/tortor/sollicitudin/mi/sit/amet.aspx",
          "https://edublogs.org/donec.js",
        ],
      },
      {
        achievements: [
          "Fx unsp prt of nk of l femr, 7thR",
          "Wear of artic bearing surface of unsp int prosth joint, subs",
          "Other fracture of left ilium, init encntr for open fracture",
        ],
        imageUrl: "http://dummyimage.com/225x100.png/ff4444/ffffff",
        name: "Claresta Chicotti",
        resources: [
          "http://netscape.com/in/porttitor/pede/justo.js",
          "https://thetimes.co.uk/purus/eu/magna.js",
          "http://jiathis.com/felis.js",
        ],
        bio: "Laceration without foreign body of left hand, initial encounter",
        topic:
          "mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi",
      },
      {
        achievements: [
          "Osteophyte, left ankle",
          "Disp fx of neck of right talus, subs for fx w routn heal",
          "Traum subdr hem w LOC >24 hr w ret consc lev, subs",
        ],
        imageUrl: "http://dummyimage.com/113x100.png/cc0000/ffffff",
        name: "Bryce Cuniffe",
        topic:
          "tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam",
        bio: "Unspecified water transport accident, sequela",
        resources: [
          "http://china.com.cn/congue/eget/semper/rutrum/nulla/nunc.jpg",
          "https://nhs.uk/et/commodo/vulputate.js",
          "http://aboutads.info/volutpat/quam/pede.aspx",
        ],
      },
    ],

    imageUrl: "http://dummyimage.com/111x100.png/5fa2dd/ffffff",
    details: "Intvrt disc disorders w radiculopathy, thoracolumbar region",
    title: "Quality Street",
    galleryImageUrls: null,
    eventType: "live",
    streamingUrl: "https://oakley.com/pede/venenatis/non.aspx",
  },
  {
    dateTime: "2021-10-20T03:24:45Z",
    venue: "Xinzhuang",
    requiresTicket: false,
    speakersList: [
      {
        achievements: [
          "Unsp inj musc/tend the rotator cuff of l shoulder, sequela",
          "Full-term prem ROM, onset labor within 24 hours of rupture",
          "Partial loss of teeth due to other specified cause, class I",
        ],
        imageUrl: "http://dummyimage.com/145x100.png/cc0000/ffffff",
        name: "Kale Farriar",
        bio: "Other physeal fracture of lower end of radius, right arm, subsequent encounter for fracture with malunion",
        topic:
          "at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem",
        resources: [
          "https://smh.com.au/et/magnis/dis/parturient/montes/nascetur.jpg",
          "https://netlog.com/posuere/cubilia/curae/donec/pharetra.xml",
          "https://purevolume.com/est.xml",
        ],
      },
    ],

    imageUrl: "http://dummyimage.com/168x100.png/5fa2dd/ffffff",
    details: "Adhes due to fb acc left in body following heart cath, subs",
    title: "Sea of Grass, The",
    galleryImageUrls: null,
    eventType: "story",
    streamingUrl:
      "http://usda.gov/faucibus/orci/luctus/et/ultrices/posuere.jsp",
  },
  {
    dateTime: "2021-11-28T12:49:53Z",
    venue: "Akarakar",
    requiresTicket: true,
    speakersList: [
      {
        achievements: [
          "Cont preg aft elctv fetl rdct of 1 fts or more,3rd tri, fts2",
          "Other superficial bite of right foot, initial encounter",
          "Open bite of trachea, sequela",
        ],
        imageUrl: "http://dummyimage.com/199x100.png/cc0000/ffffff",
        name: "Trixie Dorrell",
        resources: [
          "https://photobucket.com/nisl/ut/volutpat/sapien.jpg",
          "http://ocn.ne.jp/cum.jpg",
          "http://wikipedia.org/eu/sapien/cursus/vestibulum.png",
        ],
        topic:
          "mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor",
        bio: "Other secondary osteonecrosis, right toe(s)",
      },
      {
        achievements: [
          "Displaced fracture of lunate [semilunar], left wrist",
          "Nondisp segmental fracture of shaft of left fibula, sequela",
          "Poisoning by chloramphenicol group, self-harm, subs",
        ],
        imageUrl: "http://dummyimage.com/109x100.png/5fa2dd/ffffff",
        name: "Malinda Buggs",
        topic:
          "interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus",
        resources: [
          "https://jiathis.com/ligula/sit/amet/eleifend/pede.js",
          "https://noaa.gov/cum/sociis/natoque/penatibus/et/magnis.jpg",
          "http://shutterfly.com/ultricies/eu/nibh/quisque/id.js",
        ],
        bio: "Other kyphosis, cervicothoracic region",
      },
      {
        achievements: [
          "Poisoning by oth agents aff GI sys, accidental, init",
          "Corrosion of unsp degree of forehead and cheek, subs encntr",
          "Other biotin-dependent carboxylase deficiency",
        ],
        imageUrl: "http://dummyimage.com/229x100.png/5fa2dd/ffffff",
        name: "Dorette Forge",
        topic:
          "quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc",
        resources: [
          "http://studiopress.com/non/mattis/pulvinar.png",
          "http://sogou.com/ipsum/praesent/blandit/lacinia.jsp",
          "https://wikimedia.org/duis/aliquam/convallis/nunc/proin.html",
        ],
        bio: "Central European tick-borne encephalitis",
      },
      {
        achievements: [
          "Puncture wound with foreign body of larynx, sequela",
          "Lacerat great saphenous at lower leg level, unsp leg, subs",
          "Oth injury of blood vessel of right ring finger, init encntr",
        ],
        imageUrl: "http://dummyimage.com/121x100.png/5fa2dd/ffffff",
        name: "Mandi Cardoe",
        bio: "Nondisplaced segmental fracture of shaft of right fibula, subsequent encounter for open fracture type I or II with routine healing",
        topic:
          "duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi",
        resources: [
          "https://1688.com/curabitur/convallis/duis/consequat/dui/nec/nisi.html",
          "https://gnu.org/interdum/venenatis/turpis/enim.xml",
          "https://amazon.co.jp/suspendisse/potenti/in.json",
        ],
      },
    ],

    imageUrl: "http://dummyimage.com/124x100.png/cc0000/ffffff",
    details: "Poisoning by angiotens-convert-enzyme inhibitors, acc, init",
    title: "Enigma",
    galleryImageUrls: [
      "http://dummyimage.com/149x100.png/dddddd/000000",
      "http://dummyimage.com/129x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/180x100.png/ff4444/ffffff",
      "http://dummyimage.com/120x100.png/dddddd/000000",
      "http://dummyimage.com/164x100.png/ff4444/ffffff",
    ],
    streamingUrl: "https://imgur.com/posuere/nonummy.png",
    eventType: "past",
  },
  {
    dateTime: "2021-12-18T03:49:39Z",
    venue: "Úštěk",
    requiresTicket: true,

    imageUrl: "http://dummyimage.com/246x100.png/dddddd/000000",
    details: "Unsp fracture of skull, subs for fx w routn heal",
    title: "This Filthy World",

    speakersList: [
      {
        achievements: [
          "Encounter for issue of medical certificate",
          "Major osseous defect, other site",
          "Toxic effect of venom of hornets, assault, sequela",
        ],
        imageUrl: "http://dummyimage.com/188x100.png/dddddd/000000",
        name: "Rhiamon Revance",
        topic:
          "congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus",
        bio: "Contact with electric knife",
        resources: [
          "http://timesonline.co.uk/duis/mattis/egestas/metus/aenean/fermentum.xml",
          "https://wikimedia.org/id/justo.js",
          "http://gravatar.com/vitae/quam/suspendisse/potenti/nullam.aspx",
        ],
      },
      {
        achievements: [
          "Atheroembolism of right upper extremity",
          "Sprain of interphalangeal joint of right middle finger, init",
          "Adverse effect of selective seroton/norepineph reup inhibtr",
        ],
        imageUrl: "http://dummyimage.com/187x100.png/cc0000/ffffff",
        name: "Ruthi Dadley",
        resources: [
          "http://unicef.org/at/ipsum/ac/tellus/semper/interdum/mauris.html",
          "http://google.com/nulla/quisque/arcu/libero/rutrum.aspx",
          "https://cbc.ca/faucibus/orci/luctus/et.png",
        ],
        topic:
          "sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec",
        bio: "Thrombosis due to nervous system prosthetic devices, implants and grafts",
      },
      {
        achievements: [
          "Unsp traum displ spondylolysis of 4th cervcal vert, 7thD",
          "Malignant neoplasm of other and unspecified cranial nerves",
          "Trib rtnl vein occlusion, bilateral, with macular edema",
        ],
        imageUrl: "http://dummyimage.com/162x100.png/5fa2dd/ffffff",
        name: "Fiona Wearne",
        bio: "Chloasma of right upper eyelid and periocular area",
        resources: [
          "https://addthis.com/lacinia.json",
          "http://bigcartel.com/arcu/adipiscing/molestie/hendrerit/at/vulputate.aspx",
          "https://redcross.org/ut.xml",
        ],
        topic:
          "erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas",
      },
    ],
    galleryImageUrls: [
      "http://dummyimage.com/185x100.png/cc0000/ffffff",
      "http://dummyimage.com/156x100.png/ff4444/ffffff",
      "http://dummyimage.com/178x100.png/dddddd/000000",
      "http://dummyimage.com/113x100.png/ff4444/ffffff",
      "http://dummyimage.com/169x100.png/5fa2dd/ffffff",
    ],
    streamingUrl:
      "https://so-net.ne.jp/odio/condimentum/id/luctus/nec/molestie.aspx",
    eventType: "past",
  },
  {
    dateTime: "2021-06-19T11:24:32Z",
    venue: "Gulai",
    requiresTicket: false,
    currentSpeakerIndex: 0,
    speakersList: [
      {
        achievements: [
          "Laceration of musc/fasc/tend at shldr/up arm, left arm",
          "Unsp physeal fracture of lower end of humerus, unsp arm",
          "Maternal care for oth isoimmun, second trimester, fetus 4",
        ],
        imageUrl: "http://dummyimage.com/109x100.png/5fa2dd/ffffff",
        name: "Alf Tidball",
        resources: [
          "https://hugedomains.com/lacus/morbi/quis/tortor/id/nulla/ultrices.xml",
          "http://about.me/posuere/metus/vitae.jpg",
          "http://facebook.com/vel/enim/sit/amet/nunc/viverra.jpg",
        ],
        topic:
          "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum",
        bio: "Toxic effect of tin and its compounds, undetermined, subsequent encounter",
      },
      {
        achievements: [
          "Unsp injury of unsp intra-abdominal organ, init encntr",
          "Toxic effect of carbon disulfide, assault, initial encounter",
          "Disp fx of mid 3rd of navic bone of unsp wrs, 7thB",
        ],
        imageUrl: "http://dummyimage.com/228x100.png/cc0000/ffffff",
        name: "Dorian Ghidini",
        resources: [
          "https://deliciousdays.com/quisque/erat.html",
          "http://topsy.com/quis/turpis/eget/elit/sodales.xml",
          "http://answers.com/felis.png",
        ],
        bio: "Retained (old) magnetic foreign body in iris or ciliary body",
        topic:
          "dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis",
      },
      {
        achievements: [
          "Burn of third degree of unspecified forearm",
          "Disp fx of anterior column of right acetabulum, sequela",
          "Unsp disp fx of second cervical vertebra, init for clos fx",
        ],
        imageUrl: "http://dummyimage.com/240x100.png/dddddd/000000",
        name: "Faunie Eddison",
        bio: "Unspecified inflammatory spondylopathy, sacral and sacrococcygeal region",
        resources: [
          "https://elpais.com/sit/amet/nulla/quisque/arcu/libero.png",
          "https://admin.ch/eget/tempus/vel/pede.png",
          "http://indiatimes.com/volutpat/eleifend.xml",
        ],
        topic:
          "interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu",
      },
      {
        achievements: [
          "Nondisp fx of medial phalanx of unspecified finger, sequela",
          "Athscl heart disease of native cor art w unstable ang pctrs",
          "Thoracic aortic ectasia",
        ],
        imageUrl: "http://dummyimage.com/240x100.png/5fa2dd/ffffff",
        name: "Mord Giacobillo",
        bio: "Encounter for prophylactic immunotherapy",
        topic:
          "nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum",
        resources: [
          "https://cornell.edu/integer/non.jpg",
          "https://patch.com/curabitur/at/ipsum/ac.png",
          "https://wikipedia.org/nec/condimentum/neque.js",
        ],
      },
    ],

    imageUrl: "http://dummyimage.com/127x100.png/ff4444/ffffff",
    details: "Bitten by alligator, subsequent encounter",
    title: "Transit",
    galleryImageUrls: null,
    streamingUrl: "https://columbia.edu/orci/mauris/lacinia/sapien.jpg",
    eventType: "live",
  },
];

export default async function handler(req, res) {
  try {
    mongoose.connect(
      "mongodb+srv://admin:0sYwNDYA7fWOwggw@tedxdtu.l2gtm.mongodb.net/TEDxDTU22?retryWrites=true&w=majority"
    );
    for (const event of data) {
      const eventToAdd = new Event(event);

      await eventToAdd.save();
    }
    res.send("Success");
  } catch (e) {
    return res.status(400).send(e.toString());
  }
}
