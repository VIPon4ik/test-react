import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue = "") => {
    const [state, setState] = useState(() => {
        return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState];
};

export default function SignupForm() {
    const [email, setEmail] = useLocalStorage("email");
    const [password, setPassword] = useLocalStorage("password");

    const handleChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
            default:
                break;
        }
    };

    return (
        <form autoComplete="off">
            <label>
                <span>Пошта</span>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
            </label>

            <label>
                <span>Пароль</span>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </label>

            <button type="submit">Submit</button>
        </form>
    );
}
