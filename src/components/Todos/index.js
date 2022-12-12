import { useState } from 'react';
import * as S from './style';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdCancelPresentation } from 'react-icons/md';

const Todos = ({ todo, onEditTodo, onDeleteTodo }) => {
	const [editing, setEditing] = useState(false);
	const [newTodo, setNewTodo] = useState(todo.todo);
	const [check, setCheck] = useState(todo.isCompleted);

	const toggleEditing = () => {
		setEditing((prev) => !prev);
	};

	const editHandler = async (event) => {
		event.preventDefault();
		const updateForm = {
			todo: newTodo,
			isCompleted: check,
		};
		onEditTodo(updateForm, todo.id);
		setEditing(false);
	};

	const onChange = (event) => {
		setNewTodo(event.target.value);
	};

	const quitEditHandler = () => {
		setEditing(false);
	};

	const checkHandler = () => {
		setCheck(!check);
	};

	return (
		<>
			{editing ? (
				<S.Form onSubmit={editHandler}>
					<input value={newTodo} type="text" onChange={onChange}></input>
					<div>
						<button type="submit">
							<FiEdit />
						</button>
						<button type="submit" onClick={quitEditHandler}>
							<MdCancelPresentation />
						</button>
					</div>
				</S.Form>
			) : (
				<S.Todo>
					<input
						id={todo.id}
						type="checkbox"
						defaultChecked={todo.isCompleted}
						onChange={checkHandler}
					></input>
					<span>{todo.todo}</span>
					<div>
						<FiEdit type="button" onClick={toggleEditing} />
						<RiDeleteBin6Line
							type="button"
							onClick={() => onDeleteTodo(todo.id)}
						/>
					</div>
				</S.Todo>
			)}
		</>
	);
};

export default Todos;
