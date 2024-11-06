import { siteConfig } from '@/config/site'
import { Container, Link, Text } from './Footer.styles'

export function Footer() {
	return (
		<footer>
			<Container>
				<Text>
					<Link
						href={siteConfig.footer.links.githubProfile}
						target='_blank'
						rel='noreferrer'
					>
						Vadim Kochnev
					</Link>
					, 2024. The source code is available on{' '}
					<Link
						href={siteConfig.footer.links.githubSourceCode}
						target='_blank'
						rel='noreferrer'
					>
						GitHub
					</Link>
					.
				</Text>
			</Container>
		</footer>
	)
}
