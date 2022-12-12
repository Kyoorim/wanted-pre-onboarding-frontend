import * as S from './style';

const Button = ({ children, onClick, type }) => {
	return (
		<S.ButtonComponent type={type} onClick={onClick}>
			{children}
		</S.ButtonComponent>
	);
};

export default Button;
