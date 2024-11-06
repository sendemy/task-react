import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4rem;
`

export const OptionsStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-auto-flow: row;
	gap: 4rem;

	@media (max-width: 425px) {
		grid-template-columns: repeat(2, auto);
	}
`

export const Option = styled.div`
	max-width: 24rem;
`
