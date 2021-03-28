import { ResumeSchema } from "../schema";

type Work = ResumeSchema['work'][number];

export const CenterEdge: Work = {
    name: 'CenterEdge Software',
    company: 'CenterEdge Software',
    location: 'Roxboro, NC',
    position: 'Senior Software Engineer',
    url: 'https://centeredgesoftware.com/',
    startDate: '2018-10-22',
    highlights: [
        "Expanded customer facing waiver kiosk application to include self-service functionality by implementing a reactive-state application architecture",
        "As team lead, implemented cloud based membership management system that integrates with on-premise POS application as well as e-commerce web stores",
        // "implemented custom ddl parser print receipt tickets; maintain backwards compatibility"
    ]
}

export const Itron: Work = {
    name: 'Itron',
    company: 'Itron',
    position: 'Senior Software Engineer',
    url: 'https://itron.com',
    startDate: '2015-05-18',
    endDate: '2018-10-18',
    highlights: [
        "Implemented meter configuration sub-application in headend application by creating a widget based system that is dynamically configruable by a custom XML based data definition language",
        "Implemented custom SVG-based meter rate-schedule control using D3.js"
    ]
}

export const CafePressCircleGraphics: Work = {
    name: 'CafePress/CircleGraphics',
    company: 'CafePress/CircleGraphics',
    position: '.NET Developer',
    url: 'https://www.circlegraphicsonline.com/',
    startDate: "2013-09-03",
    endDate: "2015-05-08",
    highlights: [
        "Increased customer conversion rate by implementing mobile-only single page application"
    ]
}