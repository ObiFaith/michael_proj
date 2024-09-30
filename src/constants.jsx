import { antlers, kobe } from './assets';
import { IoBasketballSharp } from 'react-icons/io5';
import { IoIosFootball, IoIosTennisball } from 'react-icons/io';
import { FaHockeyPuck, FaVolleyballBall } from 'react-icons/fa';

export const navLinks = [
	{ name: 'Sports' },
	{ name: 'Live' },
	{ name: '1xGames' },
	{ name: 'Casino' },
	{ name: 'Live Casino' },
	{ name: 'More' },
];

export const games = [
	{ name: 'Football', icons: <IoIosFootball /> },
	{ name: 'Tennis', icons: <IoIosTennisball /> },
	{ name: 'Basketball', icons: <IoBasketballSharp /> },
	{ name: 'Ice Hockey', icons: <FaHockeyPuck /> },
	{ name: 'Volleyball', icons: <FaVolleyballBall /> },
	{ name: 'Table Tennis', icons: <IoBasketballSharp /> },
];

export const matches = [
	{
		id: 1,
		category: 'Football',
		heading: 'Japan. Emperors Cup',
		games: [
			{
				teams: [
					{
						name: 'Yokohama F. Marinos',
						logo: antlers,
						score: { first_half: 1, second_half: 2 },
					},
					{
						name: 'Tigres de la UANL',
						logo: kobe,
						score: { first_half: 1, second_half: 2 },
					},
				],
				points: {
					1: 1.35,
					X: 5.48,
					2: 7.74,
					'1X': 1.09,
					12: 1.15,
					'2X': 3.17,
					'+5': '+811',
				},
				extra_info: ['08:14', '1st half', 'Round of 8'],
			},
			{
				teams: [
					{
						name: 'Yokohama F. Marinos',
						logo: antlers,
						score: { first_half: 1, second_half: 2 },
					},
					{
						name: 'Tigres de la UANL',
						logo: kobe,
						score: { first_half: 1, second_half: 2 },
					},
				],
				points: {
					1: 1.35,
					X: '5.48',
					2: '7.74',
					'1X': '1.09',
					12: '1.15',
					'2X': '3.17',
					'+5': '+811',
				},
				extra_info: ['08:14', '1st half', 'Round of 8'],
			},
		],
	},
];

export const footerDropDown = {
	name: '1xBet - Licensed betting company in Nigeria - Online and live Sports Betting',
	data: [
		{ list: '1xBet Betting Company - Online Sports Betting', items: [] },
		{
			list: 'HOW DOES A BOOKMAKER WORK?',
			items: [
				'Making a bet with a bookmaker is a great way to test your 	luck, get an adrenalin rush and make some money in the process. Hundreds of betting websites offer their services to millions of fans who like to bet on sports online. 1xBet Betting Company stands out among other online bookmakers. Although the company is relatively young, it has already won the trust of several hundred thousand active fans.',
			],
		},
		{
			list: 'HOW TO BET ONLINE WITH 1XBET?',
			items: [
				'1xBet is one of the best websites for sports betting in Europe. However, we offer much more than just sports betting. We offer a real thrill from a game, an opportunity to chat with fellow fans on our forum and the chance to get advice and recommendations from professionals.',
			],
		},
		{
			list: 'WHICH SPORTS AND EVENTS ARE OFFERED FOR BETTING? WHERE DO I LOOK FOR PREDICTIONS?',
			items: [
				'1xBet is the biggest bookmaker in Europe. Every sports fan and punter will find something to their liking on our website. Even the most demanding customers will discover numerous betting opportunities. Choose your bet!',
			],
		},
		{
			list: 'WHAT DOES 1XBET BETTING COMPANY GUARANTEE?',
			items: [
				'A wide selection of events.',
				'Fast and reliable bet processing.',
				'A unique opportunity to bet big on the most popular events.',
				'Guaranteed payments on all successful bets.',
				'High odds.',
				'Individual approach to every customer who wishes to place a bet on sports.',
				'A high level of professional service.',
				'Security and confidentiality.',
			],
		},
		{
			list: 'WHY IS 1XBET BETTER THAN OTHER ONLINE BOOKMAKERS?',
			items: [
				'Online betting is an opportunity to convert virtual predictions into real money!',
				'Are you interested in sports in general - or maybe you are a fan of a particular team? Turn your passion into profit!',
				'Thanks to the Internet, you can bet at any time, 24 hours a day, 7 days a week!',
				'We constantly update information about match outcomes so that you can get results in real time!',
				'The huge selection of bets offered on our website give each customer the chance to test their boldest predictions!',
			],
		},
		{
			list: 'THE MAIN THING TO KNOW ABOUT 1XBET BETTING COMPANY!',
			items: [
				'The main advantage of our betting company is that we provide a unique opportunity to make LIVE bets. In-play betting significantly increases the chances of winning and generates enormous interest in sporting contests.',
			],
		},
	],
};

export const popularEvents = [
	{
		name: 'Main',
		lists: [
			'Live',
			'Sport',
			'Promo Code Store',
			'Special Offers and Bonuses',
			'First Deposit Bonus',
			'Casino',
			'Live Casino',
			'Registration',
			'Toto',
			'TV Games',
			'Virtual Sport',
			'Hunting and Fishing',
			'1xGames',
		],
	},
	{
		name: 'Live',
		lists: ['Football', 'Tennis', 'Basketball', 'Ice Hockey', 'Volleyball'],
	},
];

export const footerLinks = [
	{
		name: 'Information',
		items: [
			'About us',
			'Terms and Conditions',
			'Affiliate Program',
			'B2B',
			'Become an Agent',
			'Privacy Policy',
			'Cookie Policy',
			'Contact',
		],
	},
	{
		name: 'Betting',
		items: ['Sport', 'Multi-LIVE', 'Live', 'Toto'],
	},
	{
		name: 'Games',
		items: ['Casino', '1xGames', 'Live Casino'],
	},
	{
		name: 'Statistics',
		items: ['Statistics', 'Results'],
	},
	{
		name: 'Useful Links',
		items: ['Payment Methods', 'Mobile Version', 'Registration'],
	},
	{
		name: 'Apps',
		items: ['iOS', 'Andriod'],
	},
];
