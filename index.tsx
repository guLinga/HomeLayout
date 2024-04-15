import { usePageData } from '@runtime';
import { HomeHero } from './HomeHero';
import { HomeFeature } from './HomeFeature';

export default function HomeLayout() {
  const { frontmatter, evn, githubRepositories } = usePageData();
  return (
    <div>
      <HomeHero
        hero={frontmatter.hero}
        evn={evn}
        githubRepositories={githubRepositories}
      />
      <HomeFeature
        features={frontmatter.features}
        evn={evn}
        githubRepositories={githubRepositories}
      />
    </div>
  );
}
