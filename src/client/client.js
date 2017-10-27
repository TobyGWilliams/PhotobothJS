var socket = io();

var svg = d3.select('svg')
    .style('width', window.innerWidth)
    .style('height', window.innerHeight);

var title = svg.append('text')
    .text('PhotoboothJS')
    .classed('title', true)
    .attr('font-size','80')

var subTitle = svg.append('text')
    .text('MADE BY TOBY WILLIAMS')
    .classed('title', true)
    .attr('font-size','30')

title
    .attr('x', (window.innerWidth - title.node().getBBox().width)/2)
    .attr('y', window.innerHeight*0.4)
    
subTitle
    .attr('x', (window.innerWidth - subTitle.node().getBBox().width)/2)
    .attr('y', title.node().getBBox().y + title.node().getBBox().height)


socket.on('new file', function(msg){
    console.log('file!', msg)
    svg.append('image')
        .attr('xlink:href', 'pictures/' + msg)
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('x',0)
        .attr('y',0)    
    setTimeout(function() {
        console.log('remove after time out')
        svg.select('image')
            .remove()
    }, 5000);

});