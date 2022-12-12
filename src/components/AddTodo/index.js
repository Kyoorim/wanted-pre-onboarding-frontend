import * as S from './style';
import { useState } from 'react';
import Button from '../Layout/Button';

const AddTodo = ({ onAddTodo }) => {
	const [todo, setTodo] = useState('');

	const onChange = (event) => {
		setTodo(event.target.value);
	};

	const submitHandler = async (event) => {
		event.preventDefault();
		const todoForm = {
			todo,
			isCompleted: false,
		};

		onAddTodo(todoForm);
		setTodo('');
	};

	return (
		<S.Form onSubmit={submitHandler}>
			<S.Input
				type="text"
				placeholder="오늘의 할 일을 입력하세요"
				onChange={onChange}
			/>
			<Button type="submit">제출</Button>
		</S.Form>
	);
};

export default AddTodo;
