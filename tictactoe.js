let playerOneTurn = true
const a= []
a.push(["1", "2", "3"])
a.push(["4", "5", "6"])
a.push(["7", "8", "9"])


// let gameStatus = false

isGameOver = () => {
    if((a[0][0]) == (a[1][1]) && (a[2][2]) == (a[1][1])){
        // alert("player win")
        return true
        
    }
    if((a[0][0]) == (a[0][1]) && (a[0][2]) == (a[0][1])){
        // alert("player win")
        return true
        
    }
    if((a[0][0]) == (a[1][0]) && (a[2][0]) == (a[1][0])){
        // alert("player win")
        return true
        
    }
    if((a[2][2]) == (a[2][1]) && (a[2][0]) == (a[2][1])){
        // alert("player win")
        return true
        
    }
    if((a[2][2]) == (a[1][2]) && (a[1][0]) == (a[1][2])){
        // alert("player win")
        return true
        
    }
    if((a[0][2]) == (a[1][1]) && (a[2][0]) == (a[1][1])){
        // alert("player win")
        return true
        
    }
    if((a[0][1]) == (a[1][1]) && (a[2][1]) == (a[1][1])){
        // alert("player win")
        return true
        
    }
    if((a[1][0]) == (a[1][1]) && (a[1][2]) == (a[1][1])){
        // alert("player win")
        return true
        
    }
    if(onClickCount >= 9){
        return false

    }
    
}

let onClickCount = 0

boxOnClick =(e, i,j) => {
    onClickCount += 1
    console.log(onClickCount)
    if(playerOneTurn == true){
        e.target.children[0].innerHTML='x'
        a[i][j] = 'x'

    }
    else{
        e.target.children[0].innerHTML='o'
        a[i][j] = 'o'
    }
    playerOneTurn = !playerOneTurn
    e.target.classList.add("disable-tile");
    console.log(a)

    const g = isGameOver()
    if(g === true){
        winningPlayer()
        alert("Page will auto reload in 5s")
        // gameStatus = !gameStatus
        // console.log(gameStatus)
        // location.reload()
        setTimeout(function(){ window. location. reload(); }, 3000);
    }
    if(g === false){
        alert("Match Draw")
        alert("Page will auto reload 5s")
        debugger
        // gameStatus = !gameStatus
        // console.log(gameStatus)
        // location.reload()
        setTimeout(function(){ window. location. reload(); }, 3000);
    }


    // console.log(e.target.children[0].innerHTML="X")
    // document.getElementById()

}
winningPlayer =()=>{
    if(playerOneTurn === true){
        alert("Player o wins")
    }
    else{
        alert("Player x wins")
    }
}

