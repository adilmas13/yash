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
    {place: 'ddb mudra', experience: '1.7 YEARS', designation: 'senior art director'},
    {place: 'leo burnett', experience: '3.8 YEARS', designation: 'art director'},
    {place: 'witty arts', experience: '2.0 YEARS', designation: 'graphic designer'},
    {place: 'percept art', experience: '1.0 YEARS', designation: 'freelance designer'}
];

export const literacy = [
    {field: 'applied arts', place: 'RACHANA SANSAD', degree: 'Diploma'},
    {field: 'advertising', place: 'MUMBAI UNIVERSITY', degree: 'BMM Degree'},
    {field: 'graphics', place: 'FRAMEBOXX VISUAL EFFECTS'},
    {field: 'commerce', place: 'MUMBAI UNIVERSITY', degree: 'Junior Degree'},
    {field: 'dco', place: 'A+ COMPUTER INSTITUTE'},
    {field: 'ssc', place: 'MAHARASHTRA STATE BOARD'},
];
