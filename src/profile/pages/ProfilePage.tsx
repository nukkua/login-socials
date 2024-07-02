import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

export const ProfilePage = () => {
	const context = useContext(AuthContext);

	const handleClick = async () => {
		try {
			await context?.signout();
			localStorage.removeItem("user");

		} catch (e) {
			console.error(e)
		}

	}
	return (
		<div className="flex flex-col w-full min-h-screen p-8 gap-12">
			<h1 className="text-5xl font-bold">Hello Welcome Back!</h1>
			<p className="text-lg font-semibold text-gray-600"> {context?.user?.email ? context?.user?.email : context?.user?.name}</p>
			<button onClick={handleClick} className="bg-black text-white rounded-lg py-2 mt-auto">Log Out</button>
		</div>
	)
}


