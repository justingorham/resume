import { ResumeSchema } from "../schema";

type Work = ResumeSchema['work'][number];

export const CenterEdge: Work = {
    name: 'CenterEdge Software',
    location: 'Roxboro, NC',
    position: 'Senior Software Engineer',
    url: 'https://centeredgesoftware.com/',
    startDate: '2018-10-22',
    highlights: []
}

export const Itron: Work = {
    name: 'Itron',
    position: 'Senior Software Engineer',
    url: 'https://itron.com',
    startDate: '2015-05-18',
    endDate: '2018-10-18',
    highlights: []
}

export const CafePressCircleGraphics: Work = {
    name: 'CafePress/CircleGraphics',
    position: '.NET Developer', 
    url: 'https://www.circlegraphicsonline.com/',
    startDate: "2013-09-03",
    endDate: "2015-05-08"
}