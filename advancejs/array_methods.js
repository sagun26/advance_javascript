const nums=[1,2,3]

const test=nums.forEach(function(item)
{
    console.log(item)
}
)

const output=nums.map(function(item)
{
    return item*2;
}   )
console.log(output)