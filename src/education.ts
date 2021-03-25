import { ResumeSchema } from "../schema";

type Education = ResumeSchema['education'][number];

const institution = 'North Carolina State University';
const url = 'https://www.ncsu.edu/';

const underGrad: Education = {
    institution,
    url,
    studyType: 'Bachelor',
    startDate: '2006-08-16',
    endDate: '2010-05-14'
}

export const bachelorCompSci: Education = {
    ...underGrad,
    area: 'Computer Science',
}

export const bachelorAppliedMath: Education = {
    ...underGrad,
    area: 'Applied Mathematics'
}

export const masterCompSci: Education = {
    institution,
    url,
    studyType: 'Master',
    startDate: '2010-08-18',
    endDate: '2012-08-10'
}