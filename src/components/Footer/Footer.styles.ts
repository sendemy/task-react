import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 6rem;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	padding: 0 2rem;
	border-top: 1px solid #cfcfcf;
`

export const Text = styled.p`
	font-size: 0.875rem;
	line-height: 1.75;
	text-align: center;
	color: #6b7280;

	@media (min-width: 768px) {
		text-align: left;
	}
`

export const Link = styled.a`
	color: red;
	font-weight: 500;
	text-decoration: underline;
	text-underline-offset: 4px;
	color: #1f2937;

	&:hover {
		color: #4a5568;
	}
`
