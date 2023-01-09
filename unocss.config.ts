import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      // cdn: "https://esm.sh/",
      // cdn: "https://cdn.skypack.dev/",
      collections: {
        carbon: () => import("@iconify-json/carbon").then(i => i.icons as any),
      },
    }),
  ],
});
