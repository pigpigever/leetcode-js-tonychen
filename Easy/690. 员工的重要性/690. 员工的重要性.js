/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
const GetImportance = function(employees, id) {
    const helper = (targetId) => {
        let res = 0
        for (let i = 0; i < employees.length; i++) {
            const { id, importance, subordinates } = employees[i]
            if (id === targetId) {
                res = importance
                for (const subId of subordinates) {
                    res += helper(subId)
                }
            }
        }
        return res
    }
    return helper(id)
}
