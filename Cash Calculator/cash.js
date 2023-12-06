$(document).ready(function () {

    $('.note input[type="text"]').keyup(function () {

    // target ids 
      var note = +this.name;
      console.log(note);
      $("#" + this.id.replace(/input/, "content")).html(
        event.target.value * note
      );

    // sum
      var textArr = []
      $(".amount").each(function () {
        textArr.push(+$(this).text())
        const sum = textArr.reduce((acc,it)=>{return acc + it})
        $('#total-cash').text(sum)
    });


    // sum of notes
    var numberOfNotes = []
    $('.note input[type="text"]').each(function(){
      numberOfNotes.push(+$(this).val())
      const sumOfNotes = numberOfNotes.reduce((acc,it)=> {return acc+it})
      $('#total-notes').text(sumOfNotes)
    });

    // words
    let totalInWords = +$('#total-cash').text()
    $('#total-cash-words').text(inWords(totalInWords))
    });



  });


  var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function inWords(num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'rupees only ' : '';
    return str;
}
 
