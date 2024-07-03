import { NextResponse } from "next/server";

export const listaDeLivros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        anoPublicacao: 1954,
        genero: "Fantasia"
    },
    {
        id: 2,
        titulo: "1984",
        autor: "George Orwell",
        anoPublicacao: 1949,
        genero: "Distopia"
    }
];

export async function GET(){
    return NextResponse.json(listaDeLivros)
}