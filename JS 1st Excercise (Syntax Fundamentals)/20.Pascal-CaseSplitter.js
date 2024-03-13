function splitMe(randomText){

    let beforeSplit = randomText
    let afterSplit = beforeSplit.match(/[A-Z][a-z]+/g)

    console.log(afterSplit.join(", "))
}

splitMe('SplitMeIfYouCanHaHaYouCantOrYouCan')