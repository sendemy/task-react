import styled from 'styled-components'

export const Container = styled.section`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media (max-width: 1024px) {
		gap: 2rem;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 32rem;

	@media (max-width: 768px) {
		max-width: 100%;
	}
`

export const Text = styled.p`
	font-size: 1rem;
	margin-top: 1rem;
`

export const IFrame = styled.iframe`
	@media (max-width: 1024px) {
		width: 480px;
		height: 240px;
	}

	@media (max-width: 768px) {
		width: 720px;
		height: 360px;
	}

	@media (max-width: 425px) {
		width: 360px;
		height: 180px;
	}

	@media (max-width: 375px) {
		width: 240px;
		height: 120px;
	}
`
