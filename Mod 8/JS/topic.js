//Part II

var f1 = {
    driverFirst: "Fernando ",
    driverLast: "Alonso",
    age: 41,
    nationality: "Spanish",
    number: 14,
    championships: 2,
    wins: 32,
    podiums: 99,
    races: 359,
    currentTeam: "Aston Martin"
};

document.write();
document.write("<b> <font size= 12>");
document.write("The Formula One driver " + f1.driverFirst + f1.driverLast + "'s age is " +f1.age + ", he is " + f1.nationality +
               ", and he races for " + f1.currentTeam + ".");
document.write("</b></font size><br></br><font size=9>");
document.write("He has won " + f1.championships + " championships, " + f1.wins + " races, and has podiumed " + f1.podiums + " times.");
document.write("</font size><br></br><font size=6>");
document.write(f1.driverLast + " has raced under number " + f1.number + " for " + f1.races + " races.");
document.write("<br></br>");
document.write("");
