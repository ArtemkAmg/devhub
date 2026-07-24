import Hero from "@/components/dashboard/Hero";
import QuickStats from "@/components/dashboard/QuickStats";
import FeaturedProject from "@/components/dashboard/FeaturedProject";
import TechStack from "@/components/dashboard/TechStack";
import LatestProjects from "@/components/dashboard/LatestProjects";

export default function DashboardPage() {
  return (
    <div className="dashboard">

      <Hero />

      <QuickStats />

      <FeaturedProject />

      <TechStack />

      <LatestProjects />

    </div>
  );
}