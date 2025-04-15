import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center h-screen text-center px-4"
    >
      <h1 className="text-5xl font-bold mb-6 text-blue-700">Welcome to CS24</h1>
      <p className="text-lg mb-8 text-gray-600">The smartest place to start your semester</p>
      <div className="flex gap-4">
        <Button onClick={() => navigate("/MainApp")}>Enter App</Button>
        <Button variant="outline" onClick={() => window.open("https://linkedin.com/in/daniel-ziv", "_blank")}>
          Learn About the Creator
        </Button>
      </div>
    </motion.div>
  );
}
