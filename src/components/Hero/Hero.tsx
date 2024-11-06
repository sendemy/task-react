import { siteConfig } from '@/config/site'
import { HeadingLg } from '@/styles/styles'
import { Container, IFrame, Text, TextContainer } from './Hero.styles'

export function Hero() {
	return (
		<Container>
			<TextContainer>
				<HeadingLg>{siteConfig.homePage.hero.title}</HeadingLg>
				<Text>{siteConfig.homePage.hero.text}</Text>
			</TextContainer>
			<div>
				<IFrame
					width='720'
					height='360'
					src='https://www.youtube.com/embed/dQw4w9WgXcQ'
				></IFrame>
			</div>
		</Container>
	)
}
