import { ChangeEvent, useState } from "react";
import { User } from "../../interfaces/user";

export const useForm = (initialState: User) => {

	const [state, setState] = useState<User>(initialState);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { target } = e;
		const { name, value } = target;

		setState({
			...state,
			[name]: value,
		})



	}

	return {
		...state,
		handleChange,
	}
}
