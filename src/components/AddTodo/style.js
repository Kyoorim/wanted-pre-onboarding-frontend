import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	width: 90%;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
	padding: 20px 0px;
	border-bottom: 1px dashed black;
`;

export const Input = styled.input`
	display: block;
	flex: 3;
	font-size: 1rem;
	padding: 7px 9px;
	border-radius: 10px;
	border: 1px solid rgb(186, 191, 196, 0.5);
	margin-right: 30px;
	&:focus {
		outline: 3px solid rgba(250, 196, 91, 0.5);
		border: none;
	}
`;
