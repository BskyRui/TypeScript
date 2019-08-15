// 可选参数
function fullName(first: string, lastName?: string) {

}

// 默认参数
function buildName(first: string, lastName = "...") {

}

// 剩余参数
function makeName(first: string, ...other: string[]) {

}

// this
interface Card {
    card: number
}

interface Deck{
    create(): () => Card
}

let deck: Deck = {
    create: function(this: Deck) {
        return () => {
            return {
                card: 0
            }
        }
    }
}


// 重载
function makeCard(card: number): number
function makeCard(card: number, id: string): number
function makeCard(): any {

}