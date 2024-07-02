import { FormEvent, useContext, useState } from "react"
import { ErrorMessage, Head } from "../components"
import { AuthContext } from "../../context/AuthProvider";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";

export const ForgotPasswordPage = () => {
	const [error, setError] = useState<null | string>(null);
	const context = useContext(AuthContext);
	const navigate = useNavigate();

	const { email, handleChange } = useForm({
		email: '',
	});


	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await context?.forgotPassword(email);
			navigate("/login/signin");
		} catch (e) {
			switch (e.code) {
				case "auth/missing-email":
					setError("Missing Email");
					break;

			}
		}
	}

	return (
		<div className="flex flex-col w-full min-h-screen px-9 py-7 gap-5">
			<Head title="Forgot Password" />

			<form className="flex flex-col w-full h-full gap-4" onSubmit={handleSubmit}>
				{
					error && <ErrorMessage message={error} />
				}
				<input onChange={handleChange} name="email" value={email} className="input" type="email" placeholder="Your Email" />

				<button
					type="submit"
					className="flex items-center justify-center w-[64px] h-[64px] bg-purple-500 rounded-full">
					<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M10.159 10.72a.75.75 0 1 0 1.06 1.06l3.25-3.25L15 8l-.53-.53l-3.25-3.25a.75.75 0 0 0-1.061 1.06l1.97 1.97H1.75a.75.75 0 1 0 0 1.5h10.379z" clipRule="evenodd" /></svg>

				</button>
			</form >

		</div >
	)
}
