import { Link } from "expo-router"
import { TabList, TabSlot, TabTrigger, Tabs } from "expo-router/ui"
import { StatusBar } from "expo-status-bar"
import { HomeIcon, PinIcon, PlusIcon } from "lucide-react-native"
import { Background } from "~/components/ui/background"
import { TabButton } from "~/components/ui/tab/tab-button"
import { TabView } from "~/components/ui/tab/tab-view"
import { useTheme } from "~/store/theme-store"

export default function TabLayout() {
  const theme = useTheme()

  return (
    <Tabs>
      <StatusBar translucent style={theme === "dark" ? "light" : "dark"} />

      <Background>
        <TabSlot />
      </Background>
      <TabList asChild>
        <TabView>
          <TabTrigger asChild name="home" href="/(tabs)">
            <TabButton icon={HomeIcon} />
          </TabTrigger>
          <Link asChild href="/transations/register">
            <TabButton icon={PlusIcon} />
          </Link>
          <TabTrigger asChild name="recurrent" href="/(tabs)/recurrents">
            <TabButton icon={PinIcon} />
          </TabTrigger>
        </TabView>
      </TabList>
    </Tabs>
  )
}
