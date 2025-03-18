import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-gray-900">
          Find the Best Freelancers
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Connect with talented freelancers and get your projects done.
        </p>
        <div className="mt-6">
          <SignedOut>
            <SignInButton>
              <Button className="mr-4 px-6 py-2 text-lg">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="p-6 text-center shadow-md">
          <CardContent>
            <h3 className="text-xl font-semibold">Post a Job</h3>
            <p className="text-gray-600 mt-2">
              Describe your project and let freelancers bid.
            </p>
          </CardContent>
        </Card>

        <Card className="p-6 text-center shadow-md">
          <CardContent>
            <h3 className="text-xl font-semibold">Hire with Confidence</h3>
            <p className="text-gray-600 mt-2">
              Review profiles and ratings to pick the best talent.
            </p>
          </CardContent>
        </Card>

        <Card className="p-6 text-center shadow-md">
          <CardContent>
            <h3 className="text-xl font-semibold">Secure Payments</h3>
            <p className="text-gray-600 mt-2">
              Pay safely through our escrow system.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default LandingPage;
