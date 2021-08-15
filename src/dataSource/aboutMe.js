import {getAge} from "../service/calculationService";

export const details = {
    name: 'yash',
    age: getAge("12/22/1991"),
    designation: 'associate creative director',
    contact: '+91-8080606226',
    email: 'yash.ambre92@gmail.com',
    gender: 'male',
    description: [
        'Passionate, ambitious, artistic,',
        'and incredibly focused on life goals.',
        'A rare breed with creativity and',
        'positivity coursing through his veins',
        'and living up to his name.'
    ]
};

export const experience = [
    {text1: 'l&k saatchi', text2: '5.0 MONTHS', text3: 'Associate Creative Director'},
    {text1: 'ddb mudra', text2: '1.7 YEARS', text3: 'Senior Art Director'},
    {text1: 'leo burnett', text2: '3.8 YEARS', text3: 'Art Director'},
    {text1: 'witty arts', text2: '2.0 YEARS', text3: 'Graphic Designer'},
    {text1: 'percept art', text2: '1.0 YEARS', text3: 'Freelance Designer'}
];

export const literacy = [
    {text1: 'applied arts', text2: 'RACHANA SANSAD', text3: 'Diploma'},
    {text1: 'advertising', text2: 'MUMBAI UNIVERSITY', text3: 'BMM Degree'},
    {text1: 'graphics', text2: 'FRAMEBOXX VISUAL EFFECTS'},
    {text1: 'commerce', text2: 'MUMBAI UNIVERSITY', text3: 'Junior Degree'},
    {text1: 'dco', text2: 'A+ COMPUTER INSTITUTE'},
    {text1: 'ssc', text2: 'MAHARASHTRA STATE BOARD'},
    {text1: ''},
];
