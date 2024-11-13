import { siteConfig } from '@/config/site'
import { ButtonContainer, HeadingLg, HeadingMd } from '@/styles/styles'
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
				<Button redirectTo='/contact' className='px-12'>
					Contact us
				</Button>
			</ButtonContainer>
		</Container>
	)
}
