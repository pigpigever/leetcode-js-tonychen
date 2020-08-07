/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function(numCourses, prerequisites) {
    const generateGraph = (index) => {
        if (index === prerequisites.length) {
            return
        }
        const [ first, second ] = prerequisites[index]
        if (!graph[first]) {
            graph[first] = [second]
        } else {
            graph[first].push(second)
        }
        generateGraph(index + 1)
    }
    const checkGraphCircle = (course) => {
        if (visited[course] === 1) {
            return true
        }
        if (visited[course] === -1) {
            return false
        }
        visited[course] = 1
        if (graph[course] && graph[course].some((child) => checkGraphCircle(child))) {
            return true
        }
        visited[course] = -1
        return false
    }
    const graph = {}
    const visited = []
    generateGraph(0)
    for (let i = 0; i < numCourses; i++) {
        if (checkGraphCircle(i)) {
            return false
        }
    }
    return true
}
