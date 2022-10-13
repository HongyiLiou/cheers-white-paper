function initTwVacanciesLineChart(targetWidth, targetHeight) {
  var twVacancies = d3.select("#tw-vacancies_line-chart");
  twVacancies.html("");
  var parent = twVacancies.select(function() {
    return this.parentNode
  });
  var parentWidth = parseInt(parent.style("width"));

  var width = 0.7414448669201521 * parentWidth;
  var height = 0.532319391634981 * parentWidth;

  var data = [
    {
      x: 0,
      y: 444556,
    },
    {
      x: 1,
      y: 457848,
    },
    {
      x: 2,
      y: 537940,
    },
    {
      x: 3,
      y: 496628,
    },
    {
      x: 4,
      y: 515644,
    },
  ];

  twVacancies.attr({
    width: parentWidth,
    height: 0.7319391634980988 * parentWidth,
    viewBox: `0 0 ${0.8365019011406845 * parentWidth} ${0.6653992395437263 * parentWidth}`,
  });

  var scaleX = d3.scale.linear().range([0, width]).domain([0, 4]);

  var scaleY = d3.scale.linear().range([height, 0]).domain([0, 600000]);

  var line = d3.svg
    .line()
    .x(function (d) {
      return scaleX(d.x);
    })
    .y(function (d) {
      return scaleY(d.y);
    });

  var axisXTick = {
    0: "2020年上半",
    1: "2020年下半",
    2: "2021年上半",
    3: "2021年下半",
    4: "2022年上半",
  };
  var axisX = d3.svg
    .axis()
    .scale(scaleX)
    .orient("bottom")
    .tickValues([0, 1, 2, 3, 4])
    .tickFormat(function (d) {
      return `${axisXTick[d]}`;
    })
    .tickPadding(10);

  var axisY = d3.svg
    .axis()
    .scale(scaleY)
    .orient("left")
    .tickValues([0, 200000, 400000, 600000])
    .tickFormat(function (d) {
      return d ? d / 10000 + "萬" : d;
    });

  var axisXGrid = d3.svg.axis().scale(scaleX).orient("bottom").ticks(5).tickFormat("").tickSize(-height, 0);

  var axisYGrid = d3.svg.axis().scale(scaleY).orient("left").ticks(3).tickFormat("").tickSize(-width, 0);

  twVacancies.append("path").attr({
    d: line(data),
    stroke: "#AE441F",
    "stroke-width": "2.5px",
    fill: "none",
    transform: "translate(35,20)", //折線圖也要套用 translate
  });

  // Axis Grid line
  twVacancies
    .append("g")
    .call(axisXGrid)
    .attr({
      fill: "none",
      stroke: "rgba(0,0,0,.1)",
      transform: "translate(35," + (height + 20) + ")",
    });

  twVacancies.append("g").call(axisYGrid).attr({
    fill: "none",
    stroke: "rgba(0,0,0,.1)",
    transform: "translate(35,20)",
  });

  // Axis
  twVacancies
    .append("g")
    .call(axisX)
    .attr({
      fill: "none",
      transform: "translate(35," + (height + 20) + ")",
    })
    .selectAll("text")
    .attr({
      fill: "#000",
      stroke: "none",
    })
    .style({
      "font-size": "12px",
    });

  twVacancies
    .append("g")
    .call(axisY)
    .attr({
      fill: "none",
      transform: "translate(35,20)",
    })
    .selectAll("text")
    .attr({
      fill: "#000",
      stroke: "none",
    })
    .style({
      "font-size": "16px",
    });
}

function initWorkPeopleLineChart() {
  var workPeople = d3.select("#work-people_line-chart");
  workPeople.html("");
  var parent = workPeople.select(function() {
    return this.parentNode
  });
  var parentWidth = parseInt(parent.style("width"));

  var width = 0.7414448669201521 * parentWidth;
  var height = 0.532319391634981 * parentWidth;

  var data = [
    {
      x: 0,
      y: 1681.1,
    },
    {
      x: 1,
      y: 1654.6,
    },
    {
      x: 2,
      y: 1629.9,
    },
  ];

  workPeople.attr({
    width: parentWidth,
    height: 0.7319391634980988 * parentWidth,
    viewBox: `0 0 ${0.8365019011406845 * parentWidth} ${0.6653992395437263 * parentWidth}`,
  });

  var scaleX = d3.scale.linear().range([0, width]).domain([0, 2]);

  var scaleY = d3.scale.linear().range([height, 0]).domain([1500, 1750]);

  var line = d3.svg
    .line()
    .x(function (d) {
      return scaleX(d.x);
    })
    .y(function (d) {
      return scaleY(d.y);
    });

  var axisXTick = {
    0: "2020",
    1: "2021",
    2: "2022",
  };
  var axisX = d3.svg
    .axis()
    .scale(scaleX)
    .orient("bottom")
    .tickValues([0, 1, 2])
    .tickFormat(function (d) {
      return `${axisXTick[d]}`;
    })
    .tickPadding(10);

  var axisY = d3.svg
    .axis()
    .scale(scaleY)
    .orient("left")
    .tickValues([1500, 1550, 1600, 1650, 1700, 1750])
    .tickFormat(function (d) {
      return d + "萬";
    });

  var axisXGrid = d3.svg.axis().scale(scaleX).orient("bottom").ticks(2).tickFormat("").tickSize(-height, 0);

  var axisYGrid = d3.svg.axis().scale(scaleY).orient("left").ticks(5).tickFormat("").tickSize(-width, 0);

  workPeople.append("path").attr({
    d: line(data),
    stroke: "#AE441F",
    "stroke-width": "2.5px",
    fill: "none",
    transform: "translate(35,20)", //折線圖也要套用 translate
  });

  // Axis Grid line
  workPeople
    .append("g")
    .call(axisXGrid)
    .attr({
      fill: "none",
      stroke: "rgba(0,0,0,.1)",
      transform: "translate(35," + (height + 20) + ")",
    });

  workPeople.append("g").call(axisYGrid).attr({
    fill: "none",
    stroke: "rgba(0,0,0,.1)",
    transform: "translate(35,20)",
  });

  // Axis
  workPeople
    .append("g")
    .call(axisX)
    .attr({
      fill: "none",
      transform: "translate(35," + (height + 20) + ")",
    })
    .selectAll("text")
    .attr({
      fill: "#000",
      stroke: "none",
    })
    .style({
      "font-size": "12px",
    });

    workPeople
    .append("g")
    .call(axisY)
    .attr({
      fill: "none",
      transform: "translate(35,20)",
    })
    .selectAll("text")
    .attr({
      fill: "#000",
      stroke: "none",
    })
    .style({
      "font-size": "14px",
    });

  //  workPeople.append("text")
  //   .attr("class", "label, y")
  //   .attr("text-anchor", "end")
  //   .attr("y", 0)
  //   .attr("dy", ".75em")
  //   .text("人數")
  //   .attr("transform", "rotate(-90)");
}

function d3Resize() {
  d3.select(window).on("resize", function() {
    initTwVacanciesLineChart();
    initWorkPeopleLineChart();
  });
}

window.onload = function () {
  initTwVacanciesLineChart();
  initWorkPeopleLineChart();
  d3Resize();
};
