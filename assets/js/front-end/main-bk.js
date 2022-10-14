const lineChartTransformX = 60;
const lineChartTransformY = 40;
let windowWidth = window.innerWidth;
let lineViewBoxSize = {};
function setViewBox() {
  lineViewBoxSize = {
    width: 470,
    height: 360
  };
  if (windowWidth <= 1399) {
    lineViewBoxSize = {
      width: 440,
      height: 320
    }
  }
  if (windowWidth <= 1199) {
    lineViewBoxSize = {
      width: 700,
      height: 430
    }
  }
  if (windowWidth <= 991) {
    lineViewBoxSize = {
      width: 500,
      height: 430
    }
  }
  if (windowWidth <= 767) {
    lineViewBoxSize = {
      width: 400,
      height: 300
    }
  }
  if (windowWidth <= 575) {
    lineViewBoxSize = {
      width: windowWidth - 40,
      height: (windowWidth - 40) * 0.84
    }
  }
}
setViewBox();


function initTwVacanciesLineChart(targetWidth, targetHeight) {
  var twVacancies = d3.select("#tw_vacancies-line_chart");
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

  twVacancies.append("path").attr({
    d: line(data),
    stroke: "#AE441F",
    "stroke-width": "2.5px",
    fill: "none",
    transform: `translate(${lineChartTransformX}, ${lineChartTransformY})`, //折線圖也要套用 translate
  }).style({
    "stroke-dasharray": 1000,
    "stroke-dashoffset": 1000,
    animation: "dash 2s linear forwards"
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

  twVacancies.append("g").call(axisYGrid).attr({
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

  twVacancies.append("text")
    .attr({
      "class": "x label",
      "transform": `translate(${lineChartTransformX}, ${lineChartTransformY})`,
      x: -45,
      y: -20
    })
    .text("職缺數");
}

function initWorkPeopleLineChart() {
  var workPeople = d3.select("#work_people-line_chart");
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

  workPeople.append("path").attr({
    d: line(data),
    stroke: "#AE441F",
    "stroke-width": "2.5px",
    fill: "none",
    transform: `translate(${lineChartTransformX}, ${lineChartTransformY})`, //折線圖也要套用 translate
  }).style({
    "stroke-dasharray": 1000,
    "stroke-dashoffset": 1000,
    animation: "dash 2s linear forwards"
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

  workPeople.append("g").call(axisYGrid).attr({
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

    workPeople.append("text")
      .attr({
        "class": "x label",
        "transform": `translate(${lineChartTransformX}, ${lineChartTransformY})`,
        x: -45,
        y: -20
      })
      .text("人數");
}

const barChartTransformX = 60;
const barChartTransformY = 20;
let barViewBoxSize = {};

function setBarViewBox() {
  barViewBoxSize = {
    width: 460,
    height: 340
  };
  if (windowWidth <= 1399) {
    barViewBoxSize = {
      width: 420,
      height: 320
    }
  }
  if (windowWidth <= 1199) {
    barViewBoxSize = {
      width: 750,
      height: 480
    }
  }
  if (windowWidth <= 991) {
    barViewBoxSize = {
      width: 500,
      height: 430
    }
  }
  if (windowWidth <= 767) {
    barViewBoxSize = {
      width: 400,
      height: 300
    }
  }
  if (windowWidth <= 575) {
    barViewBoxSize = {
      width: windowWidth - 40,
      height: (windowWidth - 40) * 0.84
    }
  }
}
setBarViewBox();

function initSkillWhenBarChart() {
  const skillWhen = d3.select("#skill_when-bar_chart");

  skillWhen.html("");
  const parent = skillWhen.select(function() {
    return this.parentNode
  });
  const parentWidth = parseInt(parent.style("width"));
  const width = 0.7414448669201521 * parentWidth;
  const height = 0.532319391634981 * parentWidth;

  const data = [
    {
      x: "現在",
      y: 43
    },
    {
      x: "2年內",
      y: 22
    },
    {
      x: "3-5年內",
      y: 22
    },
    {
      x: "6-10年內",
      y: 5
    },
    {
      x: "10年以上",
      y: 6
    }
  ]

  skillWhen.attr({
    width: parentWidth,
    height: 0.7 * parentWidth,
    viewBox: `0 0 ${barViewBoxSize.width} ${barViewBoxSize.height}`,
  })

  // Scales
  const scaleX = d3.scale.ordinal()
    .domain(data.map(function(data) { return data.x }))
    .rangeRoundBands([0, width]);

  const scaleY = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return d.y; }) * 1.1])
    .range([height, 0]);

  // axis
  const axisX = d3.svg
    .axis()
    .scale(scaleX)
    .orient("bottom")
    .tickFormat(function (d) {
      return `${d}`;
    })
    .tickPadding(10)

  skillWhen.append("g")
    .call(axisX)
    .attr({
      "fill": "none",
      "class": "x axis",
      "transform": `translate(${barChartTransformX}, ${height + barChartTransformY})`
    })
    .selectAll("text")
    .attr({
      fill: "#000",
      stroke: "none",
    })
    .style({
      "font-size": "14px",
    });

  const axisY = d3.svg
    .axis()
    .scale(scaleY)
    .orient("left")
    .tickValues([0, 10, 20, 30, 40])

  skillWhen.append("g")
    .call(axisY)
    .attr({
      "fill": "none",
      "class": "y axis",
      "transform": `translate(${barChartTransformX}, ${barChartTransformY})`
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
  var bar = skillWhen.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr({
        "fill": "#AE441F",
        "class": "bar",
        "y": height,
        "height": 0,
        transform: `translate(${barChartTransformX + scaleX.rangeBand() / 4}, ${barChartTransformY})`
      })
      .attr("x", function(d) { return scaleX(d.x); })
      .attr("width", scaleX.rangeBand() / 2)

  bar.transition()
    .duration(1500)
    .ease("elastic")
    .attr("y", function(d) { return scaleY(d.y); })
    .attr("height", function(d) { return height - scaleY(d.y); });
}

function initSkillIn3YearsBarChart() {
  const skillWhen = d3.select("#skill_in_3years-bar_chart");

  skillWhen.html("");
  const parent = skillWhen.select(function() {
    return this.parentNode
  });
  const parentWidth = parseInt(parent.style("width"));
  const width = 0.7414448669201521 * parentWidth;
  const height = 0.532319391634981 * parentWidth;

  const data = [
    {
      x: "現在",
      y: 43
    },
    {
      x: "2年內",
      y: 22
    },
    {
      x: "3-5年內",
      y: 22
    },
    {
      x: "6-10年內",
      y: 5
    },
    {
      x: "10年以上",
      y: 6
    }
  ]

  skillWhen.attr({
    width: parentWidth,
    height: 0.7 * parentWidth,
    viewBox: `0 0 ${barViewBoxSize.width} ${barViewBoxSize.height}`,
  })

  // Scales
  const scaleX = d3.scale.ordinal()
    .domain(data.map(function(data) { return data.x }))
    .rangeRoundBands([0, width]);

  const scaleY = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return d.y; }) * 1.1])
    .range([height, 0]);

  // axis
  const axisX = d3.svg
    .axis()
    .scale(scaleX)
    .orient("bottom")
    .tickFormat(function (d) {
      return `${d}`;
    })
    .tickPadding(10)

  skillWhen.append("g")
    .call(axisX)
    .attr({
      "fill": "none",
      "class": "x axis",
      "transform": `translate(${barChartTransformX}, ${height + barChartTransformY})`
    })
    .selectAll("text")
    .attr({
      fill: "#000",
      stroke: "none",
    })
    .style({
      "font-size": "14px",
    });

  const axisY = d3.svg
    .axis()
    .scale(scaleY)
    .orient("left")
    .tickValues([0, 10, 20, 30, 40])

  skillWhen.append("g")
    .call(axisY)
    .attr({
      "fill": "none",
      "class": "y axis",
      "transform": `translate(${barChartTransformX}, ${barChartTransformY})`
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
  var bar = skillWhen.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr({
      "fill": "#AE441F",
      "class": "bar",
      "y": height,
      "height": 0,
      transform: `translate(${barChartTransformX + scaleX.rangeBand() / 4}, ${barChartTransformY})`
    })
    .attr("x", function(d) { return scaleX(d.x); })
    .attr("width", scaleX.rangeBand() / 2)

  bar.transition()
    .duration(3000)
    .ease("elastic")
    .attr("y", function(d) { return scaleY(d.y); })
    .attr("height", function(d) { return height - scaleY(d.y); });
}

function d3Resize() {
  d3.select(window).on("resize", function() {
    windowWidth = window.innerWidth;
    setViewBox();
    initTwVacanciesLineChart();
    initWorkPeopleLineChart();
    initSkillWhenBarChart();
  });
}

window.onload = function () {
  initTwVacanciesLineChart();
  initWorkPeopleLineChart();
  initSkillWhenBarChart();
  d3Resize();
};
