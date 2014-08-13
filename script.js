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

var addFiller = function(nCol) {
  var phrase;
  switch (nCol){
    case 2:
      phrase = 'Hi';
      break;
    case 4:
      phrase = 'JavaScript'
      break;
    case 6:
      phrase = 'Full Stack Web Development'
      break;
    default:
      phrase = 'Default'
      break;
  }
  return "<div class='" + numeralToWord[nCol] + " columns filler-bg'><p class='phrase'>" + phrase + "</p></div>"
}


mosaicSection = document.getElementById('mosaic');


var startMosaic = function() {
  var colCount = 0;
  var colBoundary = 18;
  var sResult = ""
  for (var i = 0; i < pics.length; i++) {
    var bFiller = Math.random() > 0.6;
    if (bFiller) {
      var fillerWidth = Math.floor(Math.random() * 3 + 1) * 2;
      if (((colCount % colBoundary) + fillerWidth) == (colBoundary - 1)) {// This leaves right edge jagged
        fillerWidth++
      }
      else if (colCount % colBoundary + fillerWidth > colBoundary) { // This means the filler would go over the right edge
        var eolWidth = colBoundary - (colCount % colBoundary);
        sResult += addFiller(eolWidth);
        colCount += eolWidth;
        fillerWidth -= eolWidth;
      }
      sResult += addFiller(fillerWidth);
      colCount += fillerWidth;
    }
    sResult += "<img class='two columns' src='" + pics[i] + "'>";
    colCount += 2;
  };
  return sResult;
}

mosaicSection.innerHTML = startMosaic();

