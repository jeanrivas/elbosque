import styled from 'styled-components';

export const PuestosContainer = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 30px;
	height: 100vh;
	position: relative;
	z-index: 1;
	overflow: auto;
	background-color: #009612;

	:before {
		content: '';
		top: 0;
		left: 0;
		right: 0;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
			linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
		z-index: 2;
	}
`;
