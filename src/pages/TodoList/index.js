import AddTodo from '../../components/AddTodo';
import Todos from '../../components/Todos';
import * as S from './style';

const TodoList = () => {
	return (
		<S.Wrapper>
			<S.Container>
				<h1>나만의 투두리스트</h1>
				<AddTodo />
				<Todos />
			</S.Container>
		</S.Wrapper>
	);
};

export default TodoList;
