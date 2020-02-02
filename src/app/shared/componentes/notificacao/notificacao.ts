export class Notificacao {
    type: NotificacaoType;
    message: string | Array<string>;
    isLista: boolean;
}
 
export enum NotificacaoType {
    Success,
    Error,
    Info,
    Warning
}
