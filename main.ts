import { rl } from "./readline";
import { agregarLibros, SeelIibros, Books, SeeRevistas, agregarRevista, agregarArticulo, SeeArticulos} from "./Document";

export async function Menu() {
    try {
        let condition = true
        do {
            const opcion = Number(await rl.question(`Que deasea hacer? \n 1. Ver Libros. \n 2. Ver revistas \n 3. Ver articulos \n 4. agregar algo  `))
            switch (opcion) {
                case 1:
                    SeelIibros()
                    break;
                case 2:
                    SeeRevistas()
                    break;
                    case 3:
                    SeeArticulos()
                    break;
                case 4:
                    const opcion2 = Number(await rl.question(`que quiere agregar \n 1. Un libro \n 2. Una revista \n 3. Un articulo \n opcion: `))
                    switch (opcion2) {
                        case 1:
                            agregarLibros()
                            break;
                        case 2:
                            agregarRevista()
                            break;
                        case 3:
                            agregarArticulo()
                            break;

                        default:
                            break;
                    }
                    break;

                default:
                    break;
            }

        } while (condition);

    } catch (error) {
        console.error(error)
    }
}
Menu()