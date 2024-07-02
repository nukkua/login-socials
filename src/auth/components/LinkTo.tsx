import { Link } from "react-router-dom";

interface props {
	name: string;
	to: string;
	mlauto: boolean;
}
export const LinkTo = ({ name, to, mlauto }: props) => {
	return (

		<Link className={`font-bold ${mlauto ? 'ml-auto' : ''}`} to={to}>{name}</Link>
	)
}
