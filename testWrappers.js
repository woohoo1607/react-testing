import { ThemeProvider } from "react-jss";
import { theme } from "./src/App";
import { mount, shallow } from "enzyme";

function MyThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export function shallowWithTheme(component) {
  const wrapper = shallow(component, { wrappingComponent: MyThemeProvider });
  return wrapper.getWrappingComponent();
}

export function mountWithTheme(component) {
  const wrapper = mount(component, { wrappingComponent: MyThemeProvider });
  return wrapper.getWrappingComponent();
}
