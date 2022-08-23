let info = {
  name: "Mei-Ren Ke",
  logo_name: "Jasmine",
  flat_picture: require("./src/assets/potrait.jpeg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "<br>A second year Computer Science graduate student at National Taiwan University of Science and Technology." +
    "<br><br>I am a detail oriented person and I keep my goals and tasks organized to maintain productivity. I believe that the skills that I have attained from the dynamic environment and competitive university life define me, and I am looking forward to implementing and polishing them in any opportunity that I receive. ",
  links: {
    linkedin: "https://www.linkedin.com/in/mei-ren-ke/",
    github: "https://github.com/Jasmine3Ke",
    resume:
      "https://github.com/Jasmine3Ke/Self/blob/master/src/assets/pdfs/Resume.pdf", 
    publication: "http://search.taai.org.tw/paper/2020/0/%E5%9F%BA%E6%96%BC%E5%9C%96%E5%83%8F%E7%90%86%E8%A7%A3%E8%88%87%E8%89%B2%E5%BD%A9%E6%84%8F%E8%B1%A1%E7%94%B1%E7%95%AB%E4%BD%9C%E7%94%9F%E6%88%90%E8%A9%A9%E6%96%87%E4%B9%8B%E7%B3%BB%E7%B5%B1.pdf"
  },
  education: [
    {
      name: "National Taiwan University of Science and Technology",
      place: "Taiwan",
      date: "Sep, 2021 - present",
      degree: "Masters in Computer Science and Information Engineering",
      gpa: "4.13/4.30",
      description:
        "Currently pursuing my Master's in Computer Science, while specializing in the field of Fuzzy System.",
      skills: [
        "Fuzzy System",
        "Blockchain",
        "Algorithms",
        "Computer Vision",
        "Data Mining",
        "OS"
      ]
    },
    {
      name: "Yuan Ze University",
      place: "Taiwan",
      date: "Sep, 2017 - Jun, 2021",
      degree: "Bachelors in Computer Science and Engineering",
      description:
        "Graduated from Yuan Ze University with a bachelors degree in Computer Science and Engineering.<br><br>" + 
        "<ul style='list-style-position:outside;'>" + 
        "<li> Dept. Representative, 2017-2018 " +
        "<li> Graduate Representative, 2020-2021 </ul>",
      skills: [
        "Artificial Intelligence",
        "Neural Netwroks",
        "Computer Vision",
        "C++",
        "Computer Organization"
      ]
    }
  ],
  experience: [
    {
      name: "Department of Clound System",
      place: "Taipei Fubon Bank",
      date: "July, 2022 - Aug, 2022",
      position: "Mobile Application Developer",
      description: //補英文描述
        "<ul style='list-style-position:outside;'>" + 
        "<li>test case generation and management" + 
        "<li>tested mobile and web application" +
        "<li>developed a live cryptocurrency prices mobile application using JAVA" +
        "<li>working with third-party libraries and APIs</ul>",
      skills: ["Android Studio", "Java", "Swift", "UI/UX"]
    },
    {
      name: "Visual Media Laboratory",
      place: "Yuan-Ze University",
      date: "Feb, 2019 - Feb, 2021",
      position: "Research Assistant",
      description: 
        "<ul style='list-style-position:outside;'>" + 
        "<li><b>Advisor:</b> I-Cheng Yeh" +
        "<li><b>Research topic:</b> Automatic Generation of Classical Chinese Poetry Based on Image and Color of Paintings" + 
        "<li><b>Contributions:</b> completed the College Student Co-Research Project sponcered by Taiwan's Ministry of Science and Technology, attended competitions<br>" + 
        "<li>Participated in the Data Visualization Study Group, 2019.02-2019.10 </ul>",
      skills: ["Python", "Data Visualization", "Machine Learning", "NLP", "Image Recognition", "Image Processing"]
    }
  ],
  skills: [
    {
      title: "languages",
      info: ["Python", "C++", "Java", "React Native", "Flutter"],
      icon: "fa fa-code"
    },
    {
      title: "data frameworks",
      info: [
        "YOLO",
        "Numpy",
        "Pandas",
        "OpenCV",
        "SciPy",
        "Sklearn",
        "Pillow"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "design",
      info: ["Final Cut Pro", "Sony Vegas"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
    {
      name: "Sheet Recognizer",
      pictures: [
        {
          img: require("./src/assets/portfolio/msr/one.png")
        },
        {
          img: require("./src/assets/portfolio/msr/two.png")
        },
        {
          img: require("./src/assets/portfolio/msr/three.png")
        },
        {
          img: require("./src/assets/portfolio/msr/four.png")
        }
      ],
      technologies: ["Computer Vision", "OpenCV", "AI", "Flask", "Sockets"],
      category: "Algorithm",
      date: "Jan, 2020 - Mar, 2020",
      github:
        "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
      visit: "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
      description:
        "Music Sheet Recognizer (MSR) highlights basic Image Processing and Recognition. Like Optical Character Recognition, this tool is used to detect music notes and rests. It makes use of basic Computer Vision techniques such as Convolution, Edge Detections, Hough Transforms and Template Matching to detect notes and rests on a music sheet. "
    },
    {
      name: "NoQ Job Portal",
      pictures: [
        {
          img: require("./src/assets/portfolio/noq/logo.png")
        },
        {
          img: require("./src/assets/portfolio/noq/one.png")
        },
        {
          img: require("./src/assets/portfolio/noq/two.png")
        },
        {
          img: require("./src/assets/portfolio/noq/three.png")
        },
        {
          img: require("./src/assets/portfolio/noq/four.png")
        }
      ],
      technologies: ["Node", "Vue", "Express", "MongoDB", "Heroku"],
      category: "Website",
      date: "Sep, 2019 - Dec  , 2019",
      github: "https://github.com/hrishikeshpaul/noq",
      visit: "https://noq-client.herokuapp.com/",
      description:
        "No Q, is a revolutionary tool which allows for both employers and students to skip the hassle seen in modern day career fairs. For the students, there is an intuitive profile builder where you can add things like education, skills, certifications, honors, and experiences. No Q is not only good for students, but employers as well! A common problem at modern career fairs is the number of unqualified candidates who waste their time when they could be chatting with someone else. With No Q, only the students who meet the positions’ criteria will be able to apply, and from there the recruiter can invite them to talk in more detail at the career fair through our intuitive messaging system."
    },
    {
      name: "POST",
      pictures: [
        {
          img: require("./src/assets/portfolio/post/one.png")
        },
        {
          img: require("./src/assets/portfolio/post/two.png")
        }
      ],
      technologies: [
        "Markov Models",
        "Python",
        "Artificial Intelligence",
        "Vue",
        "Heroku"
      ],
      category: "Algorithm",
      github: "https://github.com/hrishikeshpaul/pos-tagger",
      date: "Oct, 2019 - Nov, 2019",
      visit: "https://post-client.herokuapp.com/",
      description:
        "Post is a simple algorithm that was developed to tagging a word corresponding to its part of speech. The algorithm makes of a probabilisitic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling."
    },
    {
      name: "Suicide Analyzer",
      pictures: [
        {
          img: require("./src/assets/portfolio/suicide/suicide-analyzer.png")
        },
        {
          img: require("./src/assets/portfolio/suicide/suicide2-original.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "Leaflet", "Pandas"],
      category: "Website",
      date: "Oct, 2018 - Nov, 2018",
      github: "https://github.com/hrishikeshpaul/whodata",
      visit: "https://skylarktiral.herokuapp.com/",
      description:
        "This is a web application, uses a map to demonstrate the number suicides committed around the globe, according to a dataset provided by the WHO. The application consists of a Leaflet map that colors every nation, based on the number of suicides that have been committed in that country, for that year. It provides us with the capability to select the data as well as the continent."
    },
    {
      name: "Sentiment Analyzer",
      pictures: [
        {
          img: require("./src/assets/portfolio/smit/one.png")
        },
        {
          img: require("./src/assets/portfolio/smit/two.png")
        },
        {
          img: require("./src/assets/portfolio/smit/three.png")
        },
        {
          img: require("./src/assets/portfolio/smit/four.png")
        }
      ],
      technologies: ["LSTM", "Keras", "Angular", "Tweepy", "Heroku", "Python"],
      category: "Alogrithm",
      date: "Feb, 2018 - Apr  , 2018",
      github: "https://github.com/hrishikeshpaul/sih",
      visit: "https://angel.co/projects/1009777-sentiment-analysis",
      description:
        "Developing this for the final round of Smart India Hackathon 2018, the web application is a platform for showcasing the sentiment of the tweets of the people in the Telangana region in India on policy satisfaction, services and problem definitions. The minimal UI design consists of different bins, that have their respective tweets, all scraped from twitter. There is also a simple graphical representation denoting the sentiment of the tweets."
    },
    {
      name: "Clumpr",
      pictures: [
        {
          img: require("./src/assets/portfolio/clumpr/logo.png")
        },
        {
          img: require("./src/assets/portfolio/clumpr/one.png")
        },
        {
          img: require("./src/assets/portfolio/clumpr/two.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MySQL", "Facebook API"],
      category: "Web App",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "Sep, 2017 - Nov, 2017",
      visit: "https://github.com/hrishikeshpaul/clumpr",
      description:
        'Clumpr is an online social event planning assistant that - using information about similar events happening in similar locations around the same time, friends who frequently attend the same events, and mutual friends - helps users to collaborate, combine, and attend events together, effectively "clumping" people and activities in a way that makes intuitive sense.'
    },
    {
      name: "Nutricare",
      pictures: [
        {
          img: require("./src/assets/portfolio/nc/one.png")
        },
        {
          img: require("./src/assets/portfolio/nc/two.png")
        },
        {
          img: require("./src/assets/portfolio/nc/three.png")
        },
        {
          img: require("./src/assets/portfolio/nc/four.png")
        },
        {
          img: require("./src/assets/portfolio/nc/five.png")
        },
        {
          img: require("./src/assets/portfolio/nc/six.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MongDB", "Medical"],
      category: "Website",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
        "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    }
  ],
  portfolio_design: [
    {
      name: "HowFetching",
      title: "HowFetching",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/MoodBoard.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 2.png"),
          title: "Mockups 2"
        },
        {
          img: require("./src/assets/designs/coursera1/App Elements.png"),
          title: "App Elements"
        }
      ],
      technologies: ["React Native", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - Jun, 2020",
      visit: "",
      description:
        "Developing this for the final round of Data Creactive Competition, the mobile application is a platform for showcasing the sentiment of the tweets of the people in the Telangana region in India on policy satisfaction, services and problem definitions. The minimal UI design consists of different bins, that have their respective tweets, all scraped from twitter. There is also a simple graphical representation denoting the sentiment of the tweets."
    },
    {
      name: "Pantree",
      title: "Pantree - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pantree/MoodBoard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/pantree/1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/pantree/2.png"),
          title: "Mockups 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients."
    },
    {
      name: "Bunder",
      title: "Bunder - MVP Proposal",
      pictures: [
        {
          img: require("./src/assets/designs/bunder/Moodboard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 1.png"),
          title: "Mockup 1"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 2.png"),
          title: "Mockup 2"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 3.png"),
          title: "Mockup 3"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 1.png"),
          title: "Market Research 1"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 2.png"),
          title: "Market Research 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease."
    }
  ],
  recommendations: [
    {
      title:
        "<br>• Our model generated poems via inputting the artworks such as the paintings<br><br>" + 
        "• <b>Keypoints:</b><br>" +
        "<ul style='list-style-type: decimal;'>" + 
        "<li>Compressed a 45-dimensions feature vector via one-hot encoding and inputted to support vector machine (SVM)<br>" + 
        "<li>Trained support vector machine and conducted style prediction<br></ul>" +
        "• <b>Contributions:</b><br>" +
        "<ul style='list-style-type: decimal;'>" + 
        "<li>Trained on small scale dataset and conducted the user study<br>" + 
        "<li>Transformed images in MS COCO2017 into synthetic images<br>" + 
        "<li>Oral presentation in conference</ul>",
      author: "Published in International Conference on Technologies and Applications of Artificial Intelligence (TAAI)",
      position: "Dec 5, 2020",
      company: "Automatic Generation of Classical Chinese Poetry Based on Image and Color of Paintings"
    },
  ]
};

export default info;