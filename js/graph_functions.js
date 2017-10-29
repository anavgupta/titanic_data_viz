
// Give default values of margin, height and width
"use strict";
  var margin = 75,
      width = 1100 - margin,
      height = 550 - margin;

function create_svg(div_id, width = 1025, height = 525, margin = 75) {
  return d3.select("body div#"+ div_id)
    .append("svg")
    .attr("width", width + margin)
    .attr("height", height + margin);
}

// // Toggle active class between two buttons with given id's.
// function toggle_active_class (btn_1, btn_2) {
//   if ($('#'+btn_1).hasClass('active')) {
//     $('#'+btn_1).removeClass('active');
//     $('#'+btn_2).addClass('active');
//   }
//   else {
//     $('#'+btn_2).removeClass('active');
//     $('#'+btn_1).addClass('active');
//   }
// }

// Draws the survival by gender Bar chart
function survival_by_gender(svg, data, in_percent = false, filter_column = []) {
  debugger;
  var myChart = new dimple.chart(svg, data);

  // To create the y-axis for count and percent views
  if (in_percent == true) {
    var yAxis = myChart.addPctAxis('y', 'count');
    yAxis.title = "Percent"
  }
  else {
    var yAxis = myChart.addMeasureAxis('y', 'count');
    yAxis.title = "No of Persons"
  }

  // To create x-axis for different filters
  if (filter_column.length != 0) {
    var column = filter_column[0];

    // If the column is Age group
    if (column == 'age_group') {
      var xAxis = myChart.addCategoryAxis('x', ['age_group', 'Sex']);
      xAxis.title = "Gender and Age Group";
    }
    else {
      var xAxis = myChart.addCategoryAxis('x', ['Sex', column]);
      xAxis.title = "Gender and " + column;
    }
  }
  else {
    var xAxis = myChart.addCategoryAxis('x', ['Sex']);
    xAxis.title = "Gender"
  }

  xAxis.fontSize = 'auto';
  yAxis.fontSize = 'auto';

  var series = myChart.addSeries('Outcome', dimple.plot.bar);
  series.addOrderRule(['Survived',  'Perished']);
  myChart.addLegend("25%", 10, 450, 20, "right");
  var draw_viz = myChart.draw(400);
}

// Draws the survival by Socio-Econ class Bar chart
function survival_by_econ_class(svg, data, in_percent = false, filter_column = []) {
  var myChart = new dimple.chart(svg, data);

  // To create the y-axis for count and percent views
  if (in_percent == true) {
    var yAxis = myChart.addPctAxis('y', 'count');
    yAxis.title = "Percent"
  }
  else {
    var yAxis = myChart.addMeasureAxis('y', 'count');
    yAxis.title = "No of Persons"
  }

  // To create x-axis for different filters
  if (filter_column.length != 0) {
    var column = filter_column[0];
    var xAxis = myChart.addCategoryAxis('x', ['Pclass', 'Sex']);
    xAxis.title = "Pclass and Sex";
  }
  else {
    var xAxis = myChart.addCategoryAxis('x', ['Pclass']);
    xAxis.title = "Ticket Class"
  }

  xAxis.fontSize = 'auto';
  yAxis.fontSize = 'auto';

  var series = myChart.addSeries('Outcome', dimple.plot.bar);
  series.addOrderRule(['Survived',  'Perished']);
  xAxis.addOrderRule(['Lower', 'Middle', 'Upper']);

  myChart.addLegend("30%", 10, 450, 20, "right");
  var draw_viz = myChart.draw(400);
}


// Draws the survival by Embarkation group Bar chart
function survival_by_embarkation(svg, data, in_percent = false, filter_column = []) {
  var myChart = new dimple.chart(svg, data);

  // To create the y-axis for count and percent views
  if (in_percent == true) {
    var yAxis = myChart.addPctAxis('y', 'count');
    yAxis.title = "Percent"
  }
  else {
    var yAxis = myChart.addMeasureAxis('y', 'count');
    yAxis.title = "No of Persons"
  }

  // To create x-axis for different filters
  if (filter_column.length != 0) {
    var column = filter_column[0];
    var xAxis = myChart.addCategoryAxis('x', ['Embarked', 'Sex']);
    xAxis.title = "Embarkation Points and Sex";

  }
  else {
    var xAxis = myChart.addCategoryAxis('x', ['Embarked']);
    xAxis.title = "Point of Embarkation"
  }

  xAxis.fontSize = 'auto';
  yAxis.fontSize = 'auto';

  var series = myChart.addSeries('Outcome', dimple.plot.bar);
  series.addOrderRule(['Survived',  'Perished']);
  myChart.addLegend("30%", 10, 450, 20, "right");
  var draw_viz = myChart.draw(400);
}

// Draws the survival by Age group Bar chart
function survival_by_age_group(svg, data, in_percent = false, filter_column = []){
  var myChart = new dimple.chart(svg, data);

  // To create the y-axis for count and percent views
  if (in_percent == true) {
    var yAxis = myChart.addPctAxis('y', 'count');
    yAxis.title = "Percent"
  }
  else {
    var yAxis = myChart.addMeasureAxis('y', 'count');
    yAxis.title = "No of Persons"
  }

  // To create x-axis for different filters
  if (filter_column.length != 0) {
    var column = filter_column[0];
    var xAxis = myChart.addCategoryAxis('x', ['age_group', 'Sex']);
    xAxis.title = "Age Group and Gender"
  }
  else {
    var xAxis = myChart.addCategoryAxis('x', ['age_group']);
    xAxis.title = "Age Group"
  }

  // Add ordering to the x-axis
  xAxis.addOrderRule(["0-10", "10-20", "20-30", "30-40", "40-50",
    "50-60", "60-70", "70-80", "None"]);

  xAxis.fontSize = 'auto';
  yAxis.fontSize = 'auto';
  var series = myChart.addSeries('Outcome', dimple.plot.bar);
  series.addOrderRule(['Survived',  'Perished']);
  myChart.addLegend("50%", 10, 450, 20, "right");
  var draw_viz = myChart.draw(400);
}


// main function that will call the draw chart functions
function draw(data) {

  // call to the survival by gender chart function
  // create the svg for the chart
  var svg_1 = create_svg('viz_1', width = 600);
  survival_by_gender(svg_1, data);

  // Adding event handler on viz_1 button Count
  d3.select("#btn_gender_1" ).on( "click", function() {
    if (!$('#btn_gender_1').hasClass('active')) {
      $('#btn_gender_2').removeClass('active');
      $('#btn_gender_1').addClass('active');
      svg_1.html('');
      var column = $('input[name=sex_optradio]:checked').val();

      // If the None filter is chosen
      if (column == "None") {
        survival_by_gender(svg_1, data, false);
      }
      else {
        survival_by_gender(svg_1, data, false, [column]);
      }
    }
  });

  // Adding event handler on viz_1 button Percentage
  d3.select( "#btn_gender_2" ).on( "click", function() {
    debugger;
    if (!$('#btn_gender_2').hasClass('active')) {
      $('#btn_gender_1').removeClass('active');
      $('#btn_gender_2').addClass('active');
      svg_1.html('');
      var column=$('input[name=sex_optradio]:checked').val();

      // If the None filter is chosen
      if (column == "None") {
        survival_by_gender(svg_1, data, true);
      }
      else {
        survival_by_gender(svg_1, data, true, [column]);
      }
    }
  });


  // call to the survival by socio_econ class chart function
  // create the svg for the chart
  var svg_2 = create_svg('viz_2', width = 600);
  survival_by_econ_class(svg_2, data);

  // Adding event handler on viz_2 button Count
  d3.select( "#btn_pclass_1" ).on( "click", function() {
    if (!$('#btn_pclass_1').hasClass('active')) {
      $('#btn_pclass_2').removeClass('active');
      $('#btn_pclass_1').addClass('active');
      svg_2.html('');
      var column = $('input[name=pclass_optradio]:checked').val();

      // If the None filter is chosen
      if (column == "None") {
        survival_by_econ_class(svg_2, data, false);
      }
      else {
        survival_by_econ_class(svg_2, data, false, [column]);
      }
    }
  });

  // Adding event handler on viz_2 button Percentage
  d3.select( "#btn_pclass_2" ).on( "click", function() {
    if (!$('#btn_pclass_2').hasClass('active')) {
      $('#btn_pclass_1').removeClass('active');
      $('#btn_pclass_2').addClass('active');
      svg_2.html('');
      var column = $('input[name=pclass_optradio]:checked').val();

      // If the None filter is chosen
      if (column == "None") {
        survival_by_econ_class(svg_2, data, true);
      }
      else {
        survival_by_econ_class(svg_2, data, true, [column]);
      }
    }
  });


  // call to the survival by embarkation chart function
  // create the svg for the chart
  var svg_3 = create_svg('viz_3', width = 600);
  survival_by_embarkation(svg_3, data);

  // Adding event handler on viz_3 button Count
  d3.select( "#btn_embarkation_1" ).on( "click", function() {
    if (!$('#btn_embarkation_1').hasClass('active')) {
      $('#btn_embarkation_2').removeClass('active');
      $('#btn_embarkation_1').addClass('active');
      svg_3.html('');
      var column = $('input[name=emb_optradio]:checked').val();

      // If the None filter is chosen
      if (column == "None") {
        survival_by_embarkation(svg_3, data, false);
      }
      else {
        survival_by_embarkation(svg_3, data, false, [column]);
      }
    }
  });

  // Adding event handler on viz_3 button Percentage
  d3.select( "#btn_embarkation_2" ).on( "click", function() {
    if (!$('#btn_embarkation_2').hasClass('active')) {
      $('#btn_embarkation_1').removeClass('active');
      $('#btn_embarkation_2').addClass('active');
      svg_3.html('');
      var column = $('input[name=emb_optradio]:checked').val();

      // If the None filter is chosen
      if (column == "None") {
        survival_by_embarkation(svg_3, data, true);
      }
      else {
        survival_by_embarkation(svg_3, data, true, [column]);
      }
    }
  });


  // call to the survival by embarkation chart function
  // create the svg for the chart
  var svg_4 = create_svg('viz_4');
  survival_by_age_group(svg_4, data);

  // Adding event handler on viz_4 button Count
  d3.select( "#btn_age_group_1" ).on( "click", function() {
    if (!$('#btn_age_group_1').hasClass('active')) {
      $('#btn_age_group_2').removeClass('active');
      $('#btn_age_group_1').addClass('active');
      svg_4.html('');
      var column = $('input[name=age_optradio]:checked').val();

      // If the None filter is chosen
      if (column == "None") {
        survival_by_age_group(svg_4, data, false);
      }
      else {
        survival_by_age_group(svg_4, data, false, [column]);
      }
    }
  });

  // Adding event handler on viz_4 button Percentage
  d3.select( "#btn_age_group_2" ).on( "click", function() {
    if (!$('#btn_age_group_2').hasClass('active')) {
      $('#btn_age_group_1').removeClass('active');
      $('#btn_age_group_2').addClass('active');
      svg_4.html('');
      var column = $('input[name=age_optradio]:checked').val();

      // If the None filter is chosen
      if (column == "None") {
        survival_by_age_group(svg_4, data, true);
      }
      else {
        survival_by_age_group(svg_4, data, true, [column]);
      }
    }
  });

  // Adding a event listener to the Gender Filter Radio Buttons.
  $("input[name = sex_optradio]").change(function() {
    var column = this.value;
    svg_1.html("");
    if (column == "None") {
      survival_by_gender(svg_1, data, false);
    }
    else {
      survival_by_gender(svg_1, data, false, [column]);
    }
    $('#btn_gender_2').removeClass('active');
    $('#btn_gender_1').addClass('active');
  });


  // Adding a event listener to the Pclass Filter Radio Buttons.
  $("input[name = pclass_optradio]").change(function() {
    var column = this.value;
    svg_2.html("");
    if (column == "None") {
      survival_by_econ_class(svg_2, data, false);
    }
    else {
      survival_by_econ_class(svg_2, data, false, [column]);
    }
    $('#btn_pclass_2').removeClass('active');
    $('#btn_pclass_1').addClass('active');
  });


  // Adding a event listener to the Embarkation Filter Radio Buttons.
  $("input[name = emb_optradio]").change(function() {
    var column = this.value;
    svg_3.html("");
    if (column == "None") {
      survival_by_embarkation(svg_3, data, false);
    }
    else {
      survival_by_embarkation(svg_3, data, false, [column]);
    }
    $('#btn_embarkation_2').removeClass('active');
    $('#btn_embarkation_1').addClass('active');
  });


  // Adding a event listener to the age group Filter Radio Buttons.
  $("input[name = age_optradio]").change(function() {
    var column = this.value;
    svg_4.html("");
    if (column == "None") {
      survival_by_age_group(svg_4, data, false);
    }
    else {
      survival_by_age_group(svg_4, data, false, [column]);
    }
    $('#btn_age_group_2').removeClass('active');
    $('#btn_age_group_1').addClass('active');
  });
}
