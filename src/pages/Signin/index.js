import * as S from './style';

const Signin = () => {
	return (
		<S.Wrapper>
			<h1>투두두두</h1>
			<S.Form>
				<S.Label htmlFor="email">Email</S.Label>
				<S.Input
				//   type="email"
				//   id="email"
				//   value={email}
				//   onChange={(e) => setEmail(e.target.value)}
				></S.Input>
				<S.Label htmlFor="password">Password</S.Label>
				<S.Input
				//   type="password"
				//   id="password"
				//   required
				//   value={password}
				//   onChange={(e) => setPassword(e.target.value)}
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
