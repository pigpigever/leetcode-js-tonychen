/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let map = [],result =[]
    for(let i=0;i<list1.length;i++){
        for(let j=0;j<list2.length;j++){
            if(list1[i] == list2[j]){
                map.push({data:list1[i],number:i+j})
            }
        }
    }
    map.sort((a,b)=>{
        if(a.number > b.number){
            return 1
        }
        if(a.number < b.number){
            return -1
        }
        return 0
    })
    let min = map[0].number
    map.forEach(item=>{
        if(min === item.number){
            result.push(item.data)
        }
    })
    return result
};