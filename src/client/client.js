var socket = io();

var svg = d3.select('svg')
    .style('width', window.innerWidth)
    .style('height', window.innerHeight);

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