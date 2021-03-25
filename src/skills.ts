import { ResumeSchema } from "../schema";

type Skill = ResumeSchema['skills'][number];

enum Proficiency {
    Expert = 'Expert',
    Proficient = 'Proficient',
    Novice = 'Novice'
}

export const Angular: Skill = {
    name: 'Angular',
    level: Proficiency.Expert
}

export const Typescript: Skill = {
    name: 'Typescript/Javascript',
    level: Proficiency.Expert
}

export const Containerization: Skill = {
    name: 'Containerization',
    level: Proficiency.Proficient
}

export const DotNet: Skill = {
    name: '.NET',
    level: Proficiency.Proficient
}