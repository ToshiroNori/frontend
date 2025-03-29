import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeOff, Eye, Github, Mail } from "lucide-react";
import { Link } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowpassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to from-primary-100 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter">
              Welcome back
            </h1>
            <p className="text-gray-500">
              Enter your credentials to access your account
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                type="email"
                placeholder="john.doe@gmail.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  {...(showPassword ? { type: "text" } : { type: "password" })}
                  placeholder="********"
                  required
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
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="ml-1">
                  Remember me
                </Label>
              </div>
              <a
                href="#"
                className="text-sm text-primary-500 hover:text-primary-600"
              >
                Forgot password?
              </a>
            </div>
            <Button
              variant="default"
              className="w-full"
              size="lg"
              type="submit"
            >
              Sign in
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
            Don't have an account?
            <Link
              className="text-primary-500 hover:text-primary-600 p-2"
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
