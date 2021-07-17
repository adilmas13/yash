const PAGE_NO_KEY = "PAGE_NO";

export const homeVideoForwardSlots = [
    {start: 1, end: 11},
    {start: 12, end: 23},
    {start: 23, end: 31},
    {start: 31, end: 52.5},
    {start: 52.5, end: 60.55},
];

export const homeVideoReverseSlots = [
    {start: 61, end: 75},
    {start: 75, end: 79.5},
    {start: 79.5, end: 86},
    {start: 86, end: 108},
]

export const setPageNo = (pageNo) => localStorage.setItem(PAGE_NO_KEY, pageNo);

export const getPageNo = () => parseInt(localStorage.getItem(PAGE_NO_KEY) || "0", 10);

export const videoPlaceholder = 'https://firebasestorage.googleapis.com/v0/b/yash-portfolio-79bbe.appspot.com/o/home%2Fvideo_placeholder.jpeg?alt=media';

export const cvUrl = 'https://firebasestorage.googleapis.com/v0/b/yash-portfolio-79bbe.appspot.com/o/about-me%2Fyash-cv.pdf?alt=media';
