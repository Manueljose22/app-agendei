

export interface IRequestPayload {
    name: string;
    email: string;
    password: string
}


interface userSave {
    id: string;
    email: string;
    token: string;
}

export interface IPayloadSave {
    user: userSave;
    token: string;
}

