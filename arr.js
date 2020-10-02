console.log("connected");
function printReverse(arr){
	for(var i=arr.length-1;i>=0;i--)
		console.log(arr[i]);
    }
}
printReverse([3,6,2,5]);

function isUniform(arr){
	var first=arr[0];
	for(car i=1;i<arr.length;i++)
		{
			if(arr[i]!==first){
				return false;
			}
			
		}
		return true;
}
isUniform([1,1,1]);
isUniform([1,1,2]);


function max(arr){
	var max=arr[0];
	for(var i=1; i<arr.length;i++){
		if(arr[i]>max){
            max=arr[i];
		}
	}
	return max;
}
max([1,20,2,3,-99]);


function sumArray(arr){
	var total=0;
	for(var i=1;i<arr.length;i++)
	{
		if(arr[i]>max)
		{
			max=arr[i];
		}
	}

	return max
}
sumArray([1,2,3]);
