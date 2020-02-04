export class Notificacao {
    message: string | Array<string>;
    type: NotificacaoType;
}

export enum NotificacaoType {
    Success,
    Error
}
