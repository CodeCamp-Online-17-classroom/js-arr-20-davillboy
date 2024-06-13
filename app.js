// write code here
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function agree() {
  alert("I’m agree with you ?");
}

function disagree() {
  alert("whyyyyyyy !");
}

ask("Do you agree?", agree, disagree);
