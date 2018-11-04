/*
 * 大数相加
 * 思路：1、把输入读取为字符串
 * 		2、处理字符串
 * 			1、处理前导0
 * 			2、处理进位
*/

#include <iostream>
#include <cstdlib>
#include <cstring>
#include <algorithm>

using namespace std;

const int MAX = 1 << 10;

char a[MAX], b[MAX], c[MAX];

void reverse(char*);
void swap(char*, char*);
void dealWithStr(char*, char*, char*);

int main () {
	int T;
	(cin>>T).get();
	for (int i = 0; i < T; i++) {
		memset(a, '0', sizeof(a));
		memset(b, '0', sizeof(b));
		scanf("%s%s", &a, &b);
        printf("Case %d:\n%s + %s = ", i + 1, a, b);
		// 翻转两个数组
		reverse(a);
		reverse(b);
		// 开始相加
		dealWithStr(a, b, c);
		reverse(c);
		//输出结果
		printf("%s\n", c);
		if (i < T - 1) {
			printf("\n");
		}
	}
	return 0;
}

/**
 * 处理相加
 * 
*/
void dealWithStr (char* a, char* b, char* c) {
	char temp = 48;
	int aLength = strlen(a);
	int bLength = strlen(b);
	int maxLength = max(aLength, bLength);
	for (int i = 0; i < maxLength; i++) {
		char x = max(a[i] - 48, 0);
		char y = max(b[i] - 48, 0);
		c[i] = x + y + temp;
		if (c[i] > '9') {
			c[i] -= 10;
			temp = 49;
		} else {
			temp = 48;
		}
	}
	if (temp == 49) {
		c[maxLength] = temp;
	}
}

/**
 *	倒转数组
 *  @param char*
 *  @return void 
*/
void reverse (char* arr) {
	int length = strlen(arr);
	for (int i = 0; i < length / 2; i++) {
		swap(arr[i], arr[length - i - 1]);
	}
}

/**
 * 交换两个元素
 * @param char* a
 * @parma char* b
 * @return void
*/
void swap (char* a, char* b) {
	int temp = *a;
	*a = *b;
	*b = temp;
}