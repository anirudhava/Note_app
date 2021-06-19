/*const v=function(){
    return "Your notes..."
}*/

const fs=require('fs')

const chalk=require('chalk')

//const add_note = function(title,body){
  const add_note = (title,body)=>{
    const arr=load_data_obj()

    /*var duplicate=0

    for(const t in arr)
    {
        //console.log(title+'  '+arr[t].title)
        if(arr[t].title===title)
        {
            duplicate=1
        }
    }*/

    /*var duplicate=arr.filter(function(note){
        return note.title===title
        //console.log(note)
        //console.log(title)
    })*/

    var duplicate=arr.filter((note)=>note.title===title)
        //console.log(note)
        //console.log(title)

    if(duplicate.length==0)
    {
        arr.push({
            title:title,
            body:body
        })

        debugger
        
        //console.log(arr)

        const str=JSON.stringify(arr)

        //console.log(str)
        saving_in_file(str)
    }
    else
    {
        console.log('already existing title')
    }
}

//const load_data_obj = function(){
const load_data_obj = ()=>{
    try{
        const databuffer=fs.readFileSync('datastore.json')
        const str=databuffer.toString()
        //console.log(JSON.parse(str))
        return JSON.parse(str)
    }
    catch(e)
    {
        return []
    }
}

const saving_in_file =function(str){

        fs.writeFileSync('datastore.json',str)
}

/*const get_note=function(){

    return 'adding your note.....'

}*/

const remove_note=function(title){
    //console.log(title)

    const obj1=load_data_obj()

    const obj2=obj1.filter(function(pair){
        //to get all the pairs which is not equal to title
        return pair.title!=title
    })

    //console.log(obj1)
    //console.log(obj2)

    const str=JSON.stringify(obj2)

    saving_in_file(str)

    if(obj1.length==obj2.length){

        console.log(chalk.bgRed('Node Doesnot exist'))

    }
    else{

        console.log(chalk.bgGreen('Node removed'))
    }
}

const list_note = ()=>{

    console.log(chalk.blue('Your notes'))

    const obj=load_data_obj()

    /*for(const t in obj)
    {
        console.log(obj[t].title)
    }*/

    /*obj.forEach(function(elem){
        console.log(elem.title)
    })*/

    obj.forEach((elem)=>console.log(elem.title))

}

/*const read_note = function(title){
    const obj=load_data_obj()
    const pair=obj.find(function(e){
        return e.title===title
    })
    //console.log(pair)
    if(pair){
        console.log(pair.body)
    }
    else{
        console.log(chalk.red('title not found'))
    }
}*/

const read_note = (title)=>{
    const obj=load_data_obj()
    const pair=obj.find((e)=>e.title===title)
    //console.log(pair)
    if(pair){
        console.log(pair.body)
    }
    else{
        console.log(chalk.red('title not found'))
    }
}

module.exports={
    add_note:add_note,
    //get_note:get_note,
    remove_note:remove_note,
    list_note:list_note,
    read_note:read_note
}