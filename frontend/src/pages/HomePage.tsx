import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-20">
      HomePage
      <Button variant={"round"} className="text-primary font-dm-sans">
        Login
      </Button>
      <Button variant={"primary"} className="font-dm-sans">
        Sign Up
      </Button>
    </div>
  );
};
export default HomePage;
