import { siteConfig } from '@/config/site'
import { Button } from '../ui/button'
import { CompanyName, HeaderStyled } from './Header.styles'

export function Header() {
	return (
		<HeaderStyled>
			<CompanyName>{siteConfig.header.companyName}</CompanyName>
			<div>
				<Button redirectTo='/contact' className='px-12'>
					Contact us
				</Button>
			</div>
		</HeaderStyled>
	)
}
