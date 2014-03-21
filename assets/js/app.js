var table = {
	Hydrogen: {
		n: 1,
		s: 'H',
		w: 1.00794,
		c: 'onm',
		e: [1]
	},
	Helium: {
		n: 2,
		s: 'He',
		w: 4.002602,
		c: 'ng',
		e: [2]
	},
	Lithium: {
		n: 3,
		s: 'Li',
		w: 6.941,
		c: 'am',
		e: [2,1]
	},
	Beryllium: {
		n: 4,
		s: 'Be',
		w: 9.012182,
		c: 'aem',
		e: [2,2]
	},
	Boron: {
		n: 5,
		s: 'B',
		w: 10.811,
		c: 'me',
		e: [2,3]
	},
	Carbon: {
		n: 6,
		s: 'C',
		w: 12.0107,
		c: 'onm',
		e: [2,4]
	},
	Nitrogen: {
		n: 7,
		s: 'N',
		w: 14.0067,
		c: 'onm',
		e: [2,5]
	},
	Oxygen: {
		n: 8,
		s: 'O',
		w: 15.9994,
		c: 'onm',
		e: [2,6]
	},
	Fluorine: {
		n: 9,
		s: 'F',
		w: 18.9984032,
		c: 'ha',
		e: [2,7]
	},
	Neon: {
		n: 10,
		s: 'Ne',
		w: 20.1797,
		c: 'ng',
		e: [2,8]
	},
	Sodium: {
		n: 11,
		s: 'Na',
		w: 22.98976928,
		c: 'am',
		e: [2,8,1]
	},
	Magnesium: {
		n: 12,
		s: 'Mg',
		w: 24.305,
		c: 'aem',
		e: [2,8,2]
	},
	Aluminium: {
		n: 13,
		s: 'Al',
		w: 26.9815386,
		c: 'ptm',
		e: [2,8,3]
	},
	Silicon: {
		n: 14,
		s: 'Si',
		w: 28.0855,
		c: 'me',
		e: [2,8,4]
	},
	Phosphorus: {
		n: 15,
		s: 'P',
		w: 30.973762,
		c: 'onm',
		e: [2,8,5]
	},
	Sulfur: {
		n: 16,
		s: 'S',
		w: 32.065,
		c: 'onm',
		e: [2,8,6]
	},
	Chlorine: {
		n: 17,
		s: 'Cl',
		w: 35.453,
		c: 'ha',
		e: [2,8,7]
	},
	Argon: {
		n: 18,
		s: 'Ar',
		w: 39.948,
		c: 'ng',
		e: [2,8,8]
	},
	Potassium: {
		n: 19,
		s: 'K',
		w: 39.0983,
		c: 'am',
		e: [2,8,8,1]
	},
	Calcium: {
		n: 20,
		s: 'Ca',
		w: 40.078,
		c: 'aem',
		e: [2,8,8,2]
	},
	Scandium: {
		n: 21,
		s: 'Sc',
		w: 44.955912,
		c: 'tm',
		e: [2,8,9,2]
	},
	Titanium: {
		n: 22,
		s: 'Ti',
		w: 47.867,
		c: 'tm',
		e: [2,8,10,2]
	},
	Vanadium: {
		n: 23,
		s: 'V',
		w: 50.9415,
		c: 'tm',
		e: [2,8,11,2]
	},
	Chromium: {
		n: 24,
		s: 'Cr',
		w: 51.9961,
		c: 'tm',
		e: [2,8,13,1]
	},
	Manganese: {
		n: 25,
		s: 'Mn',
		w: 54.938045,
		c: 'tm',
		e: [2,8,13,2]
	},
	Iron: {
		n: 26,
		s: 'Fe',
		w: 55.845,
		c: 'tm',
		e: [2,8,14,2]
	},
	Cobalt: {
		n: 27,
		s: 'Co',
		w: 58.933195,
		c: 'tm',
		e: [2,8,15,2]
	},
	Nickel: {
		n: 28,
		s: 'Ni',
		w: 58.6934,
		c: 'tm',
		e: [2,8,16,2]
	},
	Copper: {
		n: 29,
		s: 'Cu',
		w: 63.546,
		c: 'tm',
		e: [2,8,18,1]
	},
	Zinc: {
		n: 30,
		s: 'Zn',
		w: 65.38,
		c: 'tm',
		e: [2,8,18,2]
	},
	Gallium: {
		n: 31,
		s: 'Ga',
		w: 69.723,
		c: 'ptm',
		e: [2,8,18,3]
	},
	Germanium: {
		n: 32,
		s: 'Ge',
		w: 72.63,
		c: 'me',
		e: [2,8,18,4]
	},
	Arsenic: {
		n: 33,
		s: 'As',
		w: 74.9216,
		c: 'me',
		e: [2,8,18,5]
	},
	Selenium: {
		n: 34,
		s: 'Se',
		w: 78.96,
		c: 'onm',
		e: [2,8,18,6]
	},
	Bromine: {
		n: 35,
		s: 'Br',
		w: 79.904,
		c: 'ha',
		e: [2,8,18,7]
	},
	Krypton: {
		n: 36,
		s: 'Kr',
		w: 83.798,
		c: 'ng',
		e: [2,8,18,8]
	},
	Rubidium: {
		n: 37,
		s: 'Rb',
		w: 85.4678,
		c: 'am',
		e: [2,8,18,8,1]
	},
	Strontium: {
		n: 38,
		s: 'Sr',
		w: 87.62,
		c: 'aem',
		e: [2,8,18,8,2]
	},
	Yttrium: {
		n: 39,
		s: 'Y',
		w: 88.90585,
		c: 'tm',
		e: [2,8,18,9,2]
	},
	Zirconium: {
		n: 40,
		s: 'Zr',
		w: 91.224,
		c: 'tm',
		e: [2,8,18,10,2]
	},
	Niobium: {
		n: 41,
		s: 'Nb',
		w: 92.90638,
		c: 'tm',
		e: [2,8,18,12,1]
	},
	Molybdenum: {
		n: 42,
		s: 'Mo',
		w: 95.96,
		c: 'tm',
		e: [2,8,18,13,1]
	},
	Technetium: {
		n: 43,
		s: 'Tc',
		w: (98),
		c: 'tm',
		e: [2,8,18,13,2]
	},
	Ruthenium: {
		n: 44,
		s: 'Ru',
		w: 101.07,
		c: 'tm',
		e: [2,8,18,15,1]
	},
	Rhodium: {
		n: 45,
		s: 'Rh',
		w: 102.9055,
		c: 'tm',
		e: [2,8,18,16,1]
	},
	Palladium: {
		n: 46,
		s: 'Pd',
		w: 106.42,
		c: 'tm',
		e: [2,8,18,18]
	},
	Silver: {
		n: 47,
		s: 'Ag',
		w: 107.8682,
		c: 'tm',
		e: [2,8,18,18,1]
	},
	Cadmium: {
		n: 48,
		s: 'Cd',
		w: 112.411,
		c: 'tm',
		e: [2,8,18,18,2]
	},
	Indium: {
		n: 49,
		s: 'In',
		w: 114.818,
		c: 'ptm',
		e: [2,8,18,18,3]
	},
	Tin: {
		n: 50,
		s: 'Sn',
		w: 118.71,
		c: 'ptm',
		e: [2,8,18,18,4]
	},
	Antimony: {
		n: 51,
		s: 'Sb',
		w: 121.76,
		c: 'me',
		e: [2,8,18,18,5]
	},
	Tellurium: {
		n: 52,
		s: 'Te',
		w: 127.6,
		c: 'me',
		e: [2,8,18,18,6]
	},
	Iodine: {
		n: 53,
		s: 'I',
		w: 126.90447,
		c: 'ha',
		e: [2,8,18,18,7]
	},
	Xenon: {
		n: 54,
		s: 'Xe',
		w: 131.293,
		c: 'ng',
		e: [2,8,18,18,8]
	},
	Caesium: {
		n: 55,
		s: 'Cs',
		w: 132.9054519,
		c: 'am',
		e: [2,8,18,18,8,1]
	},
	Barium: {
		n: 56,
		s: 'Ba',
		w: 137.327,
		c: 'aem',
		e: [2,8,18,18,8,2]
	},
	Lanthanum: {
		n: 57,
		s: 'La',
		w: 138.90547,
		c: 'la',
		e: [2,8,18,18,9,2]
	},
	Cerium: {
		n: 58,
		s: 'Ce',
		w: 140.116,
		c: 'la',
		e: [2,8,18,19,9,2]
	},
	Praseodymium: {
		n: 59,
		s: 'Pr',
		w: 140.90765,
		c: 'la',
		e: [2,8,18,21,8,2]
	},
	Neodymium: {
		n: 60,
		s: 'Nd',
		w: 144.242,
		c: 'la',
		e: [2,8,18,22,8,2]
	},
	Promethium: {
		n: 61,
		s: 'Pm',
		w: '(145)',
		c: 'la',
		e: [2,8,18,23,8,2]
	},
	Samarium: {
		n: 62,
		s: 'Sm',
		w: 150.36,
		c: 'la',
		e: [2,8,18,24,8,2]
	},
	Europium: {
		n: 63,
		s: 'Eu',
		w: 151.964,
		c: 'la',
		e: [2,8,18,25,8,2]
	},
	Gadolinium: {
		n: 64,
		s: 'Gd',
		w: 157.25,
		c: 'la',
		e: [2,8,18,25,9,2]
	},
	Terbium: {
		n: 65,
		s: 'Tb',
		w: 158.92535,
		c: 'la',
		e: [2,8,18,27,8,2]
	},
	Dysprosium: {
		n: 66,
		s: 'Dy',
		w: 162.5,
		c: 'la',
		e: [2,8,18,28,8,2]
	},
	Holmium: {
		n: 67,
		s: 'Ho',
		w: 164.93032,
		c: 'la',
		e: [2,8,18,29,8,2]
	},
	Erbium: {
		n: 68,
		s: 'Er',
		w: 167.259,
		c: 'la',
		e: [2,8,18,30,8,2]
	},
	Thulium: {
		n: 69,
		s: 'Tm',
		w: 168.93421,
		c: 'la',
		e: [2,8,18,31,8,2]
	},
	Ytterbium: {
		n: 70,
		s: 'Yb',
		w: 173.054,
		c: 'la',
		e: [2,8,18,32,8,2]
	},
	Lutetium: {
		n: 71,
		s: 'Lu',
		w: 174.9668,
		c: 'la',
		e: [2,8,18,32,9,2]
	},
	Hafnium: {
		n: 72,
		s: 'Hf',
		w: 178.49,
		c: 'tm',
		e: [2,8,18,32,10,2]
	},
	Tantalum: {
		n: 73,
		s: 'Ta',
		w: 180.94788,
		c: 'tm',
		e: [2,8,18,32,11,2]
	},
	Tungsten: {
		n: 74,
		s: 'W',
		w: 183.84,
		c: 'tm',
		e: [2,8,18,32,12,2]
	},
	Rhenium: {
		n: 75,
		s: 'Re',
		w: 186.207,
		c: 'tm',
		e: [2,8,18,32,13,2]
	},
	Osmium: {
		n: 76,
		s: 'Os',
		w: 190.23,
		c: 'tm',
		e: [2,8,18,32,14,2]
	},
	Iridium: {
		n: 77,
		s: 'Ir',
		w: 192.217,
		c: 'tm',
		e: [2,8,18,32,15,2]
	},
	Platinum: {
		n: 78,
		s: 'Pt',
		w: 195.084,
		c: 'tm',
		e: [2,8,18,32,17,1]
	},
	Gold: {
		n: 79,
		s: 'Au',
		w: 196.966569,
		c: 'tm',
		e: [2,8,18,32,18,1]
	},
	Mercury: {
		n: 80,
		s: 'Hg',
		w: 200.59,
		c: 'tm',
		e: [2,8,18,32,18,2]
	},
	Thallium: {
		n: 81,
		s: 'Tl',
		w: 204.3833,
		c: 'ptm',
		e: [2,8,18,32,18,3]
	},
	Lead: {
		n: 82,
		s: 'Pb',
		w: 207.2,
		c: 'ptm',
		e: [2,8,18,32,18,4]
	},
	Bismuth: {
		n: 83,
		s: 'Bi',
		w: 208.9804,
		c: 'ptm',
		e: [2,8,18,32,18,5]
	},
	Polonium: {
		n: 84,
		s: 'Po',
		w: '(209)',
		c: 'me',
		e: [2,8,18,32,18,6]
	},
	Astatine: {
		n: 85,
		s: 'At',
		w: '(210)',
		c: 'ha',
		e: [2,8,18,32,18,7]
	},
	Radon: {
		n: 86,
		s: 'Rn',
		w: '(222)',
		c: 'ng',
		e: [2,8,18,32,18,8]
	},
	Francium: {
		n: 87,
		s: 'Fr',
		w: '(223)',
		c: 'am',
		e: [2,8,18,32,18,8,1]
	},
	Radium: {
		n: 88,
		s: 'Ra',
		w: '(226)',
		c: 'aem',
		e: [2,8,18,32,18,8,2]
	},
	Actinium: {
		n: 89,
		s: 'Ac',
		w: '(227)',
		c: 'ac',
		e: [2,8,18,32,18,9,2]
	},
	Thorium: {
		n: 90,
		s: 'Th',
		w: 232.03806,
		c: 'ac',
		e: [2,8,18,32,18,10,2]
	},
	Protactinium: {
		n: 91,
		s: 'Pa',
		w: 231.03588,
		c: 'ac',
		e: [2,8,18,32,20,9,2]
	},
	Uranium: {
		n: 92,
		s: 'U',
		w: 238.02891,
		c: 'ac',
		e: [2,8,18,32,21,9,2]
	},
	Reptunium: {
		n: 93,
		s: 'Np',
		w: '(237)',
		c: 'ac',
		e: [2,8,18,32,22,9,2]
	},
	Plutonium: {
		n: 94,
		s: 'Pu',
		w: '(244)',
		c: 'ac',
		e: [2,8,18,32,24,8,2]
	},
	Americium: {
		n: 95,
		s: 'Am',
		w: '(243)',
		c: 'ac',
		e: [2,8,18,32,25,8,2]
	},
	Curium: {
		n: 96,
		s: 'Cm',
		w: '(247)',
		c: 'ac',
		e: [2,8,18,32,25,9,2]
	},
	Berkelium: {
		n: 97,
		s: 'Bk',
		w: '(247)',
		c: 'ac',
		e: [2,8,18,32,27,8,2]
	},
	Californium: {
		n: 98,
		s: 'Cf',
		w: '(251)',
		c: 'ac',
		e: [2,8,18,32,28,8,2]
	},
	Einsteinium: {
		n: 99,
		s: 'Es',
		w: '(252)',
		c: 'ac',
		e: [2,8,18,32,29,8,2]
	},
	Fermium: {
		n: 100,
		s: 'Fm',
		w: '(257)',
		c: 'ac',
		e: [2,8,18,32,30,8,2]
	},
	Mendelevium: {
		n: 101,
		s: 'Md',
		w: '(258)',
		c: 'ac',
		e: [2,8,18,32,31,8,2]
	},
	Nobelium: {
		n: 102,
		s: 'No',
		w: '(259)',
		c: 'ac',
		e: [2,8,18,32,32,8,2]
	},
	Lawrencium: {
		n: 103,
		s: 'Lr',
		w: '(262)',
		c: 'ac',
		e: [2,8,18,32,32,8,3]
	},
	Rutherfordium: {
		n: 104,
		s: 'Rf',
		w: '(267)',
		c: 'tm',
		e: [2,8,18,32,32,10,2]
	},
	Dubnium: {
		n: 105,
		s: 'Db',
		w: '(268)',
		c: 'tm',
		e: [2,8,18,32,32,11,2]
	},
	Seaborgium: {
		n: 106,
		s: 'Sg',
		w: '(271)',
		c: 'tm',
		e: [2,8,18,32,32,12,2]
	},
	Bohrium: {
		n: 107,
		s: 'Bh',
		w: (272),
		c: 'tm',
		e: [2,8,18,32,32,13,2]
	},
	Hassium: {
		n: 108,
		s: 'Hs',
		w: '(270)',
		c: 'tm',
		e: [2,8,18,32,32,14,2]
	},
	Meitnerium: {
		n: 109,
		s: 'Mt',
		w: '(276)',
		c: 'tm',
		e: [2,8,18,32,32,15,2]
	},
	Darmstadtium: {
		n: 110,
		s: 'Ds',
		w: '(281)',
		c: 'tm',
		e: [2,8,18,32,32,17,1]
	},
	Roentgenium: {
		n: 111,
		s: 'Rg',
		w: '(280)',
		c: 'tm',
		e: [2,8,18,32,32,18,1]
	},
	Copernicium: {
		n: 112,
		s: 'Cn',
		w: '(285)',
		c: 'tm',
		e: [2,8,18,32,32,18,2]
	},
	Ununtrium: {
		n: 113,
		s: 'Uut',
		w: '(284)',
		c: 'ptm',
		e: [2,8,18,32,32,18,3]
	},
	Flerovium: {
		n: 114,
		s: 'Fl',
		w: '(289)',
		c: 'ptm',
		e: [2,8,18,32,32,18,4]
	},
	Ununpentium: {
		n: 115,
		s: 'Uup',
		w: '(288)',
		c: 'ptm',
		e: [2,8,18,32,32,18,5]
	},
	Livermorium: {
		n: 116,
		s: 'Lv',
		w: '(293)',
		c: 'ptm',
		e: [2,8,18,32,32,18,6]
	},
	Ununseptium: {
		n: 117,
		s: 'Uus',
		w: '(294)',
		c: 'ha',
		e: [2,8,18,32,32,18,7]
	},
	Ununoctium: {
		n: 118,
		s: 'Uuo',
		w: '(294)',
		c: 'ng',
		e: [2,8,18,32,32,18,8]
	}
};



// ============
// VARIABLES
// ============

var tpl,
	li = "<li class='{0}'><span class='symbol'>{1}</span><span class='name'>{2}</span><span class='segment'><span class='f'>#</span> {3}</span><span class='segment'><span class='f'>w</span> {4}</span><span class='segment'><span class='f'>e</span> {5}</span></li>",
	el;



// ============
// HELPERS
// ============

String.prototype.format = function(){
	var string = this;

	for (var i = 0, j = arguments.length; i < j; i++) {
		string = string.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
	}

	return string;
};

String.prototype.rexp = function(reg){
	return this.replace(reg, "<span class='highlight'>$&</span>");
};


// ============
// INTERFACE
// ============

function filter(what,r){
	tpl = "";
	for (var prop in table) {
		el = table[prop];
		if(r && r != ""){
			var reg = new RegExp(r, "gi");
			switch(what){
				case "s":
					if(el.s.toLowerCase().indexOf(r.toLowerCase()) > -1){
						tpl += li.format(el.c, el.s, prop, el.n, el.w, el.e); 
					}
					break;
				case "p":
					if(prop.toLowerCase().indexOf(r.toLowerCase()) > -1){
						tpl += li.format(el.c, el.s, prop.toString().rexp(reg), el.n, el.w, el.e);
					}
					break;
				case "n":
					if(el.n.toString().indexOf(r) > -1){
						tpl += li.format(el.c, el.s, prop, el.n.toString().rexp(reg), el.w, el.e);
					}
					break;
				case "w":
					if(el.w.toString().indexOf(r) > -1){ 
						tpl += li.format(el.c, el.s, prop, el.n, el.w.toString().rexp(reg), el.e);
					}
					break;
				case "e":
					if(el.e.toString().indexOf(r) > -1){ 
						tpl += li.format(el.c, el.s, prop, el.n, el.w, el.e.join(",").rexp(reg));
					}
					break;
				default:
					break;
			}
		} else {
			tpl += li.format(el.c, el.s, prop, el.n, el.w, el.e);
		}	
	}
	pList.innerHTML = tpl;
}


// ===================
// RUN YOU CLEVER BOY
// ===================

filter();