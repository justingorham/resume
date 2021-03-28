import { ResumeSchema } from "../schema";
import { basics } from './basics';
import { bachelorAppliedMath, bachelorCompSci, masterCompSci } from './education';
import { Angular, Containerization, DotNet, Typescript } from './skills';
import { CafePressCircleGraphics, CenterEdge, Itron } from './work';

export const resume: ResumeSchema = {
    basics,
    education: [
        masterCompSci,
        bachelorCompSci,
        bachelorAppliedMath,
    ],
    work: [
        CenterEdge,
        Itron,
        CafePressCircleGraphics
    ],
    skills: [
        Angular,
        Typescript,
        DotNet,
        Containerization
    ]
};