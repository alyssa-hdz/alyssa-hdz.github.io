import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!username || !email || !password) {
            setError("All fields are required");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/user/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password })
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Signup successful:", data);
                navigate("/login"); // Redirect to login page after successful signup
            } else {
                setError(data.message || "Signup failed.");
            }
        } catch (err) {
            console.error("Error:", err);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>

            <div class="input-group">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                   <label for="username">Username</label>
                   </div>
                 <div class="input-group">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                 <label for="Email">Email</label>
                 </div>
                 <div class="input-group">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                 <label for="password">Password</label>
                 </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}