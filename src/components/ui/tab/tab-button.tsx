import { Icon } from "@ui/icon"
import { TabTriggerSlotProps } from "expo-router/ui"
import { Ref, forwardRef } from "react"
import { Pressable, View } from "react-native"
import { cn } from "~/utils/cn"

type Props = TabTriggerSlotProps & {
  icon: React.ElementType
}
export const TabButton = forwardRef(
  ({ icon, children, isFocused, ...props }: Props, ref: Ref<View>) => {
    return (
      <Pressable
        ref={ref}
        {...props}
        className={cn(
          "items-center justify-center rounded-full p-2.5 transition-all active:opacity-50",
          isFocused && "bg-primary-500",
        )}
      >
        <Icon
          as={icon}
          className={
            isFocused ? "text-typography-white" : "text-typography-700"
          }
        />
      </Pressable>
    )
  },
)
