//LIST GAME
//INSERT GAME DATA
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

//BIODATA GAME//
//INSERT BIODATA
const handleInputBiodataGame = async (ListGameId) => {
    let inputUsername = document.getElementById("username-input").value
    let inputEmail = document.getElementById("email-input").value
    let inputLvlAcc = document.getElementById("lvlAcc-input").value
    console.log(inputUsername, inputEmail, inputLvlAcc)

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

//EDIT BIODATA
//Prepare Edit Biodata
const prepareEditBiodata = (id) => {
    const trEl = document.getElementById(id)
    //console.log(trEl.children[1].innerText)
    document.getElementById("username-input").value = trEl.children[1].innerText
    document.getElementById("email-input").value = trEl.children[2].innerText
    document.getElementById("lvlAcc-input").value = trEl.children[3].innerText

    document.getElementById("btnInsert").disabled = true
    document.getElementById("btnEdit").disabled = false
    document.getElementById("btnEdit").setAttribute('onclick', `handleSubmitEdit(${id})`)
}

//Submit Edit Biodata
const handleSubmitEdit = async (id) => {
    let usernameInput = document.getElementById("username-input")
    let emailInput = document.getElementById("email-input")
    let lvlAccInput = document.getElementById("lvlAcc-input")

    let ans = confirm('Are you sure edit?')
    // PUT /biodata/:id
    if (ans) {
        await fetch(`http://localhost:9000/biodata/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameInput.value,
                email: emailInput.value,
                levelAccount: lvlAccInput.value
            })
        })
        location.reload()
    }
}

//DELETE A BIODATA
const handleDeleteBiodata = async (ListGameId) => {
    let ans = confirm('Are you sure?')
    if (ans) {
        // DELETE /biodata/:id
        await fetch(`http://localhost:9000/biodata/${ListGameId}`, {
            method: 'DELETE'
        })
        location.reload()
    }
}



//HISTORY GAME//
//INSERT HISTORY
const handleInputHistoryGame = async (ListGameId) => {
    let inputUpdate = document.getElementById("update-input").value
    let inputVersion = document.getElementById("version-input").value
    let inputRating = document.getElementById("rating-input").value
    console.log(inputUpdate, inputVersion, inputRating)

    await fetch('http://localhost:9000/history', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            update: inputUpdate,
            version: inputVersion,
            rating: inputRating,
            listGameId: ListGameId
        })
    })

    location.reload()
}

//EDIT HISTORY
//Prepare Edit History
const prepareEditHistory = (id) => {
    const trEl = document.getElementById(id)
    //console.log(trEl.children[1].innerText)
    document.getElementById("update-input").value = trEl.children[1].innerText
    document.getElementById("version-input").value = trEl.children[2].innerText
    document.getElementById("rating-input").value = trEl.children[3].innerText

    document.getElementById("btnInsert").disabled = true
    document.getElementById("btnEdit").disabled = false
    document.getElementById("btnEdit").setAttribute('onclick', `handleSubmitEditHistory(${id})`)
}

//Submit Edit History
const handleSubmitEditHistory = async (id) => {
    let uspdateInput = document.getElementById("update-input")
    let versionInput = document.getElementById("version-input")
    let ratingInput = document.getElementById("rating-input")

    let ans = confirm('Are you sure edit?')
    // PUT /history/:id
    if (ans) {
        await fetch(`http://localhost:9000/history/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                update: updateInput.value,
                version: versionInput.value,
                rating: ratingInput.value
            })
        })
        location.reload()
    }
}

//DELETE A HISTORY DATA
const handleDeleteHistory = async (ListGameId) => {
    let ans = confirm('Are you sure?')
    if (ans) {
        // DELETE /biodata/:id
        await fetch(`http://localhost:9000/history/${ListGameId}`, {
            method: 'DELETE'
        })
        location.reload()
    }
}