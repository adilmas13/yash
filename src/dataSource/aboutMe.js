import {getAge} from "../service/calculationService";

export const details = {
    name: 'yash',
    age: getAge("12/22/1991"),
    designation: 'associate creative director',
    contact: '+91-8080606226',
    email: 'yash.ambre92@gmail.com',
    gender: 'male',
    description: [
        'Passionate, ambitious and artistic',
        'towards work and life equally.',
        'A rare combination of positive and',
        'creative blood, living up to its name.'
    ]
};

export const experience = [
    {text1: 'ddb mudra', text2: '1.7 YEARS', text3: 'senior art director'},
    {text1: 'leo burnett', text2: '3.8 YEARS', text3: 'art director'},
    {text1: 'witty arts', text2: '2.0 YEARS', text3: 'graphic designer'},
    {text1: 'percept art', text2: '1.0 YEARS', text3: 'freelance designer'}
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
