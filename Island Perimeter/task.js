/**
     * @param {number[][]} grid
     * @return {number}
     */
    var islandPerimeter = function(grid) {
        var result=0,counter;
        for(var i=0;i<grid.length;i++){
            for(var j=0;j<grid[i].length;j++){
                counter=4;
                if(grid[i][j]==1){
                    if(i-1>=0&&grid[i-1][j]) counter--;
                    if(i+1<grid.length&&grid[i+1][j]) counter--;
                    if(j+1<grid[i].length&&grid[i][j+1]) counter--;
                    if(j-1>=0&&grid[i][j-1]) counter--;
                    result+=counter;
                }
            }
        }
        return result;
    };