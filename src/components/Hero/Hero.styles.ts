import { mediaVideoimensions } from '@/styles/styles'
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
	${mediaVideoimensions}
`

export const VideoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	gap: 1rem;
	background-color: #e3e3e3;

	${mediaVideoimensions}
`

export const VideoImage = styled.img`
	${mediaVideoimensions}
`
