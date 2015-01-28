// ============
// VARIABLES
// ============

var tpl,
	li = "<li class='{0}'><span class='symbol'>{1}</span><span class='name'>{2}</span><span class='segment'><span class='f'>#</span> {3}</span><span class='segment'><span class='f'>w</span> {4}</span><span class='segment'><span class='f'>e</span> {5}</span></li>",
	el,
	list = [];



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

String.prototype.high = function(reg){
	return this.replace(reg, "<span class='highlight'>$&</span>");
};


// ============
// INTERFACE
// ============

function display(){
	tpl = "";

	for (var i = 0, length = table.length; i < length; i++) {
		el = table[i];
		tpl += li.format(el.c, el.s, el.p, el.n, el.w, el.e);
	}

	pList.innerHTML = tpl;
}

function filter(){
	tpl = "";

	for (var i = 0, length = table.length; i < length; i++) {

		el = table[i];
			
		var	qp = new RegExp(p.value, "gi"),
			qn = new RegExp(n.value, "gi"),
			qw = new RegExp(w.value, "gi"),
			qe = new RegExp(e.value, "gi");

		if(
			(!s.value || el.s.toLowerCase().indexOf(s.value.toLowerCase()) > -1) &&
			(!p.value || el.p.toLowerCase().indexOf(p.value.toLowerCase()) > -1) &&
			(!n.value || el.n.toString().indexOf(n.value) > -1) &&
			(!w.value || el.w.toString().indexOf(w.value) > -1) &&
			(!e.value || el.e.toString().indexOf(e.value) > -1)
		){
			tpl += li.format(el.c, el.s, el.p.toString().high(qp), el.n.toString().high(qn), el.w.toString().high(qw), el.e.join(",").high(qe));
			list.push(el);
		}
	}
	pList.innerHTML = tpl;
}


// ===================
// RUN YOU CLEVER BOY
// ===================

display();
