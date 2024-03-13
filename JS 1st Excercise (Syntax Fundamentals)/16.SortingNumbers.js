function sortNums(numbers){
    let descArr = [...numbers]
    .sort((aNum,bNum) => bNum - aNum);
    let ascArr = [...numbers]
    .sort((aNum,bNum) => aNum - bNum);
    let output = []

    for (let i=0; i < numbers.length; i++){
        if(i % 2 === 0){
            output.push(ascArr.shift())
        }else{
            output.push(descArr.shift())
        }
    }

    return output

}

sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
console.log(sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))