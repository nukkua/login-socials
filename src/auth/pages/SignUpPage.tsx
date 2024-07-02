import { Head, LinkTo, SignUpForm, TitleNextButton } from "../components"



export const SignUpPage = () => {

	return (
		<div className="flex flex-col w-full min-h-screen px-9 py-7 gap-12">
			<Head title="Create Account" />
			<SignUpForm />
			<LinkTo name="Sign In" to="/login/signin" mlauto={true} />

		</div>
	)
}
