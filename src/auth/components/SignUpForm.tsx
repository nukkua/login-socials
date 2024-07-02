import { FormEvent, useContext, useState } from "react";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { ErrorMessage } from "./ErrorMessage";

export const SignUpForm = () => {
	const navigate = useNavigate();
	const context = useContext(AuthContext);

	const [error, setError] = useState<string | null>(null);

	const { name, email, password, handleChange } = useForm({
		name: '',
		email: '',
		password: '',
	});


	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (name?.trim() === "" || email.trim() === "" || password?.trim() === "") {
			return;
		}
		try {
			const result = await context?.signup({ email, password });
			navigate("/login/signin");

		}
		catch (e) {
			switch (e.code) {
				case 'auth/email-already-in-use':
					setError("Email ya esta utilizado");
					break;
				case 'auth/weak-password':
					setError("Contrasena debil");
					break;
			}
		}
	}

	return (

		<form className="flex flex-col w-full h-full gap-4" onSubmit={handleSubmit}>
			{
				error && <ErrorMessage message={error} />
			}

			<input onChange={handleChange} value={name} name="name" className="input" type="text" placeholder="Name" />
			<input onChange={handleChange} value={email} name="email" className="input" type="email" placeholder="Your Email" />
			<input onChange={handleChange} value={password} name="password" className="input" type="password" placeholder="Password" />
			<div className="flex justify-between items-center">
				<h2 className="text-3xl font-bold">Sign Up</h2>
				<button
					type="submit"
					className="flex items-center justify-center w-[64px] h-[64px] bg-purple-500 rounded-full">
					<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M10.159 10.72a.75.75 0 1 0 1.06 1.06l3.25-3.25L15 8l-.53-.53l-3.25-3.25a.75.75 0 0 0-1.061 1.06l1.97 1.97H1.75a.75.75 0 1 0 0 1.5h10.379z" clipRule="evenodd" /></svg>

				</button>
			</div>
		</form>
	)
}
