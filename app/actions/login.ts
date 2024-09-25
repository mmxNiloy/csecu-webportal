"use server";

import { cookies } from "next/headers";

export async function login(formData: FormData) {
  // Get the student id and password from the query parameters
  const { student_id, teacher_id, email, password } = {
    student_id: Number.parseInt(
      (formData.get("student_id") as string | undefined) ?? "0"
    ),
    teacher_id: Number.parseInt(
      (formData.get("teacher_id") as string | undefined) ?? "0"
    ),
    email: formData.get("email") as string | undefined,
    password: formData.get("password") as string | undefined,
  };

  var endpoint = "";
  if (student_id) {
    // login as a student
    endpoint = "student";
  } else if (teacher_id) {
    // login as a teacher
    endpoint = "teacher";
  } else if (email) {
    // login as a staff
    endpoint = "";
  } else {
    // Unauthorized
    return false;
  }

  try {
    const apiRes = await fetch(`${process.env.API_BASE}/login/${endpoint}`, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        student_id,
        teacher_id,
        email,
        password,
      }),
    });

    if (apiRes.ok) {
      const data = (await apiRes.json()) as { session_id: string };

      console.log("Action > Login > Login successful >", data);

      cookies().set(process.env.USER_COOKIE_KEY!, data.session_id, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        expires: Date.now() + 604800000, // Expire next week
      });

      return true;
    } else {
      console.error("Action > Login > Login Failed >", await apiRes.json());
      return false;
    }
  } catch (err) {
    console.error("Action > Login > Login failed >", err);
    return false;
  }
}
