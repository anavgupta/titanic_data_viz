
// Give default values of margin, height and width
"use strict";
  var margin = 75,
      width = 1100 - margin,
      height = 600 - margin;

function create_svg(div_id, width = 1025, height = 525, margin = 75) {
  return d3.select("body div#"+ div_id)
    .append("svg")
    .attr("width", width + margin)
    .attr("height", height + margin);
}

// Draws the survival by gender Bar chart
function survival_by_gender(svg, data, in_percent = false) {
  debugger;
  var myChart = new dimple.chart(svg, data);
  var xAxis = myChart.addCategoryAxis('x', 'Sex');

  if (in_percent == true) {
    var yAxis = myChart.addPctAxis('y', 'count');
  }
  else {
    var yAxis = myChart.addMeasureAxis('y', 'count');
  }

  var series = myChart.addSeries('Outcome', dimple.plot.bar);
  series.addOrderRule(['Survived',  'Perished']);
  myChart.addLegend(60, 10, 450, 20, "right");
  var draw_viz = myChart.draw(400);
}

// Draws the survival by Socio-Econ class Bar chart
function survival_by_econ_class(svg, data, in_percent = false) {
  debugger;
  var myChart = new dimple.chart(svg, data);
  var xAxis = myChart.addCategoryAxis('x', 'Pclass');

  if (in_percent == true) {
    var yAxis = myChart.addPctAxis('y', 'count');
  }
  else {
    var yAxis = myChart.addMeasureAxis('y', 'count');
  }

  var series = myChart.addSeries('Outcome', dimple.plot.bar);
  series.addOrderRule(['Survived',  'Perished']);
  xAxis.addOrderRule(['3', '2', '1']);
  myChart.addLegend(60, 10, 450, 20, "right");
  var draw_viz = myChart.draw(400);
}

// Draws the survival by Embarkation group Bar chart
function survival_by_embarkation(svg, data, in_percent = false) {
  debugger;
  var myChart = new dimple.chart(svg, data);
  var xAxis = myChart.addCategoryAxis('x', 'Embarked');

  if (in_percent == true) {
    var yAxis = myChart.addPctAxis('y', 'count');
  }
  else {
    var yAxis = myChart.addMeasureAxis('y', 'count');
  }

  var series = myChart.addSeries('Outcome', dimple.plot.bar);
  series.addOrderRule(['Survived',  'Perished']);
  myChart.addLegend(60, 10, 450, 20, "right");
  var draw_viz = myChart.draw(400);
}

// Draws the survival by Age group Bar chart
function survival_by_age_group(svg, data, in_percent = false){
  debugger;

  var myChart = new dimple.chart(svg, data);
  var xAxis = myChart.addCategoryAxis('x', ['age_group', 'Sex']);
  if (in_percent == true) {
    var yAxis = myChart.addPctAxis('y', 'count');
  }
  else {
    var yAxis = myChart.addMeasureAxis('y', 'count');
  }

  // Add order to the X-axis
  xAxis.addOrderRule(["0-10", "10-20", "20-30", "30-40", "40-50",
    "50-60", "60-70", "70-80", "None"]);

  var series = myChart.addSeries('Outcome', dimple.plot.bar);
  series.addOrderRule(['Survived',  'Perished']);
  myChart.addLegend(60, 10, 450, 20, "right");
  var draw_viz = myChart.draw(400);
}

// main function that will call the draw chart functions
function draw(data) {

  // call to the survival by gender chart function
  // create the svg for the chart
  var svg_1 = create_svg('viz_1', width = 520);
  survival_by_gender(svg_1, data);

  // Adding event handler on button Count
  d3.select( "div#viz_1 #btn_1" ).on( "click", function() {
    debugger;
    $('#btn_2').removeClass('active');
    $('#btn_1').addClass('active');

    svg_1.html('');
    survival_by_gender(svg_1, data);
  });

  // Adding event handler on button Percentage
  d3.select( "div#viz_1 #btn_2" ).on( "click", function() {
    debugger;
    $('#btn_1').removeClass('active');
    $('#btn_2').addClass('active');
    svg_1.html('');
    survival_by_gender(svg_1, data, true);
  });


  // call to the survival by socio_econ class chart function
  // create the svg for the chart
  var svg_2 = create_svg('viz_2', width = 520);
  survival_by_econ_class(svg_2, data);

  // Adding event handler on button Count
  d3.select( "div#viz_2 #btn_1" ).on( "click", function() {
    debugger;
    $('#btn_2').removeClass('active');
    $('#btn_1').addClass('active');

    svg_2.html('');
    survival_by_econ_class(svg_2, data);
  });

  // Adding event handler on button Percentage
  d3.select( "div#viz_2 #btn_2" ).on( "click", function() {
    debugger;
    $('#btn_1').removeClass('active');
    $('#btn_2').addClass('active');
    svg_2.html('');
    survival_by_econ_class(svg_2, data, true);
  });


  // call to the survival by embarkation chart function
  // create the svg for the chart
  var svg_3 = create_svg('viz_3', width = 520);
  survival_by_embarkation(svg_3, data);

  // Adding event handler on button Count
  d3.select( "div#viz_3 #btn_1" ).on( "click", function() {
    debugger;
    $('#btn_2').removeClass('active');
    $('#btn_1').addClass('active');

    svg_3.html('');
    survival_by_embarkation(svg_3, data);
  });

  // Adding event handler on button Percentage
  d3.select( "div#viz_3 #btn_2" ).on( "click", function() {
    debugger;
    $('#btn_1').removeClass('active');
    $('#btn_2').addClass('active');
    svg_3.html('');
    survival_by_embarkation(svg_3, data, true);
  });


  // call to the survival by embarkation chart function
  // create the svg for the chart
  var svg_4 = create_svg('viz_4');
  survival_by_age_group(svg_4, data);

  // Adding event handler on button Count
  d3.select( "div#viz_4 #btn_1" ).on( "click", function() {
    debugger;
    $('#btn_2').removeClass('active');
    $('#btn_1').addClass('active');

    svg_4.html('');
    survival_by_age_group(svg_4, data);
  });

  // Adding event handler on button Percentage
  d3.select( "div#viz_4 #btn_2" ).on( "click", function() {
    debugger;
    $('#btn_1').removeClass('active');
    $('#btn_2').addClass('active');
    svg_4.html('');
    survival_by_age_group(svg_4, data, true);
  });
}