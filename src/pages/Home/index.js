import { useNavigate } from 'react-router-dom';
import * as S from './style';

const Home = () => {
	const navigate = useNavigate();
	return (
		<S.Wrapper>
			<S.Container>
				<h1>투두두두</h1>
				<S.ButtonContainer>
					<button onClick={() => navigate('/auth/signin')}>로그인하기</button>
					<button onClick={() => navigate('/auth/signup')}>회원가입하기</button>
				</S.ButtonContainer>
			</S.Container>
		</S.Wrapper>
	);
};

export default Home;
