import { User } from "../interfaces/user";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, UserCredential, signInWithRedirect, onAuthStateChanged, getRedirectResult } from "firebase/auth";
import { auth, githubProvider, googleProvider, twitterProvider } from "../firebase/firebase";

interface AuthContextType {
	user: User | undefined | null;
	setUser: Dispatch<SetStateAction<User | undefined | null>>;
	signin: (u: User) => Promise<UserCredential>;
	signup: (u: User) => Promise<UserCredential>;
	loginGoogle: () => Promise<UserCredential>;
	loginGithub: () => Promise<UserCredential>;
	loginX: () => Promise<UserCredential>;
	signout: () => Promise<void>;
	forgotPassword: (e: string) => Promise<void>;


}
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface props {
	children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: props) => {
	const userCache: User = JSON.parse(localStorage.getItem("user"));
	const [user, setUser] = useState<User | undefined | null>(userCache ?
		userCache : undefined);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		})
		return () => unsubscribe();
	}, [])

	const signin = ({ email, password }: User) => {
		return signInWithEmailAndPassword(auth, email, password);
	}
	const signup = ({ email, password }: User) => {

		return createUserWithEmailAndPassword(auth, email, password);

	}
	const signout = () => {
		return signOut(auth);
	}

	const forgotPassword = (email: string) => {
		return sendPasswordResetEmail(auth, email);
	}
	const loginGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	}

	const loginGithub = () => {
		return signInWithPopup(auth, githubProvider);
	}
	const loginX = () => {
		return signInWithPopup(auth, twitterProvider);
	}

	return (
		<AuthContext.Provider value={{
			user,
			setUser,
			signin,
			signup,
			loginGoogle,
			loginGithub,
			loginX,
			signout,
			forgotPassword,
		}}>
			{children}

		</AuthContext.Provider>

	)
}
