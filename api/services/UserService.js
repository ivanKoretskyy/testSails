
const { isEqual, values, isArray } = require('lodash');

class UserService {
    getDefaultUsers() {
        return [
            {
                "firstName": "Clarke",
                "lastName": "English",
                "email": "diam@metusfacilisislorem.co.uk"
            },
            {
                "firstName": "Martin",
                "lastName": "Aguirre",
                "email": "turpis.egestas@dolorNullasemper.edu"
            },
            {
                "firstName": "Wesley",
                "lastName": "Petty",
                "email": "vitae.odio@Morbi.edu"
            },
            {
                "firstName": "Moses",
                "lastName": "Valdez",
                "email": "risus@nislsem.com"
            },
            {
                "firstName": "Wallace",
                "lastName": "Travis",
                "email": "rhoncus.Donec@dictumcursusNunc.org"
            },
            {
                "firstName": "Howard",
                "lastName": "Preston",
                "email": "massa@torquent.ca"
            },
            {
                "firstName": "Neil",
                "lastName": "Le",
                "email": "blandit@atpretiumaliquet.edu"
            },
            {
                "firstName": "Kato",
                "lastName": "Carver",
                "email": "aliquet.Proin.velit@leoCrasvehicula.co.uk"
            },
            {
                "firstName": "Malcolm",
                "lastName": "Nolan",
                "email": "et.rutrum.eu@gravida.com"
            },
            {
                "firstName": "Brandon",
                "lastName": "Lindsey",
                "email": "et.commodo.at@dolortempusnon.edu"
            },
            {
                "firstName": "Vincent",
                "lastName": "Bush",
                "email": "interdum.Curabitur@tempusnonlacinia.org"
            },
            {
                "firstName": "Jared",
                "lastName": "Battle",
                "email": "sed.pede@maurissapien.edu"
            },
            {
                "firstName": "Hayden",
                "lastName": "Chang",
                "email": "pharetra.sed.hendrerit@vehicula.org"
            },
            {
                "firstName": "August",
                "lastName": "Stout",
                "email": "tincidunt@Praesent.com"
            },
            {
                "firstName": "Ronan",
                "lastName": "Garcia",
                "email": "tellus.sem@dolorFuscemi.com"
            },
            {
                "firstName": "Herman",
                "lastName": "Richards",
                "email": "neque@estNunclaoreet.co.uk"
            },
            {
                "firstName": "Harding",
                "lastName": "Ramirez",
                "email": "ut.nulla@magnaa.net"
            },
            {
                "firstName": "Herrod",
                "lastName": "Nicholson",
                "email": "eu@posuereenimnisl.net"
            },
            {
                "firstName": "Eagan",
                "lastName": "Mcgee",
                "email": "hymenaeos.Mauris.ut@seddictumeleifend.net"
            },
            {
                "firstName": "Phelan",
                "lastName": "Jackson",
                "email": "at.pretium.aliquet@ipsum.ca"
            },
            {
                "firstName": "Ulric",
                "lastName": "Goodwin",
                "email": "adipiscing@egetlaoreetposuere.edu"
            },
            {
                "firstName": "Fritz",
                "lastName": "Roberts",
                "email": "Aliquam.auctor.velit@velitCras.edu"
            },
            {
                "firstName": "Garrison",
                "lastName": "Mack",
                "email": "nisl@ullamcorperviverraMaecenas.co.uk"
            },
            {
                "firstName": "Asher",
                "lastName": "Meyer",
                "email": "quis.pede.Praesent@turpisnon.com"
            },
            {
                "firstName": "Fritz",
                "lastName": "Sloan",
                "email": "gravida@tinciduntcongueturpis.net"
            },
            {
                "firstName": "Jackson",
                "lastName": "Stevenson",
                "email": "nibh@idblandit.com"
            },
            {
                "firstName": "Ezra",
                "lastName": "Roth",
                "email": "ipsum.Phasellus.vitae@arcuNunc.org"
            },
            {
                "firstName": "Clark",
                "lastName": "Collins",
                "email": "eu@nequevitaesemper.ca"
            },
            {
                "firstName": "Judah",
                "lastName": "Wilkinson",
                "email": "dui.nec.urna@dolorsit.com"
            },
            {
                "firstName": "Armand",
                "lastName": "Giles",
                "email": "parturient.montes.nascetur@sollicitudin.ca"
            },
            {
                "firstName": "Emery",
                "lastName": "Estrada",
                "email": "sociis@Aliquameratvolutpat.co.uk"
            },
            {
                "firstName": "Lyle",
                "lastName": "Michael",
                "email": "sem.semper.erat@adipiscingelit.edu"
            },
            {
                "firstName": "Dane",
                "lastName": "Baldwin",
                "email": "ornare@ac.co.uk"
            },
            {
                "firstName": "Tad",
                "lastName": "Edwards",
                "email": "eget.varius@Maurisnondui.co.uk"
            },
            {
                "firstName": "Aristotle",
                "lastName": "Chavez",
                "email": "quam.a.felis@Maecenasiaculis.com"
            },
            {
                "firstName": "Kenyon",
                "lastName": "Johnston",
                "email": "quis@arcu.org"
            },
            {
                "firstName": "Marshall",
                "lastName": "King",
                "email": "vitae.purus.gravida@temporeratneque.edu"
            },
            {
                "firstName": "Nero",
                "lastName": "Sharpe",
                "email": "neque.Sed.eget@dictum.com"
            },
            {
                "firstName": "Bert",
                "lastName": "Best",
                "email": "Nunc.sollicitudin.commodo@DonecegestasDuis.ca"
            },
            {
                "firstName": "Scott",
                "lastName": "Simpson",
                "email": "Fusce.aliquam@inmolestietortor.ca"
            },
            {
                "firstName": "Jakeem",
                "lastName": "Raymond",
                "email": "rutrum@iaculisnec.com"
            },
            {
                "firstName": "Ezra",
                "lastName": "Rice",
                "email": "lobortis.ultrices.Vivamus@Crassed.ca"
            },
            {
                "firstName": "Alexander",
                "lastName": "Dean",
                "email": "Curabitur.dictum.Phasellus@arcuVestibulumante.ca"
            },
            {
                "firstName": "Bert",
                "lastName": "Rivera",
                "email": "bibendum.fermentum.metus@tinciduntorci.net"
            },
            {
                "firstName": "Wylie",
                "lastName": "Rush",
                "email": "Maecenas@fringilla.ca"
            },
            {
                "firstName": "Russell",
                "lastName": "Schultz",
                "email": "mauris.sit@lacusvestibulumlorem.net"
            },
            {
                "firstName": "Melvin",
                "lastName": "Mcdaniel",
                "email": "Aliquam@Nuncsed.org"
            },
            {
                "firstName": "Gavin",
                "lastName": "Hull",
                "email": "mattis@Naminterdumenim.edu"
            },
            {
                "firstName": "Jameson",
                "lastName": "Downs",
                "email": "risus@inceptoshymenaeos.com"
            },
            {
                "firstName": "Leroy",
                "lastName": "Vaughn",
                "email": "odio.tristique.pharetra@turpis.ca"
            },
            {
                "firstName": "Jackson",
                "lastName": "Parker",
                "email": "non@sem.edu"
            },
            {
                "firstName": "Warren",
                "lastName": "Garcia",
                "email": "non.leo@enimconsequat.org"
            },
            {
                "firstName": "Troy",
                "lastName": "Hensley",
                "email": "non@ac.com"
            },
            {
                "firstName": "Clinton",
                "lastName": "Oneil",
                "email": "aliquet.libero.Integer@litoratorquent.org"
            },
            {
                "firstName": "Leroy",
                "lastName": "Peck",
                "email": "ut.mi@eget.edu"
            },
            {
                "firstName": "Peter",
                "lastName": "Stone",
                "email": "et.ultrices.posuere@loremauctorquis.com"
            },
            {
                "firstName": "Beck",
                "lastName": "Norman",
                "email": "mattis.Cras.eget@estNuncullamcorper.edu"
            },
            {
                "firstName": "Dustin",
                "lastName": "Barton",
                "email": "non.justo@magnaPraesent.co.uk"
            },
            {
                "firstName": "Luke",
                "lastName": "Velasquez",
                "email": "mi@nasceturridiculusmus.co.uk"
            },
            {
                "firstName": "Thane",
                "lastName": "Boyer",
                "email": "libero.Donec@eterosProin.edu"
            },
            {
                "firstName": "Rahim",
                "lastName": "Sawyer",
                "email": "non@Crasegetnisi.ca"
            },
            {
                "firstName": "Ethan",
                "lastName": "Flores",
                "email": "mi.eleifend@imperdietdictum.ca"
            },
            {
                "firstName": "Harper",
                "lastName": "Dickson",
                "email": "magna.Phasellus@mauriselitdictum.com"
            },
            {
                "firstName": "Malachi",
                "lastName": "Mckee",
                "email": "eu.odio.Phasellus@semper.ca"
            },
            {
                "firstName": "Xavier",
                "lastName": "Conner",
                "email": "scelerisque.neque.sed@eu.ca"
            },
            {
                "firstName": "Cody",
                "lastName": "Shaw",
                "email": "in@tellus.com"
            },
            {
                "firstName": "Patrick",
                "lastName": "Gibbs",
                "email": "ullamcorper.velit.in@rutrum.co.uk"
            },
            {
                "firstName": "Dustin",
                "lastName": "Chen",
                "email": "dolor@seddolor.com"
            },
            {
                "firstName": "Thane",
                "lastName": "Douglas",
                "email": "per.inceptos.hymenaeos@ipsumac.com"
            },
            {
                "firstName": "Ferdinand",
                "lastName": "Young",
                "email": "volutpat.nunc.sit@nullaanteiaculis.com"
            },
            {
                "firstName": "Boris",
                "lastName": "Flores",
                "email": "mattis.Cras@urnaet.edu"
            },
            {
                "firstName": "Dennis",
                "lastName": "Shepherd",
                "email": "risus@sit.edu"
            },
            {
                "firstName": "Ferris",
                "lastName": "Ward",
                "email": "arcu.Nunc@nequepellentesque.com"
            },
            {
                "firstName": "Harper",
                "lastName": "Hopkins",
                "email": "in@actellusSuspendisse.net"
            },
            {
                "firstName": "Steel",
                "lastName": "Ramirez",
                "email": "non.sollicitudin.a@Etiambibendumfermentum.org"
            },
            {
                "firstName": "Ryan",
                "lastName": "Marsh",
                "email": "dui@Proin.org"
            },
            {
                "firstName": "Garrison",
                "lastName": "Haynes",
                "email": "condimentum.eget@tempusrisus.net"
            },
            {
                "firstName": "John",
                "lastName": "Leblanc",
                "email": "mauris.elit@doloregestasrhoncus.edu"
            },
            {
                "firstName": "Prescott",
                "lastName": "Hernandez",
                "email": "Nullam@mollis.edu"
            },
            {
                "firstName": "Evan",
                "lastName": "Hayden",
                "email": "vitae@dolorFusce.net"
            },
            {
                "firstName": "Sean",
                "lastName": "Trujillo",
                "email": "nibh.Phasellus@aliquetvel.edu"
            },
            {
                "firstName": "Wyatt",
                "lastName": "Hull",
                "email": "nec@enimNuncut.net"
            },
            {
                "firstName": "Shad",
                "lastName": "Wooten",
                "email": "enim.nec@augueac.net"
            },
            {
                "firstName": "Gregory",
                "lastName": "Hamilton",
                "email": "consectetuer.adipiscing@orciUtsagittis.ca"
            },
            {
                "firstName": "Jeremy",
                "lastName": "Castillo",
                "email": "nibh@tellus.co.uk"
            },
            {
                "firstName": "Akeem",
                "lastName": "Cash",
                "email": "augue.eu.tempor@CuraePhasellusornare.edu"
            },
            {
                "firstName": "Amos",
                "lastName": "Carpenter",
                "email": "Integer.mollis.Integer@elementumpurusaccumsan.ca"
            },
            {
                "firstName": "Barry",
                "lastName": "Hunt",
                "email": "Cum.sociis.natoque@Duisacarcu.co.uk"
            },
            {
                "firstName": "Theodore",
                "lastName": "Herman",
                "email": "sem@convallis.co.uk"
            },
            {
                "firstName": "Cade",
                "lastName": "Wynn",
                "email": "dolor@purusDuiselementum.ca"
            },
            {
                "firstName": "Duncan",
                "lastName": "Wall",
                "email": "sollicitudin@idmollisnec.com"
            },
            {
                "firstName": "Elliott",
                "lastName": "Duke",
                "email": "dolor@aliquam.org"
            },
            {
                "firstName": "Felix",
                "lastName": "Talley",
                "email": "elementum@sapienmolestie.com"
            },
            {
                "firstName": "Quentin",
                "lastName": "Santana",
                "email": "orci@sitamet.edu"
            },
            {
                "firstName": "Melvin",
                "lastName": "Bernard",
                "email": "nulla.vulputate.dui@maurisSuspendissealiquet.net"
            },
            {
                "firstName": "Derek",
                "lastName": "Bates",
                "email": "nulla.Donec.non@natoque.com"
            },
            {
                "firstName": "Gage",
                "lastName": "Mccoy",
                "email": "vitae@antedictummi.edu"
            },
            {
                "firstName": "Emmanuel",
                "lastName": "Riddle",
                "email": "hendrerit.a.arcu@Inornare.edu"
            },
            {
                "firstName": "Luke",
                "lastName": "Joseph",
                "email": "sagittis.placerat.Cras@ategestasa.net"
            },
            {
                "firstName": "Dominic",
                "lastName": "Mcmahon",
                "email": "tincidunt.nunc.ac@aptenttaciti.co.uk"
            }
        ];
    }
}

module.exports = new UserService();