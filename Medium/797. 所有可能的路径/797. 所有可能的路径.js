/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function (graph) {
    const map = [];
    const res = [];

    const init = () => {
        graph.forEach((deps, index) => {
            map[index] = deps;
        });
    };

    const run = (step = 0, path = []) => {
        if (step === graph.length - 1) {
            res.push(path.concat([step]));
            return;
        }
        const deps = map[step];
        deps.forEach(dep => {
            run(dep, path.concat([step]));
        });
    };

    init();
    run();

    return res;
};

allPathsSourceTarget([[1, 2], [3], [3], []]);
allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]);
allPathsSourceTarget([[1], []]);
allPathsSourceTarget([[1, 2, 3], [2], [3], []]);
allPathsSourceTarget([[1, 3], [2], [3], []]);
