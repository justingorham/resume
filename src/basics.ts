import { ResumeSchema } from "../schema";

type Basics = ResumeSchema['basics'];

export const basics: Basics = {
    name: 'Justin Gorham',
    email: 'justingorham@gmail.com',
    label: 'Software Engineer',
    url: 'https://justin.gorh.am',
    location: {
        city: 'Raleigh',
        countryCode: 'US',
        region: 'NC'
    },
    profiles: [
        {
            network: 'Github',
            username: 'justingorham',
            url: 'https://github.com/justingorham'
        },
        {
            network: 'Linkedin',
            username: 'justingorham',
            url: 'https://www.linkedin.com/in/justingorham/'
        }
    ],
};
