// create an array of objects
const styles = [
    {
        'background':'red',
        'color':'white',
        'width':'35'
    },
    {
        'background':'yellow',
        'color':'black',
        'width':'25'
    },
    {
        'background':'green',
        'color':'white',
        'width':'20'
    },
    {
        'background':'black',
        'color':'white',
        'width':'10'
    },
    {
        'background':'orange',
        'color':'white',
        'width':'10'
    }
];

let li = d3.selectAll('.items li').data(styles)

li.style('font-size','18px');
li.style('padding','6px');
li.style('margin','4px');
li.style('list-style','none');
li.style('background',function(data){
    return data.background;
});
li.style('color',function(data){
    return data.color;
});
li.style('width':function(data){
    return data.width + '%';
});