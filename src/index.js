
// You should implement your task here.

module.exports = function towelSort (matrix) {
    var ts = [];
    if (!matrix || matrix.length === 0)
    {
        return ts;
    }
    else
    {
        function compare(a, b) 
        {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
        }
        for (let i=0; i<matrix.length; i++)
        {
            let sort_matrix = matrix[i].sort(compare);
            if (i % 2 !== 0)
            {
                sort_matrix = sort_matrix.reverse();
            }
            ts = ts.concat(sort_matrix);
        }
        return ts;
    }
}
