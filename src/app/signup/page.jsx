"use client";

import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField
} from "@heroui/react";

import { useRouter } from "next/navigation";
import React from "react";

const SignUpPage = () => {
  const router = useRouter();

  const onsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    // ✅ Password match check
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    if (data) {
      router.push("/");
    }

    if (error) {
      alert("Couldn't create account: " + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="mx-auto my-7">
      <div className="text-center my-3">
        <h2 className="text-2xl font-bold">Register</h2>
      </div>

      <Card className="border-2 border-gray-100 p-5">
        <Form onSubmit={onsubmit} className="flex w-96 flex-col gap-4">

          {/* Name */}
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          {/* Image */}
          <TextField name="image" type="url">
            <Label>Image URL</Label>
            <Input placeholder="Enter your image URL" />
            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          {/* Confirm Password */}
          <TextField isRequired name="confirmPassword" type="password">
            <Label>Confirm Password</Label>
            <Input placeholder="Re-enter your password" />
            <FieldError />
          </TextField>

          {/* Submit */}
          <div className="flex justify-center gap-2">
            <Button className="w-full rounded-none" type="submit">
              Create Account
            </Button>
          </div>
        </Form>

        <div className="text-center my-3">Or Continue With</div>

        <div>
          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            className="w-full rounded-none"
          >
            <FcGoogle /> Sign in with Google
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;