// Business Logic for TicketBook
function TicketBook () {
  this.tickets = [],
  this.ticketId = 0
}

TicketBook.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets.push(ticket);
}

TicketBook.prototype.assignId = function() {
  this.ticketId += 1;
  return this.ticketId;
}

TicketBook.prototype.findTicket = function(id) {
  for (var i=0; i< this.tickets.length; i++) {
    if (this.tickets[i]) {
      if (this.tickets[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

TicketBook.prototype.deleteTicket = function(id) {
  for (var i=0; i<this.tickets.length; i++) {
    if (this.tickets[i]) {
      if (this.tickets[i].id == id) {
        delete this.tickets[i];
        return true;
      }
    }
  };
  return false;
}

var ticketIndex = new TicketBook();

//Business Logic for Tickets
function Tickets (title, time, age, price) {
  this.title = title,
  this.time = time,
  this.age = age;
  this.price = price
}

function calcPrice(title, time, age) {
  var ticketPrice = 8;
  if (title.includes("3D")) {
    ticketPrice += 2;
  }
  if(time.includes("AM")) {
    ticketPrice -= 2;
  }
  if(age === "Child" || age === "Senior") {
    ticketPrice -= 3;
  }
  return ticketPrice;
}

function addOutput (arrayNum) {
  $("span#title").html(ticketIndex.tickets[arrayNum].title);
  $("span#time").html(ticketIndex.tickets[arrayNum].time);
  $("span#age").html(ticketIndex.tickets[arrayNum].age);
  $("span#price").html("$" + ticketIndex.tickets[arrayNum].price);
}


//User Interface Logic
$(document).ready(function() {
  $("form#purchaseTickets").submit(function(event) {
    event.preventDefault();
var inputtedTitle = $("input:radio[name=movie]:checked").val();
var inputtedTime = $("select#time").val();
var inputtedAge = $("input:radio[name=age]:checked").val();
var ticketTotal = calcPrice(inputtedTitle, inputtedTime, inputtedAge);
var newTicket = new Tickets (inputtedTitle, inputtedTime, inputtedAge, ticketTotal);
ticketIndex.addTicket(newTicket);
var prevID = ticketIndex.ticketId - 1;
addOutput(prevID);
// alert(ticketIndex.tickets[0].title);
// alert(inputtedTime);
// alert(inputtedAge);
// alert(ticketTotal);
});
});
