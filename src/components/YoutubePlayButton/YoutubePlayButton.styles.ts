import { mediaVideoimensions } from '@/styles/styles'
import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 68px;
	height: 48px;
	position: relative;
	margin: 0 auto;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
`

export const Container = styled.div`
	position: absolute;
	width: fit-content;
	height: fit-content;
	-webkit-transform-style: preserve-3d;
	-moz-transform-style: preserve-3d;
	transform-style: preserve-3d;
	cursor: pointer;

	${mediaVideoimensions}
`
