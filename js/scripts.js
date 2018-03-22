
$(document).ready(function(){
  // alert("hi");

  $("#fields").change(function() {
    var month = parseInt($("select#fields").val());
    if (month === 0) {
      $('#january').hide();
      $('#february').hide();
      $('#march').hide();
      $('#april').hide();
      $('#may').hide();
      $('#june').hide();
      $('#july').hide();
      $('#august').hide();
      $('#september').hide();
      $('#october').hide();
      $('#november').hide();
      $('#december').hide();
    }
    if (month === 1) {
      $('#january').show();
      $('#february').hide();
      $('#march').hide();
      $('#april').hide();
      $('#may').hide();
      $('#june').hide();
      $('#july').hide();
      $('#august').hide();
      $('#september').hide();
      $('#october').hide();
      $('#november').hide();
      $('#december').hide();
    }
    else if (month === 2) {
      $('#january').hide();
      $('#february').show();
      $('#march').hide();
      $('#april').hide();
      $('#may').hide();
      $('#june').hide();
      $('#july').hide();
      $('#august').hide();
      $('#september').hide();
      $('#october').hide();
      $('#november').hide();
      $('#december').hide();
    }
    else if (month === 3) {
      $('#january').hide();
      $('#february').hide();
      $('#march').show();
      $('#april').hide();
      $('#may').hide();
      $('#june').hide();
      $('#july').hide();
      $('#august').hide();
      $('#september').hide();
      $('#october').hide();
      $('#november').hide();
      $('#december').hide();
    }
    else if (month === 4) {
      $('#january').hide();
      $('#february').hide();
      $('#march').hide();
      $('#april').show();
      $('#may').hide();
      $('#june').hide();
      $('#july').hide();
      $('#august').hide();
      $('#september').hide();
      $('#october').hide();
      $('#november').hide();
      $('#december').hide();
    }
    else if (month === 5) {
      $('#january').hide();
      $('#february').hide();
      $('#march').hide();
      $('#april').hide();
      $('#may').show();
      $('#june').hide();
      $('#july').hide();
      $('#august').hide();
      $('#september').hide();
      $('#october').hide();
      $('#november').hide();
      $('#december').hide();
    }
    else if (month === 6) {
      $('#january').hide();
      $('#february').hide();
      $('#march').hide();
      $('#april').hide();
      $('#may').hide();
      $('#june').show();
      $('#july').hide();
      $('#august').hide();
      $('#september').hide();
      $('#october').hide();
      $('#november').hide();
      $('#december').hide();
    }
    else if (month === 7) {
      $('#january').hide();
      $('#february').hide();
      $('#march').hide();
      $('#april').hide();
      $('#may').hide();
      $('#june').hide();
      $('#july').show();
      $('#august').hide();
      $('#september').hide();
      $('#october').hide();
      $('#november').hide();
      $('#december').hide();
    }
    else if (month === 8) {
      $('#january').hide();
      $('#february').hide();
      $('#march').hide();
      $('#april').hide();
      $('#may').hide();
      $('#june').hide();
      $('#july').hide();
      $('#august').show();
      $('#september').hide();
      $('#october').hide();
      $('#november').hide();
      $('#december').hide();
    }
    else if (month === 9) {
      $('#january').hide();
      $('#february').hide();
      $('#march').hide();
      $('#april').hide();
      $('#may').hide();
      $('#june').hide();
      $('#july').hide();
      $('#august').hide();
      $('#september').show();
      $('#october').hide();
      $('#november').hide();
      $('#december').hide();
    }
    else if (month === 10) {
      $('#january').hide();
      $('#february').hide();
      $('#march').hide();
      $('#april').hide();
      $('#may').hide();
      $('#june').hide();
      $('#july').hide();
      $('#august').hide();
      $('#september').hide();
      $('#october').show();
      $('#november').hide();
      $('#december').hide();
    }
    else if (month === 11) {
      $('#january').hide();
      $('#february').hide();
      $('#march').hide();
      $('#april').hide();
      $('#may').hide();
      $('#june').hide();
      $('#july').hide();
      $('#august').hide();
      $('#september').hide();
      $('#october').hide();
      $('#november').show();
      $('#december').hide();
    }
    else if (month === 12) {
      $('#january').hide();
      $('#february').hide();
      $('#march').hide();
      $('#april').hide();
      $('#may').hide();
      $('#june').hide();
      $('#july').hide();
      $('#august').hide();
      $('#september').hide();
      $('#october').hide();
      $('#november').hide();
      $('#december').show();

    }
  });
});
