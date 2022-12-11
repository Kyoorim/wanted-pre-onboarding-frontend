import { useRef } from 'react';
import { apiService } from '../../apis';
import * as S from './style';

const Signup = () => {
	const emailInputRef = useRef(null);
	const passwordInputRef = useRef(null);

	const submitHandler = async (event) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		const form = {
			email: enteredEmail,
			password: enteredPassword,
		};

		await apiService.SignUp(form);
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
						<button type="submit">회원가입하기</button>
					</S.ButtonContainer>
				</S.Form>
			</S.Wrapper>
		</>
	);
};

export default Signup;
