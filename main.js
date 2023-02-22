let column_1 = [6, 4, 5, 9, 7, 6, 2, 5, 2, 5, 3, 9, 3, 1, 8, 2, 4, 5, 10, 9, 1, 10, 5, 8, 2, 3, 9, 7, 10];
let column_2 =[4,3,7,6,3,7,5,8,8,4,5,2,1,3,8,8,10,4,4,5,6,10,1,7,2,10,10,2,8]
let column_3 =[86,85,98,47,95,64,70,40,84,58,74,93,77,94,41,50,98,93,89,78,100,63,100,56,82,64,60,45,47]
let column_4 =[91,77,77,45,82,64,93,88,85,55,71,43,96,75,45,74,97,99,93,43,73,84,45,48,97,72,69,54,89]
let sum_1 = 0
let sum_2 = 0
let sum_3 = 0
let sum_4 = 0
let sum_total = 0

for (let i = 0; i < column_1.length; i++) { 
  sum_1 += column_1[i]; sum_2 += column_2[i]; 
  sum_3 += column_3[i]; sum_4 += column_4 [i]
}
let sums = [sum_1, sum_2, sum_3, sum_4]
for (let i = 0; i < sums.length; i+=1) { 
  sum_total +=sums[i]
}
const results = {
	col1: [sum_1],	
	col2: [sum_2],   	
	col3: [sum_3],	
	col4: [sum_4],	
	sums: [sums], 	
	total_score: [sum_total]
}
console.log(results)
