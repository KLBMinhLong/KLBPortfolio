import { socialIconPaths, type SocialId } from '../../data/socials';

export function SocialIcon({ id }: { id: SocialId }) {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={socialIconPaths[id]} fill="currentColor" />
    </svg>
  );
}
