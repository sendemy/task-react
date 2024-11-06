import { siteConfig } from '@/config/site'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { CompanyName, HeaderStyled } from './Header.styles'

export function Header() {
	return (
		<HeaderStyled>
			<CompanyName>{siteConfig.header.companyName}</CompanyName>
			<div>
				<Button className='px-12'>
					<Link to={'/contact'}>Contact Us</Link>
				</Button>
			</div>
		</HeaderStyled>
	)
}
