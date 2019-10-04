async function fetchData() {
  const response = await fetch('text.json');
  const data = await response.json();
  createVisualization(data);
}
fetchData();

function createVisualization(d) {
  const svg = d3
    .select('body')
    .append('svg')
    .attr('width', 1000)
    .attr('height', 1000);

  /*EMPTY SELECTION*/
  const rect = svg.selectAll('rect');

  rect
    .data(d)
    .enter()
    .append('rect')
    .attr('width', d => d.width)
    .attr('height', d => d.height * 4)
    .attr('x', (d, i) => i * (d.width + 2))
    .attr('y', d => 300 - d.height * 4)

    //producing randomm colors
    .style('fill', function() {
      return 'hsl(' + Math.random() * 360 + ',100%,50%)';
    });
}
