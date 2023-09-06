import style from "../Assets/Styling/about.module.css";

const About = ()=>{
    return(
        <>
            <h1>About Samixx Blog</h1>
            <div className={style.aboutContainer}>
                <p className={style.text}>
                    About AnimeLounge: Your Anonymously Fandom Haven
                    Welcome to AnimeLounge, your virtual sanctuary for anime fans to express their thoughts, 
                    share their passion, and dive deep into the captivating world of Japanese animation. Our 
                    community is built on the belief that every fan deserves a platform where their voice can shine, 
                    unburdened by identity, and steeped in the love for anime.
                    Our Mission
                    At AnimeLounge, we're more than just a blog. We're a collective of devoted fans who understand the 
                    profound impact that anime can have on our lives. Our mission is to provide a safe, inclusive, and 
                    anonymous space where you can:
                </p>
                <ol className={style.listOne}>
                    <li>
                        Share Your Thoughts: Express your love for your favorite series, dissect plot twists, 
                        analyze characters, or simply gush about the latest episodes. 
                        AnimeLounge is your canvas to paint your feelings and ideas, free from judgment.
                    </li>
                    <li>
                        Connect with Fellow Fans: Engage in meaningful discussions with like-minded individuals 
                        who share your enthusiasm. Discover new perspectives and forge connections with others who 
                        appreciate the magic of anime as much as you do.
                    </li>
                    <li>
                        Stay Anonymously Unique: We believe that anonymity fosters creativity and genuine expression. 
                        At AnimeLounge, you can be yourself without 
                        fear of prejudice, making it easier to share your unfiltered opinions and ideas.
                    </li>
                </ol>
                <p className={style.text}>
                    Why AnimeLounge?
                    In a world where individuality is often overshadowed by conformity, AnimeLounge is your haven for 
                    self-expression. We are a community that celebrates the diversity of anime genres, styles, and tastes. 
                    Whether you're a seasoned otaku or just dipping your toes into this vast ocean of entertainment, 
                    you'll find a warm, welcoming home here.
                    How It Works
                </p>
                <ol className={style.listOne}>
                    <li>
                        Post Anonymously: Share your insights, reviews, fan theories, fan art, or any anime-related 
                        content without revealing your identity. Just pick a username, and you're ready to go!
                    </li>
                    <li>
                        Engage and Discover: Explore a myriad of posts and engage in discussions through comments 
                        and upvotes. Dive into a world where your opinions are valued, and your interests are respected.
                    </li>
                    <li>
                    3. Contribute to Our Growing Library: Our community's collective knowledge creates a treasure trove 
                    of information and discussions about anime. Contribute your piece, and together, we build a vast 
                    library for future generations of anime enthusiasts.
                    </li>
                </ol>
                <p className={style.h5}>
                    Join Us Today
                    Whether you're a fan of shonen, shojo, mecha, isekai, or any other anime genre, AnimeLounge welcomes you with open arms. Here, it's not about who you are; it's about what you love. Join our community today and immerse yourself in the world of anime, where your voice matters, and your passion thrives. Together, we'll explore the depths of this incredible medium, 
                    one anonymous post at a time. Welcome to AnimeLounge!
                </p>
            </div>
        </>
    )
}

export default About;
