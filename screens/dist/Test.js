var datefrom = '12/05/2013';
var dateCurr = '17/05/2013';
var dateTo = '20/05/2013';
function check(d1, d2, d3) {
    d1.split('/');
    d2.split('/');
    d3.split('/');
    var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]);
    var check = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
    var to = new Date(d3[2], parseInt(d3[1]) - 1, d3[0]);
    return check >= from && check <= to;
}
check(datefrom, dateCurr, dateTo);
