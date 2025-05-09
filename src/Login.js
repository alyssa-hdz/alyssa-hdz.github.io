import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


export default function Login(){
    const [email,setEmail] =useState("");
    const [password,setPassword]= useState ("");
    const [error,setError] =useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Login successful:", data);
                navigate("/categories");
            } else {
                setError(data.message || "Login failed.");
            }
        } catch (err) {
            console.error("Error:", err);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
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
                 <label for="Password">Password</label>
                 </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}



