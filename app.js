/*const v=require('./notes.js')
const validator=require('validator') 
const color=require('chalk')*/
//const process=require('process')

const from_notes=require('./notes.js')

const yargs=require('yargs')

//yargs.version('1.1.0')
/*const str=v()
//console.log(v)
console.log(str)

console.log(validator.isEmail('anirudh@gmail.com'))
console.log(validator.isURL('www.hello.com/123'))
console.log(color.blue(validator.isURL('123')))

console.log(color.green.bold.inverse('Success!'))
*/
/*console.log(process.argv)

const argument=process.argv[2]

if(argument==='add')
{
    console.log('adding note')
}
else if(argument==='remove')
{
    console.log('removing note')
}

console.log(process.argv[3])*/

yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){//here argv has the entire cmd line array which is parsed,here argv=yargs.argv
        //console.log('Adding a new note',yargs.argv)
        //console.log('title name : '+argv.title)
        //console.log('body name : '+argv.body)
        //console.log(from_notes.get_note())
        from_notes.add_note(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'mention the name of the title',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        //console.log('Removing a note')
        //console.log(argv)
        from_notes.remove_note(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'listing all the notes',
    handler:function(){
        //console.log('listing the notes')
        from_notes.list_note()
    }
})

yargs.command({
    command:'read',
    describe:'reading the note',
    builder:{
        title:{
            describe:'reads the body of the given title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        //console.log('Reading the note')
        from_notes.read_note(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv) // have to be written or else parsing doesnot happen