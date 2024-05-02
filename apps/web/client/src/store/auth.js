import { create } from "zustand";
import { BASE_URL, ROLES } from "../constants";
import { toast } from "sonner";
import { useEducatorStore } from "./educator";

export const useAuthStore = create((set) => ({
  auth: localStorage.getItem("token") ? true : false,
  token: localStorage.getItem("token"),
  role: localStorage.getItem("role") || "student",
  user: localStorage.getItem("user") || null,
  login: async (data, role) => {
    try {
      const response = await fetch(BASE_URL + `/login/${role}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      console.log(res);
      if (response.ok) {
        set({ auth: true, token: res.token, role });
        localStorage.setItem("token", res.token);
        localStorage.setItem("role", res.role?.toLowerCase());
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later");
    }
  },
  SignUp: async (data, role) => {
    try {
      const r = await fetch(BASE_URL + `/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (r.ok) {
        const res = await r.json();
        // Creating Student / Educator using his/her user.id
        set({ auth: true, token: res.token, role });
        localStorage.setItem("token", res.token);
        localStorage.setItem("role", res.role?.toLowerCase());

        try {
          const response = await fetch(BASE_URL + `/api/${data.role}s`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${await localStorage.getItem("token")}`,
            },
            body: JSON.stringify(data),
          });

          //console.log("--------------",res);

          if (response.ok) {
            const data = await response.json();
            toast.error("You have successfully registered with Deversity.");
            if (role === "student") {
              localStorage.setItem("user", JSON.stringify(data.student));
            } else if (role === "educator") {
              localStorage.setItem("user", JSON.stringify(data.educator));
            } else {
              localStorage.setItem("user", JSON.stringify(data.admin));
            }
          } else {
            console.log(r, response);
            toast.error("hello", r, response);

            return;
          }
        } catch (error) {
          console.error("Error:", error.message);
          toast.error("Opps ! Something went wrong. Sign Up Again");
        }
      } else {
        toast.error(r);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later");
    }
  },
  logout: () => {
    set({ auth: false, token: null });
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  },
}));
