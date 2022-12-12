import { useNavigate } from 'react-router-dom';
import Button from '../../components/Layout/Button';
import * as S from './style';

const Home = () => {
	const navigate = useNavigate();
	return (
		<S.Wrapper>
			<S.Container>
				<h1>나만의 투두리스트</h1>
				<S.ButtonContainer>
					<Button onClick={() => navigate('/auth/signin')}>로그인하기</Button>
					<Button onClick={() => navigate('/auth/signup')}>회원가입하기</Button>
				</S.ButtonContainer>
			</S.Container>
		</S.Wrapper>
	);
};

export default Home;
