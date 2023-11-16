import { useUser } from "../userContext";

export const UserMenu = () => {
    const { isLoggedIn, username, logIn, logOut } = useUser();

    return (
        <div>
            {isLoggedIn && <p>{username}</p>}
            {isLoggedIn ? (
                <button type="button" onClick={logOut}>
                    LogOut
                </button>
            ) : (
                <button type="button" onClick={logIn}>
                    LogIn
                </button>
            )}
        </div>
    );
};
