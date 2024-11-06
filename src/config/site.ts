export const siteConfig = {
	name: 'Test Task for CADEX',
	url: 'http://localhost:5173/',
	header: {
		companyName: 'Vadim Kochnev',
	},
	homePage: {
		hero: {
			title: 'Most important title on the page',
			text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores veritatis atque iure incidunt quae beatae nesciunt reiciendisvel ipsam.',
		},
		options: {
			title: 'Title',
			options: [
				{
					title: 'Title',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
				},
				{
					title: 'Title',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
				},
				{
					title: 'Title',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
				},
				{
					title: 'Title',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
				},
				{
					title: 'Title',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
				},
				{
					title: 'Title',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
				},
			],
		},
		about: {
			title: 'Less important title',
		},
	},
	contactPage: {
		title: 'Only CTA on the page',
	},
	footer: {
		links: {
			githubProfile: 'https://github.com/sendemy',
			githubSourceCode: 'https://github.com/shadcn-ui/ui',
		},
	},
}

export type SiteConfig = typeof siteConfig
