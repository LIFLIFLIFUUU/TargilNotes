import { Note } from "../types/notesTypes"
export default function Notes({header, text, date}: Note) {
    return (
        <header>
            <h1>{header}</h1>
            <p>{text}</p>
            <p>{date}</p>
        </header>
    )
}