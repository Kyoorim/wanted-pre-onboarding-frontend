import Router from './Router';
import GlobalStyle from './styles/GlobalStyles';
import { useState, useEffect } from 'react';

const getUser = () => {
	const userInfo = localStorage.getItem('token') ? true : false;
	return userInfo;
};

function App() {
	const [init, setInit] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(getUser());

	const loginStatus = getUser();

	useEffect(() => {
		getUser();
		if (loginStatus) setIsLoggedIn(true);
		else setIsLoggedIn(false);
		setInit(true);
	}, []);

	return (
		<>
			<GlobalStyle />
			{init ? <Router isLoggedIn={isLoggedIn} /> : '로딩 중...'}
		</>
	);
}

export default App;
