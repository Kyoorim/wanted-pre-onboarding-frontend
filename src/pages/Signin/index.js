import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../../apis';
import Button from '../../components/Layout/Button';
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
			navigate('/todos');
		}
	};
	return (
		<S.Wrapper>
			<h1>나만의 투두리스트</h1>
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
					<Button>로그인하기</Button>
				</S.ButtonContainer>
			</S.Form>
			<a onClick={() => navigate('/auth/signup')}>회원가입 하러가기</a>
		</S.Wrapper>
	);
};

export default Signin;
