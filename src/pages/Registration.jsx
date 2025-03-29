import React from "react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Eye, EyeOff } from "lucide-react";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowpassword] = useState(false);
  const [showPassword1, setShowpassword1] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-fit bg-gradient-to from-primary-100 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter">
              Register new account
            </h1>
            <p className="text-gray-500">
              Enter your credentials to create a new account
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                value={name}
                placeholder="John Doe"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Email">Email</Label>
              <Input
                type="email"
                placeholder="john.doe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Password">Password</Label>
              <div className="relative">
                <Input
                  {...(showPassword ? { type: "text" } : { type: "password" })}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="********"
                />
                <button
                  type="button"
                  onClick={() => setShowpassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="w-6 h-6" />
                  ) : (
                    <Eye className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="Password">Confirm password</Label>
              <div className="relative">
                <Input
                  type={showPassword1 ? "text" : "password"}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  placeholder="********"
                />
                <button
                  type="button"
                  onClick={() => setShowpassword1(!showPassword1)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword1 ? (
                    <EyeOff className="w-6 h-6" />
                  ) : (
                    <Eye className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
            <Button className="w-full" type="submit">
              Register
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <Github className="w-6 h-6" />
              Github
            </Button>
            <Button variant="outline" className="w-full">
              <Mail className="w-6 h-6" />
              Google
            </Button>
          </div>
          <div className="text-center">
            Already have an account?{" "}
            <Link
              className="text-primary-500 hover:text-primary-600 p-2"
              to="/"
            >
              Login
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Registration;
