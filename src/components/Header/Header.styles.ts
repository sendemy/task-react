import styled from 'styled-components'

export const HeaderStyled = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0.5rem 3rem 0.5rem 1.5rem;
	text-align: center;
	line-height: 2;
	border-bottom: 1px solid #cfcfcf;

	@media (min-width: 768px) {
		height: 6rem;
	}

	@media (max-width: 425px) {
		padding: 0.5rem 2rem 0.5rem 1rem;
	}

	@media (max-width: 320px) {
		padding: 0.5rem 1rem;
	}
`

export const CompanyName = styled.div`
	font-size: 2rem;
	font-weight: bold;

	@media (max-width: 425px) {
		font-size: 1.5rem;
	}

	@media (max-width: 375px) {
		font-size: 1.25rem;
	}
`
