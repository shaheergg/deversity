import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { toast } from "sonner";
import { useState } from "react";
import { validateEmail } from "../../lib/utils";
import { useAuthStore } from "../../store/auth";
import { ROLES } from "../../constants";

function EducatorLogin() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [about, setAbout]=useState("");
    const SignUp = useAuthStore((state) => state.SignUp);
    const submitForm = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address");
            return;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }
        if (name === "" || email === "" || password === "" || about === "") {
            toast.error("Please fill in all fields");
            return;
        }
        SignUp({ name ,email, password ,about , role:"educator"}, ROLES.EDUCATOR);
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen text-secondary">
                <div className="flex items-center justify-center py-4 mt-80">
                    <Logo />
                </div>
                <div className="max-w-4xl px-6 py-4 mx-auto rounded font-grotesk">
                    <div>
                        <h1 className="max-w-lg text-2xl text-center">
                            Sign up to your account to start teaching
                        </h1>
                    </div>
                    <div className="py-4">
                        <form className="space-y-4">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name">Name</label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    className="px-4 py-2 border-2 border-gray-200 rounded outline-none"
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email">E-mail address</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className="px-4 py-2 border-2 border-gray-200 rounded outline-none"
                                    type="email"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="password">Password</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="px-4 py-2 border-2 border-gray-200 rounded outline-none"
                                    type="password"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="about">About</label>
                                <textarea
                                    onChange={(e) => setAbout(e.target.value)}
                                    value={about}
                                    className="px-4 py-2 border-2 border-gray-200 rounded outline-none"
                                    type="text"
                                />
                            </div>
                            <div>
                                <button
                                    onClick={(e) => submitForm(e)}
                                    className="w-full px-4 py-2 rounded hover:bg-primary-hover bg-primary"
                                >
                                    Sign up
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <a href="/" className="font-bold text-premium">
                                        Need help?
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-[40%] px-6 py-6 mt-4 text-center rounded">
                    Already have an Account ?{" "}
                    <Link to="/educator/login" className="font-bold text-premium">
                        click here
                    </Link>{" "}
                    to login to your account.
                </div>
            </div>
        </>
    );
}

export default EducatorLogin;
