import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../../apis';
import * as S from './style';

const Signin = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submitHandler = async (event) => {
		event.preventDefault();

		const form = {
			email,
			password,
		};

		const response = await apiService.SignIn(form);
		if (response.status === 200) {
			alert('로그인 성공');
			navigate('/');
		}
	};
	return (
		<S.Wrapper>
			<h1>투두두두</h1>
			<S.Form onSubmit={submitHandler}>
				<S.Label htmlFor="email">Email</S.Label>
				<S.Input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				></S.Input>
				<S.Label htmlFor="password">Password</S.Label>
				<S.Input
					type="password"
					id="password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				></S.Input>
				<S.ButtonContainer>
					<button>로그인하기</button>
				</S.ButtonContainer>
			</S.Form>
			<span>회원가입 하러가기</span>
		</S.Wrapper>
	);
};

export default Signin;
