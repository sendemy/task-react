import { siteConfig } from '@/config/site'
import { ButtonContainer, HeadingLg } from '@/styles/styles'
import { Button } from '../ui/button'
import { Container } from './About.styles'

export function About() {
	return (
		<Container>
			<HeadingLg $centered>{siteConfig.homePage.about.title}</HeadingLg>
			<ButtonContainer>
				<Button redirectTo='/contact' className='px-12'>
					Contact us
				</Button>
			</ButtonContainer>
		</Container>
	)
}
