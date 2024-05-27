// Initialize font properties
const fontname = "Roboto";
const fontweights = [100, 300, 400, 500, 700, 900]


// Color properties
const basecolor = "#444444";
const accentcolor = "#000000";
const highlightcolor = "#2471A3";
// const activecolor = "#a35624";
// const darkbackgroundcolor = "#f9f9f9";

// const basecolor = "#888";
// const accentcolor = "#222";
// const highlight = "#111";

// Body properties
const bodyfontweight = 300;
const titlefontweight = 400;
const headerfontweight = 500;
const subheaderfontweight = 400;
const afontweight = 400;
const namefontweight = 400;
const bodyfontsize = "12pt";
const smalltextfontsize = "11pt";
const backgroundcolor = "#fff";

// Link properties
const acolor = highlightcolor;
const adecoration = "none";
const ahovercolor = highlightcolor;
const ahoverduration = "0.3s";
const ahoverdecoration = "underline"; //none, underline, overline, dotted, color (https://www.w3schools.com/cssref/pr_text_text-decoration.asp)
// const aactivecolor = activecover;

// Menu properties
const menucolor = basecolor;
const menufontsize = "14pt";
const menudecoration = "none";
// const menuhover = accentcolor;
// const menuhoverduration = "0.3s";
// const menuhoverdecoration = "none"; //none, underline, overline, dotted, color (https://www.w3schools.com/cssref/pr_text_text-decoration.asp)

// Header properties
const namecolor = accentcolor;
const namefontsize = "20pt";
const nametext = "uppercase";
const nameweight = namefontweight;
const headercolor = accentcolor;
const headerfontsize = "20pt";
const headerdecoration = "none";
const headertext = "uppercase";
const headerweight = headerfontweight;
const subheadercolor = accentcolor;
const subheaderfontsize = "13pt";
const subheadertext = "uppercase";
const subheaderweight = subheaderfontweight;

// Publication properties
const ptitlecolor = accentcolor;
const ptitlefontsize = bodyfontsize;
const ptitleweight = titlefontweight;
const ptitledecoration = "none";
const ptitlestyle = "normal";

const authorcolor = accentcolor;
const authorweight = bodyfontweight;
const authordecoration = "none";
const authorstyle = "normal";

const selfcolor = highlightcolor;
const selfweight = bodyfontweight;
const selfdecoration = "none";
const selfstyle = "normal";

const tagcolor = accentcolor;
const tagweight = bodyfontweight;
const tagdecoration = "none";
const tagstyle = "normal";

const insttitlecolor = highlightcolor;
const insttitlesize = "12px";
const instyearcolor = accentcolor;
const instyearsize = "11px";

//     .institution {
//             font - size: 12px;
//             color: #222;
//         }
//   .years {
//             font - size: 11px;
//             color: #888;
//         }

// Works for sans serif, change otherwise
$("head").append("<link href='https://fonts.googleapis.com/css2?family=" + fontname + ":wght@" + fontweights.join(';') + "&display=swap' rel='stylesheet' type='text/css'>");
$("head").css("background-color", backgroundcolor);

$("body").css("font-family", fontname);
$("body").css("font-weight", bodyfontweight);
$("body").css("color", basecolor);
$("body").css("font-size", bodyfontsize);
$("body").css("background-color", backgroundcolor);

$("a").css("color", acolor);
$("a").css("font-weight", afontweight);
$("a:hover").css("text-decoration", ahoverdecoration);

$(".menulink").css("color", menucolor);
$(".menulink").css("font-size", menufontsize);
$(".menulink").css("text-decoration", menudecoration);

$(".header").css("color", headercolor);
$(".header").css("font-size", headerfontsize);
$(".header").css("text-decoration", headerdecoration);
$(".header").css("text-transform", headertext);
$(".header").css("font-weight", headerweight);
$(".subheader").css("color", subheadercolor);
$(".subheader").css("font-size", subheaderfontsize);
$(".subheader").css("text-transform", subheadertext);
$(".subheader").css("font-weight", subheaderweight);
$(".name").css("color", namecolor);
$(".name").css("font-size", namefontsize);
$(".name").css("text-transform", nametext);
$(".name").css("font-weight", nameweight);

$(".smalltext").css("font-size", smalltextfontsize);

$(".papertitle").css("color", ptitlecolor);
$(".papertitle").css("font-size", ptitlefontsize);
$(".papertitle").css("font-weight", ptitleweight);
$(".papertitle").css("text-decoration", ptitledecoration);
$(".papertitle").css("font-style", ptitlestyle);

$(".thisauthor").css("color", selfcolor);
$(".thisauthor").css("font-weight", selfweight);
$(".thisauthor").css("text-decoration", selfdecoration);
$(".thisauthor").css("font-style", selfstyle);

$(".institution").css("color", insttitlecolor);
$(".institution").css("font-size", insttitlesize);
$(".years").css("color", instyearcolor);
$(".years").css("font-size", instyearsize);
