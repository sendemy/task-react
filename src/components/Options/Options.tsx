import { siteConfig } from '@/config/site'
import { ButtonContainer, HeadingLg, HeadingMd } from '@/styles/styles'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Container, Option, OptionsStyled } from './Options.styles'

export function Options() {
	return (
		<Container>
			<HeadingLg $centered>{siteConfig.homePage.options.title}</HeadingLg>
			<OptionsStyled>
				{siteConfig.homePage.options.options.map((option, index) => {
					return (
						<Option key={index}>
							<HeadingMd>{option.title}</HeadingMd>
							<p>{option.text}</p>
						</Option>
					)
				})}
			</OptionsStyled>
			<ButtonContainer>
				<Button className='px-12'>
					<Link to={'/contact'}>Contact Us</Link>
				</Button>
			</ButtonContainer>
		</Container>
	)
}
