import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#045678",
    height: "100%",
    zIndex: 100
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  modalContainer: {
    backgroundColor: '#191f24',
    width: 350,
    paddingTop: 20,
    paddingLeft: 24,
    paddingRight: 24,
  },
  titleText: {
    fontSize: 21,
    color: '#e6f2ff',
  },
  subtitleText: {
    fontSize: 14,
    marginTop: 12,
    color: '#e6f2ff',
  },
  textInput: {
    marginTop: 8,
    height: 30,
    paddingTop: 4,
    paddingBottom: 4,
    borderColor: '#a7aeb5',
    borderWidth: 1,
    width: '100%',
    backgroundColor: 'transparent',
    color: 'white',
  },
  inputSelectionColor: {
    color: '#003852'
  },
  actionsContainer: {
    flexDirection: 'row',
    marginBottom: 22,
  },
  ctaButton: {
    flex: 1,
    marginLeft: 2,
  },
  closeIcon: {
    position: 'absolute',
    top: 15,
    right: 24,
    width: 9,
    height: 9,
  },
  errorContainer: {
    height: 16, // this container should always exist, even if no error message is visiable
    marginTop: 4,
    marginBottom: 4,
  },
  errorText: {
    fontSize: 11,
    color: '#e6f2ff',
  },
})
