// To add Full name to embarkation point
    function embarkation_point(point) {
      if (point === 'S') {
        return "Southampton";
      }
      else if (point === 'C') {
        return "Cherbourg";
      }
      else if (point === 'Q') {
        return "Queenstown";
      }
    }

    // To get the outcome from the Survived variable
    function get_outcome(out) {
      if (out == 0) {
        return "Perished";
      }
      else if (out == 1) {
        return "Survived";
      }
    }

    // To set the correct labels for the Ticket class
    function get_ticket_class(ticket) {
      if (ticket == 1){
        return "Upper";
      }
      else if (ticket == 2) {
        return "Middle";
      }
      else if (ticket == 3) {
        return "Lower";
      }
    }

    // Load the data and call the main 'draw' function
    d3.csv('data/titanic_data_modified.csv', function(d) {
      // if changes are need in the data
      d['count'] = 1;
      d['Outcome'] = get_outcome(d['Survived']);
      d['Embarked'] = embarkation_point(d['Embarked']);
      d['Pclass'] = get_ticket_class(d['Pclass']);

      // debugger;
      return d;
    }, draw);
