import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

const cert = fs.readFileSync(
  path.resolve(__dirname, "./localhost.pem"),
  "utf-8"
);
const key = fs.readFileSync(
  path.resolve(__dirname, "./localhost-key.pem"),
  "utf-8"
);

export default {
  plugins: [react()],
  server: {
    https: {
      key,
      cert,
    },
    open: true,
    host: "localhost",
  },
  build: {
    outDir: "build",
    sourcemap: true,
    commonjsOptions: {
      include: [],
    },
  },
  optimizeDeps: {
    disabled: false,
  },
};
