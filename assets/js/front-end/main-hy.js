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

$(function() {
  window.addEventListener('scroll', onMapChartActive);
});

/** Map Chart 世界地圖 */
function onMapChartActive() {
  const mapChart = document.querySelector('.chart-img');
  const mapChartClientRect = mapChart.getBoundingClientRect();
	const windowHeight = window.innerHeight;

  // 小於一半 viewport
  if (mapChartClientRect.top < (windowHeight / 2)) {
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
      div.innerHTML = '<svg viewBox="0 0 15.93 26.25"><use xlink:href="#geotagging"></use></svg><p>' + mapData.name + ' ' + mapData.value + '%' + '</p>';
      mapChart.appendChild(div);
    });
    window.removeEventListener('scroll', onMapChartActive);
  }
}

