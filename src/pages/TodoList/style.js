import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 500px;
	max-width: 100%;
	h1 {
		font-size: 2rem;
		font-weight: 700;
		padding: 30px 0px;
	}
	h3 {
		text-align: end;
		width: 90%;
		text-decoration: underline;
		font-size: 0.8rem;
	}
	ul {
		width: 90%;
		margin-top: 30px;
	}
`;
