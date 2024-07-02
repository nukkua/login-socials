import { FormEvent, useContext, useState } from "react";
import { useForm } from "../hooks/useForm";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "./ErrorMessage";

export const SignInForm = () => {
	const context = useContext(AuthContext);
	const navigate = useNavigate();

	const [error, setError] = useState<string | null>(null)


	const { email, password, handleChange } = useForm({
		email: '',
		password: '',
	});

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (email.trim() === "" || password?.trim() === "") {
			return;
		}
		try {
			await context?.signin({
				email,
				password
			})
			localStorage.setItem("user", JSON.stringify({ email }));
			navigate('/profile')

		} catch (e) {
			console.error(e);
			switch (e.code) {
				case 'auth/invalid-credential':
					setError("Credenciales invalidas");
					break;
			}
		}
	}


	return (

		<form className="flex flex-col w-full h-full gap-4" onSubmit={handleSubmit}>
			{
				error && <ErrorMessage message={error} />
			}
			<input className="input" type="email" placeholder="Your Email" onChange={handleChange} name="email" value={email} />
			<input className="input" type="password" placeholder="Password" onChange={handleChange} name="password" value={password} />

			<div className="flex justify-between items-center">
				<h2 className="text-3xl font-bold">Sign In</h2>
				<button
					type="submit"
					className="flex items-center justify-center w-[64px] h-[64px] bg-purple-500 rounded-full">
					<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M10.159 10.72a.75.75 0 1 0 1.06 1.06l3.25-3.25L15 8l-.53-.53l-3.25-3.25a.75.75 0 0 0-1.061 1.06l1.97 1.97H1.75a.75.75 0 1 0 0 1.5h10.379z" clipRule="evenodd" /></svg>

				</button>
			</div>
		</form>
	)
}
