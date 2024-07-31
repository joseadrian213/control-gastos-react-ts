import { PropsWithChildren} from "react"
//Aqui se puede utilizar ReactNode por el type o PropsWithChildren para que typeScript no marque ningun error para indicar que lo que obtenemos es un children 
export default function ErrorMessage({children}:PropsWithChildren) {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">
      {children}
    </p>
  )
}
