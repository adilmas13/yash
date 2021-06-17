const PAGE_NO_KEY = "PAGE_NO";

export const homeVideoForwardSlots = [
    {start: 1, end: 12},
    {start: 12, end: 23},
    {start: 23, end: 31},
    {start: 31, end: 52.5},
    {start: 52.5, end: 60.55},
];

export const homeVideoReverseSlots = [
    {start: 65, end: 75.2},
    {start: 75.2, end: 79.5},
    {start: 79.5, end: 86.2},
    {start: 86.2, end: 108},
]

export const setPageNo = (pageNo) => localStorage.setItem(PAGE_NO_KEY, pageNo);

export const getPageNo = () => parseInt(localStorage.getItem(PAGE_NO_KEY) || "0", 10);
