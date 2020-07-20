// 实现一个 MapSum 类里的两个方法，insert 和 sum。

// 对于方法 insert，你将得到一对（字符串，整数）的键值对。字符串表示键，整数表示值。如果键已经存在，那么原来的键值对将被替代成新的键值对。

// 对于方法 sum，你将得到一个表示前缀的字符串，你需要返回所有以该前缀开头的键的值的总和。

// 示例 1:

// 输入: insert("apple", 3), 输出: Null
// 输入: sum("ap"), 输出: 3
// 输入: insert("app", 2), 输出: Null
// 输入: sum("ap"), 输出: 5



/**
 * Initialize your data structure here.
 */
const MapSum = function() {
    this.next = {}
    this.isEnd = false
}

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    let self = this
    for (let i = 0; i < key.length; i++) {
        if (!self.next[key[i]]) {
            self.next[key[i]] = {
                next: {},
                isEnd: false
            }
        }
        self = self.next[key[i]]
    }
    self.val = val
    self.isEnd = true
}

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    /**
     * 计算前缀和
     * @param {MapSum} self 
     */
    const getPrefixVal = (self) => {
        if (!self) {
            return 0
        }
        let sum = 0
        Object.keys(self.next).forEach((key) => {
            if (self.next[key].isEnd) {
                sum += self.next[key].val + getPrefixVal(self.next[key])
            } else {
                sum += getPrefixVal(self.next[key])
            }
        })
        return sum
    }
    let self = this
    let prev = 0
    let index = 0
    while (index < prefix.length) {
        const target = self.next[prefix[index]]
        if (!target) {
            self = target
            break
        }
        if (target.isEnd) {
            prev = target.val
        }
        index++
        self = target
    }
    if (index === prefix.length) {
        return prev + getPrefixVal(self)
    }
    return 0
}


/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */