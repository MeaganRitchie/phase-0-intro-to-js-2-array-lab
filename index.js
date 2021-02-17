const cats = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name) {
    const moreCats = [...cats, name]
    return moreCats
}

function prependCat(name) {
    const moreCats = [name, ...cats]
    return moreCats
}

function removeLastCat() {
    const lessCats = cats.slice(0, cats.length -1)
    return lessCats
}

function removeFirstCat() {
    const lessCats = cats.slice(1)
    return lessCats
}