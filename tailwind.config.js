import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    backgroundImage: {
      "header-pattern": "url('/header.jpg')",
    },
    colors: {
      red: {
        500: "#e3000b",
      },
    },
  },
});
