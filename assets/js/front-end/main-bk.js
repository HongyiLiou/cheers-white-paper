const lineChartTransformX = 60;
const lineChartTransformY = 40;
let windowWidth = window.innerWidth;
let lineViewBoxSize = {};
function setViewBox() {
  lineViewBoxSize = {
    width: 480,
    height: 360,
  };
  if (windowWidth <= 1399) {
    lineViewBoxSize = {
      width: 440,
      height: 320,
    };
  }
  if (windowWidth <= 1199) {
    lineViewBoxSize = {
      width: 700,
      height: 430,
    };
  }
  if (windowWidth <= 991) {
    lineViewBoxSize = {
      width: 500,
      height: 430,
    };
  }
  if (windowWidth <= 767) {
    lineViewBoxSize = {
      width: 480,
      height: 340,
    };
  }
  if (windowWidth <= 575) {
    lineViewBoxSize = {
      width: windowWidth - 20,
      height: (windowWidth - 40) * 0.84,
    };
  }
}
setViewBox();

function initTwVacanciesLineChart(targetWidth, targetHeight) {
  var twVacancies = d3.select("#tw_vacancies-line_chart");
  twVacancies.html("");
  var parent = twVacancies.select(function () {
    return this.parentNode;
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
    height: 0.78 * parentWidth,
    viewBox: `0 0 ${lineViewBoxSize.width} ${lineViewBoxSize.height}`,
  });

  var scaleX = d3.scale.linear().range([0, width]).domain([0, 4]);
  // console.log(scaleX(1))

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

  twVacancies
    .append("path")
    .attr({
      d: line(data),
      stroke: "#AE441F",
      "stroke-width": "2.5px",
      fill: "none",
      transform: `translate(${lineChartTransformX}, ${lineChartTransformY})`, //折線圖也要套用 translate
    })
    .style({
      "stroke-dasharray": 1000,
      "stroke-dashoffset": 1000,
      animation: "dash 2s linear forwards",
    });

  // Axis Grid line
  twVacancies
    .append("g")
    .call(axisXGrid)
    .attr({
      fill: "none",
      stroke: "rgba(0,0,0,.1)",
      transform: `translate(${lineChartTransformX},${height + lineChartTransformY})`,
    });

  twVacancies
    .append("g")
    .call(axisYGrid)
    .attr({
      fill: "none",
      stroke: "rgba(0,0,0,.1)",
      transform: `translate(${lineChartTransformX},${lineChartTransformY})`,
    });

  // Axis
  twVacancies
    .append("g")
    .call(axisX)
    .attr({
      fill: "none",
      transform: `translate(${lineChartTransformX},${height + lineChartTransformY})`,
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
      transform: `translate(${lineChartTransformX}, ${lineChartTransformY})`,
    })
    .selectAll("text")
    .attr({
      fill: "#000",
      stroke: "none",
    })
    .style({
      "font-size": "16px",
    });

  twVacancies
    .append("text")
    .attr({
      class: "x label",
      transform: `translate(${lineChartTransformX}, ${lineChartTransformY})`,
      x: -45,
      y: -20,
    })
    .text("職缺數");
}

function initWorkPeopleLineChart() {
  var workPeople = d3.select("#work_people-line_chart");
  workPeople.html("");
  var parent = workPeople.select(function () {
    return this.parentNode;
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
    height: 0.76 * parentWidth,
    viewBox: `0 0 ${lineViewBoxSize.width} ${lineViewBoxSize.height}`,
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
    2: "2022 年",
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

  workPeople
    .append("path")
    .attr({
      d: line(data),
      stroke: "#AE441F",
      "stroke-width": "2.5px",
      fill: "none",
      transform: `translate(${lineChartTransformX}, ${lineChartTransformY})`, //折線圖也要套用 translate
    })
    .style({
      "stroke-dasharray": 1000,
      "stroke-dashoffset": 1000,
      animation: "dash 2s linear forwards",
    });

  // Axis Grid line
  workPeople
    .append("g")
    .call(axisXGrid)
    .attr({
      fill: "none",
      stroke: "rgba(0,0,0,.1)",
      transform: `translate(${lineChartTransformX},${height + lineChartTransformY})`,
    });

  workPeople
    .append("g")
    .call(axisYGrid)
    .attr({
      fill: "none",
      stroke: "rgba(0,0,0,.1)",
      transform: `translate(${lineChartTransformX}, ${lineChartTransformY})`,
    });

  // Axis
  workPeople
    .append("g")
    .call(axisX)
    .attr({
      fill: "none",
      transform: `translate(${lineChartTransformX},${height + lineChartTransformY})`,
    })
    .selectAll("text")
    .attr({
      fill: "#000",
      stroke: "none",
    })
    .style({
      "font-size": "14px",
    });

  workPeople
    .append("g")
    .call(axisY)
    .attr({
      fill: "none",
      transform: `translate(${lineChartTransformX}, ${lineChartTransformY})`,
    })
    .selectAll("text")
    .attr({
      fill: "#000",
      stroke: "none",
    })
    .style({
      "font-size": "14px",
    });

  workPeople
    .append("text")
    .attr({
      class: "x label",
      transform: `translate(${lineChartTransformX}, ${lineChartTransformY})`,
      x: -45,
      y: -20,
    })
    .text("人數");
}

let barChartTransformX = 60;
let barChartTransformY = 20;
let xLebelSize = "14px";
let barViewBoxSize = {};

function setBarViewBox() {
  barViewBoxSize = {
    width: 460,
    height: 340,
  };
  barChartTransformX = 60;
  xLebelSize = "14px";
  if (windowWidth <= 1399) {
    barViewBoxSize = {
      width: 400,
      height: 320,
    };
    barChartTransformX = 60;
  }
  if (windowWidth <= 1199) {
    barViewBoxSize = {
      width: 700,
      height: 480,
    };
    barChartTransformX = 60;
  }
  if (windowWidth <= 991) {
    barViewBoxSize = {
      width: 530,
      height: 360,
    };
    barChartTransformX = 60;
  }
  if (windowWidth <= 767) {
    barViewBoxSize = {
      width: 400,
      height: 330,
    };
    barChartTransformX = 30;
  }
  if (windowWidth <= 575) {
    barViewBoxSize = {
      width: (windowWidth - 40) * 0.85,
      height: (windowWidth - 40) * 0.74,
    };
    barChartTransformX = 0;
    xLebelSize = "12px";
  }
}
setBarViewBox();

function initSkillWhenBarChart() {
  const skillWhen = d3.select("#skill_when-bar_chart");

  skillWhen.html("");
  const parent = skillWhen.select(function () {
    return this.parentNode;
  });
  const parentWidth = parseInt(parent.style("width"));
  const width = windowWidth <= 575 ? 0.88 * parentWidth : 0.74 * parentWidth;
  const height = windowWidth <= 575 ? 0.57 * parentWidth : 0.53 * parentWidth;

  const data = [
    {
      x: "現在",
      y: 43,
    },
    {
      x: "2年內",
      y: 22,
    },
    {
      x: "3-5年內",
      y: 22,
    },
    {
      x: "6-10年內",
      y: 5,
    },
    {
      x: "10年以上",
      y: 6,
    },
  ];

  skillWhen.attr({
    width: parentWidth,
    height: 0.7 * parentWidth,
    viewBox: `0 0 ${barViewBoxSize.width} ${barViewBoxSize.height}`,
  });

  // Scales
  const scaleX = d3.scale
    .ordinal()
    .domain(
      data.map(function (data) {
        return data.x;
      }),
    )
    .rangeRoundBands([0, width]);

  const scaleY = d3.scale
    .linear()
    .domain([
      0,
      d3.max(data, function (d) {
        return d.y;
      }) * 1.1,
    ])
    .range([height, 0]);

  // axis
  const axisX = d3.svg
    .axis()
    .scale(scaleX)
    .orient("bottom")
    .tickFormat(function (d) {
      return `${d}`;
    })
    .tickPadding(10);

  skillWhen
    .append("g")
    .call(axisX)
    .attr({
      fill: "none",
      class: "x axis",
      transform: `translate(${barChartTransformX}, ${height + barChartTransformY})`,
    })
    .selectAll("text")
    .attr({
      fill: "#000",
      stroke: "none",
    })
    .style({
      "font-size": xLebelSize,
    });

  const axisY = d3.svg.axis().scale(scaleY).orient("left").tickValues([0, 10, 20, 30, 40]);

  skillWhen
    .append("g")
    .call(axisY)
    .attr({
      fill: "none",
      class: "y axis",
      transform: `translate(${barChartTransformX}, ${barChartTransformY})`,
    })
    .selectAll("text")
    .attr({
      fill: "#000",
      stroke: "none",
    })
    .style({
      "font-size": "12px",
    });

  //bar
  var bar = skillWhen
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr({
      fill: "#AE441F",
      class: "bar",
      y: height,
      height: 0,
      transform: `translate(${barChartTransformX + scaleX.rangeBand() / 4}, ${barChartTransformY})`,
    })
    .attr("x", function (d) {
      return scaleX(d.x);
    })
    .attr("width", scaleX.rangeBand() / 2)
    .transition()
    .duration(1500)
    .attr({
      y: function (d) {
        return scaleY(d.y);
      },
      height: function (d) {
        return height - scaleY(d.y);
      },
    });

  // bar.transition()
  //   .duration(1500)
  //   .ease("elastic")
  //   .attr("y", function(d) { return scaleY(d.y); })
  //   .attr("height", function(d) { return height - scaleY(d.y); });

  skillWhen
    .append("text")
    .attr({
      class: "x label",
      transform: `translate(${lineChartTransformX}, ${lineChartTransformY})`,
      x: barChartTransformX - 82,
      y: -10,
    })
    .text("%")
    .style({
      "font-size": xLebelSize,
    });

  skillWhen
    .selectAll("text.bar_data")
    .data(data)
    .enter()
    .append("text")
    .text(function (d) {
      return d.y;
    })
    .attr({
      width: "20",
      fill: "#AE441F",
      "text-anchor": "middle",
      x: function (d) {
        return scaleX(d.x) + scaleX.rangeBand() / 2;
      },
      y: height - 7,
      transform: `translate(${barChartTransformX}, ${barChartTransformY})`,
    })
    .transition()
    .duration(1500)
    .attr({
      y: function (d) {
        return scaleY(d.y) - 7;
      },
    })
    .tween("number", function (d) {
      var i = d3.interpolateRound(0, d.y);
      return function (t) {
        this.textContent = i(t);
      };
    });
}

function initSkillIn3YearsBarChart() {
  const skillIn3Years = d3.select("#skill_in_3years-bar_chart");

  skillIn3Years.html("");
  const parent = skillIn3Years.select(function () {
    return this.parentNode;
  });
  const parentWidth = parseInt(parent.style("width"));
  const width = windowWidth <= 575 ? 0.88 * parentWidth : 0.74 * parentWidth;
  const height = windowWidth <= 575 ? 0.57 * parentWidth : 0.53 * parentWidth;

  const data = [
    {
      x: "20%以下",
      y: 31.4,
    },
    {
      x: "20-40%",
      y: 41.9,
    },
    {
      x: "20-60%",
      y: 21.8,
    },
    {
      x: "60-80%",
      y: 4.3,
    },
    {
      x: "80-100%",
      y: 0.6,
    },
  ];

  skillIn3Years.attr({
    width: parentWidth,
    height: 0.7 * parentWidth,
    viewBox: `0 0 ${barViewBoxSize.width} ${barViewBoxSize.height}`,
  });

  // Scales
  const scaleX = d3.scale
    .ordinal()
    .domain(
      data.map(function (data) {
        return data.x;
      }),
    )
    .rangeRoundBands([0, width]);

  const scaleY = d3.scale
    .linear()
    .domain([
      0,
      d3.max(data, function (d) {
        return d.y;
      }) * 1.1,
    ])
    .range([height, 0]);

  // axis
  const axisX = d3.svg
    .axis()
    .scale(scaleX)
    .orient("bottom")
    .tickFormat(function (d) {
      return `${d}`;
    })
    .tickPadding(10);

  skillIn3Years
    .append("g")
    .call(axisX)
    .attr({
      fill: "none",
      class: "x axis",
      transform: `translate(${barChartTransformX}, ${height + barChartTransformY})`,
    })
    .selectAll("text")
    .attr({
      fill: "#000",
      stroke: "none",
    })
    .style({
      "font-size": xLebelSize,
    });

  const axisY = d3.svg.axis().scale(scaleY).orient("left").tickValues([0, 10, 20, 30, 40]);

  skillIn3Years
    .append("g")
    .call(axisY)
    .attr({
      fill: "none",
      class: "y axis",
      transform: `translate(${barChartTransformX}, ${barChartTransformY})`,
    })
    .selectAll("text")
    .attr({
      fill: "#000",
      stroke: "none",
    })
    .style({
      "font-size": "12px",
    });

  //bar
  var bar = skillIn3Years
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr({
      fill: "#AE441F",
      class: "bar",
      y: height,
      height: 0,
      transform: `translate(${barChartTransformX + scaleX.rangeBand() / 4}, ${barChartTransformY})`,
    })
    .attr("x", function (d) {
      return scaleX(d.x);
    })
    .attr("width", scaleX.rangeBand() / 2)
    .transition()
    .duration(1500)
    .attr({
      y: function (d) {
        return scaleY(d.y);
      },
      height: function (d) {
        return height - scaleY(d.y);
      },
    });

  // bar.transition()
  //   .duration(3000)
  //   .ease("elastic")
  //   .attr("y", function(d) { return scaleY(d.y); })
  //   .attr("height", function(d) { return height - scaleY(d.y); });

  skillIn3Years
    .append("text")
    .attr({
      class: "x label",
      transform: `translate(${lineChartTransformX}, ${lineChartTransformY})`,
      x: barChartTransformX - 82,
      y: -10,
    })
    .text("%")
    .style({
      "font-size": xLebelSize,
    });

  skillIn3Years
    .selectAll("text.bar_data")
    .data(data)
    .enter()
    .append("text")
    .text(function (d) {
      return d.y;
    })
    .attr({
      width: "20",
      fill: "#AE441F",
      "text-anchor": "middle",
      x: function (d) {
        return scaleX(d.x) + scaleX.rangeBand() / 2;
      },
      y: height - 7,
      transform: `translate(${barChartTransformX}, ${barChartTransformY})`,
    })
    .transition()
    .duration(1500)
    .attr({
      y: function (d) {
        return scaleY(d.y) - 7;
      },
    })
    .tween("number", function (d) {
      var i = d3.interpolate(0, d.y);
      return function (t) {
        this.textContent = Math.round(i(t) * 10) / 10;
      };
    });
}

let arcChartTransformX = 0;
let arcChartTransformY = 0;
let arcViewBoxSize = {};

function setArcRwd() {
  arcViewBoxSize = {
    width: 400,
    height: 300,
  };
}
setArcRwd();

function initSelfArcChart() {
  const arcChart = d3.select("#self-arc_chart");
  const parent = arcChart.select(function () {
    return this.parentNode;
  });
  const parentWidth = parseInt(parent.style("width"));

  let width = 0.78 * parentWidth;
  let height = 0.6 * parentWidth;

  arcChart.attr({
    width: parentWidth,
    height: 0.76 * parentWidth,
    viewBox: `0 0 ${arcViewBoxSize.width} ${arcViewBoxSize.height}`,
  });

  const arc1 = d3.svg
    .arc()
    .innerRadius(50)
    .outerRadius(90)
    .startAngle(0)
    .endAngle(360 * 0.54 * (Math.PI / 180));

  arcChart.append("path").attr({
    d: arc1,
    transform: "translate(200,140)",
    fill: "#AE441F",
  });

  arcChart.append("rect").attr({
    x: 0,
    y: -70,
    width: 60,
    height: 1,
    fill: "#000",
    transform: `translate(${200 - 50},140)`,
  });

  let arc1_label = arcChart
    .append("text")
    .attr({
      x: 0,
      y: -80,
      transform: `translate(${200 - 80},140)`,
    })
    .text("");

  arc1_label
    .append("tspan")
    .attr({
      x: 0,
      dy: 0,
      "text-anchor": "middle",
    })
    .style({
      "font-size": "12px",
    })
    .text("台灣員工");
  arc1_label
    .append("tspan")
    .attr({
      x: 5,
      dy: 26,
      "text-anchor": "middle",
    })
    .style({
      "font-size": "26px",
    })
    .text("54");

  arc1_label
    .append("tspan")
    .attr({
      dx: 0,
      dy: 0,
      "text-anchor": "middle",
    })
    .style({
      "font-size": "16px",
    })
    .text("%");

  const arc2 = d3.svg
    .arc()
    .innerRadius(90)
    .outerRadius(130)
    .startAngle(0)
    .endAngle(360 * 0.66 * (Math.PI / 180));

  arcChart.append("path").attr({
    d: arc2,
    transform: "translate(200,140)",
    fill: "#F3E8D3",
  })
  .transition()
  .duration(2000)
  .ease("linear")
  .attrTween("d", function (d) {
    var start = {startAngle: 0, endAngle: 0} // <-A
    var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
    var interpolate = d3.interpolate(start, end); // <-B
    return function (t) {
      return arc2(interpolate(t)); // <-C
    };
})

  arcChart.append("rect").attr({
    x: 80,
    y: 90,
    width: 60,
    height: 1,
    fill: "#000",
    transform: `translate(${200},140)`,
  });

  let arc2_label = arcChart
    .append("text")
    .attr({
      x: 0,
      y: 80,
      transform: `translate(${200 + 165},140)`,
    })
    .text("");

  arc2_label
    .append("tspan")
    .attr({
      x: 0,
      dy: 0,
      "text-anchor": "middle",
    })
    .style({
      "font-size": "12px",
    })
    .text("全球員工");
  arc2_label
    .append("tspan")
    .attr({
      x: 5,
      dy: 26,
      "text-anchor": "middle",
    })
    .style({
      "font-size": "26px",
    })
    .text("66");

  arc2_label
    .append("tspan")
    .attr({
      dx: 0,
      dy: 0,
      "text-anchor": "middle",
    })
    .style({
      "font-size": "16px",
    })
    .text("%");
}

function d3Resize() {
  d3.select(window).on("resize", function () {
    windowWidth = window.innerWidth;
    setBarViewBox();
    setViewBox();
    initTwVacanciesLineChart();
    initWorkPeopleLineChart();
    initSkillWhenBarChart();
    initSkillIn3YearsBarChart();
  });
}

window.onload = function () {
  initTwVacanciesLineChart();
  initWorkPeopleLineChart();
  initSkillWhenBarChart();
  initSkillIn3YearsBarChart();
  initSelfArcChart();
  d3Resize();
};
