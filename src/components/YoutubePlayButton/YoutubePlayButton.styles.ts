import { mediaVideoimensions } from '@/styles/styles'
import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 68px;
	height: 48px;
	position: relative;
	margin: 0 auto;
`

export const Container = styled.button`
	position: absolute;
	width: 720px;
	height: 360px;
	-webkit-transform-style: preserve-3d;
	-moz-transform-style: preserve-3d;
	transform-style: preserve-3d;
	cursor: pointer;

	${mediaVideoimensions}
`
