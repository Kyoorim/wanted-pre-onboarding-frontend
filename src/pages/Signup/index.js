import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../../apis';
import Button from '../../components/Layout/Button';
import * as S from './style';

const isValidEmail = (email) => email.includes('@') && email.includes('.');
const isValidPassword = (pwd) => pwd.length >= 8;

const Signup = () => {
	const navigate = useNavigate();
	const emailInputRef = useRef(null);
	const passwordInputRef = useRef(null);

	const [formValidity, setFormValidity] = useState({
		email: true,
		password: true,
	});

	const submitHandler = async (event) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		const enteredEmailIsValid = isValidEmail(enteredEmail);
		const enteredPasswordIsValid = isValidPassword(enteredPassword);

		setFormValidity({
			email: enteredEmailIsValid,
			password: enteredPasswordIsValid,
		});

		const formIsValid = enteredEmailIsValid && enteredPasswordIsValid;

		if (!formIsValid) {
			alert(
				'제출 형식이 올바르지 않습니다 (이메일 @ 포함 및 비밀번호 8자리 문자 이상)'
			);
		} else {
			const form = {
				email: enteredEmail,
				password: enteredPassword,
			};
			await apiService.SignUp(form);
			navigate('/auth/signin');
		}
	};

	return (
		<>
			<S.Wrapper>
				<h1>투두두두</h1>
				<S.Form onSubmit={submitHandler}>
					<S.Label htmlFor="email">Email</S.Label>
					<S.Input
						type="email"
						id="email"
						required
						ref={emailInputRef}
					></S.Input>
					<S.Label htmlFor="password">Password</S.Label>
					<S.Input
						type="password"
						id="password"
						required
						ref={passwordInputRef}
					></S.Input>
					<S.ButtonContainer>
						<Button type="submit">회원가입하기</Button>
					</S.ButtonContainer>
				</S.Form>
			</S.Wrapper>
		</>
	);
};

export default Signup;
