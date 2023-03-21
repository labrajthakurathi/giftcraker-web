interface ConditionalWrapperProps {
  condition: boolean;
  wrapper: (children: JSX.Element) => JSX.Element;
  children: JSX.Element;
}

export const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps): JSX.Element =>
  condition ? wrapper(children) : children;

export const scrollbarStylesDarkTheme = () => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        scrollbarColor: "#fff #ffffff20",
        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
          backgroundColor: "#ffffff20",
        },
        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
          backgroundColor: "#fff",
        },
        "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
          {
            backgroundColor: "#959595",
          },
        "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
          {
            backgroundColor: "#959595",
          },
        "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
          {
            backgroundColor: "#959595",
          },
        "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
          backgroundColor: "#ffffff20",
        },
      },
    },
  },
});
