interface Postagem {
    id: number;
    data: string;
    descricao: string;
    foto: string;
    tema?: Tema | null;
}