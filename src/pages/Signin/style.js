import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

export const Form = styled.form`
	align-items: stretch;
`;

export const Label = styled.label`
	display: block;
	font-weight: bold;
	font-size: 1rem;
	flex: 1;
	margin-bottom: 5px;
`;

export const Input = styled.input`
	display: block;
	flex: 3;
	font-size: 1rem;
	padding: 7px 9px;
	border-radius: 10px;
	border: 1px solid rgb(186, 191, 196, 0.5);
	margin-bottom: 15px;

	&:focus {
		outline: 3px solid rgba(250, 196, 91, 0.5);
		border: none;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
`;
