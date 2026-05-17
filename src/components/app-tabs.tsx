import { Ionicons } from "@expo/vector-icons";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import React from "react";
import { useColorScheme, View } from "react-native";

import { Colors } from "@/constants/theme";

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === "unspecified" ? "light" : scheme];

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}
      labelStyle={{ selected: { color: colors.text } }}
    >
      {/* 1. DISCOVER TAB */}
      <NativeTabs.Trigger name="discover">
        <NativeTabs.Trigger.Label>Discover</NativeTabs.Trigger.Label>
        <View style={{ marginTop: 4 }}>
          <Ionicons name="flame" size={24} color={colors.text} />
        </View>
      </NativeTabs.Trigger>

      {/* 2. MATCHES TAB */}
      <NativeTabs.Trigger name="matches">
        <NativeTabs.Trigger.Label>Matches</NativeTabs.Trigger.Label>
        <View style={{ marginTop: 4 }}>
          <Ionicons name="heart" size={24} color={colors.text} />
        </View>
      </NativeTabs.Trigger>

      {/* 3. MESSAGES TAB */}
      <NativeTabs.Trigger name="messages">
        <NativeTabs.Trigger.Label>Messages</NativeTabs.Trigger.Label>
        <View style={{ marginTop: 4 }}>
          <Ionicons name="chatbubbles" size={24} color={colors.text} />
        </View>
      </NativeTabs.Trigger>

      {/* 4. PROFILE TAB */}
      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <View style={{ marginTop: 4 }}>
          <Ionicons name="person" size={24} color={colors.text} />
        </View>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
