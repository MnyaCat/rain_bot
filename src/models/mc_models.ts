export class MCPlayer {
    constructor(
        public readonly name: string,
        public readonly xuid: string,
        public readonly permLevel: number,
        public readonly gameMode: number
    ) {}
}

export class MCFloatPos {
    constructor(
        public readonly x: number,
        public readonly y: number,
        public readonly z: number,
        public readonly dim: string,
        public readonly dimid: number
    ) {}
}

export class MCIntPos {
    constructor(
        public readonly x: number,
        public readonly y: number,
        public readonly z: number,
        public readonly dim: string,
        public readonly dimid: number
    ) {}
}

export class MCEntity {
    constructor(
        public readonly name: string,
        public readonly type: string,
        public readonly id: number,
        public readonly pos: MCFloatPos,
        public readonly blockPos: MCIntPos
    ) {}
}
