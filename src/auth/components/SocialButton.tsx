interface props {
	name: string;
	icon: JSX.Element | JSX.Element[];
	handleSocial: () => void;
}
export const SocialButton = ({ name, icon, handleSocial }: props) => {
	return (

		<div className="flex flex-col gap-2">
			<button className="social" onClick={handleSocial}>
				{icon}
				<p>Continue with {name}</p>
			</button>
		</div>
	)
}
