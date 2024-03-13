function songs(array){

    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }

    let numberOfSongs = array.shift() ;
    let command = array.pop() ;
    let songsList = [] ;

    for (let i=0 ; i< numberOfSongs; i++){
        
        songInfo = array[i].split("_") ;
        let song = new Song(songInfo[0], songInfo[1], songInfo[2]) ;
        songsList.push(song);
        //console.log(songsList[i]) //prints the song on the current index (type,name,time)
    }

    for (let property of songsList) {
        

        if (command === "all"){
            console.log(property.name)
        
        }else if (command === property.typeList){
            console.log(property.name)
        }
    }

    
}

// songs([4,

//     'favourite_DownTown_3:14',
    
//     'listenLater_Andalouse_3:24',
    
//     'favourite_In To The Night_3:58',
    
//     'favourite_Live It Up_3:48',
    
//     'listenLater'])

songs([3,'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])