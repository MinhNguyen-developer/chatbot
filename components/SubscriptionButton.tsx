"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

type Props = {
  isPro: boolean;
};
const SubscriptionButton: FC<Props> = ({ isPro = false }) => {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      disabled={loading}
      variant={isPro ? "default" : "premium"}
      onClick={handleClick}
    >
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};
export default SubscriptionButton;
