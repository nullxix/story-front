
const ww = new WebSocket('wss://mywebsitecanbeatupyour.website/socket')

ww.onerror = (event) => {
    console.log(event)
}

ww.onclose = (event) => {
    console.log('---CLOSE---')
    console.log(event)
}

ww.onopen = event => {
    console.log('Websocket connection opened')
}

const sendWord = (word) => {
    console.log('sending,', word)
    console.log(JSON.stringify({word}))
    ww.send( JSON.stringify({word}) )
}

const receiveBroadcast = ({storyCB, winCB, memoCB}) => {
    ww.onmessage = event => {
        const data = JSON.parse(event.data);
        console.log('receiving:', data)

        switch(data.type){

            case 'update':
                storyCB && storyCB(data.word)
                break;

            case 'init':
                storyCB && storyCB(data.preamble, {init: true})
                console.log(data.msg)
                break;

            case 'response':
                if (data.success){
                    winCB && winCB(true)
                    memoCB && memoCB(data.msg)
                } else {
                    winCB && winCB(true)
                    memoCB && memoCB(data.msg)
                }
                break;

            case 'notification':
                memoCB(data.msg)
                break;
    
        }
    }

}



export default {sendWord, receiveBroadcast}
