import React from 'react';
import type { IconType } from 'react-icons';
import { FaAws, FaCss3Alt, FaWindows } from 'react-icons/fa';
import { GrOracle } from 'react-icons/gr';
import {
  SiClaude,
  SiApple,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiBitbucket,
  SiCanva,
  SiGimp,
  SiJavascript,
  SiKubernetes,
  SiLaravel,
  SiLinux,
  SiNextdotjs,
  SiOpenai,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiUbuntu,
  SiVirtualbox,
  SiVmware,
} from 'react-icons/si';
import {
  TbBrandAdobePhotoshop,
  TbBrandAdobePremier,
  TbCloud,
  TbGitBranch,
  TbRobot,
  TbServer,
  TbWand,
  TbSettingsAutomation,
  TbShieldLock,
} from 'react-icons/tb';

const SKILL_GROUPS: {
  title: string;
  skills: { label: string; Icon: IconType; color: string }[];
}[] = [
    {
      title: 'Languages',
      skills: [
        { label: 'PHP', Icon: SiPhp, color: 'text-nord15' },
        { label: 'Python', Icon: SiPython, color: 'text-nord8' },
        { label: 'JavaScript', Icon: SiJavascript, color: 'text-nord13' },
        { label: 'CSS', Icon: FaCss3Alt, color: 'text-nord10' },
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        { label: 'React', Icon: SiReact, color: 'text-nord8' },
        { label: 'Laravel', Icon: SiLaravel, color: 'text-nord11' },
        { label: 'Tailwind', Icon: SiTailwindcss, color: 'text-nord7' },
        { label: 'Next.js', Icon: SiNextdotjs, color: 'text-nord6' },
      ],
    },
    {
      title: 'Operating Systems',
      skills: [
        { label: 'Linux', Icon: SiLinux, color: 'text-nord13' },
        { label: 'Ubuntu', Icon: SiUbuntu, color: 'text-nord12' },
        { label: 'Windows', Icon: FaWindows, color: 'text-nord8' },
        { label: 'macOS', Icon: SiApple, color: 'text-nord6' },
      ],
    },
    {
      title: 'Creative Tools',
      skills: [
        { label: 'Photoshop', Icon: TbBrandAdobePhotoshop, color: 'text-nord8' },
        { label: 'Premiere', Icon: TbBrandAdobePremier, color: 'text-nord15' },
        { label: 'GIMP', Icon: SiGimp, color: 'text-nord13' },
        { label: 'Canva', Icon: SiCanva, color: 'text-nord9' },
      ],
    },
    {
      title: 'Infrastructure',
      skills: [
        { label: 'Docker', Icon: SiDocker, color: 'text-nord8' },
        { label: 'Kubernetes', Icon: SiKubernetes, color: 'text-nord9' },
        { label: 'VMware', Icon: SiVmware, color: 'text-nord10' },
        { label: 'VirtualBox', Icon: SiVirtualbox, color: 'text-nord8' },
      ],
    },
    {
      title: 'Engineering Practices',
      skills: [
        { label: 'DevOps', Icon: TbSettingsAutomation, color: 'text-nord14' },
        { label: 'Security', Icon: TbShieldLock, color: 'text-nord11' },
        { label: 'CI/CD', Icon: SiGithubactions, color: 'text-nord9' },
        { label: 'Cloud', Icon: TbCloud, color: 'text-nord8' },
      ],
    },
    {
      title: 'Version Control',
      skills: [
        { label: 'Git', Icon: SiGit, color: 'text-nord12' },
        { label: 'GitHub', Icon: SiGithub, color: 'text-nord6' },
        { label: 'GitLab', Icon: SiGitlab, color: 'text-nord12' },
        { label: 'Bitbucket', Icon: SiBitbucket, color: 'text-nord9' },
      ],
    },
    {
      title: 'Cloud & Hosting',
      skills: [
        { label: 'AWS', Icon: FaAws, color: 'text-nord13' },
        { label: 'OCI', Icon: GrOracle, color: 'text-nord11' },
        { label: 'Selfhosted', Icon: TbServer, color: 'text-nord14' },
        { label: 'GitOps', Icon: TbGitBranch, color: 'text-nord9' },
      ],
    },
    {
      title: 'AI',
      skills: [
        { label: 'Claude', Icon: SiClaude, color: 'text-nord12' },
        { label: 'Codex', Icon: SiOpenai, color: 'text-nord6' },
        { label: 'Midjourney', Icon: TbWand, color: 'text-nord9' },
        { label: 'OpenClaw', Icon: TbRobot, color: 'text-am-teal' },
      ],
    },
  ];

const SkillsSection: React.FC = () => {
  return (
    <section className="bg-nord1 border-y border-nord3/20 py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-mono text-5xl md:text-7xl tracking-tighter text-nord6">
            <code className="section-heading-code">
              <span className="opacity-70 font-light">man</span> <b>skills</b>
            </code>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-32 gap-y-6 sm:grid-cols-2 xl:grid-cols-3 skills-group">
          {SKILL_GROUPS.map(({ title, skills }) => (
            <div key={title} className="py-6 skill-group">
              <h4 className="mb-4 pb-3 border-b border-nord3/30 text-[11px] font-black uppercase tracking-[0.32em] text-nord4/75">
                {title}
              </h4>
              <div className="grid grid-cols-1 gap-1">
                {skills.map(({ label, Icon, color }) => (
                  <div key={label} className="group flex items-center gap-3 rounded-sm py-1 text-left">
                    <Icon aria-hidden="true" className={`h-5 w-5 shrink-0 ${color} opacity-80 transition-opacity group-hover:opacity-100`} />
                    <span className="min-w-0 truncate font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-nord4/75">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
