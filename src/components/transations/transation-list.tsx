import { View } from "react-native"
import { useTransationStore } from "~/src/store/transation-store"
import { TransationCard } from "./transation-card"

export function IncomeList() {
  const transations = useTransationStore((s) => s.transations)
  return (
    <View className="gap-4">
      {transations.map((i) => (
        <TransationCard key={i.id} transation={i} />
      ))}
    </View>
  )
}
