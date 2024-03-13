function solve(obj, array){

    let ourObj = obj
    let openTabs = 'Open Tabs'
    let browserLog = 'Browser Logs'
    let recentlyClosed = 'Recently Closed'
    let browserName = 'Browser Name'

    for (command of array){

        if (command.split(' ')[0] === 'Open'){
            let webPage = command.split('Open ')
            ourObj[openTabs].push(webPage[1])
            ourObj[browserLog].push(command)

        }else if(command === "Clear History and Cache"){
            ourObj[browserLog] = []
            ourObj[openTabs] = []
            ourObj[recentlyClosed] = []

        }else if(command.split(' ')[0] === 'Close'){
            let webPage = command.split('Close ')
            
            if (ourObj[openTabs].includes(webPage[1])){
                let index = ourObj[openTabs].indexOf(webPage[1])
                ourObj[openTabs].splice(index, 1)
                ourObj[recentlyClosed].push(webPage[1])
                ourObj[browserLog].push(command)

                // console.log(Object.values(ourObj[openTabs]))
                // console.log(Object.values(ourObj[browserLog]))
            }
        }
    }

    console.log(ourObj[browserName])
    console.log(`Open Tabs: ${ourObj[openTabs].join(', ')}`)
    console.log(`Recently Closed: ${ourObj[recentlyClosed].join(', ')}`)
    console.log(`Browser Logs: ${ourObj[browserLog].join(', ')}`)
}

solve({
"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},

["Open Wikipedia", "Clear History and Cache", "Open Twitter"])