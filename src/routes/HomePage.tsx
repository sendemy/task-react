import { About } from '@/components/About/About'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Hero } from '@/components/Hero/Hero'
import { Options } from '@/components/Options/Options'
import { Content, PageContainer, Wrapper } from '@/styles/styles'

export function HomePage() {
	return (
		<PageContainer>
			<Header />
			<Content>
				<Wrapper $dark>
					<Hero />
				</Wrapper>
				<Wrapper>
					<Options />
				</Wrapper>
				<Wrapper $dark>
					<About />
				</Wrapper>
			</Content>
			<Footer />
		</PageContainer>
	)
}
