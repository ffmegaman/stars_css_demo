var mosaicSection;

pics = [
"https://canvas.instructure.com/images/thumbnails/29245813/IGhq1O7yVYdzy2upPbKbdWQElhGsS3H8KXatmTVJ",
"https://canvas.instructure.com/images/thumbnails/29258840/LGQQGAvSrg1k1KEbv1UIpvkyN4KDAAdaX4NpGYcC",
"https://canvas.instructure.com/images/thumbnails/29236883/xj04jyJpB02QNB6jMAI1OgRHsHc4aN2IsXkXVOfI",
"https://canvas.instructure.com/images/thumbnails/29260351/5XszdAPI8UJigED8S4qWmtLTxYY5xXs9vd8glYwp",
"https://canvas.instructure.com/images/thumbnails/29273041/sBDFBXpSS0zhAkvj24uAKwylOMjuoxPRut6ecJ0z",
"https://canvas.instructure.com/images/thumbnails/29246435/h8T8gCrOrbc1lMsA7H9WK6ebpy6Mewd3yor9FzQd",
"https://canvas.instructure.com/images/thumbnails/29270033/o8GRw6NDyNgRjrDiu6HYrWNqPKm06JHRFjLmAvYQ",
"https://canvas.instructure.com/images/thumbnails/29245660/hPpF3WFU7mcCYVPAh4pT6HLSfXI5plcOabPkUQeQ",
"https://canvas.instructure.com/images/thumbnails/29225498/sCsqfpk4XudaMxHp6Um179jPHfuwcJfWAfGJBGoT",
"https://canvas.instructure.com/images/thumbnails/29255087/guyZQu9IX8j4xYSl8ZacX7UyFL03xizeszqMUOrS",
"https://canvas.instructure.com/images/thumbnails/29274081/Q5JSNgP2KEgKhCPHFW9PjVL5R2GOzp6BERNk6arp",
"https://canvas.instructure.com/images/thumbnails/29251487/7vB2eyZN26QtM4bn0RhcExk5Fpzy7EsF8MdxLyRv",
"https://canvas.instructure.com/images/thumbnails/28101469/pfa6fNC6fXT4888ZWE1SKBBPjvIV88rFJCTPYWgR",
"https://canvas.instructure.com/images/thumbnails/29274938/6x4xamJeq7ZOqwFjmOR2gSt2SLLu0BJwpdLKkmNZ",
"https://canvas.instructure.com/images/thumbnails/28187943/Kd3NQkqDtwq814Iv48NvjwtvPy27yJAnNeREpvot",
"https://canvas.instructure.com/images/thumbnails/29419510/mEZt1V2fjSmKMaDPITSiOxstTuzmBbqiZ9kygDAL",
"https://canvas.instructure.com/images/thumbnails/29268509/gLfbfOby4mPJQSV0kzrw5yFXZ1MgXsRNfWukX2p7",
"https://canvas.instructure.com/images/thumbnails/29272673/RGkQvjFzlpuX2q3kMiPS7eDWcTeYmHssZijXrayH",
"https://canvas.instructure.com/images/thumbnails/28699167/Yb03aUKEy9azr2xZxRnF2HbKVKYobLzSb5uuPAYp",
"https://canvas.instructure.com/images/thumbnails/29272666/7nZnsn3lGLgZpiRuHQNzVyPnEMCJH4hhOTRvC4qa",
"https://canvas.instructure.com/images/thumbnails/29236345/6AQBAKlvMYq0Q9BGHpHzraqtl7miTJ9XUutwbeAH",
"https://canvas.instructure.com/images/thumbnails/29420335/y5Jvg597b86kGMcfZZwLvzdvKDZfWKejLQb943Rd",
"https://canvas.instructure.com/images/thumbnails/29246968/2e37ygkrhlIH5af7kYWq6HxTrB99lFDLZLVt2C1E",
"https://canvas.instructure.com/images/thumbnails/28963829/xKJk8XXgDIcpbZuvciGZ9CFqUKYMlVaPryNG4MPY",
"https://canvas.instructure.com/images/thumbnails/29259110/Hv9qgK6XmSoiEzDnmuDTRjeLeCr4eRQgsDB0lK1G",
"https://canvas.instructure.com/images/thumbnails/29269049/7vOu2KA2Fl5RiJ3V4hyjwma5ndxywrSI1uCTAU0Q",
"https://canvas.instructure.com/images/thumbnails/29246383/smUMb1kCQbnB8Y77OvnkBwO5OuVee1PTWn7eolfJ",
"https://canvas.instructure.com/images/thumbnails/29293822/rR7U60iYqxVNEd55srq52Ma4bHQl7dDSLAOH0sC3"
]

var numeralToWord = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var sLongerWords = ["Hi", "JavaScript", "Full Stack Web Development"];
var nColCount = 0;

var sAddColumns = function(nCol) {
  nColCount += nCol;
  return numeralToWord[nCol] + " columns"
}

var addFiller = function(nCol) {
  var phrase = sLongerWords[nCol/2-1];

  return "<div class='" + sAddColumns(nCol) + " filler-bg'><p class='phrase'>" + phrase + "</p></div>"
}

var sAddFillers = function(nColMax) {
  var sResult = "";

  // because the pictures are set to be two columns wide, any filler we generate
  // has to be an even number of columns or we could end up with a jagged right edge.
  // The width options for the filler block are 2, 4 or 6 columns.
  var fillerWidth = Math.floor(Math.random() * 3 + 1) * 2;

  // check if we'd end up past the max column with this filler width
  if (nColCount % nColMax + fillerWidth > nColMax) {

    // find out how far to the right boundary
    var nColToRightEdge = nColMax - (nColCount % nColMax);
    sResult += addFiller(nColToRightEdge);
    fillerWidth -= nColToRightEdge;
  }

  sResult += addFiller(fillerWidth);
  return sResult;
}

mosaicSection = document.getElementById('mosaic');

//
//  Generates a simple mosaic with some blocks padding using CSS Skeleton's
//  "column" functionality.
//
var startMosaic = function() {
  var sResult = ""

  for (var i = 0; i < pics.length; i++) {
    var bFiller = Math.random() > 0.6;    // the chance of generating a filler block

    // is the probabilty high enough to generate filler
    if (bFiller) {
      sResult += sAddFillers(18);
    }
    sResult += "<img class='" + sAddColumns(2) + "' src='" + pics[i] + "'>";
  }

  return sResult;
}

mosaicSection.innerHTML = startMosaic();

