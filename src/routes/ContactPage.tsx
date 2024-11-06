import { ContactForm } from '@/components/ContactForm/ContactForm'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { siteConfig } from '@/config/site'
import { Content, HeadingLg, PageContainer, Wrapper } from '@/styles/styles'
import { useState } from 'react'

export function ContactPage() {
	const [message, setMessage] = useState<string | null>(null)

	function handleMessage(message: string) {
		setMessage(message)
	}

	return (
		<PageContainer>
			<Header />
			<Content style={{ display: 'flex', flexDirection: 'column' }}>
				<Wrapper $dark style={{ flex: '1' }}>
					{message ? (
						<HeadingLg $centered>{message}</HeadingLg>
					) : (
						<>
							<HeadingLg style={{ marginBottom: '2rem' }} $centered>
								{siteConfig.contactPage.title}
							</HeadingLg>
							<ContactForm sendMessage={handleMessage} />
						</>
					)}

					{/* <HeadingLg style={{ marginBottom: '2rem' }} $centered>
						{siteConfig.contactPage.title}
					</HeadingLg>
					<ContactForm sendMessage={handleMessage} /> */}
				</Wrapper>
			</Content>
			<Footer />
		</PageContainer>
	)
}
