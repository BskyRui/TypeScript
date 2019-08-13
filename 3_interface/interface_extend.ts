class Control {
    private state: any
}

interface SelectTabControl extends Control {
    select()
}

class Button extends Control implements SelectTabControl {
    select() {

    }
}

class TextBox extends Control {
    select() {

    }
}

// class ImageView implements SelectTabControl {
//     select() {

//     }
// }