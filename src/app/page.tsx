import Navbar from "@/components/Globals/Navbar";
import Homepage from "@/features/Home/Homepage";
import ExperiencePage from "@/features/Experience/ExperiencePage";
import SkillsPage from "@/features/Skills/SkillsPage";
import QualificationPage from "@/features/Qualification/QualificationPage";
import ProjectsPage from "@/features/Projects/ProjectsPage";
import ContactIcon from "@/features/Contact/ContactIcon";

export default function Home() {
  return (
    <div className="mx-auto">
      <Homepage />
      <SkillsPage />
      <ExperiencePage />
      {/* <ProjectsPage /> */}
      <QualificationPage />
    </div>
  );
}
