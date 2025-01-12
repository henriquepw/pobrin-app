import { Fab, FabIcon } from "@ui/fab"
import { Link } from "expo-router"
import { PlusIcon } from "lucide-react-native"

export function NewTransationFab() {
  return (
    <Link href="/transations/register" asChild>
      <Fab size="lg" placement="bottom right" className="mr-2 mb-6">
        <FabIcon as={PlusIcon} />
      </Fab>
    </Link>
  )
}
