// Example 1:
// In this example, there's no concept of user registration. The app allows users to log 
// in with a predefined "user" and "password" combination. The handleRegister function does nothing, 
// and there's no option for users to create their accounts. The flow is essentially:

// Enter "user" and "password".
// Click the "Login" button to log in.
// Upon successful login, display the welcome section.


//Example 1


// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [userRegistered, setUserRegistered] = useState(false);

//   const handleRegister = () => {
//     // Here you would typically send the registration data to a server
//     // For this example, we'll just set the state to simulate registration
//     setUserRegistered(true);
//   };

//   const handleLogin = () => {
//     // Here you would typically validate login credentials on the server
//     // For this example, we'll just check the username and password
//     if (username === "user" && password === "password") {
//       setIsAuthenticated(true);
//     }
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUsername("");
//     setPassword("");
//   };

//   return (
//     <div className="App">
//       <h1>User Authentication App</h1>
//       {!isAuthenticated ? (
//         <div>
//           {!userRegistered ? (
//             <div>
//               <h2>Register</h2>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button onClick={handleRegister}>Register</button>
//             </div>
//           ) : (
//             <div>
//               <h2>Login</h2>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button onClick={handleLogin}>Login</button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div>
//           <h2>Welcome, {username}!</h2>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;





// //Example 1 Without Commentary

// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [userRegistered, setUserRegistered] = useState(false);

//   const handleRegister = () => {
//     setUserRegistered(true);
//   };

//   const handleLogin = () => {
//     if (username === "user" && password === "password") {
//       setIsAuthenticated(true);
//     }
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUsername("");
//     setPassword("");
//   };

//   return (
//     <div className="App">
//       <h1>User Authentication App</h1>
//       {!isAuthenticated ? (
//         <div>
//           {!userRegistered ? (
//             <div>
//               <h2>Register</h2>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button onClick={handleRegister}>Register</button>
//             </div>
//           ) : (
//             <div>
//               <h2>Login</h2>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button onClick={handleLogin}>Login</button>
//               <p>
//                 Don't have an account?{" "}
//                 <button onClick={() => setUserRegistered(false)}>Register here</button>
//               </p>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div>
//           <h2>Welcome, {username}!</h2>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;







// Example 2:
// In this example, there is a user registration process where users can create their accounts by 
// providing a username and password. The handleRegister function adds new user information to the users 
// state array. Users can then log in with the registered username and password. 
// The flow is essentially:

// Enter desired username and password.
// Click the "Register" button to create an account.
// After registering, users can switch to the login form by clicking the "Login here" button.
// Enter the registered username and password.
// Click the "Login" button to log in.
// Upon successful login, display the welcome section.




// //Example 2 (Register accounts (without localstorage))


// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [users, setUsers] = useState([]);
//   const [userRegistered, setUserRegistered] = useState(false);

//   const handleRegister = () => {
//     if (username && password) {
//       const newUser = { username, password };
//       setUsers([...users, newUser]);
//       setUserRegistered(true);
//     }
//   };

//   const handleLogin = () => {
//     const user = users.find(user => user.username === username && user.password === password);
//     if (user) {
//       setIsAuthenticated(true);
//     }
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUsername("");
//     setPassword("");
//   };

//   return (
//     <div className="App">
//       <h1>User Authentication App</h1>
//       {!isAuthenticated ? (   // If the user is not authenticated
//         <div>
//           {!userRegistered ? (   // If the user is not registered
//             <div>
//               <h2>Register</h2>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button onClick={handleRegister}>Register</button>
//             </div>
//           ) : (    // If the user is registered
//             <div>
//               <h2>Login</h2>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button onClick={handleLogin}>Login</button>
//               <p>
//                 Already have an account?{" "}
//                 <button onClick={() => setUserRegistered(false)}>Login here</button>
//               </p>
//             </div>
//           )}
//         </div>
//       ) : (    // If the user is authenticated
//         <div>
//           <h2>Welcome, {username}!</h2>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;






// Example 3 (User register Localstorage)



import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userRegistered, setUserRegistered] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    
    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setIsAuthenticated(true);
      setUserRegistered(true); // Set userRegistered to true if there are stored credentials
    }
  }, []);

  const handleRegister = () => {
    if (username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      setIsAuthenticated(true);
      setUserRegistered(true);
    }
  };

  const handleLogin = () => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    
    if (storedUsername === username && storedPassword === password) {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    // localStorage.removeItem("username");
    // localStorage.removeItem("password");
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="App">
      <h1>User Authentication App</h1>
      {!isAuthenticated ? (
        <div>
          {!userRegistered ? (
            <div>
              <h2>Register</h2>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleRegister}>Register</button>
              <p>
                Already have an account?{" "}
                <button onClick={() => setUserRegistered(true)}>Login here</button>
              </p>
            </div>
          ) : (
            <div>
              <h2>Login</h2>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
              <p>
                Don't have an account yet?{" "}
                <button onClick={() => setUserRegistered(false)}>Register here</button>
              </p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;




// In this version, the localStorage is used to store the username and password when a user registers. 
// During login, the stored values are retrieved and compared to the input values. When logging out, 
// the stored values are removed from localStorage.

// Please note that using localStorage for actual user authentication is not secure for production use. 
// It's recommended to use proper authentication mechanisms with backend and strong security practices to 
// handle user credentials.







// Storing user credentials securely is a critical aspect of any authentication system. 
// In a real-world application, you should avoid storing passwords in plain text and instead use proper 
// security practices. Here are some options you can consider:

// Database: Using a database (SQL or NoSQL) is the most common way to store user information securely. 
// Passwords should be hashed using strong cryptographic hashing algorithms (such as bcrypt or Argon2) 
// before storing them in the database. This way, even if the database is compromised, the actual passwords 
// remain secure.

// Authentication Providers: Consider using third-party authentication providers like Google, Facebook, or 
// Auth0. These providers handle user authentication and store user credentials securely on their systems.

// Server-Side Frameworks: If you're using a backend server, frameworks like Express (Node.js) or Django 
// (Python) provide mechanisms for securely storing and managing user credentials.

// Local Storage / Cookies: For simple applications, you can use local storage or cookies to store user 
// tokens, but it's not recommended for storing passwords directly due to security concerns. Instead, you 
// can use tokens or session IDs that are generated and validated on the server.

// JSON Web Tokens (JWT): JWTs are compact, URL-safe means of representing claims between two parties. 
// They are often used for securely transmitting information between the client and the server as a JSON 
// object. While they can store user data, they are not suitable for storing passwords directly.

// Remember, no matter which method you choose, it's important to follow best practices for security:

// Hash and Salt Passwords: Never store plain-text passwords. Use a strong, cryptographic hash function 
// (with salting) to protect user passwords.

// Use Secure Protocols: Ensure communication between the client and the server is encrypted using protocols 
// like HTTPS.

// Implement Two-Factor Authentication (2FA): Adding an extra layer of security through 2FA can significantly 
// enhance user account protection.

// Regular Security Audits: Periodically review your security practices and perform security audits to 
// identify vulnerabilities.

// For a production application, it's recommended to work with experienced developers and possibly security 
// experts to implement a robust and secure authentication system.