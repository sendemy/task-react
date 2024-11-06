import styled from 'styled-components'

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

export const Content = styled.main`
	flex: 1;
`

export const HeadingLg = styled.h1<{ $centered?: boolean }>`
	font-size: 3rem;
	font-weight: bold;
	text-align: ${(props) => (props.$centered ? 'center' : 'initial')};

	@media (max-width: 425px) {
		font-size: 2rem;
	}
`

export const HeadingMd = styled.h2<{ $centered?: boolean }>`
	font-size: 1.5rem;
	font-weight: bold;
	text-align: ${(props) => (props.$centered ? 'center' : 'initial')};

	@media (max-width: 425px) {
		font-size: 1rem;
	}
`

export const Wrapper = styled.section<{ $dark?: boolean }>`
	padding: 2rem;
	background-color: ${(props) => (props.$dark ? '#f1f1f1' : '#fffff')};

	@media (max-width: 475px) {
		padding: 2rem 1rem;
	}

	@media (max-width: 320px) {
		padding: 2rem 0.5rem;
	}
`

export const ButtonContainer = styled.div`
	text-align: center;
`
