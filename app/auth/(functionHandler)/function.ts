import { TestCase } from "../../../constants/data";
export const registerUser = async (userData: any) => {
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (response.ok) {
      console.log("User created:", data);
    } else {
      console.error("Error:", data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await fetch("/api/getUsers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data);
    } else {
      console.error("Error:", data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      return { status: true, data };
    } else {
      return { status: false };
    }
  } catch (error) {
    console.error("Error logging in:", error);
    return { status: false };
  }
};
export const callTest = async (item: any) => {
  const response = await fetch("/api/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  const data = await response.json();
  if (response.ok) {
    return {
      status: "PASSED",
      data,
    };
  } else {
    return {
      status: "FAILED",
      data,
    };
  }
};

export const checkUniqueEmail = async (email: string) => {
  try {
    const response = await fetch(`/api/login?email=${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Lỗi khi gọi API kiểm tra email:", error);
    return null;
  }
};
