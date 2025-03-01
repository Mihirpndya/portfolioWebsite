const { REACT_APP_RESUME_DRIVE_ID } = process.env;
export const resume = {
	name: "Mihir Pandya",
	email: "mpandya284@gmail.com",
	Phone: "+917064111537",
	address: "Bhubaneswar, Odisha, India",
	resumeDriveLinkCode:
		REACT_APP_RESUME_DRIVE_ID ?? "1kWdD5esUmPfgQo7RTuyqTttPkIdLQzzu",
	dob: {
		month: "October",
		year: "1998",
		date: 17,
	},
	links: {
		github: "https://github.com/Mihirpndya",
		//facebook: "https://www.facebook.com",
		linkedIn: "https://www.linkedin.com/in/mihir-pandya-109435197/",
		instagram: "https://www.instagram.com/mihirpndya",
	},
	headline: "A Frontend Web Developer",
	jobName: "React Developer",
	bio: "Experienced Frontend Developer with a strong foundation in building dynamic and engaging web applications using React.js, TypeScript, JavaScript, HTML, and CSS. Proficient in modern UI frameworks like Tailwind CSS and adept at integrating backend services with Node.js and Express.js. Passionate about crafting seamless user experiences, optimizing performance, and delivering responsive, scalable web solutions.",
	//description must be less than or equal to 100 characters
	education: [
		{
			year: "2018 - 2022",
			name: "Bachelor's Degree",
			affiliation: "Indira Gandhi Institute of Technology, Sarang",
			description: "Technical University under Government of Odisha",
		},
		{
			year: "2025 - 2028",
			name: "AWS certified Developer -Associate",
			affiliation: "Amazon Web Services",
			description:
				"Cleared AWS Developer Associate Certification, equipping me with expertise to design, develop, and deploy scalable, secure, and efficient cloud applications.",
		},
		{
			year: "2025 - 2028",
			name: "AWS certified Solutions Architect -Associate",
			affiliation: "Amazon Web Services",
			description:
				"Achieved the AWS Solutions Architect Associate Certification, strengthening my ability to architect secure, scalable, and cost-optimized cloud solutions.",
		},
		{
			year: "2023 - 2023",
			name: "Web Development Bootcamp",
			affiliation: "Udemy",
			description:
				"Comprehensive training fostering strong coding abilities and practical web development skills.",
		},
		// {
		//   year: '2023 - 2023',
		//   name: 'Pesto Plus Fellowship',
		//   affiliation: 'Pesto Tech',
		//   description:
		//     '8-month program shapes devs into global engineers, prioritizes skill, boosts income.',
		// },
	],
	//description must be less than or equal to 100 characters
	experience: [
		{
			year: "2022 - Present",
			name: "Senior Systems Engineer",
			affiliation: "Infosys Limited",
			description: "Working as a Frontend Developer at Infosys Limited.",
		},
	],
	skills: {
		primary: [
			{
				name: "ReactJS",
				score: 95,
			},
			{
				name: "Javascript",
				score: 90,
			},
			{
				name: "HTML5 & CSS3",
				score: 90,
			},
			{
				name: "Redux",
				score: 90,
			},
			{
				name: "SQL & PostgreSQL",
				score: 85,
			},
		],
		secondary: [
			{
				name: "tailwind CSS",
				score: 90,
			},
			{
				name: "Node & Express JS",
				score: 60,
			},
			{
				name: "MongoDB",
				score: 60,
			},
			{
				name: "PowerShell & Bicep Scripts",
				score: 70,
			},
		],
	},
	platforms: ["Visual Studio", "Visual Studio Code", "GIT", "GitHub", "JiRa"],
	projects: [
		{
			name: "Event Manager App",
			link: "https://managemyevent.netlify.app",
		},
		{
			name: "ViteTube",
			link: "https://vitetube.netlify.app",
		},
	],
	//hireMeHeader example: "I'm <span>open</span> to work!", use span for focusing texts
	hireMeHeader: "I'm <span>Available</span> for freelancing",
};
