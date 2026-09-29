import { Component } from '@angular/core';

interface Skill {
  img: string;
  course: string;
}

interface SkillGroup {
  title: string;
  description: string;
  iconPath: string;
  skills: Skill[];
}

const SKILL = {
  html: { img: 'assets/images/html.png', course: 'HTML' },
  css: { img: 'assets/images/css.png', course: 'CSS' },
  js: { img: 'assets/images/js.png', course: 'JavaScript' },
  ts: { img: 'assets/images/ts.png', course: 'TypeScript' },
  angular: { img: 'assets/images/ng.png', course: 'Angular' },
  react: { img: 'assets/images/react.png', course: 'React.js' },
  bootstrap: { img: 'assets/images/boot.png', course: 'Bootstrap' },
  mui: { img: 'assets/images/mui.png', course: 'Material UI' },
  tailwind: { img: 'assets/images/tail.png', course: 'Tailwind CSS' },
  node: { img: 'assets/images/node.png', course: 'Node.js' },
  express: { img: 'assets/images/express.png', course: 'Express.js' },
  mongo: { img: 'assets/images/mongo.png', course: 'MongoDB' },
  mysql: { img: 'assets/images/MySQL.png', course: 'MySQL' },
  postman: { img: 'assets/images/postman.png', course: 'Postman' },
};

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    {
      title: 'Frontend',
      description: 'Languages & frameworks for building rich web apps.',
      iconPath: 'm8 9-3 3 3 3m8-6 3 3-3 3m-2-9-4 12',
      skills: [
        SKILL.angular,
        SKILL.react,
        SKILL.ts,
        SKILL.js,
        SKILL.html,
        SKILL.css,
      ],
    },
    {
      title: 'UI & Styling',
      description: 'Design systems and utility-first styling.',
      iconPath:
        'M9.53 16.12a3 3 0 0 0-5.78 1.13 2.25 2.25 0 0 1-2.4 2.25 4.5 4.5 0 0 0 8.4-2.25c0-.4-.08-.78-.22-1.13Zm0 0a15.998 15.998 0 0 0 3.39-1.62m-5.04-.03a15.994 15.994 0 0 1 1.62-3.39m3.42 3.42a15.995 15.995 0 0 0 4.76-4.65l3.88-5.81a1.15 1.15 0 0 0-1.6-1.6l-5.81 3.88a15.996 15.996 0 0 0-4.65 4.76m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42',
      skills: [SKILL.tailwind, SKILL.mui, SKILL.bootstrap],
    },
    {
      title: 'Backend & Database',
      description: 'Server-side logic, APIs, and data storage.',
      iconPath:
        'M4 6c0 1.1 3.58 2 8 2s8-.9 8-2-3.58-2-8-2-8 .9-8 2Zm0 0v6c0 1.1 3.58 2 8 2s8-.9 8-2V6M4 12v6c0 1.1 3.58 2 8 2s8-.9 8-2v-6',
      skills: [SKILL.node, SKILL.express, SKILL.mongo, SKILL.mysql],
    },
    {
      title: 'Tools',
      description: 'Everyday tooling for testing and debugging APIs.',
      iconPath:
        'M11.42 15.17 17.25 21A2.65 2.65 0 0 0 21 17.25l-5.88-5.88M11.42 15.17l2.5-3.03c.31-.38.73-.62 1.2-.76.55-.16 1.16-.19 1.74-.14a4.5 4.5 0 0 0 4.49-6.2l-3.28 3.28a3 3 0 0 1-2.25-2.25l3.28-3.28a4.5 4.5 0 0 0-6.2 4.49c.09 1.1-.08 2.31-.93 3.01l-.1.09m-2.54 2.54L4.26 19.5a2.12 2.12 0 0 1-3-3l4.24-4.24m2.54 2.54-2.54-2.54',
      skills: [SKILL.postman],
    },
  ];

  // Every skill once, used for the scrolling logo strip
  allSkills: Skill[] = Object.values(SKILL);

}
