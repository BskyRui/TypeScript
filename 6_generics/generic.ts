function identity<T>(arg: T): T {
    return arg
}

// let myIdentity: <T>(arg: T) => T = identity
// let myIdentity2:{ <T>(arg: T): T} = identity

interface GenericFn<T> {
    (arg: T): T
}

let myIdentity: GenericFn<number> = identity


class GenericClass<T> {

}

new GenericClass<number>()