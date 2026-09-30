import { Hero } from "@/components/sections/Hero";
import { VideoPlayer } from "@/components/sections/VideoPlayer";
import { ProductThesis } from "@/components/sections/ProductThesis";
import { CoreCapabilities } from "@/components/sections/CoreCapabilities";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PrivacyZones } from "@/components/sections/PrivacyZones";
import { MissionDashboard } from "@/components/sections/MissionDashboard";
import { SkillCompilerDemo } from "@/components/sections/SkillCompilerDemo";
import { AdaptationDemo } from "@/components/sections/AdaptationDemo";
import { ExecutionTimeline } from "@/components/sections/ExecutionTimeline";
import { ForensicsPreview } from "@/components/sections/ForensicsTimeline";
import { ArchitectureOverview } from "@/components/sections/ArchitectureOverview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <VideoPlayer />
      <ProductThesis />
      <CoreCapabilities />
      <HowItWorks />
      <PrivacyZones />
      <MissionDashboard />
      <SkillCompilerDemo />
      <AdaptationDemo />
      <ExecutionTimeline />
      <ForensicsPreview />
      <ArchitectureOverview />
      <FinalCTA />
    </>
  );
}
