export type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    profilePicture: any;
}

export type Emoji = {
    name: string;
    htmlCode: string[];
    category: string;
    group: string;
    unicode: string[];
  };



export type RootState = {
    users: {
        users: User[];
    }
    emojis : {
        data : Emoji[];
        loading : boolean,
        error : string
    }
}