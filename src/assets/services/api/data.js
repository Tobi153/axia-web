export const loginUser = async (credentials) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { username, email, password } = credentials;

  if (!username || !email || !password) {
    throw new Error("Username, email, and password are required");
  }

  if (
    username === "testuser" &&
    email === "test@example.com" &&
    password === "password123"
  ) {
    return {
      id: 1,
      username: "testuser",
      email: "test@example.com",
      name: "Test User",
    };
  } else {
    throw new Error("Invalid credentials");
  }
};

export const logoutUser = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { message: "Logged out successfully" };
};
