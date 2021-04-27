export class Mail {
    constructor(
        public name: string,
        public subject: string,
        public email: string,
        public message: string,
        public from?: string,
        public to?: string,
    ) {}

}
