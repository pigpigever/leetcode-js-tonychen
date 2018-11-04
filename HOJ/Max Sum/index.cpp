#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;

const int _max = 100001;
int arr[_max];
int result[_max];

int main () {
	int n, line;
	cin>>n;
	for (int i = 1; i <= n; i++) {
		int maxNum, start = 1, end = 1, sum = 0, tempStart = 1;
		memset(result, 0, sizeof(result));
		memset(arr, 0, sizeof(arr));
		cin>>line;
		for (int j = 1; j <= line; j++) {
			cin>>arr[j];
		}
		maxNum = arr[1];
		for (int j = 1; j <= line; j++) {
			sum += arr[j];
			if (sum > maxNum) {
				maxNum = sum;
				start = tempStart;
				end = j;
			}
			if (sum < 0) {
				sum = 0;
				tempStart = j + 1;
			}
		}
		printf("Case %d:\n%d %d %d\n", i, maxNum, start, end);
		if (i < n) {
			printf("\n");
		}
	}
	return 0;
}