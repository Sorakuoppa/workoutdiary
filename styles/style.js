import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  roundness: 2,
  colors: {
    primary: "rgb(0, 107, 94)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(118, 248, 226)",
    onPrimaryContainer: "rgb(0, 32, 27)",
    secondary: "rgb(74, 99, 94)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(205, 232, 225)",
    onSecondaryContainer: "rgb(6, 32, 27)",
    tertiary: "rgb(68, 97, 121)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(202, 230, 255)",
    onTertiaryContainer: "rgb(0, 30, 48)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(250, 253, 251)",
    onBackground: "rgb(25, 28, 27)",
    surface: "rgb(250, 253, 251)",
    onSurface: "#005F54",
    surfaceVariant: "rgb(218, 229, 225)",
    onSurfaceVariant: "#005F54",
    outline: "rgb(111, 121, 118)",
    outlineVariant: "rgb(190, 201, 197)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(45, 49, 48)",
    inverseOnSurface: "rgb(239, 241, 239)",
    inversePrimary: "rgb(85, 219, 198)",
    elevation: {
      level0: "transparent",
      level1: "rgb(238, 246, 243)",
      level2: "rgb(230, 241, 238)",
      level3: "rgb(223, 237, 234)",
      level4: "rgb(220, 236, 232)",
      level5: "rgb(215, 233, 229)"
    },
    surfaceDisabled: "rgba(25, 28, 27, 0.12)",
    onSurfaceDisabled: "rgba(25, 28, 27, 0.38)",
    backdrop: "rgba(41, 50, 48, 0.4)"
  },
  modal: {
    margin: 1,
    flex: 1,
    backgroundColor: "rgb(205, 232, 225)",
    alignItems: 'center',
    justifyContent: 'center'
  },
  date: {
    fontSize: 24
  },
  iconButton: {
    margin: 10
  },
  button: {
    margin:10,
    borderBottomWidth: 2,
    borderColor: "#005F54"
  },
  textinput: {
    margin:10,
    borderBottomWidth: 2,
    borderColor: "#005F54"
  },
  cardView: {
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(250, 253, 251)',
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  card: {
    flex:1,
  },
  listItem: {
    borderBottomWidth: 2,
    borderColor: "#005F54",
    backgroundColor: 'rgb(250, 253, 251)',
    borderRadius: 10,
    margin: 10
  }
}
);