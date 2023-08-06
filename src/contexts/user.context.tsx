// @ts-nocheck // todo: remove this line when TS error is fixed
import { createContext, useState, useEffect } from "react";
import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils'

// Create a context for the user
export const UserContext = createContext({
	setCurrentUser: () => null,
	currentUser: null,
});

// Create a provider for the user context
export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	// Listen for changes in the user's authentication state
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	// Provide the user context to the children
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};