/** 世界地圖資料 */
const mapChartData = [
  { name: '台灣', value: 88, top: 35.2, left: 79.4 },
  { name: '葡萄牙', value: 85, top: 24.2, left: 42.7 },
  { name: '新加坡', value: 84, top: 51.3, left: 75.2 },
  { name: '中國', value: 83, top: 29.3, left: 75.2 },
  { name: '香港', value: 83, top: 35.8, left: 77.5 },
  { name: '印度', value: 83, top: 37.8, left: 67.5 },
  { name: '羅馬尼亞', value: 82, top: 19.8, left: 51.8 },
  { name: '澳洲', value: 81, top: 70.8, left: 83.5 },
  { name: '巴西', value: 81, top: 62.8, left: 30 },
  { name: '西班牙', value: 80, top: 22.8, left: 44 },
  { name: '法國', value: 79, top: 19.8, left: 45.3 },
  { name: '希臘', value: 78, top: 24.8, left: 51 },
  { name: '南非', value: 78, top: 74.4, left: 51.8 },
  { name: '英國', value: 78, top: 12.1, left: 44 },
  { name: '加拿大', value: 77, top: 16.6, left: 22.3 },
  { name: '瓜地馬拉', value: 77, top: 42, left: 18.4 },
  { name: '瑞典', value: 77, top: 7.9, left: 48.9 },
  { name: '奧地利', value: 76, top: 18.2, left: 48.9 },
  { name: '比利時', value: 76, top: 16.1, left: 46.3 },
  { name: '匈牙利', value: 75, top: 18.5, left: 50.1 },
  { name: '以色列', value: 74, top: 29.9, left: 54.6 },
  { name: '日本', value: 74, top: 26.3, left: 82.9 },
  { name: '瑞士', value: 74, top: 18.7, left: 47.2 },
  { name: '美國', value: 74, top: 24.7, left: 18.2 },
  { name: '阿根廷', value: 73, top: 77.7, left: 27.2 },
  { name: '義大利', value: 72, top: 21.7, left: 48.4 },
  { name: '土耳其', value: 71, top: 24.4, left: 54.4 },
  { name: '芬蘭', value: 70, top: 7.4, left: 51.4 },
  { name: '挪威', value: 70, top: 8.9, left: 47.4 },
  { name: '波蘭', value: 70, top: 14.9, left: 50 },
  { name: '秘魯', value: 67, top: 59.9, left: 22.7 },
  { name: '哥斯大黎加', value: 66, top: 45.5, left: 20.2 },
  { name: '荷蘭', value: 66, top: 15, left: 46.5 },
  { name: '墨西哥', value: 65, top: 36, left: 15.5 },
  { name: '巴拿馬', value: 64, top: 46, left: 21.5 },
  { name: '哥倫比亞', value: 61, top: 50, left: 23.4 },
  { name: '斯洛伐克', value: 56, top: 17.4, left: 50.2 },
  { name: '捷克', value: 49, top: 16.5, left: 49 },
];

/** 老幼黃金交叉資料 */
const lowBirthRate014Data = [
  { x: 0, y: 470.3 },
  { x: 1, y: 362.4 },
  { x: 2, y: 296.3 },
  { x: 3, y: 245.2 },
  { x: 4, y: 209.3 },
  { x: 5, y: 187.8 },
  { x: 6, y: 161.9 },
  { x: 7, y: 138.5 },
];
const lowBirthRate1564Data = [
  { x: 0, y: 1565.2 },
  { x: 1, y: 1705 },
  { x: 2, y: 1681.1 },
  { x: 3, y: 1507 },
  { x: 4, y: 1322.7 },
  { x: 5, y: 1090.8 },
  { x: 6, y: 915.6 },
  { x: 7, y: 775.5 },
];
const lowBirthRate65UpData = [
  { x: 0, y: 192.1 },
  { x: 1, y: 248.8 },
  { x: 2, y: 378.7 },
  { x: 3, y: 556.9 },
  { x: 4, y: 676.8 },
  { x: 5, y: 776.2 },
  { x: 6, y: 761.2 },
  { x: 7, y: 708 },
];

/** Map Chart 世界地圖 */
function onMapChartActive() {
  const mapChart = document.getElementById('map-chart');
  const mapChartClientRect = mapChart.getBoundingClientRect();
	const windowHeight = window.innerHeight;

  // 小於一半 viewport
  if (mapChartClientRect.top < (windowHeight / 2) && mapChartClientRect.top > 0) {
    mapChartData.map(function(mapData) {
      const div = document.createElement('DIV');
      div.classList.add('geotagging');
      if (mapData.name === '台灣') {
        div.classList.add('taiwan');
      }
      if (mapData.value > 70 && mapData.value < 75) {
        div.classList.add('warn');
      }
      if (mapData.value >= 75) {
        div.classList.add('danger');
      }
      div.setAttribute('style', 'top: ' + mapData.top + '%; left: ' + mapData.left + '%;');
      div.innerHTML =
        '<svg viewBox="0 0 15.93 26.25"><use xlink:href="#geotagging"></use></svg><p>' + mapData.name + ' ' + mapData.value + '%' + '</p>';
      mapChart.appendChild(div);
    });
    window.removeEventListener('scroll', onMapChartActive);
  }
}

/** 老幼黃金交叉折線圖 */
function onLowBirthLineChartActive() {
  const lowBirthLineChart = d3.select('#low-birth-line-chart');
  const width = (window.innerWidth) * 0.65;
  const height = (window.innerWidth) * 0.35;

  lowBirthLineChart.attr({
    width: String((window.innerWidth) * 0.5),
    height: String((window.innerWidth) * 0.31),
    viewBox: `-${(window.innerWidth) * 0.1} 0 ${(window.innerWidth) * 0.8} ${(window.innerWidth) * 0.4}`,
  });

  const scaleX = d3.scale.linear()
    .range([0, width])
    .domain([0, 7]);
  const scaleY = d3.scale.linear()
    .range([height, 0])
    .domain([0, 2000]);

  const line = d3.svg.line()
    .x(function(d) {
      return scaleX(d.x);
    })
    .y(function(d) {
      return scaleY(d.y);
    });

  const axisX = d3.svg.axis()
    .scale(scaleX)
    .orient('bottom')
    .tickValues([0,1,2,3,4,5,6,7])
    .tickFormat(function(d) {return `20${d}0`;})
    .ticks(7)
    .tickPadding(20);

  const axisY = d3.svg.axis()
    .scale(scaleY)
    .orient('left')
    .ticks(4)
    .tickFormat(function(d){ return d ? d + ' 萬': d; })
    .tickPadding(20);

  const axisXGrid = d3.svg.axis()
  .scale(scaleX)
  .orient('bottom')
  .ticks(7)
  .tickFormat('')
  .tickSize(-height,0);

  const axisYGrid = d3.svg.axis()
  .scale(scaleY)
  .orient('left')
  .ticks(5)
  .tickFormat('')
  .tickSize(-width,0);

  // Axis Grid line
  lowBirthLineChart.append('rect')
  .attr({
    width,
    height,
    fill: '#fff',
    transform: 'translate(35,20)',
  });

  // 黃色區塊遮罩
  lowBirthLineChart.append('rect')
  .attr({
    'width': width / 14 * 9,
    'height': height,
    'fill': '#FFFCD7',
    'transform': `translate(${ (width / 14 * 5) + 35}, 20)`,
    'style': 'opacity: 0;',
  })
  .transition()
  .duration(1000)
  .delay(3000)
  .style({
    'opacity': 1,
  });
  // 黃色區塊左邊線
  lowBirthLineChart.append('rect')
    .attr({
      'width': 1,
      'height': height,
      'fill': '#000',
      'transform': `translate(${ (width / 14 * 5) + 35}, 20)`,
      'style': 'opacity: 0;',
    })
    .transition()
    .duration(1000)
    .delay(3000)
    .style({
      'opacity': 1,
    });

  lowBirthLineChart.append('path')
    .attr({
      'd': line(lowBirthRate014Data),
      'stroke': '#888',
      'stroke-width': '3px',
      'fill': 'none',
      'transform':'translate(35, 20)'
    });
  lowBirthLineChart.append('path')
    .attr({
      'd': line(lowBirthRate1564Data),
      'stroke': '#AE4420',
      'stroke-width': '3px',
      'fill': 'none',
      'transform':'translate(35, 20)'
    });
  lowBirthLineChart.append('path')
    .attr({
      'd': line(lowBirthRate65UpData),
      'stroke': '#C7B299',
      'stroke-width': '3px',
      'fill': 'none',
      'transform':'translate(35, 20)'
    });

  // 動畫遮線條用白色區塊
  lowBirthLineChart.append('rect')
    .attr({
      'width': width,
      'height': height,
      'fill': '#fff',
      'transform': 'translate(35,20)',
    })
    .transition()
    .duration(3000)
    .attr({'transform': `translate(${width + 35}, 20)`})
    .style({
      'width': '0',
    });

  lowBirthLineChart.append('g')
    .call(axisXGrid)
    .attr({
      'fill': 'none',
      'stroke': 'rgba(0, 0, 0, 0.1)',
      'transform': `translate(35, ${height + 20})`
    });

  lowBirthLineChart.append('g')
    .call(axisYGrid)
    .attr({
      'fill': 'none',
      'stroke': 'rgba(0, 0, 0, 0.1)',
      'transform': 'translate(35, 20)'
    });

  // Axis 
  lowBirthLineChart.append('g')
    .call(axisX)
    .attr({
      'fill': 'none',
      'transform': `translate(35, ${height + 20})`
    })
    .selectAll('text')
    .attr({
      'fill': '#000',
      'stroke':' none',
    }).style({
      'font-size': '28px'
    });
  lowBirthLineChart.append('g')
    .call(axisY)
    .attr({
      'fill': 'none',
      'transform': 'translate(35,20)'
    }).selectAll('text')
    .attr({
      'fill': '#000',
      'stroke': 'none',
    }).style({
      'font-size': '28px'
    });
}

$(function() {
  window.addEventListener('scroll', onMapChartActive);
  onLowBirthLineChartActive();
});
