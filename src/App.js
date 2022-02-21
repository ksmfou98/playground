import Example from "./components/Example/index.js";
import Test from "./components/Test/Test.js";

export default class App {
  constructor($app) {
    new Test($app);
    new Example($app);
  }
}
