interface props {
	message: string;
}
export const ErrorMessage = ({ message }: props) => {
	return (
		<div className="py-3 px-5 bg-red-100 border-red-200 border-2">
			<p className="">Error: {message}</p>

		</div>
	)
}
