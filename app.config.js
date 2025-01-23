export default {
  expo: {
    extra: {
      EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
      EXPO_PUBLIC_SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
      eas: {
        projectId: "ae1c99d9-c10c-4657-9882-40e5435468fd",
      },
    },
    android: {
      package: "com.sedrickmoore.snaptogether", // Replace with your unique Android package name
    },
    ios: {
      bundleIdentifier: "com.sedrickmoore.snaptogether", // Replace with your unique iOS bundle identifier
    },
    plugins: [
      [
        "expo-camera",
        {
          cameraPermission: "Allow $(PRODUCT_NAME) to access your camera",
          microphonePermission:
            "Allow $(PRODUCT_NAME) to access your microphone",
          recordAudioAndroid: true,
        },
      ],
    ],
  },
};