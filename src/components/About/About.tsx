import { siteConfig } from '@/config/site'
import { ButtonContainer, HeadingLg } from '@/styles/styles'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Container } from './About.styles'

export function About() {
	return (
		<Container>
			<HeadingLg $centered>{siteConfig.homePage.about.title}</HeadingLg>
			<ButtonContainer>
				<Button className='px-12'>
					<Link to={'/contact'}>Contact Us</Link>
				</Button>
			</ButtonContainer>
		</Container>
	)
}
