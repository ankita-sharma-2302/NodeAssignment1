const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName,fileContent,(err)=>{
		if(err){
			console.log(err)
		}
		else{
			console.log("file is created")
		}
		
	});
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	let data=fs.readFile(fileName,(err,data)=>{
		if(err){
			console.log("file not found")
		}
		else{
			return data
		}
		
		
	})
	console.log((await data).toString())
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName,fileContent,(err)=>{
		if(err){
			console.log(err)
		}
		else{
			console.log("file is updated")
		}
		
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName,(err)=>{
		if(err){
			console.log(err)
		}
		else{
			console.log("file is deleted")
		}
		
	})
}

// myFileWriter("file.txt", "hello")
myFileReader("file.txt")
// myFileUpdater("file.txt"," world")
// myFileDeleter("file.txt")

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }