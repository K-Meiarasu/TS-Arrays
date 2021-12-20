import { ArrayService } from "./app-service";
export class ArrayComponent implements ArrayService {
    constructor(){

    }
    public arrayMultiply(myArray: any) : Array<Number> {
      var num:number[]=[];
      for(let i=0;i<myArray.length;i++)
      {
        if(myArray[i]%5==0||myArray[i]%10==0)
        {
            num.push(myArray[i])
        }
      }
      return num;
    }
    public arraySeparate(myArray: any) : Array<string>{
        var str_arr:string[]=[];
        for(let i=0;i<myArray.length;i++)
        {
            if(typeof(myArray[i])==="string")
            {
                str_arr.push(myArray[i])
            }
        }
        return str_arr;
    }
    public arraySplit(str:string[]) : Array<number>{
        var num:number[]=str.map(function(e){return parseInt(e)})
        var prime=[]
        for(var i=0;i<num.length;i++)
        {
            var flag=0;
            for(var j=2;j<num[i];j++)
            {
                if(num[i]%j==0)
                {
                    flag=1;
                }
            }
            if(flag == 0)
            {
                prime.push(num[i]);
            }
        }
        return prime;
    }
    public arraySort(myArray:any):Array<string>{
        myArray.sort();
        return myArray
    }
    public arrayReplace(myArray:any):Array<number>{
        for(let i=0;i<myArray.length;i++){
            if(myArray[i]%3===0)
            {
                myArray[i]=5;
            }
        }
        return myArray;
    }       
}
let myArray: number[] = [55,33,89,20,17,85,60];
let myArray_mixed: any[] =['h',55,'hello',33,89,20,'RAT',17,85,60]
let myArray_strings :string[] =['a','y','k','t','d']
let array = new ArrayComponent();
console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray_mixed));
console.log(array.arraySplit(myArray.map(function(e){return e.toString()})));
console.log(array.arraySort(myArray_strings));
console.log(array.arrayReplace(myArray));