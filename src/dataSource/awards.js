import {awardsLogo} from "../service/imgService";

export const awardsThumbnails = [
    {id: 1, image: "1jugnooH", color: "#f2fc75"},
    {id: 2, image: "2ThirdH", color: "#e9c44a"},
    {id: 3, image: "3paraH", color: "#fae04c"},
    {id: 4, image: "4dislabelH", color: "#71f8fa"},
    {id: 5, image: "5salaamH", color: "#D5D361"},
    {id: 6, image: "6signalH", color: "#52a076"},
    {id: 7, image: "7loveH", color: "#CBa43b"},
    {id: 8, image: "8mercyH", color: "#9f2d33"},
    {id: 9, image: "9hateH", color: "#771d1c"},
    {id: 10, image: "10jeepH", color: "#d3693b"},
    {id: 11, image: "11youngH", color: "#f2fc75"}
]

export const awardsDescription = [
    {
        id: 1,
        logo: {src: "JUGNOO", top: "-35px", width: "50px"},
        layout: {paddingTop: "120px"},
        description: "What’s bigger than a D&AD pencil? Well, a million things. But getting a Brand Hero Award along with D&AD and an opportunity to inspire young minds by conducting global sessions for them in London; that’s a Biggie. This idea made it possible and we couldn’t be any prouder. Also we made Pearson cry. I don’t think there’s any greater achievement, than leaving your client in tears with something that you have created.",
        closeText: "Getting my tissues…"
    },
    {
        id: 2,
        logo: {src: "THIRDFONT", top: "-50%", width: "90px"},
        layout: {paddingTop: "70px"},
        description: "Another D&AD entry that won nothing but hearts. Monotype wanted to create a typeface for a social cause. So, we thought of representing a global community – The transgenders.\n" +
            "The attempt was to showcase how a ‘font’ can mean much more than just a typeface and how it can help bring imposing change in the life of millions.",
        closeText: "Hope it’s not Comic Sans."
    },
    {
        id: 3,
        logo: {src: "PARA", top: "-70px", width: "90px"},
        layout: {paddingTop: "60px"},
        description: "How do you spread awareness about the Tokyo 2020 Paralympics and get a Silver Young Glory?\n" +
            "By turning perceived disabilities into strengths and making the Paralympians the stars, front and centre.\n",
        closeText: "Interesting."
    },
    {
        id: 4,
        logo: null,
        layout: {paddingTop: "50px"},
        description: "Another Young Glory entry for the Tokyo 2020 Paralympics spreading motivation. How about you just watch this.",
        closeText: "I was about to, but this came."
    },
    {
        id: 5,
        logo: {src: "SALAAM", top: "-70px", width: "110px"},
        layout: {paddingTop: "70px"},
        description: "From Gold to Silver to Bronze and Shortlists at Spikes Asia and Cannes Lions, this simple idea shows how to provoke change in people's lives.",
        closeText: "Thanks for keeping it short"
    },
    {
        id: 6,
        logo: {src: "LIFESIGNAL", top: "-93px", width: "110px"},
        layout: {paddingTop: "90px"},
        description: "One of those ideas where you’re walking down the street, you see an actual problem and come up with a solution. Then you cut an AV and pitch it at work, get appreciated and nominated for the Global Product Committee, A.K.A. Burnett’s Fight Club.",
        closeText: "Interesting"
    },
    {
        id: 7,
        logo: {src: "LOVEFILTER", top: "-27px", width: "160px"},
        layout: {paddingTop: "50px"},
        description: "Campaign India 2019 churned out quite a wide brief to get more respect and attention for the elderly of the society. And my approach was quite unique that made me win in the Top 5.",
        closeText: "Please stop bragging."
    },
    {
        id: 8,
        logo: {src: "MERCY", top: "-50%", width: "70px"},
        layout: {paddingTop: "70px"},
        description: "The first award entry of my life to win a merit. I was elated to have my name being mentioned on-stage at the Singapore’s Young Spikes awards’ ceremony, even though they ruined it in their accent.",
        closeText: "Indian names are funny."
    },
    {
        id: 9,
        logo: {src: "HATE", top: "-70px", width: "90px"},
        layout: {paddingTop: "60px"},
        description: "If radical recruiters are using simple technology to recruit unsuspecting youth, we beat them at their own game and use simple technology to best them. \n" +
            "And, of course, save these youth in the process. \n",
        closeText: "How to skip your popups?"
    }
].map(it => {
    if (it.logo) {
        it.logo.src = awardsLogo(it.logo.src);
    }
    return it;
})

export const awardsOriginal = [
    {id: 1, media: [{image: "", videoId: "NRxbrwi4WTE", ratio: "16:9"}]},
    {
        id: 2, media: [
            {id: 1, image: "1thirdInside", ratio: "16:9"},
            {id: 2, image: "2thirdInside", ratio: "16:9"},
            {id: 3, image: "3thirdInside", ratio: "16:9"},
            {id: 4, image: "4thirdInside", ratio: "16:9"},
            {id: 5, image: "5thirdInside", ratio: "16:9"},
            {id: 6, image: "6thirdInside", ratio: "16:9"},
            {id: 7, image: "7thirdInside", ratio: "16:9"},
            {id: 8, image: "8thirdInside", ratio: "16:9"},
            {id: 9, image: "9thirdInside", ratio: "16:9"},
            {id: 10, image: "10thirdInside", ratio: "16:9"},
        ]
    },
    {
        id: 3, media: [
            {id: 1, image: "1paraInside", ratio: "16:9"},
            {id: 2, image: "2paraInside", ratio: "16:9"},
            {id: 3, image: "3paraInside", ratio: "16:9"},
            {id: 4, image: "4paraInside", ratio: "16:9"},
            {id: 5, image: "5paraInside", ratio: "16:9"},
            {id: 6, image: "6paraInside", ratio: "16:9"},
            {id: 7, image: "7paraInside", ratio: "16:9"},
        ]
    },
    {
        id: 4, media: [
            {id: 1, image: "", videoId: "IhgTAt8Z3aY", ratio: "16:9"},
        ]
    },
    {
        id: 5, media: [
            {id: 1, image: "", videoId: "YiGkVg9oUpA", ratio: "16:9"},
        ]
    },
    {
        id: 6, media: [
            {id: 1, image: "", videoId: "HkA7oioz4b8", ratio: "16:9"},
        ]
    },
    {
        id: 7, media: [
            {id: 1, image: "1loveinside", ratio: "16:9"},
            {id: 2, image: "2loveinside", ratio: "16:9"},
            {id: 3, image: "3loveinside", ratio: "16:9"},
            {id: 4, image: "4loveinside", ratio: "16:9"},
            {id: 5, image: "5loveinside", ratio: "16:9"},
            {id: 6, image: "6loveinside", ratio: "16:9"},
            {id: 7, image: "7loveinside", ratio: "16:9"},
            {id: 8, image: "8loveinside", ratio: "16:9"},
            {id: 9, image: "9loveinside", ratio: "16:9"},
            {id: 10, image: "10loveinside", ratio: "16:9"},
            {id: 11, image: "10loveinside", ratio: "16:9"},
        ]
    },
    {
        id: 8, media: [
            {id: 1, image: "1mercyInside", ratio: "16:9"},
            {id: 2, image: "2mercyInside", ratio: "16:9"},
        ]
    },
    {
        id: 9, media: [
            {id: 1, image: "1hateinside", ratio: "16:9"},
            {id: 2, image: "2hateinside", ratio: "16:9"},
            {id: 3, image: "3hateinside", ratio: "16:9"},
            {id: 4, image: "4hateinside", ratio: "16:9"},
            {id: 5, image: "5hateinside", ratio: "16:9"},
            {id: 6, image: "6hateinside", ratio: "16:9"},
            {id: 7, image: "7hateinside", ratio: "16:9"},
            {id: 8, image: "8hateinside", ratio: "16:9"},
        ]
    },
    {
        id: 10, media: [
            {id: 1, image: "1jeepInside", ratio: "16:9"},
        ]
    },
    {
        id: 11, media: [
            {id: 1, image: "", videoId: "XjAWoUc4Aj4", ratio: "16:9"},
            {id: 2, image: "", videoId: "4txgs7qIgGo", ratio: "16:9"},
        ]
    },
]
