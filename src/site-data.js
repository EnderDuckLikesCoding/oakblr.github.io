import * as React from "react"
import { Card } from "@mui/material"
import { Tungsten, Style, EmojiEvents } from "@mui/icons-material"
import {
  Biotech,
  Book,
  LocalFlorist,
  LocalHospital,
  VideogameAsset,
} from "@mui/icons-material"
import {
  People,
  Laptop,
  MonetizationOn,
  Grading,
  Language,
  LightbulbOutlined,
  Copyright,
  Cached,
} from "@mui/icons-material"
import { ContactMail, PendingActions, Event } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"

// prettier-ignore
const typewriterContent = (
<pre style={{whiteSpace: "pre-line"}}>
<span className="var-highlight">Oakridge Codefest</span> 2022 = {"{"} {"\n"}
type: <span className="string-highlight">'24 hour Virtual Hackathon'</span>, {"\n"}
date: <span className="string-highlight">'22nd-23rd Jan 2022'</span>, {"\n"}
location: <span className="string-highlight">'Online(or not perhaps?)'</span>, {"\n"}
themes:[ {"\n"}
<span className="string-highlight">'STEM Simulation'</span>, {"\n"}
<span className="string-highlight">'Education'</span>, {"\n"}
<span className="string-highlight">'Environmental Sustainability'</span>, {"\n"}
<span className="string-highlight">'Healthcare'</span>,  {"\n"}
<span className="string-highlight">'Game Development (Juniors Only)'</span>, {"\n"}
] {"\n"}
{"}"};
</pre>
)

const siteData = {
  homepageSections: ["Themes", "Prizes", "FAQ", "Sponsors"],
  registerButton: {
    text: "Register Now",
    url: "https://forms.gle/7qxxhaCbP16mW7ez5",
  },
  typewriterContent: typewriterContent,
  codefestEndDate: "January 22 2022 11:00:00 GMT+0530",
  introCardSections: [
    {
      icon: <Tungsten sx={{ fontSize: "54px" }} />,
      title: "What is Codefest?",
      content:
        "Oakridge Codefest is one of Bangalore's largest high-school hackathons that provides the opportunity for aspiring developers to showcase their unique talents to both each other and veterans of the industry.",
    },
    {
      icon: <Style sx={{ fontSize: "54px" }} />,
      title: "Themes",
      content:
        "With a multitude of impactful themes, the participants will be tackling current technical problems with innovative improvements and solutions.",
    },
    {
      icon: <EmojiEvents sx={{ fontSize: "54px" }} />,
      title: "Rewards",
      content:
        "Placement in the top three will guarantee a large monetary reward, and additionally, sponsor themes have their own rewards, which include a large assortment of products and services of equal value.",
    },
  ],
  themesSection: {
    title: "Themes for Oakridge Codefest (2022)",
    description: (
      <>
        Teams are expected to use at least one primary theme for their project
        but are advised to choose two or more themes. For more infomation
        regarding the themes please email us at{" "}
        <a href="mailto:oakcodefest@oakridge.in">oakcodefest@oakridge.in</a>
      </>
    ),
    themes: [
      [
        {
          name: "STEM Simulation",
          icon: <Biotech />,
          description: (
            <p>
              This exciting new theme will give participants the opportunity to
              design a simulation based on STEM principles. The project can take
              multiple directions, including but not limited to data science,
              physics, economics, and more
            </p>
          ),
          example: (
            <p>
              Examples: Fluid simulation, circuit builder, model solar system
            </p>
          ),
        },
        {
          name: "Education",
          icon: <Book />,
          description: (
            <p>
              Education develops effective leaders and innovators of tomorrow.
              Technology has played a significant role in recent years in
              allowing education to have a larger reach and allowing the
              teaching and learning processes to occur more smoothly. Especially
              during the current pandemic, the internet and video call services
              have allowed for learning to continue even while we are restricted
              at home. How can you use your technological skills to improve
              education?
            </p>
          ),
          example: <p>Examples: Worksheet Generator and Note Taking App</p>,
        },
        {
          name: "Environmental Sustainability",
          icon: <LocalFlorist />,
          description: (
            <p>
              Sustainability refers to creating a world that can be prosperous
              and habitable for future generations, and as society progresses,
              technology will be the at the crux of maintaining sustainability.
              From new and more efficient uses of energy to combating
              deforestation, technology's importance to sustainability has been
              especially pronounced in recent years. What can you do with
              technology to create a more sustainable world?
            </p>
          ),
          example: <p>Examples: Carbon Footprint Calculator and Smart Bulb</p>,
        },
      ],
      [
        {
          name: "Healthcare",
          icon: <LocalHospital />,
          description: (
            <p>
              Health care is an essential service, and our ability to provide
              quality health care as well as store, share and analyze health
              information is directly tied to improved technology. Particularly
              with the current situation of the COVID-19 pandemic, technology
              has been used to create solutions to track and minimize the spread
              of the virus. We look forward to seeing what technological
              creations you will develop to contribute to this field.
            </p>
          ),
          example: <p>Examples: Fitness Tracker and Smart Health Monitor</p>,
        },
        {
          name: "Game Development (6-8th Grade)",
          icon: <VideogameAsset />,
          description: (
            <p>
              Video games are a great way to have fun and learn code at the same
              time! <br />
              <br /> For this theme, we expect participants to be creative and
              innovative and have some kind of unique idea or message in it.
              Participants need to use programming languages and drag and
              drop/WYSIWYG applications such as Scratch and MIT App Inventor are
              strictly not allowed.
            </p>
          ),
          example: null,
        },
      ],
    ],
  },
  prizesSection: {
    cash: "Total cash prizes worth ₹75,000",
    sponsor: "Exclusive participation perks from our sponsors",
  },
  faqSection: {
    title: "Frequently Asked Questions (FAQ)",
    description: (
      <>
        Email us at{" "}
        <a href="mailto:oakcodefest@oakridge.in">oakcodefest@oakridge.in</a> for
        further queries.
      </>
    ),
    faqGroups: [
      {
        groupTitle: "Participation Details",
        faqs: [
          {
            title: "Who can participate in this event?",
            icon: <People />,
            content: (
              <p>
                Anyone between grades 6 and 12 with a passion for technology.
              </p>
            ),
          },
          {
            title: "What platform will Codefest be held on?",
            icon: <Laptop />,
            content: (
              <p>
                The opening and closing ceremonies will be hosted on Zoom while
                the rest of the event will be held on Microsoft Teams.
              </p>
            ),
          },
          {
            title: "What does my registration fee go towards?",
            icon: <MonetizationOn />,
            content: (
              <p>
                The ₹300 will cover your access to the virtual venue and all
                other platforms that we'll use to communicate with participants
                and would make you eligible for the rewards provided by our
                sponsors. Proceeds from the Oakridge Codefest will contribute to
                a fund for a donation to charity.
              </p>
            ),
          },
          {
            title: "Is there a selection process for the Oakridge Codefest?",
            icon: <Grading />,
            content: (
              <p>
                We at Codefest believe that everyone with a passion for coding
                should be given the opportunity to participate in the event. To
                facilitate this, our team will guide all teams towards creating
                a solid idea for their projects. Participants will receive a
                final confirmation once their idea has been vetted by the
                Codefest team at least 2 weeks before the event.
              </p>
            ),
          },
        ],
      },
      {
        groupTitle: "Idea Details",
        faqs: [
          {
            title: "What languages/software can I use?",
            icon: <Language />,
            content: (
              <p>
                Any language, technology stack, or library can be used to create
                your solutions, except drag and drop software like MIT App
                Inventor.
              </p>
            ),
          },
          {
            title: "Do we need to have the idea/solution fully working?",
            icon: <LightbulbOutlined />,
            content: (
              <p>
                The entire idea need not be implemented, however, the submission
                should be functional so that it can be reviewed by the judges.
              </p>
            ),
          },
          {
            title:
              "Who will own the IP (Intellectual Property) rights to the solution?",
            icon: <Copyright />,
            content: (
              <p>
                The developer/developers of the web/mobile application will have
                all rights and own the IP of the product. However, all code
                needs to be in the public domain (open source) so that it can be
                evaluated by the judges.
              </p>
            ),
          },
          {
            title: "Can I submit previously developed projects?",
            icon: <Cached />,
            content: (
              <p>
                No, any submission made to the event must be developed within
                the 24 hour time limit and must fit the selected theme.
              </p>
            ),
          },
        ],
      },
    ],
    timelineSection: {
      title: "Important Dates",
      timeline: [
        {
          title: "Registration Opens",
          icon: <ContactMail />,
          date: "19th of December",
          description: (
            <p>
              Participants are expected to sign up for the event and submit a
              detailed idea on what exactly they are going to do at the event.
            </p>
          ),
        },
        {
          title: "Registration Closes",
          icon: <PendingActions />,
          date: "18th of January",
          description: (
            <p>
              Participants will not be allowed to register after this date. All
              registered participants will be emailed special event invite
              links.
            </p>
          ),
        },
        {
          title: "Event Starts",
          icon: <Event />,
          date: "22th of January",
          description: (
            <p>
              All registered participants will receive an email a day before the
              with instructions on how to join the event.
            </p>
          ),
        },
      ],
    },
  },
  sponsorsSection: {
    title: "Event Sponsors",
    sponsorGroups: [
      {
        title: <Typography variant="h4">Title Sponsor</Typography>,
        sponsorRows: [
          [
            <Card
              elevation={4}
              sx={{
                width: "70%",
                margin: 2,
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <a
                href="https://www.teamhgs.com/"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage
                  src="./images/sponsors/hgs.png"
                  alt="HGS Logo"
                  placeholder="blurred"
                />
              </a>
            </Card>,
          ],
        ],
      },
      {
        title: <Typography variant="h5">In-kind Partners</Typography>,
        sponsorRows: [
          [
            <Card
              elevation={4}
              sx={{
                width: "30%",
                margin: 2,
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <a href="https://balsamiq.com/" target="_blank" rel="noreferrer">
                <StaticImage
                  src="./images/sponsors/balsamiq.png"
                  alt="Balsamiq Logo"
                  placeholder="blurred"
                />
              </a>
            </Card>,
            <Card
              elevation={4}
              sx={{
                width: "30%",
                margin: 2,
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <StaticImage
                src="./images/sponsors/under-the-cloche.png"
                alt="Under The Cloche Logo"
                placeholder="blurred"
              />
            </Card>,
          ],
        ],
      },
    ],
  },
  photoArchiveSection: {
    title: "Photo Archive",
    years: [
      {
        year: "2018",
        link: "https://photos.app.goo.gl/d1dYMX6xvNrVfUwJ3",
        image: (
          <StaticImage
            src="./images/banners/2018.jpg"
            alt="2018 Codefest Banner"
            placeholder="blurred"
          />
        ),
      },
      {
        year: "2019",
        link: "https://photos.app.goo.gl/gGYJ8jutArw5ewnJ7",
        image: (
          <StaticImage
            src="./images/banners/2019.jpg"
            alt="2019 Codefest Banner"
            placeholder="blurred"
          />
        ),
      },
      {
        year: "2020",
        link: "https://photos.app.goo.gl/RsQdaypjbmtdctnt8",
        image: (
          <StaticImage
            src="./images/banners/2020.jpg"
            alt="2020 Codefest Banner"
            placeholder="blurred"
          />
        ),
      },
    ],
  },
  eventPhotosSection: {
    title: undefined,
    sections: [
      {
        title: "Winners of Codefest 2018",
        image: (
          <StaticImage
            src="./images/winners/2018.jpg"
            alt="2018 Codefest Winners"
            placeholder="blurred"
            width={5000}
          />
        ),
      },
      {
        title: "Winners of Codefest 2019",
        image: (
          <StaticImage
            src="./images/winners/2019.jpg"
            alt="2019 Codefest Winners"
            placeholder="blurred"
            width={5000}
          />
        ),
      },
      {
        title: "Winners of Codefest 2020",
        image: (
          <StaticImage
            src="./images/winners/2020.jpg"
            alt="2020 Codefest Winners"
            placeholder="blurred"
            width={5000}
          />
        ),
      },
    ],
  },
  footerDetails: {
    codefestEmail: "oakcodefest@oakridge.in",
    facebookLink: "https://www.facebook.com/oakcf/",
    instagramLink: "https://www.instagram.com/oakcodefest/",
    githubLink: "https://github.com/oakblr",
    copyrightHolder: "Oakridge Codefest",
  },
  coreTeamMembers: [
    {
      name: "Saanika Gupta",
      image: (
        <StaticImage
          src="./images/portraits/saanika.jpg"
          alt="Portrait of Saanika Gupta"
          placeholder="blurred"
          aspectRatio={4 / 5}
        />
      ),
    },
    {
      name: "Aarush Mehrotra",
      image: (
        <StaticImage
          src="./images/portraits/aarush.jpg"
          alt="Portrait of Aarush Mehrotra"
          placeholder="blurred"
          aspectRatio={4 / 5}
        />
      ),
    },
    {
      name: "Pranav Menon",
      image: (
        <StaticImage
          src="./images/portraits/pranav.jpg"
          alt="Portrait of Pranav Menon"
          placeholder="blurred"
          aspectRatio={4 / 5}
        />
      ),
    },
    {
      name: "Ram Velamuri",
      image: (
        <StaticImage
          src="./images/portraits/ram.jpg"
          alt="Portrait of Ram Velamuri"
          placeholder="blurred"
          aspectRatio={4 / 5}
        />
      ),
    },
    {
      name: "Aditya Lingam",
      image: (
        <StaticImage
          src="./images/portraits/aditya.jpg"
          alt="Portrait of Aditya Lingam"
          placeholder="blurred"
          aspectRatio={4 / 5}
        />
      ),
    },
    {
      name: "Divya Vijaykrishnan",
      image: (
        <StaticImage
          src="./images/portraits/divya.jpg"
          alt="Portrait of Divya Vijaykrishnan"
          placeholder="blurred"
          aspectRatio={4 / 5}
        />
      ),
    },
    {
      name: "Jahnavi Thejo Prakash",
      image: (
        <StaticImage
          src="./images/portraits/jahnavi.jpg"
          alt="Portrait of Jahnavi Thejo Prakash"
          placeholder="blurred"
          aspectRatio={4 / 5}
        />
      ),
    },
    {
      name: "Pratham Mishra",
      image: (
        <StaticImage
          src="./images/portraits/pratham.jpg"
          alt="Portrait of Pratham Mishra"
          placeholder="blurred"
          aspectRatio={4 / 5}
        />
      ),
    },
  ],
  coreTeamPageTitle: "Codefest 2022 Core Team Members",
  termsPage: {
    title: "Terms & Conditions",
    terms: [
      "No one over the age of 19 is allowed to participate.",
      "Falsification of age or any other personal information will lead to the immediate disqualification of the malefactor",
      "Cyberbullying and harassing are strictly prohibited. This includes but is not limited to: Insulting participants or management, sending distasteful messages or images and threatening others.",
      "The judges' decisions are final.",
      "The management reserves the right to admission. The management reserves the right to make final decisions regarding disputes that may arise.",
      "Sponsor awards earned by the participants are given at the sponsors' discretion. The school and the core team are not liable in the event that sponsor prizes are not awarded to the participants.",
      "Oakridge International reserves all rights to the event and all decision made by Oakridge International are final.",
      "Violation of these conditions will lead to immediate disqualification.",
    ],
  },
}

export default siteData
