export const TOTAL_STICKERS = 994 // 48 times × 20 + 20 FWC + 14 CC

export const FWC_STICKERS = [
  { id: 0,  nome: 'Emblema oficial' },
  { id: 1,  nome: 'Emblema oficial' },
  { id: 2,  nome: 'Mascotes' },
  { id: 3,  nome: 'Slogan' },
  { id: 4,  nome: 'Bola oficial' },
  { id: 5,  nome: 'Emblema Canadá 🇨🇦' },
  { id: 6,  nome: 'Emblema México 🇲🇽' },
  { id: 7,  nome: 'Emblema EUA 🇺🇸' },
  { id: 8,  nome: 'Itália 1934' },
  { id: 9,  nome: 'Brasil 1950' },
  { id: 10, nome: 'Suíça 1954' },
  { id: 11, nome: 'Chile 1962' },
  { id: 12, nome: 'México 1970' },
  { id: 13, nome: 'Alemanha 1974' },
  { id: 14, nome: 'México 1986' },
  { id: 15, nome: 'EUA 1994' },
  { id: 16, nome: 'Coreia-Japão 2002' },
  { id: 17, nome: 'Alemanha 2006' },
  { id: 18, nome: 'Brasil 2014' },
  { id: 19, nome: 'Qatar 2022' },
]

export const CC_STICKERS = [
  { id: 1,  nome: 'Lamine Yamal' },
  { id: 2,  nome: 'Joshua Kimmich' },
  { id: 3,  nome: 'Harry Kane' },
  { id: 4,  nome: 'Santiago Giménez' },
  { id: 5,  nome: 'Joško Gvardiol' },
  { id: 6,  nome: 'Federico Valverde' },
  { id: 7,  nome: 'Jefferson Lerma' },
  { id: 8,  nome: 'Enner Valencia' },
  { id: 9,  nome: 'Gabriel Magalhães' },
  { id: 10, nome: 'Virgil van Dijk' },
  { id: 11, nome: 'Alphonso Davies' },
  { id: 12, nome: 'Emiliano Martínez' },
  { id: 13, nome: 'Raúl Jiménez' },
  { id: 14, nome: 'Lautaro Martínez' },
]

export const GROUPS_DATA = [
  {
    group: 'A',
    teams: [
      {
        code: 'MEX', name: 'México', flag: '🇲🇽',
        players: ['Luis Malagón','Johan Vásquez','Jorge Sánchez','César Montes','Jesús Gallardo','Israel Reyes','Diego Lainez','Carlos Rodríguez','Edson Álvarez','Orbelín Pineda','Marcel Ruiz','Érick Sánchez','Hirving Lozano','Santiago Giménez','Raúl Jiménez','Alexis Vega','Roberto Alvarado','César Huerta'],
      },
      {
        code: 'RSA', name: 'África do Sul', flag: '🇿🇦',
        players: ['Ronwen Williams','Sipho Chaine','Aubrey Modiba','Samukele Kabini','Mbekezeli Mbokazi','Khulumani Ndamane','Siyabonga Ngezana','Khuliso Mudau','Nkosinathi Sibisi','Teboho Mokoena','Thalente Mbatha','Bathuisi Aubaas','Yaya Sithole','Sipho Mbule','Lyle Foster','Ioraam Rayners','Mohau Nkota','Oswin Appolis'],
      },
      {
        code: 'KOR', name: 'Coreia do Sul', flag: '🇰🇷',
        players: ['Hyeon-woo Jo','Seung-Gyu Kim','Min-jae Kim','Yu-min Cho','Young-woo Seol','Han-beom Lee','Tae-seok Lee','Myung-jae Lee','Jae-sung Lee','In-beom Hwang','Kang-in Lee','Seung-ho Paik','Jens Castrop','Dong-gyeong Lee','Gue-sung Cho','Heung-min Son','Hee-chan Hwang','Hyeon-Gyu Oh'],
      },
      {
        code: 'CZE', name: 'Rep. Tcheca', flag: '🇨🇿',
        players: ['Matěj Kovář','Jindřich Staněk','Ladislav Krejčí','Vladimír Coufal','Jaroslav Zelený','Tomáš Holeš','David Zima','Michal Sadílek','Lukáš Provod','Lukáš Červ','Tomáš Souček','Pavel Šulc','Matěj Vydra','Vasil Kušej','Tomáš Chorý','Václav Černý','Adam Hložek','Patrik Schick'],
      },
    ],
  },
  {
    group: 'B',
    teams: [
      {
        code: 'CAN', name: 'Canadá', flag: '🇨🇦',
        players: ['Dayne St. Clair','Alphonso Davies','Alistair Johnston','Samuel Adekugbe','Richie Laryea','Derek Cornelius','Moïse Bombito','Kamal Miller','Stephen Eustáquio','Ismaël Koné','Jonathan Osorio','Jacob Shaffelburg','Mathieu Choinière','Niko Sigur','Tajon Buchanan','Liam Millar','Cyle Larin','Jonathan David'],
      },
      {
        code: 'BIH', name: 'Bósnia-Herz.', flag: '🇧🇦',
        players: ['Nikola Vasilj','Amar Dedić','Sead Kolašinac','Tarik Muharemović','Nihad Mujakić','Nikola Katić','Amir Hadžiahmetović','Benjamin Tahirović','Armin Gigović','Ivan Šunjić','Ivan Bašić','Dženis Burnić','Esmir Bajraktarević','Amar Memić','Ermedin Demirović','Edin Džeko','Samed Baždar','Haris Tabaković'],
      },
      {
        code: 'QAT', name: 'Catar', flag: '🇶🇦',
        players: ['Meshaal Barsham','Sultan Albrake','Lucas Mendes','Homam Ahmed','Boualem Khoukhi','Pedro Miguel','Tarek Salman','Mohamed Al-Mannai','Karim Boudiaf','Assim Madibo','Ahmed Fatehi','Mohammed Waad','Abdulaziz Hatem','Hassan Al-Haydos','Edmilson Junior','Akram Hassan Afif','Ahmed Al Ganehi','Almoez Ali'],
      },
      {
        code: 'SUI', name: 'Suíça', flag: '🇨🇭',
        players: ['Gregor Kobel','Yvon Mvogo','Manuel Akanji','Ricardo Rodriguez','Nico Elvedi','Aurèle Amenda','Silvan Widmer','Granit Xhaka','Denis Zakaria','Remo Freuler','Fabian Rieder','Ardon Jashari','Johan Manzambi','Michel Aebischer','Breel Embolo','Ruben Vargas','Dan Ndoye','Zeki Amdouni'],
      },
    ],
  },
  {
    group: 'C',
    teams: [
      {
        code: 'BRA', name: 'Brasil', flag: '🇧🇷',
        players: ['Alisson','Bento','Marquinhos','Éder Militão','Gabriel Magalhães','Danilo','Wesley','Lucas Paquetá','Casemiro','Bruno Guimarães','Luiz Henrique','Vinícius Júnior','Rodrygo','João Pedro','Matheus Cunha','Gabriel Martinelli','Raphinha','Estêvão'],
      },
      {
        code: 'MAR', name: 'Marrocos', flag: '🇲🇦',
        players: ['Yassine Bounou','Munir El Kajoui','Achraf Hakimi','Noussair Mazraoui','Nayef Aguerd','Romain Saïss','Jawad El Yamiq','Adam Masina','Sofyan Amrabat','Azzedine Ounahi','Eliesse Ben Seghir','Bilal El Khannouss','Ismael Saibari','Youssef En-Nesyri','Abde Ezzalzouli','Soufiane Rahimi','Brahim Díaz','Ayoub El Kaabi'],
      },
      {
        code: 'HAI', name: 'Haiti', flag: '🇭🇹',
        players: ['Johny Placide','Carlens Arcus','Martin Expérience','Jean-Kevin Duverne','Ricardo Adé','Duke Lacroix','Garven Metusala','Hannes Delcroix','Leverton Pierre','Danley Jean Jacques','Jean-Ricner Bellegarde','Christopher Attys','Derrick Etienne Jr.','Josué Casimir','Ruben Providence','Duckens Nazon','Louicius Deedson','Frantzdy Pierrot'],
      },
      {
        code: 'SCO', name: 'Escócia', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        players: ['Angus Gunn','Jack Hendry','Kieran Tierney','Aaron Hickey','Andrew Robertson','Scott McKenna','John Souttar','Anthony Ralston','Grant Hanley','Scott McTominay','Billy Gilmour','Lewis Ferguson','Ryan Christie','Kenny McLean','John McGinn','Lyndon Dykes','Che Adams','Ben Doak'],
      },
    ],
  },
  {
    group: 'D',
    teams: [
      {
        code: 'USA', name: 'Estados Unidos', flag: '🇺🇸',
        players: ['Matt Freese','Chris Richards','Tim Ream','Mark McKenzie','Alex Freeman','Antonee Robinson','Tyler Adams','Tanner Tessmann','Weston McKennie','Christian Roldan','Timothy Weah','Diego Luna','Malik Tillman','Christian Pulisic','Brenden Aaronson','Ricardo Pepi','Haji Wright','Folarin Balogun'],
      },
      {
        code: 'PAR', name: 'Paraguai', flag: '🇵🇾',
        players: ['Roberto Fernández','Orlando Gill','Gustavo Gómez','Fabián Balbuena','Juan José Cáceres','Omar Alderete','Junior Alonso','Mathías Villasanti','Diego Gómez','Damián Bobadilla','Andrés Cubas','Matías Galarza','Julio Enciso','Alejandro Romero Gamarra','Miguel Almirón','Ramón Sosa','Ángel Romero','Antonio Sanabria'],
      },
      {
        code: 'AUS', name: 'Austrália', flag: '🇦🇺',
        players: ['Mathew Ryan','Joe Gauci','Harry Souttar','Alessandro Circati','Jordan Bos','Aziz Behich','Cameron Burgess','Lewis Miller','Milos Degenek','Jackson Irvine','Riley McGree','Aiden O\'Neill','Connor Metcalfe','Patrick Yazbek','Craig Goodwin','Kusini Yengi','Nestory Irankunda','Mohamed Touré'],
      },
      {
        code: 'TUR', name: 'Turquia', flag: '🇹🇷',
        players: ['Uğurcan Çakır','Mert Müldür','Zeki Çelik','Abdülkerim Bardakcı','Çağlar Söyüncü','Merih Demiral','Ferdi Kadıoğlu','Kaan Ayhan','İsmail Yüksek','Hakan Çalhanoğlu','Orkun Kökçü','Arda Güler','İrfan Can Kahveci','Yunus Akgün','Can Uzun','Barış Alper Yılmaz','Kerem Aktürkoğlu','Kenan Yıldız'],
      },
    ],
  },
  {
    group: 'E',
    teams: [
      {
        code: 'GER', name: 'Alemanha', flag: '🇩🇪',
        players: ['Marc-André ter Stegen','Jonathan Tah','David Raum','Nico Schlotterbeck','Antonio Rüdiger','Waldemar Anton','Ridle Baku','Maximilian Mittelstädt','Joshua Kimmich','Florian Wirtz','Felix Nmecha','Leon Goretzka','Jamal Musiala','Serge Gnabry','Kai Havertz','Leroy Sané','Karim Adeyemi','Nick Woltemade'],
      },
      {
        code: 'CUW', name: 'Curaçao', flag: '🇨🇼',
        players: ['Eloy Room','Armando Obispo','Sherel Floranus','Jurien Gaari','Joshua Brenet','Roshon Van Eijma','Shurandy Sambo','Livano Comenencia','Godfried Roemeratoe','Juninho Bacuna','Leandro Bacuna','Tahith Chong','Kenji Gorré','Jearl Margaritha','Jurgen Locadia','Jeremy Antonisse','Gervane Kastaneer','Sontje Hansen'],
      },
      {
        code: 'CIV', name: 'Costa do Marfim', flag: '🇨🇮',
        players: ['Yahia Fofana','Ghislain Konan','Wilfried Singo','Odilon Kossounou','Evan Ndicka','Willy Boly','Emmanuel Agbadou','Ousmane Diomande','Franck Kessié','Seko Fofana','Ibrahim Sangaré','Jean-Philippe Gbamin','Amad Diallo','Sébastien Haller','Simon Adingra','Yan Diomande','Evann Guessand','Oumar Diakité'],
      },
      {
        code: 'ECU', name: 'Equador', flag: '🇪🇨',
        players: ['Hernán Galíndez','Gonzalo Valle','Piero Hincapié','Pervis Estupiñán','Willian Pacho','Ángelo Preciado','Joel Ordóñez','Moisés Caicedo','Alan Franco','Kendry Páez','Pedro Vite','John Yeboah','Leonardo Campana','Gonzalo Plata','Nilson Angulo','Alan Minda','Kevin Rodríguez','Enner Valencia'],
      },
    ],
  },
  {
    group: 'F',
    teams: [
      {
        code: 'NED', name: 'Holanda', flag: '🇳🇱',
        players: ['Bart Verbruggen','Virgil van Dijk','Micky van de Ven','Jurriën Timber','Denzel Dumfries','Nathan Aké','Jeremie Frimpong','Jan Paul van Hecke','Tijjani Reijnders','Ryan Gravenberch','Teun Koopmeiners','Frenkie de Jong','Xavi Simons','Justin Kluivert','Memphis Depay','Donyell Malen','Wout Weghorst','Cody Gakpo'],
      },
      {
        code: 'JPN', name: 'Japão', flag: '🇯🇵',
        players: ['Zion Suzuki','Henry Heroki Mochizuki','Ayumu Seko','Junnosuke Suzuki','Shogo Taniguchi','Tsuyoshi Watanabe','Kaishu Sano','Yuki Soma','Ao Tanaka','Daichi Kamada','Takefusa Kubo','Ritsu Doan','Keito Nakamura','Takumi Minamino','Shuto Machino','Junya Ito','Koki Ogawa','Ayase Ueda'],
      },
      {
        code: 'SWE', name: 'Suécia', flag: '🇸🇪',
        players: ['Victor Johansson','Isak Hien','Gabriel Gudmundsson','Emil Holm','Victor Nilsson Lindelöf','Gustaf Lagerbielke','Lucas Bergvall','Hugo Larsson','Jesper Karlström','Yasin Ayari','Mattias Svanberg','Daniel Svensson','Ken Sema','Roony Bardghji','Dejan Kulusevski','Anthony Elanga','Alexander Isak','Viktor Gyökeres'],
      },
      {
        code: 'TUN', name: 'Tunísia', flag: '🇹🇳',
        players: ['Bechir Ben Said','Aymen Dahmen','Van Valery','Montassar Talbi','Yassine Meriah','Ali Abdi','Dylan Bronn','Ellyes Skhiri','Aissa Laidouni','Ferjani Sassi','Mohamed Ali Ben Romdhane','Hannibal Mejbri','Elias Achouri','Elias Saad','Hazem Mastouri','Ismael Gharbi','Sayfallah Ltaief','Naim Sliti'],
      },
    ],
  },
  {
    group: 'G',
    teams: [
      {
        code: 'BEL', name: 'Bélgica', flag: '🇧🇪',
        players: ['Thibaut Courtois','Arthur Theate','Timothy Castagne','Zeno Debast','Brandon Mechele','Maxim De Cuyper','Thomas Meunier','Youri Tielemans','Amadou Onana','Nicolas Raskin','Alexis Saelemaekers','Hans Vanaken','Kevin De Bruyne','Jérémy Doku','Charles De Ketelaere','Leandro Trossard','Loïs Openda','Romelu Lukaku'],
      },
      {
        code: 'EGY', name: 'Egito', flag: '🇪🇬',
        players: ['Mohamed El Shenawy','Mohamed Hany','Mohamed Hamdy','Yasser Ibrahim','Khaled Sobhi','Ramy Rabia','Hossam Abdelmaguid','Ahmed Fatouh','Marwan Attia','Zizo','Hamdy Fathy','Mohamed Lasheen','Emam Ashour','Osama Faisal','Mohamed Salah','Mostafa Mohamed','Trezeguet','Omar Marmoush'],
      },
      {
        code: 'IRN', name: 'Irã', flag: '🇮🇷',
        players: ['Alireza Beiranvand','Morteza Pouraliganji','Ehsan Hajsafi','Milad Mohammadi','Shoja Khalilzadeh','Ramin Rezaeian','Hossein Kanaani','Sadegh Moharrami','Saleh Hardani','Saeed Ezatolahi','Saman Ghoddos','Omid Noorafkan','Roozbeh Cheshmi','Mohammad Mohebi','Sardar Azmoun','Mehdi Taremi','Alireza Jahanbakhsh','Ali Gholizadeh'],
      },
      {
        code: 'NZL', name: 'Nova Zelândia', flag: '🇳🇿',
        players: ['Max Crocombe-Payne','Alex Paulsen','Michael Boxall','Liberato Cacace','Tim Payne','Tyler Bindon','Francis de Vries','Finn Surman','Joe Bell','Sarpreet Singh','Ryan Thomas','Matthew Garbett','Marko Stamenić','Ben Old','Chris Wood','Elijah Just','Callum McCowatt','Kosta Barbarouses'],
      },
    ],
  },
  {
    group: 'H',
    teams: [
      {
        code: 'ESP', name: 'Espanha', flag: '🇪🇸',
        players: ['Unai Simón','Robin Le Normand','Aymeric Laporte','Dean Huijsen','Pedro Porro','Dani Carvajal','Marc Cucurella','Martín Zubimendi','Rodri','Pedri','Fabián Ruiz','Mikel Merino','Lamine Yamal','Dani Olmo','Nico Williams','Ferran Torres','Álvaro Morata','Mikel Oyarzabal'],
      },
      {
        code: 'CPV', name: 'Cabo Verde', flag: '🇨🇻',
        players: ['Vozinha','Logan Costa','Pico','Diney','Steven Moreira','Wagner Pina','João Paulo','Yannick Semedo','Kevin Pina','Patrick Andrade','Jamiro Monteiro','Deroy Duarte','Garry Rodrigues','Jovane Cabral','Ryan Mendes','Dailon Livramento','Willy Semedo','Bebé'],
      },
      {
        code: 'KSA', name: 'Arábia Saudita', flag: '🇸🇦',
        players: ['Nawaf Alaqidi','Abdulrahman Al-Sanbi','Saud Abdulhamid','Nawaf Boushal','Jihad Thakri','Moteb Al-Harbi','Hassan Altambakti','Musab Aljuwayr','Ziyad Aljohani','Abdullah Alkhaibari','Nasser Aldawsari','Saleh Abu Alshamat','Marwan Alsahafi','Salem Aldawsari','Abdulrahman Al-Aboud','Feras Albrikan','Saleh Alshehri','Abdullah Al-Hamdan'],
      },
      {
        code: 'URU', name: 'Uruguai', flag: '🇺🇾',
        players: ['Sergio Rochet','Santiago Mele','Ronald Araujo','José María Giménez','Sebastian Caceres','Mathias Olivera','Guillermo Varela','Nahitan Nandez','Federico Valverde','Giorgian De Arrascaeta','Rodrigo Bentancur','Manuel Ugarte','Nicolás de la Cruz','Maxi Araujo','Darwin Núñez','Federico Viñas','Rodrigo Aguirre','Facundo Pellistri'],
      },
    ],
  },
  {
    group: 'I',
    teams: [
      {
        code: 'FRA', name: 'França', flag: '🇫🇷',
        players: ['Mike Maignan','Theo Hernández','William Saliba','Jules Koundé','Ibrahima Konaté','Dayot Upamecano','Lucas Digne','Aurélien Tchouaméni','Eduardo Camavinga','Manu Koné','Adrien Rabiot','Michael Olise','Ousmane Dembélé','Bradley Barcola','Désiré Doué','Kingsley Coman','Hugo Ekitike','Kylian Mbappé'],
      },
      {
        code: 'SEN', name: 'Senegal', flag: '🇸🇳',
        players: ['Eduardo Mendy','Yehvann Diouf','Moussa Niakhaté','Abdoulaye Seck','Ismail Jakobs','El Hadji Malick Diouf','Kalidou Koulibaly','Idrissa Gana Gueye','Pape Matar Sarr','Pape Gueye','Habib Diarra','Lamine Camara','Sadio Mané','Ismaïla Sarr','Boulaye Dia','Iliman Ndiaye','Nicolas Jackson','Krepin Diatta'],
      },
      {
        code: 'IRQ', name: 'Iraque', flag: '🇮🇶',
        players: ['Jalal Hassan','Rebin Sulaka','Hussein Ali','Akam Hashem','Merchas Doski','Zaid Tahseen','Manaf Younis','Zidane Iqbal','Amir Al-Ammari','Ibrahim Bayesh','Ali Jasim','Youssef Amyn','Aimar Sher','Marko Farji','Osama Rashid','Ali Al-Hamadi','Aymen Hussein','Mohanad Ali'],
      },
      {
        code: 'NOR', name: 'Noruega', flag: '🇳🇴',
        players: ['Ørjan Nyland','Julian Ryerson','Leo Østigård','Kristoffer Ajer','Marcus Holmgren Pedersen','David Møller Wolfe','Torbjørn Heggem','Morten Thorsby','Martin Ødegaard','Sander Berge','Andreas Schjelderup','Patrick Berg','Erling Haaland','Alexander Sørloth','Aron Dønnum','Jørgen Strand Larsen','Antonio Nusa','Oscar Bobb'],
      },
    ],
  },
  {
    group: 'J',
    teams: [
      {
        code: 'ARG', name: 'Argentina', flag: '🇦🇷',
        players: ['Emiliano Martínez','Nahuel Molina','Cristian Romero','Nicolás Otamendi','Nicolás Tagliafico','Leonardo Balerdi','Enzo Fernández','Alexis Mac Allister','Rodrigo De Paul','Exequiel Palacios','Leandro Paredes','Nico Paz','Franco Mastantuono','Nico González','Lionel Messi','Lautaro Martínez','Julián Álvarez','Giuliano Simeone'],
      },
      {
        code: 'ALG', name: 'Argélia', flag: '🇩🇿',
        players: ['Alexis Guendouz','Ramy Bensebaini','Youcef Atal','Rayan Aït-Nouri','Mohamed Amine Tougai','Aïssa Mandi','Ismaël Bennacer','Houssem Aouar','Hicham Boudaoui','Ramiz Zerrouki','Nabil Bentaleb','Farés Chaïbi','Riyad Mahrez','Said Benrahma','Anis Hadj Moussa','Amine Gouiri','Baghdad Bounedjah','Mohammed Amoura'],
      },
      {
        code: 'AUT', name: 'Áustria', flag: '🇦🇹',
        players: ['Alexander Schlager','Patrick Pentz','David Alaba','Kevin Danso','Philipp Lienhart','Stefan Posch','Phillip Mwene','Alexander Prass','Xaver Schlager','Marcel Sabitzer','Konrad Laimer','Florian Grillitsch','Nicolas Seiwald','Romano Schmid','Patrick Wimmer','Christoph Baumgartner','Michael Gregoritsch','Marko Arnautović'],
      },
      {
        code: 'JOR', name: 'Jordânia', flag: '🇯🇴',
        players: ['Yazeed Abulaila','Ihsan Haddad','Mohammad Abu Hashish','Yazan Al-Arab','Abdallah Nasib','Saleem Obaid','Mohammad Abualnadi','Ibrahim Saadeh','Nizar Al-Rashdan','Noor Al-Rawabdeh','Mohannad Abu Taha','Baha Faisal','Ahmad Moussa','Oday Dabbagh','Rami Hamadeh','Musa Al-Taamari','Zaid Al-Hamdanin','Mahmoud Al-Mardi'],
      },
    ],
  },
  {
    group: 'K',
    teams: [
      {
        code: 'POR', name: 'Portugal', flag: '🇵🇹',
        players: ['Diogo Costa','José Sá','Rúben Dias','João Cancelo','Diogo Dalot','Nuno Mendes','Gonçalo Inácio','Bernardo Silva','Bruno Fernandes','Rúben Neves','Vitinha','João Neves','Cristiano Ronaldo','Francisco Trincão','João Félix','Gonçalo Ramos','Pedro Neto','Rafael Leão'],
      },
      {
        code: 'COD', name: 'RD Congo', flag: '🇨🇩',
        players: ['Lionel Mpasi','Aaron Wan-Bissaka','Axel Tuanzebe','Arthur Masuaku','Chancel Mbemba','Joris Kayembe','Charles Pickel','Ngal\'ayel Mukau','Edo Kayembe','Samuel Moutoussamy','Noah Sadiki','Théo Bongonda','Meschak Elia','Yoane Wissa','Brian Cipenga','Fiston Mayele','Cédric Bakambu','Nathanaël Mbuku'],
      },
      {
        code: 'UZB', name: 'Uzbequistão', flag: '🇺🇿',
        players: ['Utkir Yusupov','Farrukh Sayfiev','Sherzod Nasrullaev','Umar Eshmurodov','Husniddin Aliqulov','Rustamjon Ashurmatov','Khojiakbar Alijonov','Abdukodir Khusanov','Odiljon Hamrobekov','Otabek Shukurov','Jamshid Iskanderov','Azizbek Turgunboev','Khojimat Erkinov','Eldor Shomurodov','Oston Urunov','Jaloliddin Masharipov','Igor Sergeev','Abbosbek Fayzullaev'],
      },
      {
        code: 'COL', name: 'Colômbia', flag: '🇨🇴',
        players: ['Camilo Vargas','David Ospina','Dávinson Sánchez','Yerry Mina','Daniel Muñoz','Johan Mojica','Jhon Lucumí','Santiago Arias','Jefferson Lerma','Richard Ríos','Kevin Castaño','James Rodríguez','Juan Fernando Quintero','Jorge Carrascal','Jhon Arias','Jhon Córdoba','Rafael Borré','Luis Díaz'],
      },
    ],
  },
  {
    group: 'L',
    teams: [
      {
        code: 'ENG', name: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
        players: ['Jordan Pickford','John Stones','Marc Guéhi','Ezri Konsa','Trent Alexander-Arnold','Reece James','Dan Burn','Jordan Henderson','Declan Rice','Jude Bellingham','Cole Palmer','Morgan Rogers','Anthony Gordon','Phil Foden','Bukayo Saka','Harry Kane','Marcus Rashford','Ollie Watkins'],
      },
      {
        code: 'CRO', name: 'Croácia', flag: '🇭🇷',
        players: ['Dominik Livaković','Duje Ćaleta-Car','Joško Gvardiol','Josip Stanišić','Luka Vušković','Josip Šutalo','Kristijan Jakić','Luka Modrić','Mateo Kovačić','Martin Baturina','Lovro Majer','Mario Pašalić','Petar Sučić','Ivan Perišić','Nikola Vlašić','Ante Budimir','Andrej Kramarić','Franjo Ivanović'],
      },
      {
        code: 'GHA', name: 'Gana', flag: '🇬🇭',
        players: ['Lawrence Ati Zigi','Tariq Lamptey','Mohammed Salisu','Alidu Seidu','Alexander Djiku','Gideon Mensah','Caleb Yirenkyi','Abdul Fatawu Issahaku','Thomas Partey','Salis Abdul Samed','Kamaldeen Sulemana','Mohammed Kudus','Iñaki Williams','Jordan Ayew','André Ayew','Joseph Paintsil','Osman Bukari','Antoine Semenyo'],
      },
      {
        code: 'PAN', name: 'Panamá', flag: '🇵🇦',
        players: ['Orlando Mosquera','Luis Mejía','Fidel Escobar','Andrés Andrade','Michael Amir Murillo','Eric Davis','José Córdoba','César Blackman','Cristian Martínez','Aníbal Godoy','Adalberto Carrasquilla','Édgar Bárcenas','Carlos Harvey','Ismael Díaz','José Fajardo','Cecilio Waterman','José Luiz Rodríguez','Alberto Quintero'],
      },
    ],
  },
]
