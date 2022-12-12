import styled from 'styled-components';

export const Todo = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: black;
	color: white;
	border-radius: 10px;
	margin-bottom: 15px;
	padding: 20px 20px;
	font-weight: 600;
	font-size: 1.2rem;

	svg:first-child {
		margin: 0 5px;
	}
`;

export const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: black;
	color: white;
	border-radius: 10px;
	margin-bottom: 15px;
	padding: 20px 20px;
	font-weight: 600;
	font-size: 1.2rem;
	svg:first-child {
		margin: 0 5px;
	}

	div {
		display: flex;
		align-items: center;
		box-sizing: border-box;
		button {
			svg {
				width: 18px;
				height: 18px;
			}
		}
	}
`;
