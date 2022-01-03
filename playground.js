const { Actors } = require("./models");
const { Movies } = require("./models");
const { Tvshows } = require("./models")


Actors.insertMany([
    {
        url: 'https://en.wikipedia.org/wiki/Frances_McDormand',
        actor: 'Frances McDormand',
        born: 'June 23, 1957',
        work: 'Blood Simple, Raising Arizona, Barton Fink, Fargo, The Man Who Wasnt There, Burn After Reading, Hail, Caesar!',
        image_url: 'https://en.wikipedia.org/wiki/Frances_McDormand#/media/File:Frances_McDormand_2015_(cropped).jpg',
        bio: 'Frances Louise McDormand (born Cynthia Ann Smith; June 23, 1957) is an American actress and producer. Known for her portrayals of quirky, headstrong characters, she has garnered numerous accolades throughout her career, including a Tony Award, two Primetime Emmy Awards, and three Academy Awards for her acting, in addition to a fourth Academy Award as producer, making her one of the few performers to achieve the "Triple Crown of Acting".'

    },
    {
        url: 'https://en.wikipedia.org/wiki/Denzel_Washington',
        actor: 'Denzel Washington',
        born: 'December 28, 1954',
        work: 'Malcom X, Mo Better Blues, Philadelphia, Training Day, Man On Fire, Courage Under Fire, The Pelican Brief, He Got Game',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Denzel_Washington_2018.jpg',
        bio: 'Denzel Hayes Washington Jr. (born December 28, 1954) is an American actor, director, and producer. Known for his performances on the screen and stage, he has been described as an actor who reconfigured "the concept of classic movie stardom".[1] He has frequently collaborated with dirTvshows Spike Lee, Antoine Fuqua, and Tony Scott. He has earned various awards including two Academy Awards, three Golden Globe Awards, a Screen Tvshows Guild Award, and a Tony Award.'

    },
    {
        url: 'https://en.wikipedia.org/wiki/Leonardo_DiCaprio',
        actor: 'Leonardo DiCaprio',
        born: 'November 11, 1974',
        work: 'The Aviator, Blood Diamond, The Departed, Revolutionary Road, Inception, Django Unchained, The Wolf of Wall Street',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg',
        bio: 'Leonardo Wilhelm DiCaprio (born November 11, 1974) is an American actor and film producer. Known for his work in biopics and period films, DiCaprio has received numerous accolades throughout his career, including an Academy Award, a British Academy Film Award, a Screen Tvshows Guild Award, and three Golden Globe Awards.'

    },
    {
        url: 'https://en.wikipedia.org/wiki/Jennifer_Lawrence',
        actor: 'Jennifer Lawrence',
        born: 'August 15, 1990',
        work: 'Winters Bone, Joy, Silver Linings Playbook, mother!, The Hunger Games, American Hustle, Passengers, Red Sparrow',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Jennifer_Lawrence_in_2016.jpg/800px-Jennifer_Lawrence_in_2016.jpg',
        bio: 'Jennifer Shrader Lawrence (born August 15, 1990) is an American actress. She was the worlds highest-paid actress in 2015 and 2016, with her films grossing over $6 billion worldwide to date. She appeared in Times 100 most influential people in the world list in 2013 and in the Forbes Celebrity 100 list from 2013 to 2016.'

    },
    {
        url: 'https://en.wikipedia.org/wiki/Rob_Morgan_(actor)',
        actor: 'Rob Morgan',
        born: 'February 24, 1973',
        work: 'Daredevil, Jessica Jones, Luke Cage, Iron Fist, The Defenders, The Punisher',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Just_Mercy_PC_02_%2848734910417%29.jpg/800px-Just_Mercy_PC_02_%2848734910417%29.jpg',
        bio: 'Rob Morgan was born on February 24, 1973 in the United States'

    },
    {
        url: 'https://en.wikipedia.org/wiki/Jonah_Hill',
        actor: 'Jonah Hill',
        born: 'December 20, 1983',
        work: 'Superbad, Knocked Up, Forgetting Sarah Marshall, Funny People, Get Him to the Greek, 21 Jump Street, This Is the End, 22 Jump Street',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Jonah_Hill-4939_%28cropped%29_%28cropped%29.jpg/800px-Jonah_Hill-4939_%28cropped%29_%28cropped%29.jpg',
        bio: 'Jonah Hill Feldstein (born December 20, 1983) is an American actor, filmmaker, and comedian.'

    },
    {
        url: 'https://en.wikipedia.org/wiki/Meryl_Streep',
        actor: 'Meryl Streep',
        born: 'June 22, 1949',
        work: 'Adaptation, The Hours, The Devil Wears Prada, Doubt, Mamma Mia!, Julie & Julia, Its Complicated, Into the Woods, The Post, Little Women',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Meryl_Streep_December_2018.jpg/800px-Meryl_Streep_December_2018.jpg',
        bio: 'Mary Louise "Meryl" Streep (born June 22, 1949) is an American actress. Often described as "the best actress of her generation",[1][2] Streep is particularly noted for her versatility and accent adaptability. She has garnered numerous accolades throughout her career, including a record 21 Academy Award nominations, winning three (behind only Katharine Hepburn),[3] and a record 32 Golden Globe Award nominations, winning eight.'

    },
    {
        url: 'https://en.wikipedia.org/wiki/Cate_Blanchett',
        actor: 'Cate Blanchett',
        born: 'May 14 1969',
        work: 'Blue Jasmine, Im Not There, Elizabeth: The Golden Age, Carol',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Cate_Blanchett_Cannes_2018_2_%28cropped%29.jpg',
        bio: 'Catherine Elise Blanchett (born 14 May 1969) is an Australian actor.[a] Regarded as one of the best actresses of her generation,[5][6] Blanchett is known for her work in independent films, blockbusters, and the stage. She has garnered numerous accolades throughout her career, including two Academy Awards, three British Academy Film Awards, three Screen Tvshows Guild Awards, and three Golden Globe Awards.'

    },
    {
        url: 'https://en.wikipedia.org/wiki/Kristen_Bell',
        actor: 'Kristen Bell',
        born: 'July 18, 1980',
        work: 'Veronica Mars, Gosspi Girl, When In Rome, Couples Retreat, Bad Moms, Frozen, House Of Lies',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kristen_Bell_Paris_Fashion_Week_Spring_Summer_2020_%28cropped%29.jpg/800px-Kristen_Bell_Paris_Fashion_Week_Spring_Summer_2020_%28cropped%29.jpg',
        bio: 'Kristen Anne Bell (born July 18, 1980)[1] is an American actress. She began her professional acting career by starring in stage productions while attending the Tisch School of the Arts at New York University. In 2001, she made her Broadway stage debut as Becky Thatcher in the comedy musical The Adventures of Tom Sawyer and appeared in a Broadway revival of The Crucible the following year. In 2004, she appeared in the action thriller film Spartan and received critical praise for her performance in the television drama film Gracies Choice.'

    },
    {
        url: 'https://en.wikipedia.org/wiki/Vince_Vaughn',
        actor: 'Vince Vaughn',
        born: 'March 28, 1970',
        work: 'Old School, Dodgeball: A True Underdog Story, Wedding Crashers, The Break-Up, Fred Claus, Four Christmases, The Dilemma',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Vince_Vaughn_in_Los_Angeles%2C_California_%282015%29_-_1.jpg/800px-Vince_Vaughn_in_Los_Angeles%2C_California_%282015%29_-_1.jpg',
        bio: 'Vincent Anthony Vaughn (born March 28, 1970) is an American actor, comedian, and filmmaker.'

    }
])
    .then((newActors) => {
        console.log(newActors);
    })
    .catch((error) => {
        console.log(error);
    });

Movies.insertMany([
    {
        url: 'https://en.wikipedia.org/wiki/Don%27t_Look_Up_(2021_film)',
        movie: 'Dont Look Up (2021)',
        director: 'Adam McKay',
        cast: 'Leonardo DiCaprio, Jennifer Lawrence, Rob Morgan, Jonah Hill, Mark Rylance, Tyler Perry, Timothée Chalamet, Ron Perlman, Ariana Grande, Scott Mescudi, Himesh Patel, Melanie Lynskey, Cate Blanchett, Meryl Streep',
        music: 'Nicholas Britell',
        run_time: '138 minutes',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Don%27t_Look_Up_2021_film.jpg',
        summary: 'Dont Look Up is a 2021 American satirical science fiction film written, produced, and directed by Adam McKay. It stars Leonardo DiCaprio and Jennifer Lawrence as two astronomers attempting to warn humanity, via a media tour, about an approaching comet that will destroy human civilization. Supporting them are Rob Morgan, Jonah Hill, Mark Rylance, Tyler Perry, Timothée Chalamet, Ron Perlman, Ariana Grande, Scott Mescudi, Himesh Patel, Melanie Lynskey, with Cate Blanchett and Meryl Streep.  The film is a satire of government and media indifference to the climate crisis',
    },
    {
        url: 'https://en.wikipedia.org/wiki/Zola_(film)',
        movie: 'Zola (2020)',
        director: 'Janicza Bravo',
        cast: 'Taylour Paige, Riley Keough, Nicholas Braun, Ariel Stachel, Colman Domingo',
        music: 'Mica Levi',
        run_time: '90 minutes',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Zola_film_poster.png',
        summary: 'Zola is a 2020 American black comedy crime film directed by Janicza Bravo and written by Bravo and Jeremy O. Harris. It is based on a viral Twitter thread from 2015 by Aziah "Zola" King and the resulting Rolling Stone article "Zola Tells All: The Real Story Behind the Greatest Stripper Saga Ever Tweeted" by David Kushner. It stars Taylour Paige as Zola, a part-time stripper who is convinced by her new friend (Riley Keough) to travel to Tampa, Florida, in order to earn money, only to get in over her head; Colman Domingo, Nicholas Braun, and Ariel Stachel also star.',
    },
    {
        url: 'https://en.wikipedia.org/wiki/The_Last_Black_Man_in_San_Francisco',
        movie: 'The Last Black Man in San Francisco (2019)',
        director: 'Joe Talbot',
        cast: 'Jimmie Fails, Jonathan Majors, Tichina Arnold, Rob Morgan, Mike Epps, Finn Wittrock, Danny Glover',
        music: 'Emile Mosseri',
        run_time: '120 minutes',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/b/b4/The_Last_Black_Man_in_San_Francisco_%282019_film_poster%29.png',
        summary: 'The Last Black Man in San Francisco is a 2019 American drama film. Its plot centers on the efforts of a young black man to reclaim his childhood home, a now-expensive Victorian house in a gentrified neighborhood of San Francisco.',
    },
    {
        url: 'https://en.wikipedia.org/wiki/Licorice_Pizza',
        movie: 'Licorice Pizza (2021)',
        director: 'Paul Thomas Anderson',
        cast: 'Alana Haim, Cooper Hoffman, Sean Penn, Tom Waits, Bradley Cooper, Benny Safdie',
        music: 'Jonny Greenwood',
        run_time: '133 minutes',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/3/3c/LicoricePizzaPoster.jpeg',
        summary: 'Licorice Pizza is a 2021 American coming-of-age comedy-drama film written and directed by Paul Thomas Anderson, who also serves as one of the films producers and cinematographers. The film stars Alana Haim, Cooper Hoffman, Sean Penn, Tom Waits, Bradley Cooper, and Benny Safdie.',
    },
    {
        url: 'https://en.wikipedia.org/wiki/The_Tragedy_of_Macbeth_(2021_film)',
        movie: 'The Tragedy of Macbeth (2021)',
        director: 'Joel Coen',
        cast: 'Denzel Washington, Frances McDormand, Bertie Carvel, Alex Hassell, Corey Hawkins, Harry Melling, Brendan Gleeson',
        music: 'Carter Burwell',
        run_time: '	105 minutes',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/6/69/The_Tragedy_of_Macbeth_2021_poster.jpg',
        summary: 'The Tragedy of Macbeth is a 2021 American historical thriller film written and directed by Joel Coen and based on the play Macbeth by William Shakespeare. It is the first film directed by one of the Coen brothers without the others involvement. The film stars Denzel Washington, Frances McDormand (who also produced the film), Bertie Carvel, Alex Hassell, Corey Hawkins, Harry Melling, and Brendan Gleeson.',
    },
    {
        url: 'https://en.wikipedia.org/wiki/The_French_Dispatch',
        movie: 'The French Dispatch',
        director: 'Wes Anderson',
        cast: '	Benicio del Toro, Adrien Brody, Tilda Swinton, Léa Seydoux, Frances McDormand, Timothée Chalamet, Lyna Khoudri, Jeffrey Wright, Mathieu Amalric, Stephen Park, Bill Murray, Owen Wilson',
        music: 'Alexandre Desplat',
        run_time: '	108 minutes',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/7/78/The_French_Dispatch.jpeg',
        summary: 'The French Dispatch of the Liberty, Kansas Evening Sun is a 2021 American anthology comedy film written, directed and produced by Wes Anderson from a story he conceived with Roman Coppola, Hugo Guinness and Jason Schwartzman. It features a large ensemble cast, and follows three different storylines as the French foreign bureau of the fictional Liberty, Kansas Evening Sun newspaper creates its final issue.',
    },
    {
        url: 'https://en.wikipedia.org/wiki/Dune_(2021_film)',
        movie: 'Dune (2021)',
        director: 'Denis Villeneuve',
        cast: 'Timothée Chalamet, Rebecca Ferguson, Oscar Isaac, Josh Brolin, Stellan Skarsgård, Dave Bautista, Stephen McKinley Henderson, Zendaya, Chang Chen, Sharon Duncan-Brewster, Charlotte Rampling, Jason Momoa, Javier Bardem',
        music: 'Hans Zimmer',
        run_time: '156 minutes',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg',
        summary: 'Dune (titled onscreen as Dune: Part One) is a 2021 American epic science fiction film directed by Denis Villeneuve and written by Villeneuve, Jon Spaihts, and Eric Roth. It is the first of a planned two-part adaptation of the 1965 novel by Frank Herbert, primarily covering the first half of the book. Set in the far future, it follows Paul Atreides as his family, the noble House Atreides, is thrust into a war for the deadly and inhospitable desert planet Arrakis.',
    },
    {
        url: 'https://en.wikipedia.org/wiki/The_Power_of_the_Dog_(film)',
        movie: 'The Power of the Dog (2021)',
        director: 'Jane Campion',
        cast: 'Benedict Cumberbatch, Kirsten Dunst, Jesse Plemons, Kodi Smit-McPhee, Thomasin McKenzie, Genevieve Lemon, Keith Carradine, Frances Conroy',
        music: 'Jonny Greenwood',
        run_time: '126 minutes',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/6/6d/The_Power_of_the_Dog_%28film%29.jpg',
        summary: 'The Power of the Dog is a 2021 Western psychological drama film written and directed by Jane Campion, based on the 1967 novel of the same name by Thomas Savage. The film stars Benedict Cumberbatch, Kirsten Dunst, Jesse Plemons, and Kodi Smit-McPhee. Shot mostly across rural Otago, the film is an international co-production between New Zealand, Australia, the United Kingdom, and Canada. The film deals with themes such as love, grief, resentment, jealousy and sexuality',
    }

])
    .then((newMovies) => {
        console.log(newMovies);
    })
    .catch((error) => {
        console.log(error);
    });

Tvshows.insertMany([
    {
        url: 'https://en.wikipedia.org/wiki/Yellowjackets_(TV_series)',
        title: 'Yellowjackets (2021)',
        cast: 'Melanie Lynskey, Tawny Cypress, Ella Purnell, Sophie Nélisse, Jasmin Savoy Brown, Sophie Thatcher, Sammi Hanratty, Steven Krueger, Warren Kole, Christina Ricci, Juliette Lewis',
        music: 'Theodore Shapiro, Craig Wedren, Anna Waronker',
        run_time: '56-58 minutes',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Yellowjackets.jpg',
        summary: 'Yellowjackets is an American television drama series created by Ashley Lyle and Bart Nickerson. It stars an ensemble cast led by Sophie Nélisse, Jasmin Savoy Brown, Sophie Thatcher, and Sammi Hanratty as four teenagers involved in a plane crash in 1996, with Melanie Lynskey, Tawny Cypress, Juliette Lewis, and Christina Ricci portraying their adult counterparts.',
    },
    {
        url: 'https://en.wikipedia.org/wiki/How_To_with_John_Wilson',
        title: 'How To with John Wilson (2020)',
        cast: 'John Wilson',
        music: 'Kate Bush',
        run_time: '	25-28 minutes',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/5/56/How_To_with_John_Wilson.jpg',
        summary: 'How To with John Wilson is an American comedy television docuseries created by filmmaker John Wilson',
    },
    {
        url: 'https://en.wikipedia.org/wiki/Succession_(TV_series)',
        title: 'Succession (2018)',
        cast: 'Hiam Abbass, Nicholas Braun, Brian Cox, Kieran Culkin, Peter Friedman, Natalie Gold, Matthew Macfadyen, Alan Ruck, Parker Sawyers, Sarah Snook, Jeremy Strong, Rob Yang, Dagmara Domińczyk, Arian Moayed, J. Smith-Cameron, Justine Lupe, David Rasche, Fisher Stevens',
        music: 'Nicholas Britell',
        run_time: '	56-70 minutes',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/7/73/SuccessionTV.png',
        summary: 'Succession is an American drama television series created by Jesse Armstrong. It premiered on June 3, 2018, on HBO.  The series centers on the Roy family, the dysfunctional owners of Waystar RoyCo, a global media and entertainment conglomerate, who are fighting for control of the company amid uncertainty about the health of the familys patriarch, Logan Roy (Brian Cox).',
    },
    {
        url: 'https://en.wikipedia.org/wiki/Nine_Perfect_Strangers_(miniseries)',
        title: 'Nine Perfect Strangers (2021)',
        cast: 'Nicole Kidman, Melissa McCarthy, Michael Shannon, Luke Evans, Asher Keddie, Samara Weaving, Melvin Gregg, Tiffany Boone, Manny Jacinto, Grace Van Patten, Zoe Terakes, Regina Hall, Bobby Cannavale',
        music: '	Marco Beltrami, Miles Hankins',
        run_time: '42-55 minutes',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/4/41/Nine_Perfect_Strangers_title_card.png',
        summary: 'Nine Perfect Strangers is an American drama streaming television miniseries based on the 2018 novel of the same name by Liane Moriarty. Created by David E. Kelley who also developed the series alongside John-Henry Butterworth, the series premiered on August 18, 2021, on Hulu.',
    },
    {
        url: 'https://en.wikipedia.org/wiki/Shark_Tank',
        title: 'Shark Tank (2009)',
        cast: 'Kevin O Leary, Mark Cuban, Robert Herjavec, Lori Greiner, Daymond John, Barbara Corcoran, Kevin Harrington',
        music: 'Jeff Lippencott, Mark T. Williams',
        run_time: '42 minutes',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/6/68/Shark_Tank_Logo.jpg',
        summary: 'Shark Tank is an American business reality television series that premiered on August 9, 2009, on ABC.  The show is the American franchise of the international format Dragons Den, which originated in Japan as Money Tigers in 2001.  It shows entrepreneurs making business presentations to a panel of five investors or "sharks," who decide whether to invest in their company.',
    },
    {
        url: 'https://en.wikipedia.org/wiki/The_White_Lotus',
        title: 'The White Lotus (2020)',
        cast: 'Murray Bartlett, Connie Britton, Jennifer Coolidge, Alexandra Daddario, Fred Hechinger, Jake Lacy,, Brittany OGrady, Natasha Rothwell, Sydney Sweeney, Steve Zahn, Molly Shannon',
        music: 'Cristobal Tapia de Veer',
        run_time: '54-65 minutes',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/4/41/The_White_Lotus_Title_Card.png',
        summary: 'The White Lotus is an American satirical comedy-drama television series created, written, and directed by Mike White that premiered on HBO on July 11, 2021',
    },
    {
        url: 'https://en.wikipedia.org/wiki/The_Other_Two',
        title: 'The Other Two (2019)',
        cast: 'Heléne Yorke, Drew Tarver, Case Walker, Ken Marino, Molly Shannon',
        music: 'Playboi Carti',
        run_time: '30 minutes',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/d/db/The_Other_Two_poster.jpg',
        summary: 'The Other Two is an American comedy television series created by Chris Kelly and Sarah Schneider.  The story follows two floundering millennial siblings who must grapple with their 13-year-old brothers overnight fame.',
    },
    {
        url: 'https://en.wikipedia.org/wiki/BMF_(TV_series)',
        title: 'BMF (2021)',
        cast: 'Russell Hornsby, Demetrius Flenory Jr, Da Vinchi, Michole Briana White, Eric Kofi-Abrefa, Ajiona Alexus, Myles Truitt, Steve Harris',
        music: '50 Cent',
        run_time: '52 minutes',
        image_url: 'https://imgr.search.brave.com/Oqw7BCkq75dmHa2yfnYLhTV5ZeW-KAygqKzCKoHVq4o/fit/1200/675/ce/1/aHR0cHM6Ly93d3cu/ZmlsbXl0LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/OC9ibWYtdHYtc2Vy/aWVzLmpwZw',
        summary: 'BMF (or Black Mafia Family) is an American crime drama television series, which follows the Black Mafia Family, a drug and money laundering organization.',
    },
])
    .then((newTvshows) => {
        console.log(newTvshows);
    })
    .catch((error) => {
        console.log(error);
    });