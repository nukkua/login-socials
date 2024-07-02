import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

interface props {
	children: JSX.Element | JSX.Element[];
}
export const PublicRoutes = ({ children }: props) => {
	const context = useContext(AuthContext);
	if (context?.user) return <Navigate to="/profile" />
	return (
		<>
			{children}
		</>

	)
}
