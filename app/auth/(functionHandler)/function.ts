// File: @/app/auth/(functionHandler)/function.ts

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
      console.log("User registered successfully:", data);
      return { status: true, data };
    } else {
      console.error("Registration error:", data.error);
      return { status: false, error: data.error };
    }
  } catch (error) {
    console.error("Error during registration:", error);
    return { status: false, error: "Đã xảy ra lỗi trong quá trình đăng ký." };
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
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
    console.error("Error checking email uniqueness:", error);
    return { status: false };
  }
};

export const getUserProfile = async (userId: number) => {
  try {
    const response = await fetch(`/api/user/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      return { status: true, data };
    } else {
      return { status: false, error: data.error };
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return {
      status: false,
      error: "Đã xảy ra lỗi khi truy xuất thông tin người dùng.",
    };
  }
};

export const updateUserProfile = async (userId: number, userData: any) => {
  try {
    const response = await fetch(`/api/user/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (response.ok) {
      return { status: true, data };
    } else {
      return { status: false, error: data.error };
    }
  } catch (error) {
    console.error("Error updating user profile:", error);
    return {
      status: false,
      error: "Đã xảy ra lỗi khi cập nhật thông tin người dùng.",
    };
  }
};
