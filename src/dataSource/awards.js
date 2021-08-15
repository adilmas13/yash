import {awardsLogo, awardsOriginal, awardsThumbnail} from "../service/imgService";

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
    {id: 10, image: "10jeepH", color: "#d3693b"}
].map(it => {
    it.thumbnail = awardsThumbnail(it.image);
    return it;
})

export const awardsDescription = [
    {
        id: 1,
        logo: {src: "JUGNOO", top: "-35px", width: "50px"},
        layout: {paddingTop: "120px"},
        description: "What’s even better than a D&AD Wood Pencil?  A Yellow one. Sure.\n" +
            "But how about getting a Brand Hero Award along with it for starters.\n" +
            "And add to that, an opportunity to inspire young minds by conducting global sessions for Miami Ad School in London, and we have a trifecta of epicness.\n" +
            "Also, we actually made Pearson cry the happiest of tears with this idea and that for me goes right up there with the trifecta of epicness.",
        closeText: "Must. Not. Get. Emo."
    },
    {
        id: 2,
        logo: {src: "THIRDFONT", top: "-50%", width: "90px"},
        layout: {paddingTop: "70px"},
        description: "Another D&AD entry that won nothing but hearts and made mine simply burst with pride.\n" +
            "Monotype wanted to create a typeface for a social cause.\n" +
            "And we decided to bring to the spotlight, the most neglected global community – TRANSGENDERS.\n" +
            "Our aim was to showcase how a ‘font’ can take on the characteristics and boldness of an entire community and in doing so help bring imposing change in their lives.",
        closeText: "It’s definitely not ‘Comic Sans’"
    },
    {
        id: 3,
        logo: {src: "PARA", top: "-70px", width: "90px"},
        layout: {paddingTop: "60px"},
        description: "Having an idea to turn a perceived weakness into path defining strength, is exactly how one wins a Silver Young Glory.\n" +
            "But more importantly than that, it is exactly how one brings much needed attention to the Paralympics and the superhero-esque Paralympians by bringing them front and centre.",
        closeText: "Superheroes, exist!"
    },
    {
        id: 4,
        logo: null,
        layout: {paddingTop: "50px"},
        description: "There’s a lot rightly said about how labelling people in general is wrong.\n" +
            "But what’s even worse is labelling people incorrectly. And that’s what DIS-LABELLED aimed to change about Paralympians and any person who is ‘differently abled’.   How about you just watch this.",
        closeText: "...and I would stop talking."
    },
    {
        id: 5,
        logo: {src: "SALAAM", top: "-70px", width: "110px"},
        layout: {paddingTop: "70px"},
        description: "From Gold to Silver to Bronze and Shortlists at Spikes Asia and Cannes Lions, this simple idea shows how to provoke change in people's lives.",
        closeText: "Kept it short. You’re welcome!"
    },
    {
        id: 6,
        logo: {src: "LIFESIGNAL", top: "-93px", width: "110px"},
        layout: {paddingTop: "90px"},
        description: "One of those ideas where you’re walking down the street, you see an actual problem and try to think of a solution.  Then, you cut an AV.  Pitch it at work. Get appreciated and nominated for the Global Product Committee, A.K.A. Leo Burnett’s Fight Club.",
        closeText: "And also it could save lives."
    },
    {
        id: 7,
        logo: {src: "LOVEFILTER", top: "-27px", width: "160px"},
        layout: {paddingTop: "50px"},
        description: "Growing older is a fear that most of us have at some level. And being forgotten is yet another deep fear.\n" +
            "So what happens when you highlight those fears by hacking a pop culture trend and actually bring some awareness to the plight of the elderly?\n" +
            "Well you ace the brief given by Campaign India and make their ‘TOP 5’ list.",
        closeText: "Some unfiltered bragging."
    },
    {
        id: 8,
        logo: {src: "MERCY", top: "-50%", width: "70px"},
        layout: {paddingTop: "70px"},
        description: "The FIRST award entry of my life ended up winning at SECOND place. I was elated to have my name being mentioned on-stage at Singapore’s Young Spikes awards’ ceremony. Even though they crushed it in their accent.",
        closeText: " Indian names are funny!"
    },
    {
        id: 9,
        logo: {src: "HATE", top: "-70px", width: "90px"},
        layout: {paddingTop: "60px"},
        description: "Recruiters for radical hate groups have become experts at brainwashing and trapping the youth on social media and then getting them to be part of disastrous operations. So how do we battle this?\n" +
            "By a radically simple plug-in that can help the youth sever ties with these recruiters and save them from getting ensnared in something they’re sure to regret later.",
        closeText: "Goose-bumpy. Innit?"
    }
].map(it => {
    if (it.logo) {
        it.logo.src = awardsLogo(it.logo.src);
    }
    return it;
})

export const awardsDetails = [
    {
        id: "1-1",
        image_name: "",
        videoId: "NRxbrwi4WTE",
        ratio: "16:9",
        groupId: 1
    },
    {
        id: "2-1",
        image_name: "1thirdInside",
        ratio: "16:9",
        groupId: 2
    },
    {
        id: "2-2",
        image_name: "2thirdInside",
        ratio: "16:9",
        groupId: 2
    },
    {
        id: "2-3",
        image_name: "3thirdInside",
        ratio: "16:9",
        groupId: 2
    },
    {
        id: "2-4",
        image_name: "4thirdInside",
        ratio: "16:9",
        groupId: 2
    },
    {
        id: "2-5",
        image_name: "5thirdInside",
        ratio: "16:9",
        groupId: 2
    },
    {
        id: "2-6",
        image_name: "6thirdInside",
        ratio: "16:9",
        groupId: 2
    },
    {
        id: "2-7",
        image_name: "7thirdInside",
        ratio: "16:9",
        groupId: 2
    },
    {
        id: "2-8",
        image_name: "8thirdInside",
        ratio: "16:9",
        groupId: 2
    },
    {
        id: "2-9",
        image_name: "9thirdInside",
        ratio: "16:9",
        groupId: 2
    },
    {
        id: "2-10",
        image_name: "10thirdInside",
        ratio: "16:9",
        groupId: 2
    },
    {
        id: "3-1",
        image_name: "1paraInside",
        ratio: "16:9",
        groupId: 3
    },
    {
        id: "3-2",
        image_name: "2paraInside",
        ratio: "16:9",
        groupId: 3
    },
    {
        id: "3-3",
        image_name: "3paraInside",
        ratio: "16:9",
        groupId: 3
    },
    {
        id: "3-4",
        image_name: "4paraInside",
        ratio: "16:9",
        groupId: 3
    },
    {
        id: "3-5",
        image_name: "5paraInside",
        ratio: "16:9",
        groupId: 3
    },
    {
        id: "3-6",
        image_name: "6paraInside",
        ratio: "16:9",
        groupId: 3
    },
    {
        id: "3-7",
        image_name: "7paraInside",
        ratio: "16:9",
        groupId: 3
    },
    {
        id: "4-1",
        image_name: "",
        videoId: "IhgTAt8Z3aY",
        ratio: "16:9",
        groupId: 4
    },
    {
        id: "5-1",
        image_name: "",
        videoId: "YiGkVg9oUpA",
        ratio: "16:9",
        groupId: 5
    },
    {
        id: "6-1",
        image_name: "",
        videoId: "HkA7oioz4b8",
        ratio: "16:9",
        groupId: 6
    },
    {
        id: "7-1",
        image_name: "1loveinside",
        ratio: "16:9",
        groupId: 7
    },
    {
        id: "7-2",
        image_name: "2loveinside",
        ratio: "16:9",
        groupId: 7
    },
    {
        id: "7-3",
        image_name: "3loveinside",
        ratio: "16:9",
        groupId: 7
    },
    {
        id: "7-4",
        image_name: "4loveinside",
        ratio: "16:9",
        groupId: 7
    },
    {
        id: "7-5",
        image_name: "5loveinside",
        ratio: "16:9",
        groupId: 7
    },
    {
        id: "7-6",
        image_name: "6loveinside",
        ratio: "16:9",
        groupId: 7
    },
    {
        id: "7-7",
        image_name: "7loveinside",
        ratio: "16:9",
        groupId: 7
    },
    {
        id: "7-8",
        image_name: "8loveinside",
        ratio: "16:9",
        groupId: 7
    },
    {
        id: "7-9",
        image_name: "9loveinside",
        ratio: "16:9",
        groupId: 7
    },
    {
        id: "7-10",
        image_name: "10loveinside",
        ratio: "16:9",
        groupId: 7
    },
    {
        id: "7-11",
        image_name: "11loveinside",
        ratio: "16:9",
        groupId: 7
    },
    {
        id: "8-1",
        image_name: "1mercyInside",
        ratio: "16:9",
        groupId: 8
    },
    {
        id: "8-2",
        image_name: "2mercyInside",
        ratio: "16:9",
        groupId: 8
    },
    {
        id: "9-1",
        image_name: "1hateinside",
        ratio: "16:9",
        groupId: 9
    },
    {
        id: "9-2",
        image_name: "2hateinside",
        ratio: "16:9",
        groupId: 9
    },
    {
        id: "9-3",
        image_name: "3hateinside",
        ratio: "16:9",
        groupId: 9
    },
    {
        id: "9-4",
        image_name: "4hateinside",
        ratio: "16:9",
        groupId: 9
    },
    {
        id: "9-5",
        image_name: "5hateinside",
        ratio: "16:9",
        groupId: 9
    },
    {
        id: "9-6",
        image_name: "6hateinside",
        ratio: "16:9",
        groupId: 9
    },
    {
        id: "9-7",
        image_name: "7hateinside",
        ratio: "16:9",
        groupId: 9
    },
    {
        id: "9-8",
        image_name: "8hateinside",
        ratio: "16:9",
        groupId: 9
    },
    {
        id: "10-1",
        image_name: "1jeepInside",
        ratio: "16:9",
        groupId: 10
    }
].map(media => {
    media['image'] = {
        thumbnail: awardsThumbnail(media.image_name, media.extension),
        src: awardsOriginal(media.image_name, media.extension)
    }
    if (media.videoId) {
        media['video'] = {
            id: media.videoId,
            src: `https://www.youtube.com/embed/${media.videoId}`,
            thumbnail_video: awardsThumbnail(media.image_name, "mp4")
        };
    }
    delete media['videoId'];
    delete media['image_name'];
    return media;
})
