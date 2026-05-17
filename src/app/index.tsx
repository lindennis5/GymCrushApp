import { Redirect } from "expo-router";

export default function RootIndex() {
  // Bounces the app straight into your tabs flow on launch
  return <Redirect href="/discover" />;
}
