import { useMediaQuery } from "react-responsive";
import MobileProjects from "./MobileProjects"; // Mobile version ka component
import DesktopProjects from "./DesktopProjects"; // Desktop version ka component

const Projects = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return <>{isMobile ? <MobileProjects /> : <DesktopProjects />}</>;
};

export default Projects;