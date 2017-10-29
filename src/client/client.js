function renderFileTree(d) {
    directories = d.children.filter((v,i,a) => {
        return v.type == 'directory'
    })
    console.log(d,directories)
    var file_container = svg.append('g')
        .attr('id', 'file_container')
    file_container.append('text')
        .text('SELECT FILE LOCATION')
        .attr('id','fileTitle')
    file_container.selectAll('#fileFolder')
        .data(directories)
        .enter()
        .append('text')
        .attr('id','fileFolder')
        .text( (d,i)=>{
            return d.name
        })
        .attr('style','cursor:pointer')
        .attr('x',0)
        .attr('y', (d,i) => {
            return i*25 + d3.select('#fileTitle').node().getBBox().height *1.1
        })
        .on("click", (d) => {
            console.log('click element', d)
            socket.emit('set_file_path', d.path)
        }) 

    file_container.attr('transform', "translate(" + (window.innerWidth - file_container.node().getBBox().width)/2 + "," +  window.innerHeight*0.55 + ")")

}

function renderWatchLocation(t) {
    var filePath = svg.append('text')
        .attr('id', 'watchlocation')
        .text('watching folder: ' + t)

    filePath
        .attr('x', (window.innerWidth - filePath.node().getBBox().width)/2)
        .attr('y', subTitle.node().getBBox().y + subTitle.node().getBBox().height*1.1)
}

var svg = d3.select('svg')
    .style('width', window.innerWidth)
    .style('height', window.innerHeight);

var title = svg.append('text')
    .attr('id', 'title')
    .text('PhotoboothJS')
    .classed('title', true)
    .attr('font-size','80')

var subTitle = svg.append('text')
    .attr('id', 'subTitle')
    .text('MADE BY TOBY WILLIAMS')
    .classed('title', true)
    .attr('font-size','30')

title
    .attr('x', (window.innerWidth - title.node().getBBox().width)/2)
    .attr('y', window.innerHeight*0.4)
    
subTitle
    .attr('x', (window.innerWidth - subTitle.node().getBBox().width)/2)
    .attr('y', title.node().getBBox().y + title.node().getBBox().height)

var socket = io();

socket.on('connect', function () {
    console.log('socket connected')
    socket.emit('get_config')
});

socket.on('disconnect', function () {
    console.log('disconnect')
    svg.select('#title').text('disconnected')
    svg.select('#watchlocation').remove()
    svg.select('#subTitle').remove()
    svg.select('#file_container').remove()

});

socket.on('send_config', (m) => {
    console.log('send_config',m)
    if ( m.file.set == false ) {
        socket.emit('get_file_tree')
    } else {
        renderWatchLocation(m.file.filepath)
    }
})

socket.on('send_file_tree', (m) => {
    console.log('send_file_tree', m)
    renderFileTree(m)    
})

socket.on('confirm_file_path', (m) => {
    console.log('confirm_file_path', m)
    svg.select('#file_container').remove()
    renderWatchLocation(m)
})

socket.on('new file', function(msg){
    console.log('file!', msg)
    svg.append('image')
        .attr('xlink:href', 'pictures/' + msg)
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('x',0)
        .attr('y',0)
        .on('load', function() {
            console.log('loaded')
        }).attr('xlink:href', 'pictures/' + msg)
    setTimeout(function() {
        console.log('remove after time out')
        svg.select('image')
            .remove()
    }, 5000);
});