import { createContext, useContext, useState, useEffect } from "react";
import firebase from "../firebase/firebase";

const authContext = createContext(null);

function AuthProvider({ children }) {
    const [userData, setUser] = useState(null);

    const signin = async (provider) => {
        const res = await firebase.auth().signInWithPopup(provider);
        setUser(res)
        return res;

    }

    useEffect(() => {
        if (userData) {
            firebase
                .firestore()
                .collection("users")
                .add({
                    username: userData.additionalUserInfo.username,
                    email: userData.user.email,
                    displayName: userData.user.displayName,
                    avatar: userData.additionalUserInfo.profile.avatar_url,
                    blog: userData.additionalUserInfo.profile.blog,
                    twitter: userData.additionalUserInfo.profile.twitter_username,
                    bio: userData.additionalUserInfo.profile.bio,
                }).catch((err) => console.log(err))
        }
    }, [userData]);

    return (
        <authContext.Provider value={{ userData, signin }}>
            {children}
        </authContext.Provider>
    );
}

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };


