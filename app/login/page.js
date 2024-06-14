"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, resetPassword, confirmResetPassword } from "aws-amplify/auth";
import "@/amplify-config";

export default function Login() {
    const router = useRouter();
    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    // Handle form submission with additional validations
    const handleLogin = async (event) => {
        event.preventDefault();

        // Check for empty fields
        if (!username.trim() || !password.trim()) {
            setError("Please fill out all fields.");
            return;
        }

        // Username validation: for example, check length
        if (username.length < 4) {
            setError("Wrong Username or password ");
            return;
        }

        // Password validation: minimum length and at least one number
        if (
            password.length < 8 ||
            !/\d/.test(password) ||
            !/[a-zA-Z]/.test(password)
        ) {
            setError(
                "Wrong Username or password "
            );
            return;
        }
        try {
            const signInResponse = await signIn({ username, password });
            console.log("signInResponse: ", signInResponse);
            if (
                !signInResponse.isSignedIn &&
                signInResponse?.nextStep.signInStep === "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED"
            ) {
                router.push('/home')
                // setResetNeeded(true);
            }
            else {
                console.log("User signed in", signInResponse);
            }
        } catch (error) {
            // console.log("Error signing in", error);
            setError(error.message);
            //   setShowError(true);
            // Assume login success and clear the state
        }
    }

    return (
        <div className="usa-section  " style={{ margin: "0px 0px 0px 15px" }}>
            <form className="usa-form width-desktop" onSubmit={handleLogin}>
                <fieldset className="usa-fieldset">
                    <h2>
                        Login
                    </h2>
                    {error && (
                        <div className="usa-alert usa-alert--error" role="alert">
                            <div className="usa-alert__body">
                                <h3 className="usa-alert__heading">Error</h3>
                                <p className="usa-alert__text">{error}</p>
                            </div>
                        </div>
                    )}
                    <label className="usa-label" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="usa-input"
                        id="username"
                        name="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label className="usa-label" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="usa-input"
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="usa-button" type="submit">
                        Login
                    </button>
                </fieldset>
            </form>
        </div>
    );
}
