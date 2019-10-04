// //select
// d3.select('p').style('color', 'red');

// //selectall
// d3.selectAll('p').style('color', 'black');

//selecting class
//canva is d3 wrapped element
// const canvas = d3.select('.canva');
// console.log(canvas);

// //creating an svg ele inside canvas
// //here svg element acts as a canvas ele
// const svg = canvas.append('svg');
// svg.attr('width', '250').attr('height', '250');

// const svg = canvas
//   .append('svg')
//   .attr('width', 600)
//   .attr('height', 600);

// svg
//   .append('circle')
//   .attr('cx', 200)
//   .attr('cy', 50)
//   .attr('r', 50)
//   .attr('fill', 'green');

// svg
//   .append('text')
//   .text('hello world')
//   .attr('font-size', 40)
//   .attr('text-anchor', 'start')
//   .attr('x', 300)
//   .attr('y', 100);

// svg
//   .append('text')
//   .text('hello world')
//   .attr('font-size', 40)
//   .attr('text-anchor', 'middle')
//   .attr('x', 300)
//   .attr('y', 200);

// svg
//   .append('text')
//   .text('hello world')
//   .attr('font-size', 40)
//   .attr('text-anchor', 'end')
//   .attr('x', 300)
//   .attr('y', 300);

/***************MANUAL CREATION***************/
// const canvas = d3.select('.canva');
// console.log(canvas);

// const svg = canvas.select('svg');

// const dataArray = [4, 10, 15, 30, 0, 12, 40];

// const rect = svg.selectAll('rect');

// rect
//   .data(dataArray)
//   .attr('width', 24)
//   .attr('height', function(d) {
//     return d * 2;
//   })
//   .attr('fill', 'red')
//   .attr('x', function(d, i) {
//     console.log(d, i);
//     return i * 27;
//   })
//   .attr('y', function(d) {
//     return 100 - d * 2;
//   });

/************DYNAMIC CREATION***********/
// async function fetchData() {
//   const response = await fetch('text.json');
//   const data = await response.json();
//   console.log(data);
//   createVisualization(data);
// }
// fetchData();

// function createVisualization(d) {
//   const svg = d3
//     .select('body')
//     .append('svg')
//     .attr('width', 1000)
//     .attr('height', 1000);

//   /*EMPTY SELECTION*/
//   const rect = svg.selectAll('rect');

//   rect
//     .data(d)
//     .enter()
//     .append('rect')
//     .attr('width', d => d.width)
//     .attr('height', d => d.height * 4)
//     .attr('x', (d, i) => i * (d.width + 2))
//     .attr('y', d => 300 - d.height * 4)

//     //producing randomm colors
//     .style('fill', function() {
//       return 'hsl(' + Math.random() * 360 + ',100%,50%)';
//     });
// }

// d3.select('body')
//   .transition()
//   .style('background-color', 'black');


























