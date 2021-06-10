const PAGE_NO_KEY = "PAGE_NO";

export const homeVideoForwardSlots = [
    {start: 1, end: 12},
    {start: 12, end: 24},
    {start: 24, end: 33},
    {start: 33, end: 56.5},
    {start: 56.5, end: 65},
];

export const homeVideoReverseSlots = [
    {start: 65, end: 81},
    {start: 81, end: 86},
    {start: 86, end: 93},
    {start: 93.5, end: 108},
]

export const setPageNo = (pageNo) => localStorage.setItem(PAGE_NO_KEY, pageNo);

export const getPageNo = () => parseInt(localStorage.getItem(PAGE_NO_KEY) || "0", 10);
