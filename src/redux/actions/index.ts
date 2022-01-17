interface Decrement{
        type: 'decre',
        // payload: number
    
}

interface increment{
    type: 'incre'
    
}

export type  Action = Decrement | increment