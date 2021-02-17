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
    let moreCats = [...cats, name]
    return moreCats
}

function prependCat(name) {
    let moreCats = [name, ...cats]
    return moreCats
}

function removeLastCat() {
    let lessCats = cats.slice(0, cats.length -1)
    return lessCats
}

function removeFirstCat() {
    let lessCats = cats.slice(1)
    return lessCats
}