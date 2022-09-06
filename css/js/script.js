const handleInputNameGame = async () => {
    try {
        let inputGameData = document.getElementById("listgame-input").value
        console.log(inputGameData)

        await fetch('http://localhost:9000/listGame', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nameGame: inputGameData })
        })
    } catch (error) {
        console.log(error)
    }

    location.reload()
}

const handleInputBiodataGame = async (ListGameId) => {
    let inputUsername = document.getElementById("username-input").value
    let inputEmail = document.getElementById("email-input").value
    let inputLvlAcc = document.getElementById("lvlAcc-input").value
    console.log(inputUsername,inputEmail,inputLvlAcc)

    await fetch('http://localhost:9000/biodata', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            username: inputUsername,
            email: inputEmail,
            levelAccount: inputLvlAcc,
            listGameId: ListGameId
        })
    })

    location.reload()
}