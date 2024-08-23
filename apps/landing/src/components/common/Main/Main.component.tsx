import { useInView } from 'react-intersection-observer';

import { SnapParent } from '@/components/common';
import {
  ActivitySection,
  CurrentInformationSection,
  IntroSection,
  IntroTypingSection,
  PlatformIntroduceSection,
  ProjectSection,
} from '@/components/main';

const Main = () => {
  const { ref, inView: isInViewActivitySection } = useInView();

  return (
    <main>
      <SnapParent disabled={isInViewActivitySection}>
        <IntroSection />
        <IntroTypingSection />
        <ActivitySection ref={ref} />
        <PlatformIntroduceSection />
        <CurrentInformationSection />
        <ProjectSection />
      </SnapParent>
    </main>
  );
};

export default Main;
