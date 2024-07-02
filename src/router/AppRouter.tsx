import { Route, Routes } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from "./"
import { ForgotPasswordPage, SignInPage, SignUpPage } from "../auth/pages"
import { ProfilePage } from "../profile/pages"

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/login/*" element={
				<PublicRoutes>
					<Routes>
						<Route path="signin" element={<SignInPage />} />
						<Route path="signup" element={<SignUpPage />} />
						<Route path="forgotpassword" element={<ForgotPasswordPage />} />
					</Routes>
				</PublicRoutes>
			} />
			<Route path="/*" element={
				<PrivateRoutes>
					<Routes>
						<Route path="profile" element={<ProfilePage />} />
					</Routes>
				</PrivateRoutes>
			} />
		</Routes>

	)
}
