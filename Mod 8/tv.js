//Part I

var tv = {
    title: "Wednesday",
    year: 2022,
    actress: "Jenna Ortega",
    actor: "Hunter Doohan",
    rating: "TV-14",
    creator: "Alfred Gough",
    genre: "Comedy",
    episodes: 9,
    seasons: 1,
    reviews: "8/10"
};

document.write();
document.write("<b> <font size= 12>");
document.write("The TV show " + tv.title + " features " + tv.actress + " and " + tv.actor + ".");
document.write("</b></font size><br></br><font size=9>");
document.write("It was created by " + tv.creator + " and has " + tv.seasons + " season and " + tv.episodes + " episodes.");
document.write("</font size><br></br><font size=6>");
document.write("The genre is " + tv.genre + " and it has received an average review of " + tv.reviews + " as well as a content rating of " + tv.rating + ".");
document.write("<br></br>");
document.write("<img src='images/tv_wednesday.png' height='' width=''>");