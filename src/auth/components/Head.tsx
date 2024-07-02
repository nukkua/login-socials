import { useNavigate } from "react-router-dom";

interface props {
	title: string;
}
export const Head = ({ title }: props) => {

	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1);
	}

	return (
		<div className="flex flex-col w-full h-full gap-20">

			<button onClick={handleBack}>
				<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="m8 6l-6 6l6 6" /></svg>

			</button>
			<h1 className="text-5xl font-bold">{title}</h1>
		</div>

	)
}
