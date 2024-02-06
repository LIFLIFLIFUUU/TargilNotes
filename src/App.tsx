import { FormEvent, useState } from "react"
import Notes from "./components/Note";
import { Note } from "./types/notesTypes"
const [notes, setNotes] = useState("");

export default function App() {

    //const [propertyName, propertySetFunction] = useState<type>(value?)
    //state --> המידע הנוכחי של הקומפוננטה

    // const [Notes, setNotes] = useState<Note[]>([
    //     { name: "The Little Mermaid" },
    //     { name: "The Lion King" },
    //     { name: "Aladdin" },
    //     { name: "The Hunchback of Notre Dame" },
    //     { name: "Mulan" },
    //     { name: "Beauty and the Beast" },
    //     { name: "The Incredibles" },
    //     { name: "Toy Story" },
    //     { name: "Frozen" },
    //     { name: "Pinocchio" },
    //     { name: "The Sword in the Stone" }
    // ]);

    // const [topMovies, setTopMovies] = useState<Movie[]>([
    //     { name: "The Little Mermaid", image: "https://m.media-amazon.com/images/M/MV5BOWUyNDA0ZmItMzg2My00YjJhLTk1N2QtYTAxYTc0NzMzNDI0XkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_FMjpg_UX1000_.jpg", description: "" },
    //     { name: "The Lion King", image: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg", description: "" },
    //     { name: "Aladdin", image: "https://m.media-amazon.com/images/M/MV5BZTg5ZTVmM2EtZjdhZC00MzBjLWEwZTYtNWIwZDczYzZkMzA4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg", description: "" }
    // ]);

    // const [movieName, setMovieName] = useState("");


    /**
     * Add a new movie to the movies list.
     *
     * @param {FormEvent<HTMLFormElement>} event - the form event
     * @return {void} 
     */
    function notes(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        setNotes("");
    }

    return (
        <>
                <form onSubmit={Notes}></form> {/*HTMLFormElement קשור לזה וגורם לבעיה*/}
                <input type="header" value={notes} onChange={(event) => setNotes(event.target.value)} />
                <textarea name="idk" id="idk" cols="30" rows="10"></textarea> {/**למה זה קורא לזה מספר?*/}
                <button type="submit">Add</button>
            <Notes header="Welcome" text="This is a note" date="19.1.1990"/>
        </>
    )
}

//props -> פרמטרים שהפונקציה מקבלת