import Router from './Router';
import GlobalStyle from './styles/GlobalStyles';
import { useState, useEffect } from 'react';

function App() {
	const [init, setInit] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const getUser = () => {
		const userInfo = localStorage.getItem('token') ? true : false;
		if (userInfo) setIsLoggedIn(true);
		else setIsLoggedIn(false);
		setInit(true);
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<>
			<GlobalStyle />
			{init ? <Router isLoggedIn={isLoggedIn} /> : '로딩 중...'}
		</>
	);
}

export default App;
