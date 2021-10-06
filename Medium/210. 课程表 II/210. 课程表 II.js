// 现在你总共有 numCourses 门课需要选，记为  0  到  numCourses - 1。给你一个数组  prerequisites ，
// 其中 prerequisites[i] = [ai, bi] ，表示在选修课程 ai 前 必须 先选修  bi 。
//
// 例如，想要学习课程 0 ，你需要先完成课程  1 ，我们用一个匹配来表示：[0,1] 。
// 返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 任意一种 就可以了。
// 如果不可能完成所有课程，返回 一个空数组 。

const FLAG = 1;
const VISITED = 2;

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = function (numCourses, prerequisites) {
    const hasCircleDep = (index, cache) => {
        if (cache[index] === FLAG) {
            return true;
        }
        if (cache[index] === VISITED) {
            return false;
        }
        const deps = graph[index];
        cache[index] = FLAG;
        for (const dep of deps) {
            if (hasCircleDep(dep, cache)) {
                return true;
            }
        }
        cache[index] = VISITED;
        res.push(index);
        return false;
    };

    if (!prerequisites.length) {
        return Array(numCourses).fill().map((_, i) => i);
    }
    const res = [];
    const cache = []
    const graph = Array(numCourses).fill().map(_ => []);

    for (let i = 0; i < prerequisites.length; i++) {
        const [source, target] = prerequisites[i];
        graph[target].push(source);
    }

    for (let i = 0; i < numCourses; i++) {
        if (hasCircleDep(i, cache)) {
            return [];
        }
    }
    return res.reverse();
};

console.info(
    findOrder(10, [[5, 8], [3, 5], [1, 9], [4, 5], [0, 2], [7, 8], [4, 9]])
);
// [9,8,7,6,5,4,3,2,1,0]
// console.info(
//     findOrder(3,  [[1,0],[2,0],[0,2]])
// );
//
// console.info(
//     findOrder(4, [[1, 0], [2, 0], [3, 1], [0, 3]]),
// );
// console.info(
//     findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])
// );
// console.info(
//     findOrder(4, [[1,0],[2,0],[3,1],[1,2]])
// );
// console.info(
//     findOrder(7, [[1,0],[0,3],[0,2],[3,2],[2,5],[4,5],[5,6],[2,4]])
// );
